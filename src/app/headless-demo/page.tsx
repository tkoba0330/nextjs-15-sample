'use client';

import { useState } from 'react';
import { Dialog, Transition, Listbox, Switch } from '@headlessui/react';
import { Fragment } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const people = [
  { id: 1, name: '山田太郎', role: 'エンジニア' },
  { id: 2, name: '佐藤花子', role: 'デザイナー' },
  { id: 3, name: '田中一郎', role: 'プロダクトマネージャー' },
  { id: 4, name: '鈴木美咲', role: 'マーケター' },
];

export default function HeadlessDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(people[0]);
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Headless UI デモ</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Tailwind CSS用の完全にアクセシブルなUIコンポーネント
        </p>
      </div>

      <div className="grid gap-8">
        {/* ボタンデモ */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">ボタンコンポーネント</h3>
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
            <button className="border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded-md transition-colors">
              Outline
            </button>
            <button className="text-blue-600 hover:text-blue-700 font-medium py-2 px-4 rounded-md transition-colors">
              Link
            </button>
          </div>
        </div>

        {/* モーダルデモ */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">モーダルダイアログ</h3>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            モーダルを開く
          </button>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        モーダルタイトル
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 dark:text-gray-300">
                          これはHeadless UIのモーダルダイアログのデモです。
                          完全にアクセシブルで、キーボードナビゲーションやフォーカス管理が自動的に処理されます。
                        </p>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button
                          type="button"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          確認
                        </button>
                        <button
                          type="button"
                          className="border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          キャンセル
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>

        {/* セレクトボックスデモ */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">セレクトボックス</h3>
          <div className="w-72">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-gray-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm border border-gray-300 dark:border-gray-600">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                    {people.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-amber-100 text-amber-900 dark:bg-amber-900/20 dark:text-amber-100' : 'text-gray-900 dark:text-white'
                          }`
                        }
                        value={person}
                      >
                        {({ selected }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {person.name}
                            </span>
                            <span className="block text-sm text-gray-500 dark:text-gray-400">
                              {person.role}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        {/* スイッチデモ */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">トグルスイッチ</h3>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4">通知を有効にする</Switch.Label>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'}
                  relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                <span
                  className={`${enabled ? 'translate-x-6' : 'translate-x-1'}
                    inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
            </div>
          </Switch.Group>
        </div>

        {/* 特徴紹介 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Headless UIの特徴</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-green-600">長所</h4>
              <ul className="space-y-1 text-sm">
                <li>• 完全にアクセシブル</li>
                <li>• スタイルなし（自由にカスタマイズ）</li>
                <li>• Tailwind CSSとの完璧な統合</li>
                <li>• 高品質なアニメーション</li>
                <li>• キーボードナビゲーション対応</li>
                <li>• WAI-ARIA準拠</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-orange-600">注意点</h4>
              <ul className="space-y-1 text-sm">
                <li>• スタイリングが必要</li>
                <li>• 限定的なコンポーネント数</li>
                <li>• Tailwind CSSの知識が必要</li>
                <li>• 初期設定が必要</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}