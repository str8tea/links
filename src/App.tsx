import { useState, useMemo, useEffect } from 'react'
import { categories, quickAccessTools, rankingTools, newTools } from './data/tools'
import { Section } from './components/Section'
import { ToolGrid } from './components/ToolGrid'
import './App.css'

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m21 21-4.34-4.34" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2m-7.07-14.07 1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2m-4.93 7.07-1.41-1.41M6.34 6.34 4.93 4.93" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 5h16M4 12h16M4 19h16" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  )
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 11v6M14 11v6M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18m-12 0L18 6" />
    </svg>
  )
}

function RocketIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

type Theme = 'light' | 'dark'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [bannerVisible, setBannerVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))

  const allTools = useMemo(() => categories.flatMap((c) => c.tools), [])

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    return allTools.filter(
      (t) => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q),
    )
  }, [searchQuery, allTools])

  return (
    <div className="app">
      {/* アナウンスバナー */}
      {bannerVisible && (
        <div className="announce-banner">
          <div className="announce-inner">
            <div className="announce-left">
              <RocketIcon />
              <p className="announce-text">
                <span className="announce-bold">toolpodsへの開発依頼は</span>
                <a href="/develop" className="announce-link">
                  こちら
                </a>
              </p>
            </div>
            <button
              className="icon-btn icon-btn-sm"
              onClick={() => setBannerVisible(false)}
              aria-label="閉じる"
            >
              <XIcon />
            </button>
          </div>
        </div>
      )}

      {/* ヘッダー */}
      <div className="header-wrapper">
        <header className="header">
          <div className="header-left">
            <div className="logo-group">
              <a className="logo-link" href="/">
                <img
                  alt="Toolpods"
                  src="https://static.toolpods.io/toolpods140.webp"
                  className="logo-img"
                  width={48}
                  height={48}
                />
              </a>
              <div className="logo-text">
                <div className="logo-name">
                  <a href="/">ツールポッド</a>
                </div>
                <div className="logo-by">
                  <a href="/" className="logo-by-link">
                    by toolpods
                  </a>
                </div>
              </div>
            </div>
            <p className="header-tagline">無料で使える便利ツール集</p>
          </div>

          {/* デスクトップ右側 */}
          <div className="header-right">
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label="テーマを切り替える"
              id="theme-toggle"
            >
              {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="btn-outline" id="login-btn">
              ログイン
            </button>
          </div>

          {/* モバイルメニューボタン */}
          <div className="header-mobile">
            <button
              className="icon-btn icon-btn-border"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="メニュー"
            >
              <MenuIcon />
            </button>
          </div>
        </header>
      </div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <button className="icon-btn" onClick={toggleTheme} aria-label="テーマを切り替える">
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            <span style={{ marginLeft: 8 }}>{theme === 'light' ? 'ライトモード' : 'ダークモード'}</span>
          </button>
          <button className="btn-outline" style={{ width: '100%' }}>
            ログイン
          </button>
        </div>
      )}

      {/* メインコンテンツ */}
      <main className="main">
        <div className="container">
          <div className="content-space">
            {/* 検索 */}
            <div className="search-wrapper">
              <div className="search-container">
                <div className="search-icon">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="ツールを検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="search-input"
                />
                {searchQuery && (
                  <button
                    className="search-clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="クリア"
                  >
                    <XIcon />
                  </button>
                )}
              </div>
            </div>

            {/* 検索結果 */}
            {searchQuery.trim() && (
              <Section
                title={`検索結果: "${searchQuery}"`}
                subtitle={`${searchResults.length}件のツールが見つかりました`}
              >
                {searchResults.length > 0 ? (
                  <ToolGrid tools={searchResults} />
                ) : (
                  <p className="no-results">該当するツールが見つかりませんでした。</p>
                )}
              </Section>
            )}

            {!searchQuery.trim() && (
              <>
                {/* クイックアクセス */}
                <Section
                  icon={<HistoryIcon />}
                  title="クイックアクセス"
                  rightAction={
                    <button className="text-btn">
                      <TrashIcon />
                      履歴をクリア
                    </button>
                  }
                >
                  <ToolGrid tools={quickAccessTools} />
                </Section>

                {/* 人気ツールランキング */}
                <Section
                  title="🏆 人気ツールランキング"
                  subtitle="最近よく使われているツールのランキングです"
                  rightLink={{ href: '/popular-tools', label: '全てのランキングを見る →' }}
                >
                  <ToolGrid tools={rankingTools} ranked />
                </Section>

                {/* 新着・更新 */}
                <Section
                  title="✨ 新着・更新"
                  subtitle="最近追加・更新されたツール"
                  rightLink={{ href: '/release-notes', label: 'リリースノートを見る →' }}
                >
                  <ToolGrid tools={newTools} />
                </Section>

                {/* カテゴリ別 */}
                {categories.map((category) => (
                  <Section
                    key={category.id}
                    title={category.name}
                    subtitle={category.description}
                  >
                    <ToolGrid tools={category.tools} />
                  </Section>
                ))}
              </>
            )}
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-text">© 2024 Toolpods. 無料で使える便利ツール集。</p>
        </div>
      </footer>
    </div>
  )
}

export default App
