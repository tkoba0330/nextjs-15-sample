export default function HeavyComponent1() {
  // 疑似的な重い処理をシミュレート
  const data = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    value: Math.random() * 100,
    category: ['A', 'B', 'C'][i % 3]
  }));

  const summary = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.value;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-green-600">
        データ処理コンポーネント
      </h3>
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          処理項目: 1,000件
        </p>
        <div className="space-y-1">
          {Object.entries(summary).map(([category, value]) => (
            <div key={category} className="flex justify-between">
              <span>カテゴリ {category}:</span>
              <span className="font-mono">{value.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        🚀 Turbopackによる高速ビルド
      </div>
    </div>
  );
}