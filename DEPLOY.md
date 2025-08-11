# GitHub Pagesデプロイ手順

## 1. GitHubリポジトリの作成

1. GitHubにログインし、新しいリポジトリを作成
2. リポジトリ名を入力（例：`periodic-table-asmr`）
3. 「Public」を選択（GitHub Pages無料版のため）
4. 「Create repository」をクリック

## 2. ファイルのアップロード

### 方法A: GitHub Web UIを使用
1. 「uploading an existing file」をクリック
2. すべてのファイルをドラッグ&ドロップ
3. コミットメッセージを入力
4. 「Commit changes」をクリック

### 方法B: Git コマンドを使用
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/[ユーザー名]/[リポジトリ名].git
git push -u origin main
```

## 3. GitHub Pagesの設定

1. リポジトリの「Settings」タブをクリック
2. 左サイドバーの「Pages」をクリック
3. 「Source」で「Deploy from a branch」を選択
4. 「Branch」で「main」を選択
5. フォルダは「/ (root)」を選択
6. 「Save」をクリック

## 4. 公開URLの確認

- 設定後、数分でサイトが公開されます
- URLは `https://[ユーザー名].github.io/[リポジトリ名]/` になります
- 緑のチェックマークが表示されたら公開完了です

## 5. カスタムドメイン（オプション）

独自ドメインを使用する場合：
1. 「Custom domain」にドメインを入力
2. DNSレコードを設定
3. 「Enforce HTTPS」を有効化

## 6. 更新方法

ファイルを更新する場合：
1. GitHubでファイルを直接編集、または
2. ローカルで変更してpush
3. 自動的にサイトが更新されます

## トラブルシューティング

### サイトが表示されない場合
- リポジトリがPublicになっているか確認
- index.htmlがルートディレクトリにあるか確認
- GitHub Pagesの設定が正しいか確認

### 動画が表示されない場合
- YouTube動画IDが正しいか確認
- 動画が埋め込み可能な設定になっているか確認

### PWA機能が動作しない場合
- HTTPSで配信されているか確認（GitHub Pagesは自動的にHTTPS）
- manifest.jsonのパスが正しいか確認