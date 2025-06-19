import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ShadcnDemo() {
  return (
    <div className="container mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">shadcn/ui デモ</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Radix UI + Tailwind CSSベースのコンポーネントライブラリ
        </p>
      </div>

      <div className="grid gap-8">
        {/* ボタンデモ */}
        <Card>
          <CardHeader>
            <CardTitle>ボタンコンポーネント</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔥</Button>
            </div>
          </CardContent>
        </Card>

        {/* フォームデモ */}
        <Card>
          <CardHeader>
            <CardTitle>フォームコンポーネント</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">お名前</Label>
                  <Input id="name" placeholder="山田太郎" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">メールアドレス</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">メッセージ</Label>
                <textarea
                  id="message"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="メッセージを入力してください"
                />
              </div>
              <Button type="submit">送信</Button>
            </form>
          </CardContent>
        </Card>

        {/* カードレイアウトデモ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>統計情報</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12,345</div>
              <p className="text-sm text-muted-foreground">総ユーザー数</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>売上</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">¥1,234,567</div>
              <p className="text-sm text-muted-foreground">今月の売上</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>成長率</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">+23.1%</div>
              <p className="text-sm text-muted-foreground">前月比</p>
            </CardContent>
          </Card>
        </div>

        {/* 特徴紹介 */}
        <Card>
          <CardHeader>
            <CardTitle>shadcn/uiの特徴</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-green-600">長所</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 完全にカスタマイズ可能</li>
                  <li>• コピー&ペーストで使用</li>
                  <li>• Tailwind CSSとの完璧な統合</li>
                  <li>• 軽量（必要な分だけ追加）</li>
                  <li>• アクセシビリティ対応</li>
                  <li>• TypeScript完全対応</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-orange-600">注意点</h4>
                <ul className="space-y-1 text-sm">
                  <li>• 初期設定が必要</li>
                  <li>• Tailwind CSSの知識が必要</li>
                  <li>• コンポーネントを個別に追加</li>
                  <li>• 複雑なコンポーネントは手動実装</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}