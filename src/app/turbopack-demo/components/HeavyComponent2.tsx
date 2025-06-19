export default function HeavyComponent2() {
  // 複雑なチャート風の表示をシミュレート
  const chartData = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    sales: Math.floor(Math.random() * 1000) + 500,
    profit: Math.floor(Math.random() * 300) + 100
  }));

  const maxSales = Math.max(...chartData.map(d => d.sales));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-blue-600">
        チャートコンポーネント
      </h3>
      <div className="space-y-2">
        {chartData.map((data, index) => (
          <div key={index} className="flex items-center space-x-3">
            <span className="text-xs w-8">{data.month}月</span>
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(data.sales / maxSales) * 100}%` }}
              />
            </div>
            <span className="text-xs font-mono w-12 text-right">
              {data.sales}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-500">
        📊 動的インポートでパフォーマンス最適化
      </div>
    </div>
  );
}