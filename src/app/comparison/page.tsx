import Link from 'next/link';

export default function ComparisonPage() {
  const libraries = [
    {
      name: 'shadcn/ui',
      url: '/shadcn-demo',
      color: 'border-black',
      bgColor: 'bg-black',
      features: {
        customization: 5,
        performance: 5,
        accessibility: 5,
        bundleSize: 5,
        learningCurve: 3,
        components: 3,
      },
      pros: [
        '完全にカスタマイズ可能',
        'コピー&ペーストで使用',
        'Tailwind CSSとの完璧な統合',
        '軽量（必要な分だけ追加）',
        'アクセシビリティ対応',
        'TypeScript完全対応'
      ],
      cons: [
        '初期設定が必要',
        'Tailwind CSSの知識が必要',
        'コンポーネントを個別に追加',
        '複雑なコンポーネントは手動実装'
      ],
      bestFor: 'デザインシステムの完全な制御が必要な場合、Tailwind CSSを使用している場合'
    },
    {
      name: 'Headless UI',
      url: '/headless-demo',
      color: 'border-blue-500',
      bgColor: 'bg-blue-500',
      features: {
        customization: 5,
        performance: 4,
        accessibility: 5,
        bundleSize: 4,
        learningCurve: 3,
        components: 2,
      },
      pros: [
        '完全にアクセシブル',
        'スタイルなし（自由にカスタマイズ）',
        'Tailwind CSSとの完璧な統合',
        '高品質なアニメーション',
        'キーボードナビゲーション対応',
        'WAI-ARIA準拠'
      ],
      cons: [
        'スタイリングが必要',
        '限定的なコンポーネント数',
        'Tailwind CSSの知識が必要',
        '初期設定が必要'
      ],
      bestFor: '完全なスタイルコントロールが必要で、アクセシビリティを重視する場合'
    },
    {
      name: 'Mantine',
      url: '/mantine-demo',
      color: 'border-cyan-500',
      bgColor: 'bg-cyan-500',
      features: {
        customization: 4,
        performance: 4,
        accessibility: 4,
        bundleSize: 3,
        learningCurve: 3,
        components: 5,
      },
      pros: [
        '100以上の豊富なコンポーネント',
        '優れたパフォーマンス最適化',
        '包括的なTypeScript支援',
        '豊富なフックライブラリ',
        '優れた開発者体験',
        'テーマカスタマイズが容易'
      ],
      cons: [
        'バンドルサイズが大きめ',
        '学習コストがある',
        '細かいカスタマイズが難しい場合がある',
        '独自のスタイルシステム'
      ],
      bestFor: '機能豊富なコンポーネントが必要で、開発速度を重視する場合'
    },
    {
      name: 'Chakra UI',
      url: '/chakra-demo',
      color: 'border-teal-500',
      bgColor: 'bg-teal-500',
      features: {
        customization: 4,
        performance: 3,
        accessibility: 5,
        bundleSize: 3,
        learningCurve: 4,
        components: 4,
      },
      pros: [
        'シンプルで直感的なAPI',
        '優れたアクセシビリティ',
        '豊富なテーマカスタマイズ',
        'レスポンシブデザイン対応',
        '包括的なコンポーネントセット',
        'TypeScript完全対応'
      ],
      cons: [
        '独自のスタイルシステム',
        'バンドルサイズが大きめ',
        'CSS-in-JSのオーバーヘッド',
        '学習コストがある'
      ],
      bestFor: 'アクセシビリティを重視し、シンプルなAPIを好む場合'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">UI ライブラリ比較</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Next.js 15で使用できる4つの主要UIライブラリの比較評価
        </p>
      </div>

      {/* 総合比較表 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">総合評価比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4">ライブラリ</th>
                <th className="text-left py-3 px-4">カスタマイズ性</th>
                <th className="text-left py-3 px-4">パフォーマンス</th>
                <th className="text-left py-3 px-4">アクセシビリティ</th>
                <th className="text-left py-3 px-4">バンドルサイズ</th>
                <th className="text-left py-3 px-4">学習コスト</th>
                <th className="text-left py-3 px-4">コンポーネント数</th>
              </tr>
            </thead>
            <tbody>
              {libraries.map((lib) => (
                <tr key={lib.name} className="border-b border-gray-100 dark:border-gray-700">
                  <td className="py-3 px-4 font-medium">
                    <Link href={lib.url} className="text-blue-600 hover:underline">
                      {lib.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4">{renderStars(lib.features.customization)}</td>
                  <td className="py-3 px-4">{renderStars(lib.features.performance)}</td>
                  <td className="py-3 px-4">{renderStars(lib.features.accessibility)}</td>
                  <td className="py-3 px-4">{renderStars(lib.features.bundleSize)}</td>
                  <td className="py-3 px-4">{renderStars(lib.features.learningCurve)}</td>
                  <td className="py-3 px-4">{renderStars(lib.features.components)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 詳細比較カード */}
      <div className="grid gap-6 md:grid-cols-2">
        {libraries.map((lib) => (
          <div key={lib.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className={`w-4 h-4 ${lib.bgColor} rounded-full mr-3`}></div>
              <h3 className="text-lg font-semibold">{lib.name}</h3>
              <Link
                href={lib.url}
                className="ml-auto text-blue-600 hover:underline text-sm"
              >
                デモを見る →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-medium text-green-600 mb-2">長所</h4>
                <ul className="text-xs space-y-1">
                  {lib.pros.slice(0, 3).map((pro, i) => (
                    <li key={i}>• {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-orange-600 mb-2">注意点</h4>
                <ul className="text-xs space-y-1">
                  {lib.cons.slice(0, 3).map((con, i) => (
                    <li key={i}>• {con}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h4 className="font-medium mb-2">適用場面</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{lib.bestFor}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 選択ガイド */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-4">選択ガイド</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-3 text-green-600">プロジェクト要件別おすすめ</h3>
            <div className="space-y-2 text-sm">
              <div><strong>完全なカスタマイズ：</strong> shadcn/ui</div>
              <div><strong>アクセシビリティ重視：</strong> Headless UI, Chakra UI</div>
              <div><strong>開発速度重視：</strong> Mantine, Chakra UI</div>
              <div><strong>軽量性重視：</strong> shadcn/ui, Headless UI</div>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3 text-blue-600">チーム規模別おすすめ</h3>
            <div className="space-y-2 text-sm">
              <div><strong>小規模チーム：</strong> shadcn/ui, Headless UI</div>
              <div><strong>中規模チーム：</strong> Mantine, Chakra UI</div>
              <div><strong>大規模チーム：</strong> Mantine（統一性）</div>
              <div><strong>デザインチーム連携：</strong> shadcn/ui</div>
            </div>
          </div>
        </div>
      </div>

      {/* パフォーマンス指標 */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-6">パフォーマンス指標（概算）</h2>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-black">~10KB</div>
            <div className="text-sm text-gray-600">shadcn/ui</div>
            <div className="text-xs text-green-600">必要分のみ</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500">~15KB</div>
            <div className="text-sm text-gray-600">Headless UI</div>
            <div className="text-xs text-green-600">軽量</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-500">~80KB</div>
            <div className="text-sm text-gray-600">Mantine</div>
            <div className="text-xs text-orange-600">機能豊富</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-teal-500">~100KB</div>
            <div className="text-sm text-gray-600">Chakra UI</div>
            <div className="text-xs text-orange-600">包括的</div>
          </div>
        </div>
      </div>
    </div>
  );
}