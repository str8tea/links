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

export const quickAccessTools: Tool[] = [
  {
    id: 'tapping-speed-test',
    emoji: '👆',
    name: '連打力測定',
    description: '指定時間内にどれだけ素早くボタンを連打できるかを測定するゲームです。',
    href: '/tapping-speed-test',
    tags: [{ label: 'ゲーム', color: 'orange' }],
  },
  {
    id: 'image-resize',
    emoji: '🖼️',
    name: '画像リサイズ・圧縮',
    description: '画像のサイズ・画質を自由に変更できます。',
    href: '/image-resize',
    tags: [
      { label: 'クリエイティブ', color: 'pink' },
      { label: 'ビジネス', color: 'blue' },
    ],
  },
]

export const rankingTools: Tool[] = [
  {
    id: 'tetris',
    emoji: '🧱',
    name: 'テトリス',
    description: 'ブロックを回転させて隙間なく埋める定番の落ち物パズルゲーム。レベルが上がるごとに速度アップ！',
    href: '/tetris',
    tags: [{ label: 'ゲーム', color: 'orange' }],
  },
  {
    id: 'tapping-speed-test-rank',
    emoji: '👆',
    name: '連打力測定',
    description: '指定時間内にどれだけ素早くボタンを連打できるかを測定するゲームです。',
    href: '/tapping-speed-test',
    tags: [{ label: 'ゲーム', color: 'orange' }],
  },
  {
    id: 'reaction-time-test',
    emoji: '⚡',
    name: '反射神経測定',
    description: 'あなたの反射神経の速さを測定し、動物と比較できます。',
    href: '/reaction-time-test',
    tags: [{ label: 'ゲーム', color: 'orange' }],
  },
  {
    id: 'toolpods-dash',
    emoji: '🤖',
    name: 'ツールくんダッシュ',
    description: '障害物を避けながら走るツールくんのランナーゲーム。スペースキーかタップでジャンプ！どこまで走れるかな？',
    href: '/toolpods-dash',
    tags: [{ label: 'ゲーム', color: 'orange' }],
  },
  {
    id: 'ai-keigo-rank',
    emoji: '🙇',
    name: 'AI敬語',
    description: '文章を適切な敬語に変換します。',
    href: '/ai-keigo',
    tags: [
      { label: 'AI', color: 'green' },
      { label: 'ビジネス', color: 'blue' },
    ],
  },
]

export const newTools: Tool[] = [
  {
    id: 'sudoku',
    emoji: '🔢',
    name: 'ナンプレ（数独）',
    description: 'ナンプレ（数独）を無料でプレイ。3段階の難易度、メモ機能、ヒント機能付き。ブラウザですぐ遊べます。',
    href: '/sudoku',
    tags: [{ label: 'ゲーム', color: 'orange' }],
    isNew: true,
  },
  {
    id: 'image-crop',
    emoji: '✂️',
    name: '画像トリミング',
    description: '矢印キーで1px単位の微調整ができるようにしました',
    href: '/image-crop',
    tags: [
      { label: 'クリエイティブ', color: 'pink' },
      { label: 'ビジネス', color: 'blue' },
    ],
    isUpdated: true,
    updateNote: {
      request: 'トリミングを細かくやりたい',
      change: '矢印キーで1px単位の微調整ができるようにしました',
    },
  },
  {
    id: 'minesweeper',
    emoji: '💣',
    name: 'マインスイーパー',
    description: '地雷を避けてすべてのマスを開くパズルゲーム。初級・中級・上級の3段階。タイマー・フラグ・一括オープン対応。',
    href: '/minesweeper',
    tags: [{ label: 'ゲーム', color: 'orange' }],
    isNew: true,
  },
  {
    id: 'reversi',
    emoji: '⚫',
    name: 'リバーシ',
    description: '先攻（黒）/後攻（白）を選べるようにしました',
    href: '/reversi',
    tags: [{ label: 'ゲーム', color: 'orange' }],
    isUpdated: true,
    updateNote: {
      request: '後攻もやりたい',
      change: '先攻（黒）/後攻（白）を選べるようにしました',
    },
  },
  {
    id: 'reversi2',
    emoji: '⚫',
    name: 'リバーシ',
    description: 'CPUを全体的に弱くして、5段階のレベルにしました',
    href: '/reversi',
    tags: [{ label: 'ゲーム', color: 'orange' }],
    isUpdated: true,
    updateNote: {
      request: 'つよいからハンデをしてほしい',
      change: 'CPUを全体的に弱くして、5段階のレベルにしました',
    },
  },
]

export const categories: Category[] = [
  {
    id: 'business',
    name: 'ビジネス',
    description: 'ビジネスや業務効率化に関するツール',
    tools: [
      {
        id: 'ocr',
        emoji: '📝',
        name: 'AI一括画像文字おこし',
        description: '複数の画像を一度にアップロードして同時に文字起こしします。',
        href: '/ocr',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'ai-email',
        emoji: '📧',
        name: 'AIメール作成',
        description: 'ビジネスメールの文章を作成します。',
        href: '/ai-email',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'ai-tweet',
        emoji: '🐦',
        name: 'AIツイート生成',
        description: '短い言葉から140字のツイートをAIが生成します。',
        href: '/ai-tweet',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'image-resize-biz',
        emoji: '🖼️',
        name: '画像リサイズ・圧縮',
        description: '画像のサイズ・画質を自由に変更できます。',
        href: '/image-resize',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'ai-keigo',
        emoji: '🙇',
        name: 'AI敬語',
        description: '文章を適切な敬語に変換します。',
        href: '/ai-keigo',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'invoice',
        emoji: '📝',
        name: '請求書作成',
        description: '請求書を簡単に作成できます。',
        href: '/invoice',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'estimate',
        emoji: '📄',
        name: '見積書作成',
        description: '見積書を簡単に作成できます。',
        href: '/estimate',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'transparent-image',
        emoji: '🔍',
        name: '画像透過',
        description: '画像の背景を透過させます。',
        href: '/transparent-image',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'image-crop-biz',
        emoji: '✂️',
        name: '画像トリミング',
        description: '画像を必要な部分だけ切り取ります。',
        href: '/image-crop',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'calendar',
        emoji: '📅',
        name: '営業日カレンダー',
        description: '営業日の計算や管理ができます。',
        href: '/calendar',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'qr-code',
        emoji: '📱',
        name: 'QRコード生成',
        description: 'QRコードを生成します。',
        href: '/qr-code',
        tags: [
          { label: 'ビジネス', color: 'blue' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'pdf-merge',
        emoji: '📎',
        name: 'PDF結合',
        description: '複数のPDFファイルを1つに結合します。',
        href: '/pdf-merge',
        tags: [
          { label: 'ドキュメント', color: 'indigo' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'pdf-split',
        emoji: '✂️',
        name: 'PDF分割',
        description: 'PDFファイルを複数のファイルに分割します。',
        href: '/pdf-split',
        tags: [
          { label: 'ドキュメント', color: 'indigo' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'ai-social-filter',
        emoji: '😊',
        name: 'AI社会性フィルター',
        description: '感情的な表現や言いづらい言葉でも、相手にリスペクトのある言い回しに変換します。',
        href: '/ai-social-filter',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'mermaid-diagram',
        emoji: '📊',
        name: 'システム構成図メーカー',
        description: '自然言語の説明からシステム構成図を自動生成します。',
        href: '/mermaid-diagram',
        tags: [
          { label: '開発ツール', color: 'slate' },
          { label: 'ビジネス', color: 'blue' },
          { label: 'AI', color: 'green' },
        ],
      },
      {
        id: 'ai-press-release',
        emoji: '📰',
        name: 'AIプレスリリース作成支援',
        description: 'AIがプレスリリースの作成を支援します。',
        href: '/ai-press-release',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'habit-tracker',
        emoji: '📅',
        name: '習慣トラッカー',
        description: '直感的なカレンダーUIで日々の予定を計画し、実績と比較して振り返ることで習慣化をサポートします。',
        href: '/habit-tracker',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'csv-editor',
        emoji: '📊',
        name: 'CSVエディター',
        description: 'CSVやTSVファイルを表形式で閲覧・編集できます。直感的な操作でデータの管理が可能です。',
        href: '/csv-editor',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'service-name-generator',
        emoji: '💡',
        name: 'サービス名提案ジェネレーター',
        description: '新しいサービスやアプリケーションに最適な名前を提案します。',
        href: '/service-name-generator',
        tags: [
          { label: 'ビジネス', color: 'blue' },
          { label: 'AI', color: 'green' },
        ],
      },
      {
        id: 'sql-generator',
        emoji: '🔍',
        name: 'SQL生成',
        description: '自然言語の説明からSQLクエリを自動生成します。データベース操作をより簡単に。',
        href: '/sql-generator',
        tags: [
          { label: '開発ツール', color: 'slate' },
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'kpi-tree-builder',
        emoji: '📊',
        name: 'KPIツリー',
        description: 'KGIを分解してツリー状に構造化し、定量的な課題の特定やチーム内での課題共有を可能にするKPIツリー作成ツール',
        href: '/kpi-tree-builder',
        tags: [{ label: 'ビジネス', color: 'blue' }],
      },
      {
        id: 'group-divider',
        emoji: '👥',
        name: 'グループ分け',
        description: 'メンバーをランダムに複数のグループに分けるツール。',
        href: '/group-divider',
        tags: [
          { label: 'ビジネス', color: 'blue' },
          { label: 'その他', color: 'purple' },
        ],
      },
    ],
  },
  {
    id: 'ai',
    name: 'AI',
    description: 'AIを活用した便利なツール',
    tools: [
      {
        id: 'ai-comparison',
        emoji: '🤖',
        name: 'AIモデル比較',
        description: '1つの入力に対して複数のAIモデルの回答を比較できます。',
        href: '/ai-comparison',
        tags: [
          { label: 'AI', color: 'green' },
          { label: '開発ツール', color: 'slate' },
        ],
      },
      {
        id: 'ocr-ai',
        emoji: '📝',
        name: 'AI一括画像文字おこし',
        description: '複数の画像を一度にアップロードして同時に文字起こしします。',
        href: '/ocr',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'prompt-comparison',
        emoji: '💬',
        name: 'AIプロンプト比較',
        description: '同じAIモデルに対して複数のプロンプトの効果を比較できます。',
        href: '/prompt-comparison',
        tags: [
          { label: 'AI', color: 'green' },
          { label: '開発ツール', color: 'slate' },
        ],
      },
      {
        id: 'ai-image',
        emoji: '🎨',
        name: 'AI画像生成',
        description: 'テキストプロンプトから美しいAI画像を生成します。',
        href: '/ai-image',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'ai-email-ai',
        emoji: '📧',
        name: 'AIメール作成',
        description: 'ビジネスメールの文章を作成します。',
        href: '/ai-email',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'ai-tweet-ai',
        emoji: '🐦',
        name: 'AIツイート生成',
        description: '短い言葉から140字のツイートをAIが生成します。',
        href: '/ai-tweet',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'ai-keigo-ai',
        emoji: '🙇',
        name: 'AI敬語',
        description: '文章を適切な敬語に変換します。',
        href: '/ai-keigo',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'ai-social-filter-ai',
        emoji: '😊',
        name: 'AI社会性フィルター',
        description: '感情的な表現や言いづらい言葉でも、相手にリスペクトのある言い回しに変換します。',
        href: '/ai-social-filter',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
    ],
  },
  {
    id: 'creative',
    name: 'クリエイティブ',
    description: '画像編集やデザイン関連のツール',
    tools: [
      {
        id: 'ai-image-cr',
        emoji: '🎨',
        name: 'AI画像生成',
        description: 'テキストプロンプトから美しいAI画像を生成します。',
        href: '/ai-image',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'ai-tweet-cr',
        emoji: '🐦',
        name: 'AIツイート生成',
        description: '短い言葉から140字のツイートをAIが生成します。',
        href: '/ai-tweet',
        tags: [
          { label: 'AI', color: 'green' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'image-resize-cr',
        emoji: '🖼️',
        name: '画像リサイズ・圧縮',
        description: '画像のサイズ・画質を自由に変更できます。',
        href: '/image-resize',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'transparent-image-cr',
        emoji: '🔍',
        name: '画像透過',
        description: '画像の背景を透過させます。',
        href: '/transparent-image',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'image-crop-cr',
        emoji: '✂️',
        name: '画像トリミング',
        description: '画像を必要な部分だけ切り取ります。',
        href: '/image-crop',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: 'ビジネス', color: 'blue' },
        ],
      },
      {
        id: 'favicon-generator',
        emoji: '🌐',
        name: 'Favicon生成',
        description: '各種デバイス・ブラウザに対応したファビコンを生成します。',
        href: '/favicon-generator',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: '開発ツール', color: 'slate' },
        ],
      },
      {
        id: 'image-base64',
        emoji: '🔄',
        name: '画像Base64変換',
        description: '画像とBase64形式の相互変換を行います。',
        href: '/image-base64',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: '開発ツール', color: 'slate' },
        ],
      },
      {
        id: 'qr-code-cr',
        emoji: '📱',
        name: 'QRコード生成',
        description: 'QRコードを生成します。',
        href: '/qr-code',
        tags: [
          { label: 'ビジネス', color: 'blue' },
          { label: 'クリエイティブ', color: 'pink' },
        ],
      },
      {
        id: 'pixel-art',
        emoji: '🎮',
        name: 'ピクセルアート変換',
        description: '画像をピクセルアート風に変換します。',
        href: '/pixel-art',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'image-radius',
        emoji: '🖼️',
        name: '画像角丸処理',
        description: '画像の角を丸くし、透過PNGとしてダウンロードできます。',
        href: '/image-radius',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
      {
        id: 'css-gradient-generator',
        emoji: '🌈',
        name: 'CSSグラデーションジェネレーター',
        description: '直線、放射状、円錐状のCSSグラデーションを視覚的に作成できます。',
        href: '/css-gradient-generator',
        tags: [
          { label: 'クリエイティブ', color: 'pink' },
          { label: '開発ツール', color: 'slate' },
        ],
      },
      {
        id: 'color-palette-generator',
        emoji: '🎨',
        name: 'カラーパレットジェネレーター',
        description: '調和の取れた美しいカラーパレットを簡単に作成できるツール。',
        href: '/color-palette-generator',
        tags: [{ label: 'クリエイティブ', color: 'pink' }],
      },
    ],
  },
  {
    id: 'security',
    name: 'セキュリティ',
    description: 'セキュリティやパスワードに関するツール',
    tools: [
      {
        id: 'password-generator',
        emoji: '🔐',
        name: 'パスワードジェネレーター',
        description: '安全で強力なパスワードを生成します。',
        href: '/password-generator',
        tags: [{ label: 'セキュリティ', color: 'teal' }],
      },
      {
        id: 'hash-generator',
        emoji: '#️⃣',
        name: 'ハッシュ値生成',
        description: 'テキストのハッシュ値 (MD5, SHA-1, SHA-256, SHA-512) を生成します。',
        href: '/hash-generator',
        tags: [
          { label: 'セキュリティ', color: 'teal' },
          { label: '開発ツール', color: 'slate' },
        ],
      },
      {
        id: 'htpasswd-generator',
        emoji: '🔑',
        name: 'HTPasswdジェネレーター',
        description: 'ApacheのBasic認証で使用する .htpasswd ファイルのエントリを生成します。',
        href: '/htpasswd-generator',
        tags: [
          { label: 'セキュリティ', color: 'teal' },
          { label: '開発ツール', color: 'slate' },
        ],
      },
    ],
  },
  {
    id: 'devtools',
    name: '開発ツール',
    description: '開発者向けの便利なツール',
    tools: [
      {
        id: 'jwt-decoder',
        emoji: '🔓',
        name: 'JWTデコード',
        description: 'JWTトークンを解析し、ヘッダー、ペイロード、署名を見やすく表示します。',
        href: '/jwt-decoder',
        tags: [{ label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'uuid-generator',
        emoji: '🆔',
        name: 'UUIDジェネレーター',
        description: 'UUID (v4) を生成します。',
        href: '/uuid-generator',
        tags: [{ label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'base64-converter',
        emoji: '🔄',
        name: 'Base64エンコード/デコード',
        description: 'テキストやファイルをBase64形式に相互変換します。',
        href: '/base64-converter',
        tags: [{ label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'url-converter',
        emoji: '🔗',
        name: 'URLエンコード/デコード',
        description: 'URL文字列をエンコードまたはデコードします。',
        href: '/url-converter',
        tags: [{ label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'timestamp-converter',
        emoji: '🕐',
        name: '日時・タイムスタンプ変換',
        description: 'Unixタイムスタンプ、ISO 8601形式、年月日など、様々な形式の日時を相互変換します。',
        href: '/timestamp-converter',
        tags: [{ label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'regex-tester',
        emoji: '🔍',
        name: '正規表現テスター',
        description: '正規表現のパターンをテストし、マッチング結果を確認できます。',
        href: '/regex-tester',
        tags: [{ label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'cron-generator',
        emoji: '⏱️',
        name: 'Cron式ジェネレーター/パーサー',
        description: 'Cron式の作成・解析・日本語説明をサポートするツールです。',
        href: '/cron-generator',
        tags: [{ label: '開発ツール', color: 'slate' }],
      },
      {
        id: 'tree-visualizer',
        emoji: '🌲',
        name: 'ツリー構造変換',
        description: 'インデント形式のテキストからディレクトリツリー・フォルダ階層図をASCIIアートで表現。',
        href: '/tree-visualizer',
        tags: [{ label: '開発ツール', color: 'slate' }],
      },
    ],
  },
  {
    id: 'text',
    name: 'テキスト処理',
    description: 'テキストの変換・処理に関するツール',
    tools: [
      {
        id: 'character-counter',
        emoji: '📏',
        name: '文字数カウント',
        description: 'テキストの文字数、単語数、行数、段落数など、テキストの統計情報をリアルタイムで計測します。',
        href: '/character-counter',
        tags: [{ label: 'テキスト処理', color: 'yellow' }],
      },
      {
        id: 'text-replace',
        emoji: '🔄',
        name: 'テキスト置換',
        description: 'テキスト内の特定の文字列を別の文字列に置換します。',
        href: '/text-replace',
        tags: [{ label: 'テキスト処理', color: 'yellow' }],
      },
      {
        id: 'text-split',
        emoji: '✂️',
        name: 'テキスト分割',
        description: '会話形式のテキストを話者ごとに複数のファイルに分割します。',
        href: '/text-split',
        tags: [{ label: 'テキスト処理', color: 'yellow' }],
      },
      {
        id: 'dummy-text-generator',
        emoji: '📝',
        name: 'ダミーテキスト生成 (Lorem Ipsum)',
        description: 'デザイン確認用のダミーテキスト (Lorem Ipsum) を指定した量で生成します。',
        href: '/dummy-text-generator',
        tags: [{ label: 'テキスト処理', color: 'yellow' }],
      },
      {
        id: 'dummy-data-generator',
        emoji: '📊',
        name: 'ダミーデータ生成 (CSV, JSON)',
        description: '指定した形式（CSV, JSON）とスキーマでダミーデータを生成します。',
        href: '/dummy-data-generator',
        tags: [{ label: 'テキスト処理', color: 'yellow' }],
      },
      {
        id: 'diff-text',
        emoji: '🔀',
        name: 'テキスト差分比較',
        description: '2つのテキストの違いを視覚的に比較・確認できるツール',
        href: '/diff-text',
        tags: [{ label: 'テキスト処理', color: 'yellow' }],
      },
      {
        id: 'special-text',
        emoji: '✨',
        name: '特殊文字変換ツール',
        description: 'テキストをXやSNSで使える特殊文字やユニコード文字に変換して目立つ投稿を作成できます。',
        href: '/special-text',
        tags: [{ label: 'テキスト処理', color: 'yellow' }],
      },
    ],
  },
  {
    id: 'games',
    name: 'ゲーム',
    description: '遊べるゲームコレクション',
    tools: [
      {
        id: 'tetris-game',
        emoji: '🧱',
        name: 'テトリス',
        description: 'ブロックを回転させて隙間なく埋める定番の落ち物パズルゲーム。レベルが上がるごとに速度アップ！',
        href: '/tetris',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'toolpods-dash-game',
        emoji: '🤖',
        name: 'ツールくんダッシュ',
        description: '障害物を避けながら走るツールくんのランナーゲーム。スペースキーかタップでジャンプ！',
        href: '/toolpods-dash',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'snake-game',
        emoji: '🐍',
        name: 'スネークゲーム',
        description: 'ヘビを操作してりんごを食べよう！スワイプ操作対応のクラシックなスネークゲーム。',
        href: '/snake-game',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'minesweeper-game',
        emoji: '💣',
        name: 'マインスイーパー',
        description: '地雷を避けてすべてのマスを開くパズルゲーム。初級・中級・上級の3段階。',
        href: '/minesweeper',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'sudoku-game',
        emoji: '🔢',
        name: 'ナンプレ（数独）',
        description: 'ナンプレ（数独）を無料でプレイ。3段階の難易度、メモ機能、ヒント機能付き。',
        href: '/sudoku',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'reversi-game',
        emoji: '⚫',
        name: 'リバーシ',
        description: 'リバーシ（オセロ）をCPU対戦で無料プレイ。5段階の難易度。ブラウザですぐ遊べます。',
        href: '/reversi',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'game-2048',
        emoji: '🎲',
        name: '2048ゲーム',
        description: 'タイルをスライドさせて2048を作る中毒性の高いパズルゲーム。',
        href: '/2048',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'reaction-time-test-game',
        emoji: '⚡',
        name: '反射神経測定',
        description: 'あなたの反射神経の速さを測定し、動物と比較できます。',
        href: '/reaction-time-test',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'tapping-speed-test-game',
        emoji: '👆',
        name: '連打力測定',
        description: '指定時間内にどれだけ素早くボタンを連打できるかを測定するゲームです。',
        href: '/tapping-speed-test',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'typing-speed-test',
        emoji: '⌨️',
        name: 'タイピングスピード測定',
        description: 'あなたの日本語タイピング速度を測定し、職業別の平均速度と比較します。',
        href: '/typing-speed-test',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
      {
        id: 'roulette',
        emoji: '🎰',
        name: 'ルーレット',
        description: '複数の選択肢からランダムに選んでくれるシンプルなルーレットツール。',
        href: '/roulette',
        tags: [{ label: 'ゲーム', color: 'orange' }],
      },
    ],
  },
]
