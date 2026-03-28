import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ナビゲーション */}
      <nav className="bg-white border-b border-gray-100 px-4">
        <div className="max-w-4xl mx-auto h-16 flex items-center">
          <Link href="/" className="font-black text-xl gradient-text">満点ライフ</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-black text-gray-900 mb-2">プライバシーポリシー</h1>
        <p className="text-gray-400 text-sm mb-12">最終更新日：2026年○月○日</p>

        <div className="prose prose-gray max-w-none space-y-10 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. 事業者情報</h2>
            <p>
              本プライバシーポリシーは、HaLVision（以下「当社」）が提供するモバイルアプリ「満点ライフ（PerfectDays）」（以下「本アプリ」）における、ユーザーの個人情報の取り扱いについて定めるものです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. 収集する情報</h2>
            <p>当社は、本アプリの利用にあたり、以下の情報を収集する場合があります。</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>メールアドレス（アカウント登録時）</li>
              <li>表示名・アバター画像（任意設定）</li>
              <li>アプリ内の利用データ（目標・スコア・スケジュール等）</li>
              <li>デバイス情報（OS・端末種別・プッシュ通知トークン）</li>
              <li>Apple ID に関連する情報（Apple でサインイン利用時）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. 利用目的</h2>
            <p>収集した情報は、以下の目的で利用します。</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>アカウントの認証および管理</li>
              <li>サービスの提供・改善・新機能開発</li>
              <li>ユーザーへのプッシュ通知の送信</li>
              <li>サポート・お問い合わせへの対応</li>
              <li>AI による分析・アドバイス機能の提供</li>
              <li>課金・サブスクリプション管理</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. 第三者への提供</h2>
            <p>
              当社は、法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供しません。ただし、以下のサービスプロバイダーにデータが送信される場合があります。
            </p>
            <div className="mt-4 space-y-3">
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Supabase, Inc.</p>
                <p className="text-sm text-gray-500 mt-1">
                  データベース・認証サービスとして利用。ユーザーデータはSupabaseのサーバーに保存されます。
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Anthropic, PBC（Claude API）</p>
                <p className="text-sm text-gray-500 mt-1">
                  AIレビュー・AI秘書機能の提供に利用。スコアデータ等がAPIに送信される場合があります。
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900">RevenueCat, Inc.</p>
                <p className="text-sm text-gray-500 mt-1">
                  サブスクリプション管理に利用。購入情報がRevenueCatのサーバーで管理されます。
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Google LLC（Google Calendar API）</p>
                <p className="text-sm text-gray-500 mt-1">
                  Googleカレンダー連携機能の提供に利用。連携を有効にした場合のみ適用されます。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. データの保管・管理</h2>
            <p>
              ユーザーデータはSupabaseのサーバー（海外サーバーを含む）に保管されます。当社はデータの安全な管理のため、適切なセキュリティ対策を講じています。不要になったデータはユーザーからのリクエストに応じて削除します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. データの削除</h2>
            <p>
              アカウントの削除をご希望の場合は、アプリ内の設定画面またはサポートページよりお申し込みください。削除リクエストを受け付けてから30日以内に、関連するデータを削除します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Cookie・トラッキング</h2>
            <p>
              本アプリはモバイルアプリケーションであり、Cookieは使用しません。ただし、アプリ内のセッション管理のため、類似の技術（ローカルストレージ等）を利用する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. 未成年者のプライバシー</h2>
            <p>
              本アプリは13歳未満のお子様を対象としておりません。13歳未満の方の個人情報を意図せず収集した場合は、速やかに削除します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. プライバシーポリシーの変更</h2>
            <p>
              本ポリシーは必要に応じて更新されます。重要な変更がある場合は、アプリ内通知またはメールでお知らせします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. お問い合わせ</h2>
            <p>プライバシーに関するご質問・ご要望は、以下にお問い合わせください。</p>
            <div className="mt-3 bg-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900">HaLVision</p>
              <p className="text-sm text-gray-500 mt-1">Email: support@perfectdays.app</p>
            </div>
          </section>

        </div>
      </main>

      <footer className="bg-gray-900 text-gray-500 py-8 px-4 text-center text-xs mt-16">
        <p>© 2026 HaLVision. All rights reserved.</p>
      </footer>
    </div>
  )
}
