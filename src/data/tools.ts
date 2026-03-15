export type TagColor =
  | 'green'
  | 'blue'
  | 'pink'
  | 'orange'
  | 'indigo'
  | 'slate'
  | 'purple'
  | 'yellow'
  | 'teal'

export interface Tool {
  id: string
  emoji: string
  name: string
  description: string
  href: string
  tags: { label: string; color: TagColor }[]
  isNew?: boolean
  isUpdated?: boolean
  updateNote?: { request: string; change: string }
}

export interface Category {
  id: string
  name: string
  description: string
  tools: Tool[]
}

export const categories: Category[] = [
  {
    id: 'business',
    name: 'ビジネス',
    description: 'ビジネスや業務効率化に関するツール',
    tools: [
      {
        id: 'calculator',
        emoji: 'https://www.google.com/s2/favicons?domain=www.wolframalpha.com&sz=128',
        name: '計算機（WolframAlpha）',
        description: '計算機です。',
        href: 'https://www.wolframalpha.com/',
        tags: [
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'qr-code',
        emoji: 'https://www.google.com/s2/favicons?domain=qr.quel.jp&sz=128',
        name: 'QR作成（QRのススメ）',
        description: 'QRコードを生成します。',
        href: 'https://qr.quel.jp/',
        tags: [
          { label: 'ビジネス', color: 'blue' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'pdf-edit',
        emoji: 'https://www.google.com/s2/favicons?domain=www.ilovepdf.com&sz=128',
        name: 'PDF編集（iLovePDF）',
        description: 'PDFファイルを編集します。',
        href: 'https://www.ilovepdf.com/ja',
        tags: [
          { label: 'ドキュメント', color: 'indigo' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'google-translate',
        emoji: 'https://www.google.com/s2/favicons?domain=translate.google.co.jp&sz=128',
        name: '翻訳サービス（Google翻訳）',
        description: 'Googleの翻訳サービスです。',
        href: 'https://translate.google.co.jp/?sl=ja&tl=en&op=translate',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'gigafile',
        emoji: 'https://www.google.com/s2/favicons?domain=gigafile.nu&sz=128',
        name: 'ファイル転送（ギガファイル便）',
        description: '大容量ファイル転送サービスです。',
        href: 'https://gigafile.nu/',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'diagrams-net',
        emoji: 'https://www.google.com/s2/favicons?domain=app.diagrams.net&sz=128',
        name: '図作成（diagrams.net）',
        description: 'フローチャートやシステム構成図を作成できます。',
        href: 'https://app.diagrams.net/',
        tags: [{ label: 'ビジネス', color: 'blue' }, { label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'google-maps',
        emoji: 'https://www.google.com/s2/favicons?domain=www.google.com&sz=128',
        name: '地図検索（Googleマップ）',
        description: '地図検索・ルート検索ができます。',
        href: 'https://www.google.com/maps',
        tags: [{ label: 'ビジネス', color: 'blue' }, { label: 'その他', color: 'purple' }],
      },
      {
        id: 'str-counter',
        emoji: 'https://www.google.com/s2/favicons?domain=www.luft.co.jp&sz=128',
        name: '文字数カウント',
        description: '文字数カウント',
        href: 'https://www.luft.co.jp/cgi/str_counter.php',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'web-timer',
        emoji: 'https://www.google.com/s2/favicons?domain=timer.onl.jp&sz=128',
        name: 'タイマー',
        description: 'タイマー',
        href: 'https://timer.onl.jp/',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI',
    description: 'AIを活用した便利なツール',
    tools: [
      {
        id: 'chatgpt',
        emoji: 'https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128',
        name: 'ChatGPT',
        description: 'OpenAIの対話型AIサービスです。',
        href: 'https://chatgpt.com/',
        tags: [{ label: 'AI', color: 'green' }],
      },

    ],
  },
  {
    id: 'creative',
    name: 'クリエイティブ',
    description: '画像編集やデザイン関連のツール',
    tools: [
      {
        id: 'piskel',
        emoji: 'https://www.google.com/s2/favicons?domain=www.piskelapp.com&sz=128',
        name: 'Piskel',
        description: '無料のオンラインドット絵エディターです。',
        href: 'https://www.piskelapp.com/p/create/sprite/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: '123apps',
        emoji: 'https://www.google.com/s2/favicons?domain=123apps.com&sz=128',
        name: '123apps',
        description: '動画、音声、PDFなどをブラウザ上で編集できるツール群です。',
        href: 'https://123apps.com/ja/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'adobe-express',
        emoji: 'https://www.google.com/s2/favicons?domain=new.express.adobe.com&sz=128',
        name: 'Adobe Express',
        description: 'デザインや動画編集を手軽に行えるツールです。',
        href: 'https://new.express.adobe.com/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'photopea',
        emoji: 'https://www.google.com/s2/favicons?domain=www.photopea.com&sz=128',
        name: 'Photopea',
        description: 'ブラウザ上で動作する高機能な画像編集・デザインツールです。',
        href: 'https://www.photopea.com/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'iloveimg',
        emoji: 'https://www.google.com/s2/favicons?domain=www.iloveimg.com&sz=128',
        name: 'iLoveIMG',
        description: '画像の一括編集（リサイズ、圧縮、切り抜きなど）ができます。',
        href: 'https://www.iloveimg.com/ja',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'maskable',
        emoji: 'https://www.google.com/s2/favicons?domain=maskable.app&sz=128',
        name: 'Maskable',
        description: 'PWAのアプリアイコン（Maskable Icon）をプレビュー・作成できます。',
        href: 'https://maskable.app/editor',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'photoroom',
        emoji: 'https://www.google.com/s2/favicons?domain=www.photoroom.com&sz=128',
        name: 'Photoroom (背景削除)',
        description: '画像の背景を自動的に透過処理するツールです。',
        href: 'https://www.photoroom.com/ja/tools/background-remover',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'colordic',
        emoji: 'https://www.google.com/s2/favicons?domain=www.colordic.org&sz=128',
        name: '色取得',
        description: '色取得',
        href: 'https://www.colordic.org/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
    ],
  },
  {
    id: 'life',
    name: '生活',
    description: '生活に役立つツール',
    tools: [
      {
        id: 'e-tenkyo',
        emoji: 'https://www.google.com/s2/favicons?domain=lp.jpetn.pf.japanpost.jp&sz=128',
        name: 'e転居',
        description: 'e転居',
        href: 'https://lp.jpetn.pf.japanpost.jp/?utm_source=web&utm_medium=link&utm_campaign=jpetn_guide',
        tags: [{ label: 'グリーン', color: 'green' }],
      },
      {
        id: 'myna',
        emoji: 'https://www.google.com/s2/favicons?domain=myna.go.jp&sz=128',
        name: 'マイナポータル',
        description: 'マイナポータル',
        href: 'https://myna.go.jp/',
        tags: [{ label: 'グリーン', color: 'green' }],
      },
      {
        id: 'transit',
        emoji: 'https://www.google.com/s2/favicons?domain=transit.yahoo.co.jp&sz=128',
        name: '乗り換え',
        description: '乗り換え',
        href: 'https://transit.yahoo.co.jp/',
        tags: [{ label: 'グリーン', color: 'green' }],
      },
    ],
  },
  {
    id: 'materials',
    name: '素材',
    description: 'フリー素材などのサイトまとめ',
    tools: [
      {
        id: 'dova-s',
        emoji: 'https://www.google.com/s2/favicons?domain=dova-s.jp&sz=128',
        name: 'BGM',
        description: 'BGM',
        href: 'https://dova-s.jp/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'soundeffect-lab',
        emoji: 'https://www.google.com/s2/favicons?domain=soundeffect-lab.info&sz=128',
        name: 'SE',
        description: 'SE',
        href: 'https://soundeffect-lab.info/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'icooon-mono',
        emoji: 'https://www.google.com/s2/favicons?domain=icooon-mono.com&sz=128',
        name: 'icon',
        description: 'icon',
        href: 'https://icooon-mono.com/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'google-fonts',
        emoji: 'https://www.google.com/s2/favicons?domain=fonts.google.com&sz=128',
        name: 'font',
        description: 'font',
        href: 'https://fonts.google.com/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'pipoya',
        emoji: 'https://www.google.com/s2/favicons?domain=pipoya.net&sz=128',
        name: 'ドット絵',
        description: 'ドット絵',
        href: 'https://pipoya.net/sozai/',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
    ],
  },
]
