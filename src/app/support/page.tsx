'use client'

import Link from 'next/link'
import { useState } from 'react'

// ============================================================
// FAQ定義
// ============================================================
const FAQS = [
  {
    question: 'アカウントを作成しなくても使えますか？',
    answer:
      '一部の機能はゲストモードでお試しいただけますが、スコアの保存・AI機能・SNS機能のご利用にはアカウント登録が必要です。メールアドレスまたはApple IDで簡単に登録できます。',
  },
  {
    question: 'Proプランにアップグレードするにはどうすればいいですか？',
    answer:
      'アプリ内の「設定」→「プランのアップグレード」からProプランをご購入いただけます。月額480円で、いつでもキャンセル可能です。',
  },
  {
    question: 'Googleカレンダーとの連携方法を教えてください。',
    answer:
      'アプリ内の「設定」→「連携サービス」→「Googleカレンダー」からGoogle アカウントでログインすることで連携できます。連携後は本アプリとGoogleカレンダー間でスケジュールが双方向に同期されます。',
  },
  {
    question: 'アカウントを削除するにはどうすればいいですか？',
    answer:
      'アプリ内の「設定」→「アカウント」→「アカウントを削除」からリクエストいただけます。削除後30日以内にすべてのデータが消去されます。また、下記のお問い合わせフォームからもご依頼いただけます。',
  },
  {
    question: 'スコアの計算方法を教えてください。',
    answer:
      'カテゴリごとに設定した重要度（1〜10）を比率に変換し、各カテゴリのスライダー採点（0〜100）に掛け合わせて合計スコアを算出します。例：カテゴリA（重要度8）・B（重要度4）・C（重要度5）の場合、Aの比率は8/17≒47%となります。',
  },
]

// ============================================================
// FAQアイテム
// ============================================================
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <span
          className="text-2xl text-gray-400 flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-2 bg-gray-50 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

// ============================================================
// サポートページ
// ============================================================
export default function SupportPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Formspree等のエンドポイントに接続する
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ナビゲーション */}
      <nav className="bg-white border-b border-gray-100 px-4">
        <div className="max-w-4xl mx-auto h-16 flex items-center">
          <Link href="/" className="font-black text-xl gradient-text">満点ライフ</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-black text-gray-900 mb-2">サポート</h1>
        <p className="text-gray-400 text-base mb-12">お困りのことがあればお気軽にご連絡ください</p>

        {/* ============================================================
            FAQ セクション
        ============================================================ */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            よくある質問
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>

        {/* ============================================================
            お問い合わせフォーム
        ============================================================ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">お問い合わせ</h2>
          <p className="text-gray-500 text-sm mb-6">
            メールでの直接のお問い合わせ：
            <a
              href="mailto:support@perfectdays.app"
              className="text-blue-500 hover:underline ml-1"
            >
              support@perfectdays.app
            </a>
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-bold text-green-800 text-lg">送信が完了しました</p>
              <p className="text-green-600 text-sm mt-2">
                内容を確認のうえ、3〜5営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="山田 太郎"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="お困りの内容をできるだけ詳しくお書きください"
                  rows={6}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-white text-base transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #FF6B6B, #FFD93D)' }}
              >
                送信する
              </button>

              <p className="text-xs text-gray-400 text-center">
                送信いただいた内容は、プライバシーポリシーに従って取り扱います。
              </p>
            </form>
          )}
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-500 py-8 px-4 text-center text-xs mt-16">
        <div className="flex gap-6 justify-center mb-3">
          <Link href="/" className="hover:text-white transition-colors">トップ</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
        </div>
        <p>© 2026 HaLVision. All rights reserved.</p>
      </footer>
    </div>
  )
}
