import Link from 'next/link'

export default function TokushoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-4">
        <div className="max-w-4xl mx-auto h-16 flex items-center">
          <Link href="/" className="font-black text-xl gradient-text">満点ライフ</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-black text-gray-900 mb-2">特定商取引法に基づく表記</h1>
        <p className="text-gray-400 text-sm mb-12">Specified Commercial Transactions Act</p>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {[
            { label: '販売業者', value: 'HaLVision' },
            { label: '運営責任者', value: '高野 健' },
            {
              label: '所在地',
              value: '〒980-0803 宮城県仙台市青葉区国分町1-4-9 enspace',
            },
            {
              label: 'お問い合わせ',
              value: 'support@perfectdays.app',
              isEmail: true,
            },
            {
              label: '販売価格',
              value: 'Proプラン：月額480円（税込）\n年額プランは別途アプリ内表示をご確認ください',
            },
            {
              label: '支払方法',
              value: 'クレジットカード（Stripe経由）\nApp Store / Google Play のアプリ内課金',
            },
            {
              label: '支払時期',
              value: '月次自動更新（各請求期間の開始日に課金）',
            },
            {
              label: 'サービス提供時期',
              value: '決済完了後、即時ご利用いただけます',
            },
            {
              label: 'キャンセル・解約',
              value:
                'アカウントページよりいつでもキャンセル可能です。解約後も当該請求期間終了までご利用いただけます。',
            },
            {
              label: '返金ポリシー',
              value:
                'サービスの性質上、原則として返金には対応しておりません。App Store 経由のご購入についてはAppleの返金ポリシーに準じます。',
            },
            {
              label: '動作環境',
              value: 'iOS 16以上 / Android 10以上を推奨',
            },
          ].map((row, i) => (
            <div
              key={row.label}
              className={`flex flex-col sm:flex-row ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="sm:w-48 px-6 py-4 text-sm font-semibold text-gray-500 flex-shrink-0 sm:border-r border-gray-100">
                {row.label}
              </div>
              <div className="px-6 py-4 text-sm text-gray-800 leading-relaxed whitespace-pre-line">
                {row.isEmail ? (
                  <a href={`mailto:${row.value}`} className="text-blue-500 hover:underline">
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-500 py-8 px-4 text-center text-xs mt-16">
        <div className="flex gap-6 justify-center mb-3">
          <Link href="/" className="hover:text-white transition-colors">トップ</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
          <Link href="/terms" className="hover:text-white transition-colors">利用規約</Link>
        </div>
        <p>© 2026 HaLVision. All rights reserved.</p>
      </footer>
    </div>
  )
}
