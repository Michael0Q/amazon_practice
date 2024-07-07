# 始めに
amazonのwebサイトを模倣し、学習することを目的としたリポジトリです。
下記の環境設定を参考にしてセットアップをしてください。

# 環境設定
## Node.js のインストール
### MacOS
_Homebrew のインストール（インストールされていない場合）_

    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

_Node.js のインストール_

    brew install node

### Windows
_Node.js のダウンロードとインストール_

Node.js の公式ウェブサイト にアクセスし、最新の LTS バージョンをダウンロードしてインストールします。
詳細は[プロゲート](https://prog-8.com/docs/nodejs-env-win)の説明が分かりやすいです。

## Next.js プロジェクトのセットアップ

開発サーバーの起動

    npm run dev

これで、開発サーバーが起動し、ブラウザで http://localhost:3000 にアクセスしてアプリケーションを確認できます。

app/page.js を編集することでページの編集を始めることができます。ファイルを編集するとページは自動的に更新されます。

# 詳細情報
Next.js についての詳細は以下のリソースを参照してください:

* [Next.js ドキュメント](https://nextjs-ja-translation-docs.vercel.app/docs/getting-started) - Next.js の機能と API について学べます。

# Vercel へのデプロイ
~~Next.js アプリをデプロイする最も簡単な方法は、Next.js の作成者が提供する Vercel プラットフォーム を使用することです。~~

