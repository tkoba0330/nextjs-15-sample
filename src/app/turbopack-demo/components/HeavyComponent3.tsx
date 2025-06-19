export default function HeavyComponent3() {
  // リアルタイム風のステータス表示
  const systems = [
    { name: 'API Server', status: 'healthy', uptime: '99.9%' },
    { name: 'Database', status: 'healthy', uptime: '99.8%' },
    { name: 'Cache', status: 'warning', uptime: '97.5%' },
    { name: 'CDN', status: 'healthy', uptime: '99.9%' },
    { name: 'Queue', status: 'healthy', uptime: '98.7%' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'warning': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'error': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-700';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-purple-600">
        システム監視
      </h3>
      <div className="space-y-3">
        {systems.map((system, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  system.status === 'healthy' ? 'bg-green-500' :
                  system.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                }`}
              />
              <span className="text-sm font-medium">{system.name}</span>
            </div>
            <div className="text-right">
              <div className={`text-xs px-2 py-1 rounded-full ${getStatusColor(system.status)}`}>
                {system.status}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {system.uptime}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-gray-500">
        ⚡ 増分ビルドで高速更新
      </div>
    </div>
  );
}