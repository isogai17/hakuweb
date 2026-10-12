# hakuweb

`form_foil.zip` に含まれる注文フォームのサイトファイルです。

## 構成

- `index.html`: 試し刷りフォーム（`order_testprint-Card_Flyer.html` と同内容）。既存リポジトリの入口を最新版に更新しています。
- 各種 HTML: 注文、問い合わせ、用紙サンプル、送信完了ページ。
- `commons/`、`images/`、`mfp.statics/`: JavaScript、CSS、画像。
- `mail_*/`: Mailform Pro の Perl CGI、設定、関連ライブラリ。

ZIP のサイト用ファイルを取り込み、作業用の仕様書・手順書・生成物、Photoshop の PSD、`.DS_Store`、`._*`、Dreamweaver の `_notes/` は取り込み対象から除外しています。

## 公開・動作上の制限

GitHub Pages の公開先: https://isogai17.github.io/hakuweb/

GitHub Pages は静的ファイルを配信するため、Perl CGI は実行されません。フォームの初期化や送信、メール送信を含む動作確認には、Perl CGI が実行できるサーバーが必要です。CGI ファイルの追加だけでは注文受付は動作しません。

元の HTML は上位ディレクトリにある `../common/`、`../menu/`、`../guide/` などを参照しています。これらは提供された ZIP に含まれていません。また、`datetimepicker-master/`、`postcodes/` などの参照先も未同梱です。そのため、GitHub Pages 上ではスタイル・画像・リンク・一部機能が正常に動作しない場合があります。今回の取り込みでは、同梱されたサイトファイルの内容と参照を維持しています。

実運用時には不足する共有ファイルを揃え、公開先に合わせたパス、メール設定、CGI の権限やデータ保存ディレクトリを確認してください。
