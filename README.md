# React入門

## 開発環境構築の準備

下記ツールを使用する

- VOLTA
  - Nodejsをインストールすることができる
  - Nodejsのバージョンを管理したり、バージョンを切り替える場合に使用する
- Nodejs
  - JavaScriptをサーバーサイドで動作させるためのプラットフォーム
  - Reactを動かすために使用する
- Vite
  - モダンなフロントエンド開発のためのビルドツール
  - Reactプロジェクトを作成するために使用する

## 開発環境構築の流れ

※`Nodejs`が既にインストールされてい場合は、一旦アンイストールしておく

- `VOLTA`をインストールする
- `VOLTA`で`Nodejs`をインストールする
- `Vite` + `React`でプロジェクト作成

## 開発環境構築

### VOLTAをインストール

Windows

```ps
winget install Volta.Volta
```

MacOS

```bash
curl https://get.volta.sh | bash
```

インストールの確認

```bash
volta -v
```

[参考サイト](https://docs.volta.sh/guide/getting-started)

### Node.jsをインストール

安定版の最新版をインストール

```bash
volta install node
```

バージョンを指定してインストール

```bash
volta install node@22.5.1
```

インストールの確認

```bash
node -v
```

## Vite + Reactでプロジェクト作成

`my-vite-react`というプロジェクトを作成

```bash
npm create vite@latest my-vite-react -- --template react
```

## プロジェクトの起動

```
cd my-vite-react
npm install
npm run dev
```

## 次回プロジェクトの起動

```
cd my-vite-react
npm run dev
```

## メモ
