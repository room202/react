# React 入門

## 開発環境構築の準備

下記ツールを使用する

- VOLTA
  - Nodejs をインストールすることができる
  - Nodejs のバージョンを管理したり、バージョンを切り替える場合に使用する
- Nodejs
  - JavaScript をサーバーサイドで動作させるためのプラットフォーム
  - React を動かすために使用する
- Vite
  - モダンなフロントエンド開発のためのビルドツール
  - React プロジェクトを作成するために使用する

## 開発環境構築の流れ

※`Nodejs`が既にインストールされてい場合は、一旦アンイストールしておく

- `VOLTA`をインストールする
- `VOLTA`で`Nodejs`をインストールする
- `Vite` + `React`でプロジェクト作成

## 開発環境構築

### VOLTA をインストール

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

### Node.js をインストール

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

## Vite + React でプロジェクト作成

`my-vite-react`というプロジェクトを作成

※バージョンは、安定版の`19.1.0`を使用する

```bash
npm create vite@latest my-vite-react -- --template react
```

## プロジェクトの起動

```bash
# プロジェクトフォルダに移動
cd my-vite-react

# 必要なライブラリをインストール
npm install

# 必要であればReact バージョン19.1をインストール
npm install react@19.1 react-dom@19.1

# Reactのインストール済みバージョンを確認
npm list react

# React起動
npm run dev
```

## 次回プロジェクトの起動

```
cd my-vite-react
npm run dev
```

## メモ
