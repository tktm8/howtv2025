# howtv2025

Next.jsで構築されたプロジェクトです。

## 環境構築

### 必要条件
- Node.js（最新のLTSバージョン推奨）
- npm（Node.jsに付属）

### セットアップ手順

```bash
# 1. リポジトリをクローン
git clone [リポジトリURL]

# 2. プロジェクトディレクトリに移動
cd howtv2025

# 3. 依存関係のインストール
npm install

# 4. 開発サーバーの起動
npm run dev
```

[http://localhost:3000](http://localhost:3000)をブラウザで開いて結果を確認できます。

### 利用可能なnpmスクリプト
- `npm run dev`: 開発サーバーの起動（Turbopack使用）
- `npm run build`: プロダクションビルドの作成
- `npm run start`: プロダクションサーバーの起動
- `npm run lint`: リンターの実行

## プロジェクト構造と開発ガイド

```
src/
├── app/                    # Next.js 13のApp Router
│   ├── matching/          # マッチング機能
│   │   └── page.tsx      # マッチングページのUI
│   ├── codescoring/      # コードスコアリング機能
│   │   └── page.tsx      # コードスコアリングページのUI
│   └── api/              # APIエンドポイント
│       ├── matching/     # マッチング関連API
│       └── codescoring/  # コードスコアリング関連API
├── types/                 # 型定義
│   ├── matching.ts       # マッチング機能の型定義
│   └── codescoring.ts    # コードスコアリング機能の型定義
└── lib/                  # ビジネスロジック
    ├── matching/         # マッチング機能のロジック
    └── codescoring/     # コードスコアリング機能のロジック
```

### 各ディレクトリの役割

1. **pages/**: ページコンポーネント
   - UIの実装
   - クライアントサイドの状態管理
   - APIとの通信処理の呼び出し
   
2. **api/**: APIルート
   - クライアントからのリクエスト処理
   - バリデーション
   - libディレクトリのロジック呼び出し
   - レスポンス整形

3. **types/**: 型定義
   - インターフェース定義
   - 型エイリアス
   - APIのリクエスト/レスポンス型

4. **lib/**: ビジネスロジック
   - 機能の中核となるロジック
   - 外部APIとの通信
   - データ処理

### 開発の進め方

1. **型定義から始める**
   - `types/`ディレクトリで必要な型を定義
   - API通信で使用する型を明確にする

2. **ビジネスロジックの実装**
   - `lib/`ディレクトリに機能のコアロジックを実装
   - テストを書きながら開発を進める

3. **APIエンドポイントの実装**
   - `api/`ディレクトリにエンドポイントを作成
   - リクエストのバリデーション
   - libのロジックを呼び出し
   - エラーハンドリング

4. **UIの実装**
   - `app/[機能名]/page.tsx`にUIを実装
   - コンポーネントの分割
   - APIとの通信処理の実装

## 技術スタック

- Next.js 15.2.2
- React 19
- TypeScript
- TailwindCSS
- ESLint

## 参考リソース

- [Next.js ドキュメント](https://nextjs.org/docs)
- [Next.js デプロイガイド](https://nextjs.org/docs/app/building-your-application/deploying)











This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# howtv2025
