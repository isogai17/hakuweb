// JavaScript Document

// Optionの書式
// js   : new Option('text','value',true );
// HTML : <option selected="selected" value="value">text</option>

// chg_opt1, chg_opt2 : order_print用
// testprint_chg_opt1 : order_testprint用

//　chg_opt1 : "商品"のプルダウン変更で呼び出される
// if文内の select1.options[select1.selectedIndex].value について，
// .options　の前と .selectedIndex　の前の変数が同じでないと変なことになるので注意(上の例だと select1)
function chg_opt1() {
  "use strict";
  var select1 = document.forms.formName.商品;
  var select2 = document.forms.formName.サイズ;
  var select3 = document.forms.formName.印刷用紙;

  // プルダウンの選択肢をリセットする
  // (リセットしないと別の商品のサイズが選択肢に残ったりする)
  select2.options.length = 0;
  select3.options.length = 0;

  if (select1.options[select1.selectedIndex].value === "▼選択してください▼") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select3.options[0] = new Option("▼選択してください▼", "", true);
    select3.options[0].disabled = "true";
  } else if (select1.options[select1.selectedIndex].value === "カード類") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("名刺・ショップカード(55×91mm)", "名刺・ショップカード(55×91mm)");
    select2.options[2] = new Option("欧米名刺(51×89mm)", "欧米名刺(51×89mm)");
    select2.options[3] = new Option("角丸名刺(55×91mm)", "角丸名刺(55×91mm)");
    select2.options[4] = new Option("女性名刺(49×85mm)", "女性名刺(49×85mm)");
    select2.options[5] = new Option("診察券・メンバーズカード(54×85mm)", "診察券・メンバーズカード(54×85mm)");
    select2.options[6] = new Option("正方形名刺・正方形ショップカード(55×55mm)", "正方形名刺・正方形ショップカード(55×55mm)");
    select2.options[7] = new Option("はがき・ポストカード(100×148mm)", "はがき・ポストカード(100×148mm)");
    select2.options[8] = new Option("定形郵便はがき・ポストカード(120×235mm)", "定形郵便はがき・ポストカード(120×235mm)");
    select2.options[9] = new Option("正方形はがき・正方形ポストカード(100×100mm)", "正方形はがき・正方形ポストカード(100×100mm)");
    select2.options[10] = new Option("A7・B8(40×40mm～74×105mm)", "A7・B8(40×40mm～74×105mm)");
    select2.options[11] = new Option("A6・B7(～105×148mm)", "A6・B7(～105×148mm)");
    select2.options[12] = new Option("A5・B6(～148×210mm)", "A5・B6(～148×210mm)");
    select2.options[13] = new Option("A4・B5(～210×297mm)", "A4・B5(～210×297mm)");
    select2.options[14] = new Option("A3・B4(～297×420mm)", "A3・B4(～297×420mm)");
    select2.options[15] = new Option("A7・B8正方形(40×40mm～74×74mm)", "A7・B8正方形(40×40mm～74×74mm)");
    select2.options[16] = new Option("A6・B7正方形(～105×105mm)", "A6・B7正方形(～105×105mm)");
    select2.options[17] = new Option("A5・B6正方形(～148×148mm)", "A5・B6正方形(～148×148mm)");
    select2.options[18] = new Option("A4・B5正方形(～210×210mm)", "A4・B5正方形(～210×210mm)");
    select2.options[19] = new Option("A3・B4正方形(～297×297mm)", "A3・B4正方形(～297×297mm)");

    // カード類の用紙は共通なので，カード類を選択した時点で"印刷用紙"のプルダウンも決める
    select3.options[0] = new Option("▼選択してください▼", "", true);
    select3.options[0].disabled = "true";
    select3.options[1] = new Option("モダンクラフト 197.5kg", "モダンクラフト 197.5kg");
    select3.options[2] = new Option("ゆるチップF(いし) 197.5kg", "ゆるチップF(いし) 197.5kg");
    select3.options[3] = new Option("チップボールF 301kg", "チップボールF 301kg");
    select3.options[4] = new Option("GAクラフトボード-FS 232kg", "GAクラフトボード-FS 232kg");
    select3.options[5] = new Option("エースボールF 301kg", "エースボールF 301kg");
    select3.options[6] = new Option("アラベール-FS 200kg", "アラベール-FS 200kg");
    select3.options[7] = new Option("カフェラテF 301kg", "カフェラテF 301kg");
    select3.options[8] = new Option("CLOUD GRAY-F 301kg", "CLOUD GRAY-F 301kg");
    select3.options[9] = new Option("PELP! PAPER 172kg", "PELP! PAPER 172kg");
    select3.options[10] = new Option("未晒クラフトB 266.5kg", "未晒クラフトB 266.5kg");
    select3.options[11] = new Option("ヴァンヌーボV-FS(スノーホワイト) 275kg", "ヴァンヌーボV-FS(スノーホワイト) 275kg");
    select3.options[12] = new Option("GAボード-FS 300kg", "GAボード-FS 300kg");
    select3.options[13] = new Option("未晒クラフトM 320kg", "未晒クラフトM 320kg");
    select3.options[14] = new Option("ブラックSF 301kg", "ブラックSF 301kg");
    select3.options[15] = new Option("ディープマット 265kg", "ディープマット 265kg");
    select3.options[16] = new Option("ディープマット 265kg【アソート／濃色5色】", "ディープマット 265kg【アソート／濃色5色】");
    select3.options[17] = new Option("カラープラン-FS 301kg", "カラープラン-FS 301kg");
    select3.options[18] = new Option("ケンラン 265kg", "ケンラン 265kg");
    select3.options[19] = new Option("ケンラン 310kg", "ケンラン 310kg");
    select3.options[20] = new Option("OK ACカード 264kg", "OK ACカード 264kg");
    select3.options[21] = new Option("黒気包紙U-FS 288kg", "黒気包紙U-FS 288kg");
    select3.options[22] = new Option("OK ACカード 309kg", "OK ACカード 309kg");
    select3.options[23] = new Option("GAファイル 310kg", "GAファイル 310kg");
    select3.options[24] = new Option("プライク 284kg", "プライク 284kg");
    select3.options[25] = new Option("プライク 284kg【アソート／濃色8色】", "プライク 284kg【アソート／濃色8色】");
    select3.options[26] = new Option("プライク 284kg【アソート／暖色4色】", "プライク 284kg【アソート／暖色4色】");
    select3.options[27] = new Option("プライク 284kg【アソート／寒色4色】", "プライク 284kg【アソート／寒色4色】");
    select3.options[28] = new Option("【その他・お見積商品等】", "【その他・お見積商品等】");
  } else if (select1.options[select1.selectedIndex].value === "うす物類") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("A7・B8フライヤー(40×40mm～74×105mm)", "A7・B8(40×40mm～74×105mm)");
    select2.options[2] = new Option("A6・B7フライヤー(～105×148mm)", "A6・B7フライヤー(～105×148mm)");
    select2.options[3] = new Option("A5・B6フライヤー(～148×210mm)", "A5・B6フライヤー(～148×210mm)");
    select2.options[4] = new Option("A4・B5フライヤー(～210×297mm)", "A4・B5フライヤー(～210×297mm)");
    select2.options[5] = new Option("A3・B4フライヤー(～297×420mm)", "A3・B4フライヤー(～297×420mm)");
    select2.options[6] = new Option("A7・B8正方形フライヤー(40×40mm～74×74mm)", "A7・B8正方形(40×40mm～74×74mm)");
    select2.options[7] = new Option("A6・B7正方形フライヤー(～105×105mm)", "A6・B7正方形フライヤー(～105×105mm)");
    select2.options[8] = new Option("A5・B6正方形フライヤー(～148×148mm)", "A5・B6正方形フライヤー(～148×148mm)");
    select2.options[9] = new Option("A4・B5正方形フライヤー(～210×210mm)", "A4・B5正方形フライヤー(～210×210mm)");
    select2.options[10] = new Option("A3・B4正方形フライヤー(～297×297mm)", "A3・B4正方形フライヤー(～297×297mm)");

    // うす物類の用紙は共通なので，うす物類を選択した時点で"印刷用紙"のプルダウンも決める
    select3.options[0] = new Option("▼選択してください▼", "", true);
    select3.options[0].disabled = "true";
    select3.options[1] = new Option("未晒クラフトT 86kg", "未晒クラフトT 86kg");
    select3.options[2] = new Option("PELP! PAPER 86kg", "PELP! PAPER 86kg");
    select3.options[3] = new Option("トーンF(CG5) 90kg", "トーンF(CG5) 90kg");
  } else if (select1.options[select1.selectedIndex].value === "刷り込み封筒【オンデマンドタイプ】") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("長形3号", "長形3号");
    select2.options[2] = new Option("洋長形3号", "洋長形3号");
    select2.options[3] = new Option("角形2号", "角形2号");
    select2.options[4] = new Option("洋角形2号", "洋角形2号");

    select3.options[0] = new Option("▼選択してください▼", "", true);
    select3.options[0].disabled = "true";
  }
  // 封筒の用紙はサイズ毎に異なるのでchg_opt2で決める
  else if (select1.options[select1.selectedIndex].value === "【その他・お見積商品等】") {
    select2.options[0] = new Option("【その他・お見積商品等】", "【その他・お見積商品等】", true);
    select3.options[0] = new Option("【その他・お見積商品等】", "【その他・お見積商品等】", true);
  }
}

//　chg_opt2 : "サイズ"のプルダウン変更で呼び出される
// if文内の select1.options[select1.selectedIndex].value について，
// .options　の前と .selectedIndex　の前の変数が同じでないと変なことになるので注意(上の例だと select1)
function chg_opt2() {
  "use strict";
  var select1 = document.forms.formName.商品;
  var select2 = document.forms.formName.サイズ;
  var select3 = document.forms.formName.印刷用紙;

  if (select2.options[select2.selectedIndex].value === "▼選択してください▼") {
    select3.options[0] = new Option("▼選択してください▼", "", true);
    select3.options[0].disabled = "true";
  } else if (select1.options[select1.selectedIndex].value === "刷り込み封筒【オンデマンドタイプ】") {
    // 印刷用紙のプルダウンをリセット
    select3.options.length = 0;
    if (select2.options[select2.selectedIndex].value === "長形3号") {
      select3.options[0] = new Option("▼選択してください▼", "", true);
      select3.options[0].disabled = "true";
      select3.options[1] = new Option("未晒クラフトH 80g", "未晒クラフトH 80g");
      select3.options[2] = new Option("ナチュラルクラフトCoC 80g", "ナチュラルクラフトCoC 80g");
      select3.options[3] = new Option("コニーカラー 70g", "コニーカラー 70g");
      select3.options[4] = new Option("未晒クラフトT 100g", "未晒クラフトT 100g");
      select3.options[5] = new Option("コニーカラー 85g", "コニーカラー 85g");
      select3.options[6] = new Option("コニーカラー（レッド） 85g", "コニーカラー（レッド） 85g");
      select3.options[7] = new Option("コニーカラー（ブラック） 85g", "コニーカラー（ブラック） 85g");
      select3.options[8] = new Option("ECカラー 80g", "ECカラー 80g");
      select3.options[9] = new Option("ライナーグレー 100g", "ライナーグレー 100g");
      select3.options[10] = new Option("ディープマット 116g (受注生産品)", "ディープマット 116g (受注生産品)");
      select3.options[11] = new Option("アラベール-FS 130g", "アラベール-FS 130g");
      select3.options[12] = new Option("トーンF 104g (受注生産品)", "トーンF 104g (受注生産品)");
      select3.options[13] = new Option("マットブラック 115g", "マットブラック 115g");
    } else if (select2.options[select2.selectedIndex].value === "洋長形3号") {
      select3.options[0] = new Option("▼選択してください▼", "", true);
      select3.options[0].disabled = "true";
      select3.options[1] = new Option("ナチュラルクラフトCoC 80g", "ナチュラルクラフトCoC 80g");
      select3.options[2] = new Option("未晒クラフトT 100g", "未晒クラフトT 100g");
      select3.options[3] = new Option("コニーカラー 85g", "コニーカラー 85g");
      select3.options[4] = new Option("コニーカラー（レッド） 85g", "コニーカラー（レッド） 85g");
      select3.options[5] = new Option("コニーカラー（ブラック） 85g", "コニーカラー（ブラック） 85g");
      select3.options[6] = new Option("PELP! PAPER 100g", "PELP! PAPER 100g");
      select3.options[7] = new Option("ECカラー 100g", "ECカラー 100g");
      select3.options[8] = new Option("ライナーグレー 100g", "ライナーグレー 100g");
      select3.options[9] = new Option("ディープマット 116g (受注生産品)", "ディープマット 116g (受注生産品)");
      select3.options[10] = new Option("アラベール-FS 130g", "アラベール-FS 130g");
      select3.options[11] = new Option("トーンF(CG5) 104g", "トーンF(CG5) 104g");
      select3.options[12] = new Option("マットブラック 115g", "マットブラック 115g");
    } else if (select2.options[select2.selectedIndex].value === "角形2号") {
      select3.options[0] = new Option("▼選択してください▼", "", true);
      select3.options[0].disabled = "true";
      select3.options[1] = new Option("ナチュラルクラフトCoC 80g", "ナチュラルクラフトCoC 80g");
      select3.options[2] = new Option("未晒クラフトH 100g", "未晒クラフトH 100g");
      select3.options[3] = new Option("未晒クラフトT 100g", "未晒クラフトT 100g");
      select3.options[4] = new Option("コニーカラー 85g", "コニーカラー 85g");
      select3.options[5] = new Option("コニーカラー（レッド） 85g", "コニーカラー（レッド） 85g");
      select3.options[6] = new Option("コニーカラー（ブラック） 85g", "コニーカラー（ブラック） 85g");
      select3.options[7] = new Option("コニーカラー 100g", "コニーカラー 100g");
      select3.options[8] = new Option("PELP! PAPER 100g", "PELP! PAPER 100g");
      select3.options[9] = new Option("ECカラー 100g", "ECカラー 100g");
      select3.options[10] = new Option("ライナーグレー 100g", "ライナーグレー 100g");
      select3.options[11] = new Option("ディープマット 116g (受注生産品)", "ディープマット 116g (受注生産品)");
      select3.options[12] = new Option("アラベール-FS 130g", "アラベール-FS 130g");
      select3.options[13] = new Option("トーンF(CG5) 104g", "トーンF(CG5) 104g");
      select3.options[14] = new Option("マットブラック 115g", "マットブラック 115g");
    } else if (select2.options[select2.selectedIndex].value === "洋角形2号") {
      select3.options[0] = new Option("▼選択してください▼", "", true);
      select3.options[0].disabled = "true";
      select3.options[1] = new Option("未晒クラフトT 100g", "未晒クラフトT 100g");
      select3.options[2] = new Option("ディープマット 116g (受注生産品)", "ディープマット 116g (受注生産品)");
      select3.options[3] = new Option("トーンF 104g (受注生産品)", "トーンF 104g (受注生産品)");
    }
  }
}

// ▼▼ 試し刷り注文フォーム用 ▼▼
function testprint_chg_opt1(item_num) {
  // item_num : 何番目の商品かを判別するための引数。
  // html側のtestprint_chg_opt1(#) の括弧内がitem_num
  "use strict";

  if (item_num === 1) {
    var select1 = document.forms.formName.商品1;
    var select2 = document.forms.formName.印刷用紙1;
    var select3 = document.forms.formName.箔の色数1;
    var select4 = document.forms.formName.箔の色1;
    var select5 = document.forms.formName.印刷色数1;
    var select6 = document.forms.formName.印刷枚数1;
  } else if (item_num === 2) {
    var select1 = document.forms.formName.商品2;
    var select2 = document.forms.formName.印刷用紙2;
    var select3 = document.forms.formName.箔の色数2;
    var select4 = document.forms.formName.箔の色2;
    var select5 = document.forms.formName.印刷色数2;
    var select6 = document.forms.formName.印刷枚数2;
    // ▼▼ 商品2を選択しない場合は商品3を選択できなくする処理 ▼▼
    var product3_1 = document.forms.formName.商品3;
    var product3_2 = document.forms.formName.印刷用紙3;
    var product3_3 = document.forms.formName.箔の色数3;
    var product3_4 = document.forms.formName.箔の色3;
    var product3_5 = document.forms.formName.印刷色数3;
    var product3_6 = document.forms.formName.印刷枚数3;
    if (select1.options[select1.selectedIndex].value === "") {
      // 商品2を選択しない(valueが空)場合，

      product3_1.options.length = 0;
      product3_2.options.length = 0;
      product3_3.options.length = 0;
      product3_4.options.length = 0;
      product3_5.options.length = 0;
      product3_6.options.length = 0;
      // 商品3関連のプルダウンをリセット

      product3_1.options[0] = new Option("選択しない", "", true);
      product3_2.options[0] = new Option("選択しない", "", true);
      product3_3.options[0] = new Option("選択しない", "", true);
      product3_4.options[0] = new Option("選択しない", "", true);
      product3_5.options[0] = new Option("選択しない", "", true);
      product3_6.options[0] = new Option("選択しない", "", true);
      // 商品3関連のプルダウンをすべて"選択しない"にする。
    } else {
      // それ以外（商品2を選択した場合）
      if (product3_1.options.length != 8) {
        // このif文がないと、"商品2"を変更する度に（選択しない以外に変更しても）、"商品3"の選択がリセットされてしまう
        product3_1.options[0] = new Option("▼選択してください▼", "");
        product3_1.options[0].disabled = "true";
        product3_1.options[1] = new Option("選択しない", "");
        product3_1.options[2] = new Option("カード類／A4", "カード類／A4");
        // 商品3のプルダウンを表示させる
      }
    }
    // ▲▲ 商品2を選択しない場合は商品3を選択できなくする処理 ▲▲
  } else if (item_num === 3) {
    var select1 = document.forms.formName.商品3;
    var select2 = document.forms.formName.印刷用紙3;
    var select3 = document.forms.formName.箔の色数3;
    var select4 = document.forms.formName.箔の色3;
    var select5 = document.forms.formName.印刷色数3;
    var select6 = document.forms.formName.印刷枚数3;
  }

  // プルダウンの選択肢をリセットする
  select2.options.length = 0;
  select3.options.length = 0;
  select4.options.length = 0;
  select5.options.length = 0;
  select6.options.length = 0;

  if (select1.options[select1.selectedIndex].value === "▼選択してください▼") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select3.options[0] = new Option("▼選択してください▼", "", true);
    select3.options[0].disabled = "true";
    select4.options[0] = new Option("▼選択してください▼", "", true);
    select4.options[0].disabled = "true";
    select5.options[0] = new Option("▼選択してください▼", "", true);
    select5.options[0].disabled = "true";
    select6.options[0] = new Option("▼選択してください▼", "", true);
    select6.options[0].disabled = "true";
  } else if (select1.options[select1.selectedIndex].value === "") {
    select2.options[0] = new Option("選択しない", "", true);
    select3.options[0] = new Option("選択しない", "", true);
    select4.options[0] = new Option("選択しない", "", true);
    select5.options[0] = new Option("選択しない", "", true);
    select6.options[0] = new Option("選択しない", "", true);
  } else {
    select3.options[0] = new Option("▼選択してください▼", "", true);
    select3.options[0].disabled = "true";
    select3.options[1] = new Option("片面箔1色", "片面箔1色");
    select3.options[2] = new Option("両面箔1色", "両面箔1色");

    select4.options[0] = new Option("▼選択してください▼", "", true);
    select4.options[0].disabled = "true";
    select4.options[1] = new Option("つやありゴールド", "つやありゴールド");
    select4.options[2] = new Option("つや消しゴールド", "つや消しゴールド");
    select4.options[3] = new Option("つやありシルバー", "つやありシルバー");
    select4.options[4] = new Option("つや消しシルバー", "つや消しシルバー");
    select4.options[5] = new Option("ピンクゴールド", "ピンクゴールド");
    
    select5.options[0] = new Option("▼選択してください▼", "", true);
    select5.options[0].disabled = "true";
    select5.options[1] = new Option("印刷なし", "印刷なし");
    select5.options[2] = new Option("-----白印刷あり-----", "", true);
    select5.options[2].disabled = "true";
    select5.options[3] = new Option("【片面印刷】片面白1色", "【片面印刷】片面白1色");
    select5.options[4] = new Option("【片面印刷】片面カラー+白", "【片面印刷】片面カラー+白");
    select5.options[5] = new Option("【両面印刷】片面白1色／片面モノクロ", "【両面印刷】片面白1色／片面モノクロ");
    select5.options[6] = new Option("【両面印刷】両面白1色", "【両面印刷】両面白1色");
    select5.options[7] = new Option("【両面印刷】片面カラー+白／片面白1色", "【両面印刷】片面カラー+白／片面白1色");
    select5.options[8] = new Option("【両面印刷】両面カラー+白", "【両面印刷】両面カラー+白");
    select5.options[9] = new Option("-----白印刷なし-----", "", true);
    select5.options[9].disabled = "true";
    select5.options[10] = new Option("【片面印刷】片面モノクロ", "【片面印刷】片面モノクロ");
    select5.options[11] = new Option("【片面印刷】片面カラー", "【片面印刷】片面カラー");
    select5.options[12] = new Option("【両面印刷】両面モノクロ", "【両面印刷】両面モノクロ");
    select5.options[13] = new Option("【両面印刷】片面カラー／片面モノクロ", "【両面印刷】片面カラー／片面モノクロ");
    select5.options[14] = new Option("【両面印刷】両面カラー", "【両面印刷】両面カラー");

    if (item_num === 1) {
      select6.options[0] = new Option("▼選択してください▼", "", true);
      select6.options[0].disabled = "true";
      select6.options[1] = new Option("2枚", "2枚");
      select6.options[2] = new Option("3枚", "3枚");
      select6.options[3] = new Option("4枚", "4枚");
      select6.options[4] = new Option("5枚", "5枚");
      select6.options[5] = new Option("6枚", "6枚");
      select6.options[6] = new Option("7枚", "7枚");
      select6.options[7] = new Option("8枚", "8枚");
      select6.options[8] = new Option("9枚", "9枚");
      select6.options[9] = new Option("10枚", "10枚");
    } else if (item_num === 2) {
      select6.options[0] = new Option("▼選択してください▼", "", true);
      select6.options[0].disabled = "true";
      select6.options[1] = new Option("2枚", "2枚");
      select6.options[2] = new Option("3枚", "3枚");
      select6.options[3] = new Option("4枚", "4枚");
      select6.options[4] = new Option("5枚", "5枚");
      select6.options[5] = new Option("6枚", "6枚");
      select6.options[6] = new Option("7枚", "7枚");
      select6.options[7] = new Option("8枚", "8枚");
      select6.options[8] = new Option("9枚", "9枚");
      select6.options[9] = new Option("10枚", "10枚");
    } else if (item_num === 3) {
      select6.options[0] = new Option("▼選択してください▼", "", true);
      select6.options[0].disabled = "true";
      select6.options[1] = new Option("2枚", "2枚");
      select6.options[2] = new Option("3枚", "3枚");
      select6.options[3] = new Option("4枚", "4枚");
      select6.options[4] = new Option("5枚", "5枚");
      select6.options[5] = new Option("6枚", "6枚");
      select6.options[6] = new Option("7枚", "7枚");
      select6.options[7] = new Option("8枚", "8枚");
      select6.options[8] = new Option("9枚", "9枚");
      select6.options[9] = new Option("10枚", "10枚");
    }
  }

  if (select1.options[select1.selectedIndex].value === "カード類／A4") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("-----グレーの紙-----", "", true);
    select2.options[1].disabled = "true";
    select2.options[2] = new Option("カラープランN-FS(ダークグレー) 301kg", "カラープランN-FS(ダークグレー) 301kg");
    select2.options[3] = new Option("カラープランN-FS(スモークグレー) 301kg", "カラープランN-FS(スモークグレー) 301kg");
    select2.options[4] = new Option("ケンラン(ディープグレー) 310kg", "ケンラン(ディープグレー) 310kg");
    select2.options[5] = new Option("ディープマット(シャドー) 265kg", "ディープマット(シャドー) 265kg");
    select2.options[6] = new Option("ディープマット(ミストグレー) 265kg", "ディープマット(ミストグレー) 265kg");
    select2.options[7] = new Option("GAボード-FS(グレー) 300kg", "GAボード-FS(グレー) 300kg");
    select2.options[8] = new Option("GAファイル(グレー) 310kg", "GAファイル(グレー) 310kg");
    select2.options[9] = new Option("ゆるチップF(いし) 197.5kg", "ゆるチップF(いし) 197.5kg");
    select2.options[10] = new Option("特AクッションF(グレー) 0.5mm", "特AクッションF(グレー) 0.5mm");
    select2.options[11] = new Option("CLOUD GRAY-F(ニュートラルグレー) 301kg", "CLOUD GRAY-F(ニュートラルグレー) 301kg");
    select2.options[12] = new Option("チップボールF 301kg", "チップボールF 301kg");
    select2.options[13] = new Option("GAクラフトボード-FS(シルバーウォール) 232kg", "GAクラフトボード-FS(シルバーウォール) 232kg");
    select2.options[14] = new Option("-----クラフト紙／茶色の紙-----", "", true);
    select2.options[14].disabled = "true";
    select2.options[15] = new Option("モダンクラフト 197.5kg", "モダンクラフト 197.5kg");
    select2.options[16] = new Option("GAクラフトボード-FS(ムーンストーン) 232kg", "GAクラフトボード-FS(ムーンストーン) 232kg");
    select2.options[17] = new Option("GAクラフトボード-FS(アース) 232kg", "GAクラフトボード-FS(アース) 232kg");
    select2.options[18] = new Option("エースボールF 301kg", "エースボールF 301kg");
    select2.options[19] = new Option("未晒クラフトB 266.5kg", "未晒クラフトB 266.5kg");
    select2.options[20] = new Option("未晒クラフトM 225kg", "未晒クラフトM 225kg");
    select2.options[21] = new Option("未晒クラフトM 320kg", "未晒クラフトM 320kg");
    select2.options[22] = new Option("特AクッションF(クラフト) 0.5mm", "特AクッションF(クラフト) 0.5mm");
    select2.options[23] = new Option("未晒クラフトD 225kg", "未晒クラフトD 225kg");
    select2.options[24] = new Option("クラフトビールカード-FS 266.5kg", "クラフトビールカード-FS 266.5kg");
    select2.options[25] = new Option("GAファイル(キャメル) 310kg", "GAファイル(キャメル) 310kg");
    select2.options[26] = new Option("カフェラテF 301kg", "カフェラテF 301kg");
    select2.options[27] = new Option("プライク(ブラウン) 284kg", "プライク(ブラウン) 284kg");
    select2.options[28] = new Option("-----黒の紙-----", "", true);
    select2.options[28].disabled = "true";
    select2.options[29] = new Option("ブラックSF 301kg", "ブラックSF 301kg");
    select2.options[30] = new Option("ディープマット(ブラック) 265kg", "ディープマット(ブラック) 265kg");
    select2.options[31] = new Option("特A・DLC(ブラック) 0.5mm", "特A・DLC(ブラック) 0.5mm");
    select2.options[32] = new Option("ケンラン(ディープブラック) 310kg", "ケンラン(ディープブラック) 310kg");
    select2.options[33] = new Option("黒気包紙U-FS 288kg", "黒気包紙U-FS 288kg");
    select2.options[34] = new Option("OK ACカード(まくろ) 309kg", "OK ACカード(まくろ) 309kg");
    select2.options[35] = new Option("プライク(ブラック) 284kg", "プライク(ブラック) 284kg");
    select2.options[36] = new Option("タント／TANT(N-1) 180kg", "タント／TANT(N-1) 180kg");
    select2.options[37] = new Option("-----赤の紙-----", "", true);
    select2.options[37].disabled = "true";
    select2.options[38] = new Option("ディープマット(ボルドー) 265kg", "ディープマット(ボルドー) 265kg");
    select2.options[39] = new Option("ディープマット(ルージュ) 265kg", "ディープマット(ルージュ) 265kg");
    select2.options[40] = new Option("ケンラン(ディープレッド) 310kg", "ケンラン(ディープレッド) 310kg");
    select2.options[41] = new Option("OK ACカード(まあか) 309kg", "OK ACカード(まあか) 309kg");
    select2.options[42] = new Option("プライク(レッド) 284kg", "プライク(レッド) 284kg");
    select2.options[43] = new Option("プライク(ボルドー) 284kg", "プライク(ボルドー) 284kg");
    select2.options[44] = new Option("-----青の紙-----", "", true);
    select2.options[44].disabled = "true";
    select2.options[45] = new Option("ディープマット(インディゴ) 265kg", "ディープマット(インディゴ) 265kg");
    select2.options[46] = new Option("特A・DLC(インディゴ) 0.5mm", "特A・DLC(インディゴ) 0.5mm");
    select2.options[47] = new Option("プライク(ネイビー) 284kg", "プライク(ネイビー) 284kg");
    select2.options[48] = new Option("-----紫の紙-----", "", true);
    select2.options[48].disabled = "true";
    select2.options[49] = new Option("プライク(バイオレット) 284kg", "プライク(バイオレット) 284kg");
    select2.options[50] = new Option("-----緑の紙-----", "", true);
    select2.options[50].disabled = "true";
    select2.options[51] = new Option("ディープマット(オリーブ) 265kg", "ディープマット(オリーブ) 265kg");
    select2.options[52] = new Option("GAボード-FS(ダークグリーン) 300kg", "GAボード-FS(ダークグリーン) 300kg");
    select2.options[53] = new Option("プライク(ディープグリーン) 284kg", "プライク(ディープグリーン) 284kg");
    select2.options[54] = new Option("-----オレンジの紙-----", "", true);
    select2.options[54].disabled = "true";
    select2.options[55] = new Option("カラープランN-FS(オレンジ) 301kg", "カラープランN-FS(オレンジ) 301kg");
    select2.options[56] = new Option("-----アイボリー／白の紙-----", "", true);
    select2.options[56].disabled = "true";
    select2.options[57] = new Option("マシュマロCoC 225kg", "マシュマロCoC 225kg");
    select2.options[58] = new Option("高白ラフバガス 270kg", "高白ラフバガス 270kg");
    select2.options[59] = new Option("アラベール-FS(ウルトラホワイト) 200kg", "アラベール-FS(ウルトラホワイト) 200kg");
    select2.options[60] = new Option("アラベール-FS(スノーホワイト) 200kg", "アラベール-FS(スノーホワイト) 200kg");
    select2.options[61] = new Option("アラベール-FS(ホワイト) 200kg", "アラベール-FS(ホワイト) 200kg");
    select2.options[62] = new Option("アラベール-FS(ナチュラル) 200kg", "アラベール-FS(ナチュラル) 200kg");
    select2.options[63] = new Option("特AクッションF（シロ) 0.5mm", "特AクッションF（シロ) 0.5mm");
    select2.options[64] = new Option("サーキュラーコットンペーパー 265kg", "サーキュラーコットンペーパー 265kg");
    select2.options[65] = new Option("DKホワイトF 301kg", "DKホワイトF 301kg");
    select2.options[66] = new Option("ヴァンヌーボV-FS(スノーホワイト) 275kg", "ヴァンヌーボV-FS(スノーホワイト) 275kg");
    select2.options[67] = new Option("PELP! PAPER 172kg", "PELP! PAPER 172kg");
    select2.options[68] = new Option("ユポ YPI 300μm", "ユポ YPI 300μm");
    select2.options[69] = new Option("プライク(ホワイト) 284kg", "プライク(ホワイト) 284kg");
  } else if (select1.options[select1.selectedIndex].value === "うす物類／A4") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("未晒クラフトT 86kg", "未晒クラフトT 86kg");
    select2.options[2] = new Option("PELP! PAPER 86kg", "PELP! PAPER 86kg");
    select2.options[3] = new Option("トーンF(CG5) 90kg", "トーンF(CG5) 90kg");
  } else if (select1.options[select1.selectedIndex].value === "刷り込み封筒【オンデマンドタイプ】／長形3号") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("未晒クラフトH 80g", "未晒クラフトH 80g");
    select2.options[2] = new Option("ナチュラルクラフトCoC 80g", "ナチュラルクラフトCoC 80g");
    select2.options[3] = new Option("コニーカラー 70g", "コニーカラー 70g");
    select2.options[4] = new Option("未晒クラフトT 100g", "未晒クラフトT 100g");
    select2.options[5] = new Option("コニーカラー 85g", "コニーカラー 85g");
    select2.options[6] = new Option("ECカラー 80g", "ECカラー 80g");
    select2.options[7] = new Option("コニーカラー（ブラック） 85g", "コニーカラー（ブラック） 85g");
    select2.options[8] = new Option("ライナーグレー 100g", "ライナーグレー 100g");
    select2.options[9] = new Option("マットブラック 115g", "マットブラック 115g");
    select2.options[10] = new Option("マットレッド 115g", "マットレッド 115g");
    select2.options[11] = new Option("アラベール-FS 130g", "アラベール-FS 130g");
  } else if (select1.options[select1.selectedIndex].value === "刷り込み封筒【オンデマンドタイプ】／洋長形3号") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("ナチュラルクラフトCoC 80g", "ナチュラルクラフトCoC 80g");
    select2.options[2] = new Option("未晒クラフトT 100g", "未晒クラフトT 100g");
    select2.options[3] = new Option("コニーカラー 85g", "コニーカラー 85g");
    select2.options[4] = new Option("PELP! PAPER 100g", "PELP! PAPER 100g");
    select2.options[5] = new Option("ECカラー 100g", "ECカラー 100g");
    select2.options[6] = new Option("コニーカラー（ブラック） 85g", "コニーカラー（ブラック） 85g");
    select2.options[7] = new Option("ライナーグレー 100g", "ライナーグレー 100g");
    select2.options[8] = new Option("トーンF(CG5) 104g", "トーンF(CG5) 104g");
    select2.options[9] = new Option("マットブラック 115g", "マットブラック 115g");
    select2.options[10] = new Option("マットレッド 115g", "マットレッド 115g");
    select2.options[11] = new Option("アラベール-FS 130g", "アラベール-FS 130g");
  } else if (select1.options[select1.selectedIndex].value === "刷り込み封筒【オンデマンドタイプ】／角形2号") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("ナチュラルクラフトCoC 80g", "ナチュラルクラフトCoC 80g");
    select2.options[2] = new Option("未晒クラフトH 100g", "未晒クラフトH 100g");
    select2.options[3] = new Option("未晒クラフトT 100g", "未晒クラフトT 100g");
    select2.options[4] = new Option("コニーカラー 85g", "コニーカラー 85g");
    select2.options[5] = new Option("コニーカラー 100g", "コニーカラー 100g");
    select2.options[6] = new Option("PELP! PAPER 100g", "PELP! PAPER 100g");
    select2.options[7] = new Option("ECカラー 100g", "ECカラー 100g");
    select2.options[8] = new Option("コニーカラー（ブラック） 85g", "コニーカラー（ブラック） 85g");
    select2.options[9] = new Option("ライナーグレー 100g", "ライナーグレー 100g");
    select2.options[10] = new Option("トーンF(CG5) 104g", "トーンF(CG5) 104g");
    select2.options[11] = new Option("マットブラック 115g", "マットブラック 115g");
    select2.options[12] = new Option("マットレッド 115g", "マットレッド 115g");
    select2.options[13] = new Option("アラベール-FS 130g", "アラベール-FS 130g");
  } else if (select1.options[select1.selectedIndex].value === "刷り込み封筒【オンデマンドタイプ】／洋角形2号") {
    select2.options[0] = new Option("▼選択してください▼", "", true);
    select2.options[0].disabled = "true";
    select2.options[1] = new Option("未晒クラフトT 100g", "未晒クラフトT 100g");
  }
}
