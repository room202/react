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

バージョンを指定してインストール & デフォルトに設定

```bash
volta install node@22.15.0
```

インストール済みのパッケージを一覧表示

```bash
volta list
```

インストールの確認

```bash
node -v
```

## Vite + React でプロジェクト作成

`my-vite-react`というプロジェクトを作成

※バージョンは、2025/05/14 時点で安定版の`19.1.0`を使用する

```bash
npm create vite@latest my-vite-react -- --template react
```

### プロジェクトの起動

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

### 次回プロジェクトの起動

```bash
cd my-vite-react
npm run dev
```

## npx + React でプロジェクト作成

`my-npx-react`というプロジェクトを作成

※バージョンは、2025/05/14 時点で安定版の`19.1.0`を使用する

```bash
npx create-react-app my-npx-react
```

### プロジェクトの起動

```bash
# プロジェクトフォルダに移動
cd my-npx-react

# React起動
npm start
```

### 次回プロジェクトの起動

```bash
cd my-npx-react
npm start
```

## CRA(`create-react-app`) と Vite の違い

`npx create-react-app my-npx-react`  
と  
`npm create vite@latest my-vite-react -- --template react`  
の違い

| 項目               | CRA (`create-react-app`) | Vite                            |
| ------------------ | ------------------------ | ------------------------------- |
| 開発速度           | やや遅め                 | 非常に速い ⚡                   |
| HTML の場所        | `public/index.html`      | プロジェクト直下の `index.html` |
| React 起点ファイル | `src/index.js`           | `src/main.jsx`                  |
| 設定の柔軟性       | 隠れていて拡張しにくい   | `vite.config.js` で自在に       |
| 将来性             | やや古い                 | 最新の主流になりつつある        |

## 初回設定

### `App.jsx`をリセット

ファイル名 : `src/App.jsx`

```js
import "./App.css";

export const App = () => {
  return (
    <>
      <h1>Hello React</h1>
    </>
  );
};

export default App;
```

### Vite で作ったプロジェクトのポート番号を変更する方法

ファイル名 : vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // ここでポート番号を指定
  },
});
```

## よく使うライブラリ

```bash
npm install axios
```

## CSS 対応

### Tailwind CSS Ver.4

Tailwind Ver.4 をインストール

```bash
npm install -D @tailwindcss/vite
```

ファイル : `vite.config.js`の設定追加

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // 追加

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 追加
  ],
  server: {
    port: 3000, // ここでポート番号を指定
  },
});
```

ファイル : `src/index.css`の設定変更

```css
@import "tailwindcss";
```

ファイル : `src/App.jsx`で動作確認

```js
import "./App.css";

export const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default App;
```

### Tailwind CSS Ver.3

Tailwind Ver.3 をインストール

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

適応させたいファイルを指定  
ファイル : `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 追加
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

index.css を全て削除し Tailwind を適用させる  
ファイル : `index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

適用を確認する

```html
<h1 className="text-5xl text-blue-500 font-bold ">Hello React</h1>
```

### CSS Modules

```bash
npm install sass
yarn add sass
```

### Styled JSX

```bash
npm install styled-jsx
yarn add styled-jsx
```

### styled-components

```bash
npm install styled-components
yarn add styled-components
```

### Emotion

```bash
npm install @emotion/react @emotion/styled
yarn add @emotion/react @emotion/styled
```

## API(PHP)サンプル

```php
<?php
// CORS設定
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// JSONとして返すためのヘッダーを設定
header('Content-Type: application/json; charset=UTF-8');

// データを配列で定義
$data = [
    [
        "id" => 1,
        "firstname" => "勉",
        "lastname" => "主田",
        "age" => 24
    ],
    [
        "id" => 2,
        "firstname" => "未来",
        "lastname" => "先岡",
        "age" => 28
    ],
    [
        "id" => 3,
        "firstname" => "一郎",
        "lastname" => "後藤田",
        "age" => 23
    ]
];

// 配列をJSON形式で出力
echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
```
