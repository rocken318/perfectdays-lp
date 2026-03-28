# 満点ライフ LP

満点ライフ（PerfectDays）のランディングページです。Next.js + TypeScript + Tailwind CSS で構築。

## ページ構成

| URL | 内容 |
|---|---|
| `/` | LP本体（Hero・機能紹介・スクリーンショット・料金比較・CTA） |
| `/privacy` | プライバシーポリシー |
| `/support` | サポート・よくある質問・お問い合わせ |

## 開発

```bash
npm install
npm run dev
# → http://localhost:3000
```

## ビルド・エクスポート

```bash
npm run build
# → out/ ディレクトリに静的ファイルが生成される
```

## Vercel デプロイ

```bash
# Vercel CLI をインストール
npm i -g vercel

# デプロイ
vercel deploy

# 本番デプロイ
vercel deploy --prod
```

## カスタマイズ

### リンクの差し替え

`src/app/page.tsx` 冒頭の `LINKS` 定数を編集してください：

```ts
const LINKS = {
  appStore: 'https://apps.apple.com/...',   // App Store URL
  googlePlay: 'https://play.google.com/...', // Google Play URL
  privacy: '/privacy',
  support: '/support',
}
```

### スクリーンショットの差し替え

`public/screenshots/` 以下に以下のファイル名で画像を配置してください：
- `placeholder-1.png` ～ `placeholder-5.png`

### お問い合わせフォームの接続

`src/app/support/page.tsx` の `handleSubmit` 関数内でFormspree等のエンドポイントにPOSTしてください。

## ファイル構成

```
lp/
├── public/
│   └── screenshots/        # スクリーンショット画像
├── src/
│   └── app/
│       ├── layout.tsx       # 共通レイアウト（フォント・メタデータ）
│       ├── globals.css      # グローバルCSS・Tailwind
│       ├── page.tsx         # LP本体
│       ├── privacy/
│       │   └── page.tsx     # プライバシーポリシー
│       └── support/
│           └── page.tsx     # サポート
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── vercel.json
└── package.json
```
