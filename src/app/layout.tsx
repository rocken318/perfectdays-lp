import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '満点ライフ (PerfectDays) - 毎日を100点にしよう',
  description: '習慣・目標・スケジュールを一元管理して、あなたの生活をスコアで可視化するアプリ',
  openGraph: {
    title: '満点ライフ (PerfectDays)',
    description: '毎日を100点にしよう',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
