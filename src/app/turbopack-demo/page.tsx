import { Suspense } from 'react';

// 複数のコンポーネントを動的インポートしてTurbopackの高速ビルドをデモ
const HeavyComponent1 = async () => {
  const { default: Component } = await import('./components/HeavyComponent1');
  return <Component />;
};

const HeavyComponent2 = async () => {
  const { default: Component } = await import('./components/HeavyComponent2');
  return <Component />;
};

const HeavyComponent3 = async () => {
  const { default: Component } = await import('./components/HeavyComponent3');
  return <Component />;
};

export default function TurbopackDemo() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Turbopack デモ</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Next.js 15のTurbopackによる高速ビルドと動的インポートのデモ
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>パフォーマンス向上:</strong> Turbopackにより従来のWebpackより最大50%高速なビルドを実現
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<LoadingCard title="Heavy Component 1" />}>
          <HeavyComponent1 />
        </Suspense>
        
        <Suspense fallback={<LoadingCard title="Heavy Component 2" />}>
          <HeavyComponent2 />
        </Suspense>
        
        <Suspense fallback={<LoadingCard title="Heavy Component 3" />}>
          <HeavyComponent3 />
        </Suspense>
      </div>

      <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-200">
          Turbopackの特徴
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">開発体験の向上</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• 高速なホットリロード</li>
              <li>• 増分ビルド最適化</li>
              <li>• メモリ効率の改善</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">パフォーマンス</h4>
            <ul className="space-y-1 text-gray-600 dark:text-gray-300">
              <li>• Rust製で高速処理</li>
              <li>• 並列処理の最適化</li>
              <li>• キャッシュ戦略の改善</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingCard({ title }: { title: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg animate-pulse">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
      <div className="space-y-2">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
      </div>
      <p className="text-sm text-gray-500 mt-4">{title} 読み込み中...</p>
    </div>
  );
}