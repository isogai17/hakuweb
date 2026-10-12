$config{'about'} = 'Mailform Pro 4.1.4';

## 確認画面のタイプ
## 0: オーバーレイ / 1:フラット / 2: システムダイアログ / 3:確認なし
$config{'ConfirmationMode'} = 1;

## sendmailのパス
#$config{'sendmail'} = 'C:\sendmail\sendmail.exe';
$config{'sendmail'} = '/usr/sbin/sendmail';

## フォームの送信先
@mailto = ('info@timetable.jp');

## 自動返信メールの差出人名
$config{'fromname'} = '●印刷+デザイン=タイムテーブル●';

## 自動返信メールの差出人メールアドレス
$config{'mailfrom'} = $mailto[0];

## 念のためBCC送信宛先 (解除する場合は下記1行をコメントアウト)
#$config{'bcc'} = $mailto[0];

## メールの差出人を固定 (0:無効 / 1:固定)
$config{'fixed'} = 0;

## 通し番号の書式
$config{'SerialFormat'} = '<date>%04d';

## 通し番号への加算値
$config{'SerialBoost'} = 0;

## サンクスページのURL(URLかsend.cgiから見た相対パス)
$config{'ThanksPage'} = '../thanks_rental.html?no=%s';

## 設置者に届くメールの件名
$config{'subject'} = '【ドット箔プリント】貸出サンプル請求確認メール';

## 設置者に届くメールの本文整形
$_TEXT{'posted'} = <<'__posted_body__';
<_会社名（店舗名）_>
<_お名前_> 様

この度は「印刷+デザイン=タイムテーブル ドット箔プリント」へ貸出サンプル請求いただきまして、誠にありがとうございます。
すぐに貸出サンプルをご用意いたしますので、しばらくお待ちくださいませ。
どうぞよろしくお願いいたします。

----------------------------------------
入力内容のご確認
----------------------------------------
検討しているご注文の種別：<_検討しているご注文の種別_>
<%会社名（店舗名）:会社名（店舗名）%>
お名前：<_お名前_>
メールアドレス：<_email_>
ご住所：〒<_郵便番号_>
　　　　<_都道府県_><_市区町村_> <_建物名_>
電話番号：<_電話番号_>
備考：<_備考_>
貸出期間：<_貸出期間_>
----------------------------------------

※本メールにお心当たりのない方は、恐れ入りますがその旨をご記入の上、
メール本文をそのままご返信くださいませ。

●○--------------------------------------->
●○印刷+デザイン=タイムテーブル
●○　　　　ドット箔プリント
●○https://foil.timetable.jp/
●○--------------------------------------->
●○運営会社　株式会社タイムテーブル
●○〒150-0001
●○東京都渋谷区神宮前1丁目1-1 原宿TH 7F
●○TEL : 03-6447-1744   FAX : 03-6447-1745
●○https://www.timetable.jp/
●○--------------------------------------->
__posted_body__

## ※※※！！！※※※！！！※※※！！！※※※！！！※※※！！！※※※
## 自動返信メールの件名 (有効にする場合は下記の行頭#を外してください。)
## ※※※！！！※※※！！！※※※！！！※※※！！！※※※！！！※※※

$config{"ReturnSubject"} = '【ドット箔プリント】貸出サンプル請求確認メール';

## 自動返信メールの本文
$_TEXT{'responder'} = <<'__return_body__';
<_会社名（店舗名）_>
<_お名前_> 様

この度は「印刷+デザイン=タイムテーブル ドット箔プリント」へ貸出サンプル請求いただきまして、誠にありがとうございます。
すぐに貸出サンプルをご用意いたしますので、しばらくお待ちくださいませ。
どうぞよろしくお願いいたします。

----------------------------------------
入力内容のご確認
----------------------------------------
検討しているご注文の種別：<_検討しているご注文の種別_>
<%会社名（店舗名）:会社名（店舗名）%>
お名前：<_お名前_>
メールアドレス：<_email_>
ご住所：〒<_郵便番号_>
　　　　<_都道府県_><_市区町村_> <_建物名_>
電話番号：<_電話番号_>
備考：<_備考_>
貸出期間：<_貸出期間_>
----------------------------------------

※本メールにお心当たりのない方は、恐れ入りますがその旨をご記入の上、
メール本文をそのままご返信くださいませ。

●○--------------------------------------->
●○印刷+デザイン=タイムテーブル
●○　　　　ドット箔プリント
●○https://foil.timetable.jp/
●○--------------------------------------->
●○運営会社　株式会社タイムテーブル
●○〒150-0001
●○東京都渋谷区神宮前1丁目1-1 原宿TH 7F
●○TEL : 03-6447-1744   FAX : 03-6447-1745
●○https://www.timetable.jp/
●○--------------------------------------->
__return_body__



####################################################
## スパム対策関連
####################################################

## Javascriptが無効の場合は送信を許可しない(1:許可しない / 0:許可する)
$config{'DisabledJs'} = 0;

## リファラードメインチェック / 有効にする場合は行頭の#を削除
#$config{'PostDomain'} = $ENV{'HTTP_HOST'};

## 全文英語のスパム候補を除外(1:除外 / 0:除外しない)
$config{'EnglishSpamBlock'} = 1;

## リンク系スパム候補を除外(1:除外 / 0:除外しない)
$config{'LinkSpamBlock'} = 1;

## URLの送信を許可しない(1:許可しない / 0:許可する)
$config{'DisableURI'} = 0;


####################################################
## 有効期限など
####################################################

## 送信数制限
#$config{'limit'} = 100;

## 期限の書式は YYYY-MM-DD HH:MM:SS です。
## 受付開始日時
#$config{'OpenDate'} = '2013-01-01 06:21:00';

## 受付終了日時
#$config{'CloseDate'} = '2013-03-09 00:00:00';


####################################################
## アドオン(Javascriptの追加機能)
####################################################

$config{'dir.AddOns'} = './add-ons/';

@AddOns = ();
#push @AddOns,'OperationCheck.js';		## 動作チェック
push @AddOns,'charactercheck.js';		## 文字校正
push @AddOns,'prefcode/prefcode.js';	## 郵便番号からの住所入力
push @AddOns,'furigana.js';				## フリガナ(Firefox非対応)
#push @AddOns,'charformat.js';			## テキスト整形(Xperia非対応)
#push @AddOns,'cart/cart.js';			## ショッピングカート機能
#push @AddOns,'phase.js';				## 段階的入力機能
#push @AddOns,'drilldown.js';			## ドリルダウン機能
#push @AddOns,'datelist.js';				## 日付リストの生成機能
#push @AddOns,'noresume.js';			## 入力された内容をレジュームしない
#push @AddOns,'switching.js';			## スイッチング機能サンプル
#push @AddOns,'prevention.js';			## イタズラ防止
#push @AddOns,'wellcome.js';			## (技術デモ)ウェルカムメッセージ
#push @AddOns,'speechAPI.js';			## (技術デモ)音声入力
#push @AddOns,'WadaVoiceDemo.js';		## (技術デモ)音声ガイダンス
#push @AddOns,'ResponsiveWeb.js';		## レスポンシブWeb対応(要カスタマイズ)
#push @AddOns,'progress.js';			## プログレスバー表示
#push @AddOns,'WTKConnect.js';			## WebsiteToolKit.jsとの連動
#push @AddOns,'submitdisabled.js';		## エラー時に送信無効
#push @AddOns,'sizeajustdisabled.js';	## 入力欄の自動調整機能を無効化
#push @AddOns,'defaultValue.js';		## 初期値を無効
#push @AddOns,'estimate.js';			## 見積計算(ベータ版)
#push @AddOns,'beforeunload.js';		## ページを離脱する際のアラート(ベータ版)

####################################################
## モジュール(CGIの追加機能)
####################################################

@Modules = ();
#push @Modules,'MultiConfig';	## 複数の設定ファイルを分岐させる
#push @Modules,'check';			## CGI動作環境チェック
#push @Modules,'thanks';		## サンクスページへの引き継ぎ
#push @Modules,'cart';			## ショッピングカート機能
#push @Modules,'ISO-2022-JP';	## メールをJISで送信
#push @Modules,'HTMLMail';		## 自動返信メールにHTMLメールを追加
#push @Modules,'CSVExport';		## CSV保存機能
#push @Modules,'SQLExport';		## SQL発行機能
#push @Modules,'vCard';			## vCard機能
#push @Modules,'iCal';			## iCal連携機能
#push @Modules,'IPLogs';		## IPログトラッキング機能
#push @Modules,'PayPal';		## PayPal決済
#push @Modules,'SMTP';			## SMTP送信 [Update]
#push @Modules,'mailauth';		## メールアドレス認証 [New]
#push @Modules,'reqonce';		## 一度きりの送信 [New]
#push @Modules,'questionnaire';	## アンケート集計モジュール [New]
#push @Modules,'GmailSMTP';		## GmailのSMTPを使う場合 [New]
#push @Modules,'regist';		## メールアドレスの登録・解除 [New]


####################################################
## 高度な設定的な感じのもの
####################################################

## 詳細なsendmail設定
#$config{'sendmail_advanced'} = '/usr/local/bin/sendmail -t -f$email';

## 表示調整 単一行表示
$config{'singleline'} = " %s ： %s\n";

## 表示調整 複数行表示
$config{'multiline'} = " %s ：\n%s\n\n";

## 未入力の項目を含める(1: on / 0: off)
$config{'blankfield'} = 0;

## 連続送信対応
$config{'seek'} = 0;

## 開封確認 (開封確認を通知する場合は以下の1行のコメントを解除)
#$config{'Notification'} = $mailto[0];

## 各種データを格納しているファイル

$config{'data.dir'} = './data/';

## [0] Serial, [1] InputTime, [2] ConfirmTime, [3] UniqueUser
$config{'file.data'} = "$config{'data.dir'}dat.mailformpro.cgi";

## ドロップ検知
$config{'file.drop'} = "$config{'data.dir'}dat.drop.cgi";

## jsキャッシュ
$config{'file.cache'} = "$config{'data.dir'}mfp.cache.js";

## 言語設定ファイル
$config{'lang'} = 'lang.ja';
#$config{'lang'} = 'lang.en';

## スクリプトのURL / ※基本的にここは変更しなくてOKです
$config{'uri'} = 'https://' . $ENV{'SERVER_NAME'} . $ENV{'SCRIPT_NAME'};

## Prefix
$config{'prefix'} = '_MFP';