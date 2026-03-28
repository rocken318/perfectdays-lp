'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

// ============================================================
// 後から差し替えるリンク定数
// ============================================================
const LINKS = {
  appStore: '#',
  googlePlay: '#',
  privacy: '/privacy',
  support: '/support',
}

// ============================================================
// 機能カード定義
// ============================================================
const FEATURES = [
  {
    icon: '💯',
    title: '100点スコアリング',
    description: '毎日の習慣達成度を100点満点でスコア化。数字で見えると継続が楽しくなる。',
  },
  {
    icon: '🎯',
    title: '柔軟な目標設定',
    description: 'デイリー習慣・プロジェクト・Todoの3種類で、あらゆる目標に対応。',
  },
  {
    icon: '⚖️',
    title: '重みづけカスタマイズ',
    description: 'カテゴリごとに重要度を設定。自分の価値観に合ったスコアを算出。',
  },
  {
    icon: '🤖',
    title: 'AI レビュー',
    description: 'AIが毎日の記録を分析して、改善アドバイスをフィードバック。（Proプラン）',
  },
  {
    icon: '🗣️',
    title: 'AI秘書',
    description: '「今日の予定は？」と話しかけるだけ。チャット感覚でスケジュール確認・管理ができる。',
  },
  {
    icon: '📅',
    title: 'Googleカレンダー連携',
    description: '既存のカレンダーと双方向同期。スケジュール管理をまとめて一元化。',
  },
]

// ============================================================
// Proプラン比較
// ============================================================
const PLAN_COMPARISON = [
  { feature: 'スコアリング（毎日）', free: true, pro: true },
  { feature: '目標設定（無制限）', free: true, pro: true },
  { feature: 'スコア記録・グラフ', free: true, pro: true },
  { feature: 'SNSフィード', free: true, pro: true },
  { feature: 'Googleカレンダー連携', free: true, pro: true },
  { feature: 'AI秘書チャット', free: '月3回', pro: '無制限' },
  { feature: 'AIレビュー', free: '月1回', pro: '毎日' },
  { feature: '重みづけ自由設定', free: false, pro: true },
  { feature: 'プッシュ通知カスタマイズ', free: false, pro: true },
]

// ============================================================
// スクリーンショット
// ============================================================
const SCREENSHOTS = [
  { src: '/screenshots/placeholder-1.png', alt: 'ホーム採点画面' },
  { src: '/screenshots/placeholder-2.png', alt: '目標設定画面' },
  { src: '/screenshots/placeholder-3.png', alt: 'スコア記録グラフ' },
  { src: '/screenshots/placeholder-4.png', alt: 'AIレビュー画面' },
  { src: '/screenshots/placeholder-5.png', alt: 'SNSフィード' },
]

// ============================================================
// コンポーネント: ストアバッジボタン
// ============================================================
function StoreButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-4 justify-center ${className}`}>
      <a
        href={LINKS.appStore}
        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors"
      >
        <span className="text-2xl"></span>
        <span>
          <span className="block text-xs opacity-75">Download on the</span>
          App Store
        </span>
      </a>
      <a
        href={LINKS.googlePlay}
        className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-gray-800 transition-colors"
      >
        <span className="text-2xl">▶</span>
        <span>
          <span className="block text-xs opacity-75">Get it on</span>
          Google Play
        </span>
      </a>
    </div>
  )
}

// ============================================================
// コンポーネント: チェックマーク
// ============================================================
function PlanCell({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-green-500 font-bold text-lg">✓</span>
  if (value === false) return <span className="text-gray-300 text-lg">—</span>
  return <span className="text-sm font-medium text-purple-600">{value}</span>
}

// ============================================================
// メインページ
// ============================================================
export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* ナビゲーション */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-black text-xl gradient-text">満点ライフ</span>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors hidden sm:block">機能</a>
            <a href="#screenshots" className="hover:text-gray-900 transition-colors hidden sm:block">スクリーンショット</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors hidden sm:block">料金</a>
            <Link href={LINKS.support} className="hover:text-gray-900 transition-colors">サポート</Link>
          </div>
        </div>
      </nav>

      {/* ============================================================
          Hero セクション
      ============================================================ */}
      <section className="hero-gradient pt-32 pb-24 px-4 text-center relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="absolute top-10 -right-20 w-96 h-96 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-green-400/10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* アプリバッジ */}
          <span className="inline-block bg-white/10 text-white/80 text-xs font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            📱 iOS & Android
          </span>

          <h1 className="text-5xl sm:text-7xl font-black text-white mb-4 leading-tight">
            毎日を
            <span className="gradient-text">100点</span>
            に<br />しよう
          </h1>

          <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            習慣・目標・スケジュールを一元管理して、<br className="hidden sm:block" />
            あなたの生活をスコアで可視化するアプリ
          </p>

          <StoreButtons className="mb-16" />

          {/* スコアリングビジュアル */}
          <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64">
            <div className="absolute inset-0 rounded-full border-8 border-white/10" />
            <div
              className="absolute inset-0 rounded-full border-8 border-transparent"
              style={{
                borderTopColor: '#6BCB77',
                borderRightColor: '#FFD93D',
                borderBottomColor: '#FF6B6B',
                transform: 'rotate(-45deg)',
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl sm:text-6xl font-black text-white">87</span>
              <span className="text-white/60 text-sm font-medium">今日のスコア</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          特徴・機能紹介セクション
      ============================================================ */}
      <section id="features" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              あなたの毎日を変える<span className="gradient-text">6つの機能</span>
            </h2>
            <p className="text-gray-500 text-lg">習慣化を科学的にサポートする機能を搭載</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                data-animate
                className="bg-white rounded-2xl p-6 shadow-sm card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          スクリーンショットセクション
      ============================================================ */}
      <section id="screenshots" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              <span className="gradient-text">アプリの画面</span>を見てみよう
            </h2>
            <p className="text-gray-500 text-lg">シンプルで使いやすいデザイン</p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {SCREENSHOTS.map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center w-56 sm:w-64"
                data-animate
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="bg-gray-100 rounded-3xl aspect-[9/19] flex items-center justify-center shadow-lg overflow-hidden">
                  {/* placeholder — 実際の画像に差し替え */}
                  <div className="text-center text-gray-400 p-4">
                    <div className="text-5xl mb-3">📱</div>
                    <p className="text-xs">{s.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Proプランセクション
      ============================================================ */}
      <section id="pricing" className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-animate>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              シンプルな<span className="gradient-text">料金プラン</span>
            </h2>
            <p className="text-gray-500 text-lg">まずは無料ではじめよう</p>
          </div>

          {/* プランヘッダー */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="col-span-1" />
            <div className="text-center bg-white rounded-2xl py-4 shadow-sm">
              <p className="text-xs text-gray-400 font-medium mb-1">無料プラン</p>
              <p className="text-2xl font-black text-gray-900">¥0</p>
            </div>
            <div
              className="text-center rounded-2xl py-4 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #FF6B6B, #FFD93D)' }}
            >
              <span className="absolute top-2 right-2 bg-white/20 text-white text-xs px-2 py-0.5 rounded-full font-medium">人気</span>
              <p className="text-xs text-white/80 font-medium mb-1">Proプラン</p>
              <p className="text-2xl font-black">¥480</p>
              <p className="text-xs text-white/80">/月</p>
            </div>
          </div>

          {/* 比較表 */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden" data-animate>
            {PLAN_COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 px-6 py-4 items-center ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                }`}
              >
                <p className="text-sm font-medium text-gray-700 col-span-1">{row.feature}</p>
                <div className="text-center">
                  <PlanCell value={row.free} />
                </div>
                <div className="text-center">
                  <PlanCell value={row.pro} />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs mt-6">
            ※ Pro プランはアプリ内から月額または年額でご購入いただけます
          </p>
        </div>
      </section>

      {/* ============================================================
          ダウンロード CTA セクション
      ============================================================ */}
      <section className="py-24 px-4 hero-gradient text-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-green-400/10 blur-3xl" />
        </div>
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            さっそく<span className="gradient-text">はじめよう</span>
          </h2>
          <p className="text-white/70 text-lg mb-10">
            今日から毎日を100点で生きる習慣を作ろう
          </p>
          <StoreButtons />
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4 text-center text-sm">
        <p className="font-bold text-white text-lg gradient-text mb-4">満点ライフ (PerfectDays)</p>
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          <Link href={LINKS.privacy} className="hover:text-white transition-colors">プライバシーポリシー</Link>
          <Link href={LINKS.support} className="hover:text-white transition-colors">サポート</Link>
        </div>
        <p className="text-xs text-gray-600">© 2026 HaLVision. All rights reserved.</p>
      </footer>
    </div>
  )
}
