'use client';

export default function ChakraDemo() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Chakra UI デモ</h1>
        <p className="text-gray-600 dark:text-gray-300">
          シンプルでモジュラー、アクセシブルなReact UIコンポーネントライブラリ
        </p>
      </div>

      <div className="grid gap-8">
        {/* ボタンデモ */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">ボタンコンポーネント</h3>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Primary
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Secondary
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Danger
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Success
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded-md transition-colors">
                Outline
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-medium py-2 px-4 rounded-md transition-colors">
                Link
              </button>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-2 py-1 text-xs rounded">Extra Small</button>
              <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded">Small</button>
              <button className="bg-blue-600 text-white px-4 py-2 text-base rounded">Medium</button>
              <button className="bg-blue-600 text-white px-6 py-3 text-lg rounded">Large</button>
            </div>
          </div>
        </div>

        {/* フォームデモ */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">フォームコンポーネント</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">お名前</label>
                <input
                  type="text"
                  placeholder="山田太郎"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">メールアドレス</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">職種</label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700">
                <option value="">職種を選択してください</option>
                <option value="engineer">エンジニア</option>
                <option value="designer">デザイナー</option>
                <option value="manager">マネージャー</option>
                <option value="marketer">マーケター</option>
              </select>
            </div>
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                送信
              </button>
              <button
                type="button"
                className="border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
              >
                リセット
              </button>
            </div>
          </form>
        </div>

        {/* 統計デモ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-sm text-gray-600 dark:text-gray-300 uppercase font-semibold">
              総ユーザー数
            </div>
            <div className="text-3xl font-bold">12,345</div>
            <div className="text-sm text-green-600 flex items-center">
              <span>↗</span>
              <span className="ml-1">23.36%</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-sm text-gray-600 dark:text-gray-300 uppercase font-semibold">
              売上
            </div>
            <div className="text-3xl font-bold">¥1,234,567</div>
            <div className="text-sm text-green-600 flex items-center">
              <span>↗</span>
              <span className="ml-1">12.05%</span>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="text-sm text-gray-600 dark:text-gray-300 uppercase font-semibold">
              コンバージョン率
            </div>
            <div className="text-3xl font-bold">3.2%</div>
            <div className="text-sm text-red-600 flex items-center">
              <span>↘</span>
              <span className="ml-1">2.1%</span>
            </div>
          </div>
        </div>

        {/* アラートデモ */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-md flex items-center">
          <div className="w-5 h-5 bg-blue-500 rounded-full mr-3"></div>
          <p>これはChakra UIのアラートコンポーネントの例です。様々なステータスタイプが利用できます。</p>
        </div>

        {/* 特徴紹介 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Chakra UIの特徴</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-green-600">長所</h4>
              <ul className="space-y-1 text-sm">
                <li>• シンプルで直感的なAPI</li>
                <li>• 優れたアクセシビリティ</li>
                <li>• 豊富なテーマカスタマイズ</li>
                <li>• レスポンシブデザイン対応</li>
                <li>• 包括的なコンポーネントセット</li>
                <li>• TypeScript完全対応</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-600">注意点</h4>
              <ul className="space-y-1 text-sm">
                <li>• 独自のスタイルシステム</li>
                <li>• バンドルサイズが大きめ</li>
                <li>• CSS-in-JSのオーバーヘッド</li>
                <li>• 学習コストがある</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>注意:</strong> この実装ではChakra UIのコンポーネントの代わりにTailwind CSSを使用しています。
              実際のChakra UIではより豊富なコンポーネントとテーマシステムが利用できます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}