import Image from "next/image";
import { use } from "react";

// Next.js 15の新機能: use() hooksを使った非同期データフェッチ
const fetchFeatures = async () => {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    nextjs15: "Turbopack support, React 19 integration",
    react19: "Compiler, use() hook, Actions",
    performance: "50% faster builds with Turbopack"
  };
};

export default function Home() {
  // React 19の新機能: use() hookで非同期データを直接使用
  const features = use(fetchFeatures());

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200">Next.js 15 新機能デモ</h2>
          <div className="space-y-3 text-sm">
            <div>
              <strong className="text-green-600 dark:text-green-400">Next.js 15:</strong>
              <span className="ml-2">{features.nextjs15}</span>
            </div>
            <div>
              <strong className="text-purple-600 dark:text-purple-400">React 19:</strong>
              <span className="ml-2">{features.react19}</span>
            </div>
            <div>
              <strong className="text-orange-600 dark:text-orange-400">パフォーマンス:</strong>
              <span className="ml-2">{features.performance}</span>
            </div>
          </div>
        </div>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            <strong>React 19 use()フック</strong>を使用した非同期データフェッチ
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <strong>Turbopack</strong>による高速ビルド
          </li>
          <li className="tracking-[-.01em]">
            <strong>Tailwind CSS 4</strong>統合
          </li>
        </ol>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">デモページ</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/actions-demo"
              className="block p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400">⚡</span>
                </div>
                <h4 className="font-medium">React 19 Actions</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                useActionState()とServer Actionsのデモ
              </p>
            </a>
            
            <a
              href="/turbopack-demo"
              className="block p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400">🚀</span>
                </div>
                <h4 className="font-medium">Turbopack デモ</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                高速ビルドと動的インポートの実演
              </p>
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
