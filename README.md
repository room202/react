# React 入門

## 開発環境構築の準備

下記ツールを使用する

-   VOLTA
    -   Nodejs をインストールすることができる
    -   Nodejs のバージョンを管理したり、バージョンを切り替える場合に使用する
-   Nodejs
    -   JavaScript をサーバーサイドで動作させるためのプラットフォーム
    -   React を動かすために使用する
-   Vite
    -   モダンなフロントエンド開発のためのビルドツール
    -   React プロジェクトを作成するために使用する

## 開発環境構築の流れ

※`Nodejs`が既にインストールされてい場合は、一旦アンイストールしておく

-   `VOLTA`をインストールする
-   `VOLTA`で`Nodejs`をインストールする
-   `Vite` + `React`でプロジェクト作成
-   `React Developer Tools`のインストール

## 開発環境構築

### `VOLTA`をインストールする

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

### `VOLTA`で`Nodejs`をインストールする

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

### `Vite` + `React`でプロジェクト作成

`my-vite-react`というプロジェクトを作成

※バージョンは、2025/05/14 時点で安定版の`19.1.0`を使用する

```bash
# 最新版のViteでReactプロジェクトを作成
npm create vite@latest my-vite-react -- --template react

# バージョン指定のViteで対話形式でプロジェクト作成
npm create vite@6.2.1

# 対話形式の実行結果
Need to install the following packages:
create-vite@6.2.1
Ok to proceed? (y) y
√ Project name: ... my-vite-project
√ Select a framework: » React
√ Select a variant: » JavaScript
```

### `React Developer Tools`のインストール

https://react.dev/learn/react-developer-tools

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

```bash
cd my-vite-react
npm run dev
```

## 初回設定

### eslint の設定

ファイル名 : eslint.config.js

```js
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      "no-undefined": "error",    // 追加 : 未定義の変数を使用するとエラー
      "no-unused-vars": "error",  // 追加 : 変数を定義したが使っていないとエラー
      "react/prop-types": "off",  // 追加 : React特有の型定義ルールをオフ
    },
```

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

### CSS モジュール

CSS ファイルを React から読み込む

この手順を踏むことで Class のバッティングが無くなる

クラス名はキャメルケースを使う  
ex) buttonInner etc...

ファイル名が重要  
`ファイル名.modules.css`とする

ファイル : Button.module.css

ファイル : Button.jsx  
読む込む側のコード  
`styles`という名前を良く使う

```js
import styles from "./Button.module.css";
```

ファイル : Button.jsx  
スタイルを適用する時の書き方

```html
<button className="{styles.button}"></button>
```

### Tailwind CSS Ver.4

Tailwind Ver.4 をインストール

```bash
npm install tailwindcss @tailwindcss/vite
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
