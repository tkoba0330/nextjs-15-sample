'use client';

import { MantineProvider, Button, Card, TextInput, Select, Switch, Modal, Group, Text, Badge, Paper, Grid, Stack, Notification, createTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import '@mantine/core/styles.css';

export default function MantineDemo() {
  const [opened, { open, close }] = useDisclosure(false);
  const [switchValue, setSwitchValue] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      role: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? '名前は2文字以上で入力してください' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : '有効なメールアドレスを入力してください'),
    },
  });

  const roles = [
    { value: 'engineer', label: 'エンジニア' },
    { value: 'designer', label: 'デザイナー' },
    { value: 'manager', label: 'マネージャー' },
    { value: 'marketer', label: 'マーケター' },
  ];

  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <MantineProvider theme={theme}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 32 }}>
        <div style={{ marginBottom: 32 }}>
          <Text size="2rem" fw={700} mb="md">Mantine デモ</Text>
          <Text c="dimmed">
            豊富なコンポーネントと優れた開発者体験を提供するReact UIライブラリ
          </Text>
        </div>

        <Stack gap="xl">
          {/* ボタンデモ */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="lg" fw={600} mb="md">ボタンコンポーネント</Text>
            <Group gap="md" mb="md">
              <Button variant="filled" color="blue">Primary</Button>
              <Button variant="light" color="blue">Light</Button>
              <Button variant="outline" color="blue">Outline</Button>
              <Button variant="subtle" color="blue">Subtle</Button>
              <Button variant="default">Default</Button>
            </Group>
            <Group gap="md">
              <Button size="xs" color="blue">Extra Small</Button>
              <Button size="sm" color="blue">Small</Button>
              <Button size="md" color="blue">Medium</Button>
              <Button size="lg" color="blue">Large</Button>
              <Button size="xl" color="blue">Extra Large</Button>
            </Group>
          </Card>

          {/* フォームデモ */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="lg" fw={600} mb="md">フォームコンポーネント</Text>
            <form onSubmit={form.onSubmit(() => {
              setShowNotification(true);
              setTimeout(() => setShowNotification(false), 3000);
            })}>
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <TextInput
                    label="お名前"
                    placeholder="山田太郎"
                    {...form.getInputProps('name')}
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <TextInput
                    label="メールアドレス"
                    placeholder="example@email.com"
                    {...form.getInputProps('email')}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Select
                    label="職種"
                    placeholder="職種を選択してください"
                    data={roles}
                    {...form.getInputProps('role')}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Group justify="space-between" mt="md">
                    <Button type="submit" color="blue">送信</Button>
                    <Button variant="outline" color="blue" onClick={() => form.reset()}>
                      リセット
                    </Button>
                  </Group>
                </Grid.Col>
              </Grid>
            </form>
          </Card>

          {/* モーダルとスイッチデモ */}
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                <Text size="lg" fw={600} mb="md">モーダルダイアログ</Text>
                <Button onClick={open} color="blue">モーダルを開く</Button>
                
                <Modal opened={opened} onClose={close} title="モーダルタイトル">
                  <Text size="sm" mb="md">
                    これはMantineのモーダルダイアログのデモです。
                    美しいアニメーションと豊富なカスタマイズオプションを提供します。
                  </Text>
                  <Group justify="flex-end">
                    <Button variant="outline" color="blue" onClick={close}>キャンセル</Button>
                    <Button color="blue" onClick={close}>確認</Button>
                  </Group>
                </Modal>
              </Card>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                <Text size="lg" fw={600} mb="md">スイッチコンポーネント</Text>
                <Switch
                  checked={switchValue}
                  onChange={(event) => setSwitchValue(event.currentTarget.checked)}
                  label="通知を有効にする"
                  description="新しいメッセージが届いたときに通知を受け取ります"
                  color="blue"
                />
              </Card>
            </Grid.Col>
          </Grid>

          {/* 統計カードデモ */}
          <Grid>
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Paper shadow="sm" p="lg" radius="md" withBorder>
                <Group justify="space-between">
                  <div>
                    <Text c="dimmed" size="sm" fw={600} tt="uppercase">
                      総ユーザー数
                    </Text>
                    <Text fw={700} size="xl">
                      12,345
                    </Text>
                  </div>
                  <Badge color="teal" variant="light">
                    +23%
                  </Badge>
                </Group>
              </Paper>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Paper shadow="sm" p="lg" radius="md" withBorder>
                <Group justify="space-between">
                  <div>
                    <Text c="dimmed" size="sm" fw={600} tt="uppercase">
                      売上
                    </Text>
                    <Text fw={700} size="xl">
                      ¥1,234,567
                    </Text>
                  </div>
                  <Badge color="blue" variant="light">
                    +12%
                  </Badge>
                </Group>
              </Paper>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
              <Paper shadow="sm" p="lg" radius="md" withBorder>
                <Group justify="space-between">
                  <div>
                    <Text c="dimmed" size="sm" fw={600} tt="uppercase">
                      コンバージョン率
                    </Text>
                    <Text fw={700} size="xl">
                      3.2%
                    </Text>
                  </div>
                  <Badge color="red" variant="light">
                    -2%
                  </Badge>
                </Group>
              </Paper>
            </Grid.Col>
          </Grid>

          {/* 通知デモ */}
          {showNotification && (
            <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
              <Notification
                title="フォーム送信完了"
                color="teal"
                onClose={() => setShowNotification(false)}
                withCloseButton
              >
                フォームが正常に送信されました！
              </Notification>
            </div>
          )}

          {/* 特徴紹介 */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Text size="lg" fw={600} mb="md">Mantineの特徴</Text>
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Text fw={600} mb="sm" c="teal">長所</Text>
                <Stack gap="xs">
                  <Text size="sm">• 100以上の豊富なコンポーネント</Text>
                  <Text size="sm">• 優れたパフォーマンス最適化</Text>
                  <Text size="sm">• 包括的なTypeScript支援</Text>
                  <Text size="sm">• 豊富なフックライブラリ</Text>
                  <Text size="sm">• 優れた開発者体験</Text>
                  <Text size="sm">• テーマカスタマイズが容易</Text>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Text fw={600} mb="sm" c="orange">注意点</Text>
                <Stack gap="xs">
                  <Text size="sm">• バンドルサイズが大きめ</Text>
                  <Text size="sm">• 学習コストがある</Text>
                  <Text size="sm">• 細かいカスタマイズが難しい場合がある</Text>
                  <Text size="sm">• 独自のスタイルシステム</Text>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>
        </Stack>
      </div>
    </MantineProvider>
  );
}