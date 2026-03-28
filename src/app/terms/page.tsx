import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-4">
        <div className="max-w-4xl mx-auto h-16 flex items-center">
          <Link href="/" className="font-black text-xl gradient-text">満点ライフ</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-black text-gray-900 mb-2">利用規約</h1>
        <p className="text-gray-400 text-sm mb-12">最終更新日：2026年○月○日</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第1条（適用）</h2>
            <p>
              本利用規約（以下「本規約」）は、HaLVision（以下「当社」）が提供するモバイルアプリ「満点ライフ（PerfectDays）」（以下「本サービス」）の利用条件を定めるものです。ユーザーは本規約に同意した上で本サービスをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第2条（利用登録）</h2>
            <p>
              本サービスの利用を希望する方は、本規約に同意の上、当社所定の方法によりアカウントを登録してください。登録情報に虚偽・誤りがある場合、当社は登録を取り消すことができます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第3条（アカウント管理）</h2>
            <p>
              ユーザーは自己の責任においてアカウント情報を管理してください。アカウントの不正使用によって生じた損害について、当社は責任を負いません。第三者によるアカウントの不正使用が判明した場合は、直ちに当社にご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第4条（料金・支払い）</h2>
            <p>
              本サービスは無料プランおよびProプラン（有料）を提供します。Proプランの料金は月額480円（税込）です。支払いはアプリ内課金（App Store / Google Play）またはクレジットカード（Stripe）を通じて行われます。料金は事前の通知なく変更される場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第5条（キャンセル・返金）</h2>
            <p>
              Proプランはアカウントページよりいつでもキャンセルできます。キャンセル後も当該請求期間終了までご利用いただけます。サービスの性質上、原則として返金には対応しておりません。App Store経由の購入についてはAppleの返金ポリシーに準じます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第6条（禁止事項）</h2>
            <p>ユーザーは以下の行為を行ってはなりません。</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>法令または本規約に違反する行為</li>
              <li>他のユーザーまたは第三者への誹謗中傷・嫌がらせ</li>
              <li>本サービスのリバースエンジニアリング・改ざん</li>
              <li>虚偽の情報を登録・送信する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>その他当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第7条（サービスの変更・停止）</h2>
            <p>
              当社は、事前の通知なく本サービスの内容を変更・停止する場合があります。これによりユーザーに生じた損害について、当社は責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第8条（免責事項）</h2>
            <p>
              本サービスは現状有姿で提供されます。当社は本サービスの完全性・正確性・有用性について保証しません。本サービスの利用に起因する損害について、当社の故意または重大な過失がある場合を除き、責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第9条（知的財産権）</h2>
            <p>
              本サービスに含まれるコンテンツ・デザイン・ソフトウェアに関する知的財産権は、当社または正当な権利者に帰属します。ユーザーはこれらを無断で複製・転用することはできません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第10条（規約の変更）</h2>
            <p>
              当社は必要に応じて本規約を変更することができます。変更後の規約はアプリ内または本ページに掲載した時点から効力を生じます。重要な変更がある場合は、アプリ内通知等でお知らせします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第11条（準拠法・管轄）</h2>
            <p>
              本規約は日本法に準拠します。本サービスに関する紛争については、仙台地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">第12条（お問い合わせ）</h2>
            <div className="bg-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900">HaLVision</p>
              <p className="text-sm text-gray-500 mt-1">Email: support@perfectdays.app</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="bg-gray-900 text-gray-500 py-8 px-4 text-center text-xs mt-16">
        <div className="flex gap-6 justify-center mb-3">
          <Link href="/" className="hover:text-white transition-colors">トップ</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
          <Link href="/tokusho" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link>
        </div>
        <p>© 2026 HaLVision. All rights reserved.</p>
      </footer>
    </div>
  )
}
