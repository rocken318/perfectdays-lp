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
  tokusho: '/tokusho',
  terms: '/terms',
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
  {
    icon: '🎉',
    title: '達成アニメーション',
    description: 'スコア80点超えや全ゴール完了でお祝い演出＆褒めメッセージ。やる気が続く！',
  },
  {
    icon: '🔥',
    title: 'ストリーク＆バッジ',
    description: '連続達成日数をカウントして節目でバッジを解除。継続するほど達成感が増す。',
  },
  {
    icon: '😴',
    title: 'お休み期間設定',
    description: '旅行や体調不良の日は「お休み」に設定。無理なく続けられて離脱を防ぐ。',
  },
  {
    icon: '⏱️',
    title: 'ルーティンタイマー',
    description: '習慣ごとにタイマーをセット。集中してこなせて、終わったら通知でお知らせ。',
  },
  {
    icon: '🗓️',
    title: 'デイリースケジュール表示',
    description: 'その日の習慣を時間軸で一覧表示。上から順にこなすだけで1日が整う。',
  },
  {
    icon: '📆',
    title: '曜日設定',
    description: '習慣ごとに実行する曜日を指定。「筋トレは週3日」など自分だけのリズムを作れる。',
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
  { feature: 'ストリーク＆バッジ', free: true, pro: true },
  { feature: 'お休み期間設定', free: true, pro: true },
  { feature: 'ルーティンタイマー', free: true, pro: true },
  { feature: 'デイリースケジュール表示', free: true, pro: true },
  { feature: '曜日設定', free: true, pro: true },
  { feature: 'AI秘書チャット', free: '月3回', pro: '無制限' },
  { feature: 'AIレビュー', free: '月1回', pro: '毎日' },
  { feature: '重みづけ自由設定', free: false, pro: true },
  { feature: 'プッシュ通知カスタマイズ', free: false, pro: true },
]

// ============================================================
// スクリーンショット
// ============================================================
const SCREENSHOTS = [
  { src: '/screenshots/screen-home2.png', alt: 'ホーム採点画面', label: 'ホーム採点' },
  { src: '/screenshots/screen-manage.png', alt: '目標管理画面', label: '目標管理' },
  { src: '/screenshots/screen-record.png', alt: 'スコア記録画面', label: 'スコア記録' },
  { src: '/screenshots/screen-ai-review.png', alt: 'AI総評画面', label: 'AI総評' },
  { src: '/screenshots/screen-ai-secretary.png', alt: 'AI秘書画面', label: 'AI秘書' },
  { src: '/screenshots/screen-settings.png', alt: '設定・プラン画面', label: 'プラン設定' },
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
            <a href="#scoring" className="hover:text-gray-900 transition-colors hidden sm:block">スコアの仕組み</a>
            <a href="#screenshots" className="hover:text-gray-900 transition-colors hidden sm:block">スクリーンショット</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors hidden sm:block">料金</a>
            <Link href={LINKS.support} className="hover:text-gray-900 transition-colors">サポート</Link>
          </div>
        </div>
      </nav>

      {/* ============================================================
          Hero セクション
      ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景コラージュ画像 */}
        <div className="absolute inset-0">
          <Image
            src="/hero-collage.jpg"
            alt="さまざまな活動に取り組む人々のコラージュ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-16">
          <span className="inline-block bg-white/15 text-white/90 text-xs font-medium px-4 py-1.5 rounded-full mb-8 border border-white/25 backdrop-blur-sm">
            📱 iOS & Android
          </span>

          <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            あなたの<span className="gradient-text">頑張り</span>を<br />
            記録し続けるアプリ
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow">
            習慣・目標・スケジュールを一元管理して、<br className="hidden sm:block" />
            毎日の達成度を100点満点でスコア化しよう
          </p>

          <StoreButtons />
        </div>
      </section>

      {/* ============================================================
          特徴・機能紹介セクション
      ============================================================ */}
      <section id="features" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              あなたの毎日を変える<span className="gradient-text">12の機能</span>
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
          重みづけセクション
      ============================================================ */}
      <section id="scoring" className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate>
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-orange-200">
              ⚖️ 満点ライフの核心機能
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              <span className="gradient-text">重みづけ</span>で、<br className="sm:hidden" />
              あなただけのスコアを作る
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              「仕事より健康を優先したい」「今月は語学に集中したい」<br className="hidden sm:block" />
              ——そんな価値観の違いを、スコアにそのまま反映できます。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左: アプリ実画面 */}
            <div className="flex justify-center" data-animate>
              <div className="relative w-64 sm:w-72">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/screenshots/screen-home2.png"
                    alt="ホーム採点画面 - 重要度とスライダー"
                    width={828}
                    height={1792}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-[42%] -right-4 sm:-right-12 bg-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  重要度 5 ← ここで設定
                </div>
                <div className="absolute top-[55%] -left-4 sm:-left-14 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  達成度をスライダーで入力
                </div>
              </div>
            </div>

            {/* 右: 説明 */}
            <div className="space-y-8" data-animate>
              {/* 計算式 */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">スコア計算の仕組み</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="bg-orange-100 rounded-xl px-5 py-3 text-center">
                    <p className="text-xs text-orange-400 font-medium mb-1">重要度</p>
                    <p className="text-2xl font-black text-orange-500">1〜10</p>
                  </div>
                  <span className="text-2xl text-gray-300">×</span>
                  <div className="bg-green-100 rounded-xl px-5 py-3 text-center">
                    <p className="text-xs text-green-500 font-medium mb-1">達成度</p>
                    <p className="text-2xl font-black text-green-600">0〜100点</p>
                  </div>
                  <span className="text-2xl text-gray-300">=</span>
                  <div className="rounded-xl px-5 py-3 text-center bg-gradient-to-br from-red-50 to-yellow-50">
                    <p className="text-xs font-medium mb-1 gradient-text">今日のスコア</p>
                    <p className="text-2xl font-black gradient-text">100点満点</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                  重要度は合計が何点でもOK。自動で比率に変換されます。<br />
                  例：健康8・仕事6・学習4 → 比率は 44% / 33% / 22%
                </p>
              </div>

              {/* 具体例バー */}
              <div className="space-y-3">
                <p className="text-sm font-bold text-gray-500">計算例（今日の達成度）</p>
                {[
                  { name: '健康', weight: 8, score: 90, color: '#6BCB77', total: 18 },
                  { name: '仕事', weight: 6, score: 70, color: '#4ECDC4', total: 18 },
                  { name: '学習', weight: 4, score: 50, color: '#FFD93D', total: 18 },
                ].map((item) => {
                  const ratio = Math.round((item.weight / item.total) * 100)
                  return (
                    <div key={item.name} className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-700 w-10">{item.name}</span>
                      <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${item.score}%`, backgroundColor: item.color }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 w-28 text-right shrink-0">
                        {item.score}点 × 重要度{item.weight}（{ratio}%）
                      </span>
                    </div>
                  )
                })}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">加重平均スコア</span>
                  <span className="text-2xl font-black gradient-text">
                    {Math.round((90 * 8 + 70 * 6 + 50 * 4) / 18)}点
                  </span>
                </div>
              </div>

              {/* 3ステップ */}
              <div className="space-y-3">
                {[
                  { step: '1', text: 'カテゴリに重要度（1〜10）をスライダーで設定' },
                  { step: '2', text: '毎日スライダーで各習慣の達成度を入力' },
                  { step: '3', text: '自分の価値観に合ったスコアが自動計算される' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-full text-white text-xs font-black flex items-center justify-center flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #FF6B6B, #FFD93D)' }}
                    >
                      {s.step}
                    </span>
                    <p className="text-sm text-gray-700">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          デイリースケジュールセクション
      ============================================================ */}
      <section className="py-24 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-animate>
            <span className="inline-block bg-blue-50 text-blue-500 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-blue-200">
              🗓️ 1アプリで全部解決
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              時間を設定すれば、<br />
              <span className="gradient-text">毎日のスケジュール帳</span>になる
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              習慣に「何時にやる」を追加するだけ。<br className="hidden sm:block" />
              採点アプリがそのままスケジュール管理ツールに変わります。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* 左: 説明 */}
            <div className="space-y-6 order-2 lg:order-1" data-animate>
              {[
                {
                  icon: '⏰',
                  title: '時間を設定するだけ',
                  desc: '各習慣に「7:00〜7:30」などの時間帯を設定するだけ。自動で時系列に並び替えてスケジュール表示に切り替わります。',
                  color: 'bg-blue-50 border-blue-200',
                  iconBg: 'bg-blue-100 text-blue-500',
                },
                {
                  icon: '📋',
                  title: '採点とスケジュールを一画面で',
                  desc: '「採点」タブで達成度を入力、「スケジュール」タブで今日の予定を確認。アプリを切り替える必要なし。',
                  color: 'bg-purple-50 border-purple-200',
                  iconBg: 'bg-purple-100 text-purple-500',
                },
                {
                  icon: '✅',
                  title: 'こなしたらチェックして達成度に反映',
                  desc: 'スケジュール上でタスクをチェックすると、達成度スライダーに自動反映。二度手間なく記録できます。',
                  color: 'bg-green-50 border-green-200',
                  iconBg: 'bg-green-100 text-green-500',
                },
                {
                  icon: '⏱️',
                  title: 'タイマーでその場で集中',
                  desc: 'タスクをタップするとカウントダウンタイマーを起動。終了時にプッシュ通知で次の習慣へ自然に移れます。',
                  color: 'bg-orange-50 border-orange-200',
                  iconBg: 'bg-orange-100 text-orange-500',
                },
              ].map((item) => (
                <div key={item.title} className={`flex gap-4 p-5 rounded-2xl border ${item.color}`}>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${item.iconBg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 右: スクリーンショット */}
            <div className="flex justify-center order-1 lg:order-2" data-animate>
              <div className="relative w-64 sm:w-72">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/screenshots/screen-home2.png"
                    alt="ホーム画面 - 採点とスケジュールタブ"
                    width={828}
                    height={1792}
                    className="w-full h-auto"
                  />
                </div>
                {/* 吹き出し: スケジュールタブ */}
                <div className="absolute top-[30%] -right-4 sm:-right-14 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  スケジュールタブに切り替えも！
                </div>
                {/* 吹き出し: ストリーク */}
                <div className="absolute top-[14%] -left-4 sm:-left-12 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  🔥 連続達成ストリーク
                </div>
              </div>
            </div>
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

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory -mx-4 px-4">
            {SCREENSHOTS.map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 snap-center w-52 sm:w-64"
                data-animate
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={720}
                    height={1560}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-xs font-semibold text-gray-400 mt-3">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          Proプランセクション
      ============================================================ */}
      <section id="pricing" className="py-24 px-4 bg-white">
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
            <div className="text-center bg-gray-50 rounded-2xl py-4 shadow-sm">
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
          <div className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden" data-animate>
            {PLAN_COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-4 px-6 py-4 items-center ${
                  i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
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
          <Link href={LINKS.terms} className="hover:text-white transition-colors">利用規約</Link>
          <Link href={LINKS.tokusho} className="hover:text-white transition-colors">特定商取引法に基づく表記</Link>
          <Link href={LINKS.support} className="hover:text-white transition-colors">サポート</Link>
        </div>
        <p className="text-xs text-gray-600">© 2026 HaLVision. All rights reserved.</p>
      </footer>
    </div>
  )
}
