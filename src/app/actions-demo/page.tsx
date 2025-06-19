'use client';

import { useActionState } from 'react';

// React 19のServer Actions機能
async function submitMessage(prevState: any, formData: FormData) {
  const message = formData.get('message') as string;
  
  // 疑似的な処理時間
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  if (!message.trim()) {
    return { error: 'メッセージを入力してください', success: false };
  }
  
  return { 
    success: true, 
    message: `送信完了: "${message}"`,
    timestamp: new Date().toLocaleString('ja-JP')
  };
}

export default function ActionsDemo() {
  const [state, formAction, isPending] = useActionState(submitMessage, { success: false });

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">React 19 Actions デモ</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Next.js 15 + React 19のuseActionState()を使用したフォーム処理
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              placeholder="メッセージを入力してください..."
              disabled={isPending}
            />
          </div>
          
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            {isPending ? '送信中...' : '送信'}
          </button>
        </form>

        {state.success && (
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
            <p className="text-green-800 dark:text-green-200">{state.message}</p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              送信時刻: {state.timestamp}
            </p>
          </div>
        )}

        {state.error && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
            <p className="text-red-800 dark:text-red-200">{state.error}</p>
          </div>
        )}
      </div>

      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="font-semibold mb-2">使用している新機能:</h3>
        <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300">
          <li>• <strong>useActionState()</strong> - React 19の新しいフック</li>
          <li>• <strong>Server Actions</strong> - サーバーサイド処理の統合</li>
          <li>• <strong>Automatic Loading States</strong> - 自動的なローディング状態管理</li>
        </ul>
      </div>
    </div>
  );
}