// JavaScript Document

function functionName(){
		"use strict";
		var select1 = document.forms.formName.商品; //変数select1を宣言
		var select2 = document.forms.formName.印刷納期; //変数select2を宣言
		var select3 = document.forms.formName.印刷用紙; //変数select3を宣言

		select2.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要
		select3.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要


	if (select1.options[select1.selectedIndex].value === "▼選択してください▼")
			{
				select2.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select2.options[0].disabled = "true";
				select3.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select3.options[0].disabled = "true";
			}

		else if (select1.options[select1.selectedIndex].value === "名刺・ショップカード")
			{
				select2.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select2.options[0].disabled = "true";
				select2.options[1] = new Option("-----印刷納期が10・7・5・3日の用紙-----","-----印刷納期が10・7・5・3日の用紙-----",true);
				select2.options[1].disabled = "true";
				select2.options[2] = new Option("10日納期---印刷料金：7日納期の約10%引---","10日納期---印刷料金：7日納期の約10%引---");
				select2.options[3] = new Option("7日納期","7日納期");
				select2.options[4] = new Option("5日納期---印刷料金：7日納期の約10%増---","5日納期---印刷料金：7日納期の約10%増---");
				select2.options[5] = new Option("3日納期---印刷料金：7日納期の約30%増---","3日納期---印刷料金：7日納期の約30%増---");
				select2.options[6] = new Option("-----印刷納期が11・8・6・4日の用紙-----","-----印刷納期が11・8・6・4日の用紙-----",true);
				select2.options[6].disabled = "true";
				select2.options[7] = new Option("11日納期---印刷料金：8日納期の約10%引---","11日納期---印刷料金：8日納期の約10%引---");
				select2.options[8] = new Option("8日納期","8日納期");
				select2.options[9] = new Option("6日納期---印刷料金：8日納期の約10%増---","6日納期---印刷料金：8日納期の約10%増---");
				select2.options[10] = new Option("4日納期---印刷料金：8日納期の約30%増---","4日納期---印刷料金：8日納期の約30%増---");
				select2.options[11] = new Option("-----印刷納期が11・8日の用紙-----","-----印刷納期が11・8日の用紙-----",true);
				select2.options[11].disabled = "true";
				select2.options[12] = new Option("11日納期---印刷料金：8日納期の約10%引---","11日納期---印刷料金：8日納期の約10%引---");
				select2.options[13] = new Option("8日納期","8日納期");

				select3.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select3.options[0].disabled = "true";
				select3.options[1] = new Option("-----印刷納期が10・7・5・3日の用紙-----","-----印刷納期が10・7・5・3日の用紙-----",true);
				select3.options[1].disabled = "true";
				select3.options[2] = new Option("コート紙 310kg","コート紙 310kg");
				select3.options[3] = new Option("コート紙 360kg","コート紙 360kg");
				select3.options[4] = new Option("コート紙 400kg","コート紙 400kg");
				select3.options[5] = new Option("片面コートカード 301kg","片面コートカード 301kg");
				select3.options[6] = new Option("片面コートカード 344kg","片面コートカード 344kg");
				select3.options[7] = new Option("片面コートカード 387kg","片面コートカード 387kg");
				select3.options[8] = new Option("インバーコートM-FS 301kg","インバーコートM-FS 301kg");
				select3.options[9] = new Option("-----印刷納期が11・8・6・4日の用紙-----","-----印刷納期が11・8・6・4日の用紙-----",true);
				select3.options[9].disabled = "true";
				select3.options[10] = new Option("コート紙 310kg+片面光沢PP加工","コート紙 310kg+片面光沢PP加工");
				select3.options[11] = new Option("コート紙 310kg+片面マットPP加工","コート紙 310kg+片面マットPP加工");
				select3.options[12] = new Option("コート紙 310kg+両面光沢PP加工","コート紙 310kg+両面光沢PP加工");
				select3.options[13] = new Option("コート紙 310kg+両面マットPP加工","コート紙 310kg+両面マットPP加工");
				select3.options[14] = new Option("コート紙 360kg+片面光沢PP加工","コート紙 360kg+片面光沢PP加工");
				select3.options[15] = new Option("コート紙 360kg+片面マットPP加工","コート紙 360kg+片面マットPP加工");
				select3.options[16] = new Option("コート紙 360kg+両面光沢PP加工","コート紙 360kg+両面光沢PP加工");
				select3.options[17] = new Option("コート紙 360kg+両面マットPP加工","コート紙 360kg+両面マットPP加工");
				select3.options[18] = new Option("-----印刷納期が11・8日の用紙-----","-----印刷納期が11・8日の用紙-----",true);
				select3.options[18].disabled = "true";
				select3.options[19] = new Option("ケント紙 300kg","ケント紙 300kg");
				select3.options[20] = new Option("ラフカード 300kg","ラフカード 300kg");
				select3.options[21] = new Option("フィラレ 300kg","フィラレ 300kg");
				select3.options[22] = new Option("-----その他-----","-----その他-----");
				select3.options[22].disabled = "true";
				select3.options[23] = new Option("その他","その他");

			}

		else if (select1.options[select1.selectedIndex].value === "刷り込み封筒【お手軽カラータイプ】")
			{
				select2.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select2.options[0].disabled = "true";
				select2.options[1] = new Option("10日納期---印刷料金：7日納期の約10%引---","10日納期---印刷料金：7日納期の約10%引---");
				select2.options[2] = new Option("7日納期","7日納期");
				select2.options[3] = new Option("5日納期---印刷料金：7日納期の約10%増---","5日納期---印刷料金：7日納期の約10%増---");
				select2.options[4] = new Option("※要相談※3日納期---印刷料金：7日納期の約30%増---","※要相談※3日納期---印刷料金：7日納期の約30%増---");

				select3.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select3.options[0].disabled = "true";
				select3.options[1] = new Option("-----白封筒-----","-----白封筒-----",true);
				select3.options[1].disabled = "true";
				select3.options[2] = new Option("ケント紙","ケント紙");
				select3.options[3] = new Option("青白ケント","青白ケント");
				select3.options[4] = new Option("ECカラー(ホワイト)","ECカラー(ホワイト)");
				select3.options[5] = new Option("ミエナイ白","ミエナイ白");
				select3.options[6] = new Option("-----茶封筒-----","-----茶封筒-----",true);
				select3.options[6].disabled = "true";
				select3.options[7] = new Option("クラフト紙","クラフト紙");
				select3.options[8] = new Option("OKクラフト","OKクラフト");
				select3.options[9] = new Option("-----カラー封筒-----","-----カラー封筒-----");
				select3.options[9].disabled = "true";
				select3.options[10] = new Option("ECカラー","ECカラー");
			}

		else if (select1.options[select1.selectedIndex].value === "刷り込み封筒【フタ全面タイプ】")
			{
				select2.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select2.options[0].disabled = "true";
				select2.options[1] = new Option("11日納期---印刷料金：8日納期の約10%引---","11日納期---印刷料金：8日納期の約10%引---");
				select2.options[2] = new Option("8日納期","8日納期");

				select3.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select3.options[0].disabled = "true";
				select3.options[1] = new Option("-----白封筒-----","-----白封筒-----",true);
				select3.options[1].disabled = "true";
				select3.options[2] = new Option("ケント紙","ケント紙");
				select3.options[3] = new Option("BSケント","BSケント");
				select3.options[4] = new Option("サイセイ純白","サイセイ純白");
				select3.options[5] = new Option("森林認証ケント","森林認証ケント");
				select3.options[6] = new Option("ECカラー(ホワイト)","ECカラー(ホワイト)");
				select3.options[7] = new Option("ミエナイ白","ミエナイ白");
				select3.options[8] = new Option("透けないケント","透けないケント");
				select3.options[9] = new Option("大礼紙 125g","大礼紙 125g");
				select3.options[10] = new Option("アラベール 130g","アラベール 130g");
				select3.options[11] = new Option("-----茶封筒-----","-----茶封筒-----",true);
				select3.options[11].disabled = "true";
				select3.options[12] = new Option("クラフト紙","クラフト紙");
				select3.options[13] = new Option("OKクラフト","OKクラフト");
				select3.options[14] = new Option("未晒クラフトH","未晒クラフトH");
				select3.options[15] = new Option("ナチュラルクラフトCoC 80g","ナチュラルクラフトCoC 80g");
				select3.options[16] = new Option("-----カラー封筒-----","-----カラー封筒-----",true);
				select3.options[16].disabled = "true";
				select3.options[17] = new Option("Kカラー","Kカラー");
				select3.options[18] = new Option("ECカラー","ECカラー");
				select3.options[19] = new Option("ミエナイカラー","ミエナイカラー");
				select3.options[20] = new Option("-----その他-----","-----その他-----");
				select3.options[20].disabled = "true";
				select3.options[21] = new Option("その他","その他");
			}

		else if (select1.options[select1.selectedIndex].value === "オリジナル封筒")
			{
				select2.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select2.options[0].disabled = "true";
				select2.options[1] = new Option("窓なし●17日納期---印刷料金：14日納期の約10%引---","17日納期---印刷料金：14日納期の約10%引---");
				select2.options[2] = new Option("窓なし●14日納期","14日納期");
				select2.options[3] = new Option("窓なし●12日納期---印刷料金：14日納期の約10%増---","12日納期---印刷料金：14日納期の約10%増---");
				select2.options[4] = new Option("窓付○19日納期---印刷料金：16日納期の約10%引---","19日納期---印刷料金：16日納期の約10%引---");
				select2.options[5] = new Option("窓付○16日納期","16日納期");
				select2.options[6] = new Option("窓付○14日納期---印刷料金：16日納期の約10%増---","14日納期---印刷料金：16日納期の約10%増---");

				select3.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select3.options[0].disabled = "true";
				select3.options[1] = new Option("-----白封筒-----","-----白封筒-----",true);
				select3.options[1].disabled = "true";
				select3.options[2] = new Option("マットコート紙","マットコート紙");
				select3.options[3] = new Option("上質紙","上質紙");
				select3.options[4] = new Option("再生マットコート紙","再生マットコート紙");
				select3.options[5] = new Option("再生上質紙","再生上質紙");
				select3.options[6] = new Option("淡クリームキンマリ","淡クリームキンマリ");
				select3.options[7] = new Option("ガルバスCoC","ガルバスCoC");
				select3.options[8] = new Option("モンテシオン","モンテシオン");
				select3.options[9] = new Option("マシュマロCoC","マシュマロCoC");
				select3.options[10] = new Option("ケント紙","ケント紙");
				select3.options[11] = new Option("アラベール","アラベール");
				select3.options[12] = new Option("ヴァンヌーボVG","ヴァンヌーボVG");
				select3.options[13] = new Option("Mr.B","Mr.B");
				select3.options[14] = new Option("-----茶封筒-----","-----茶封筒-----",true);
				select3.options[14].disabled = "true";
				select3.options[15] = new Option("半更クラフト(≒クラフト紙)","半更クラフト(≒クラフト紙)");
				select3.options[16] = new Option("両更クラフト(≒未晒クラフト紙)","両更クラフト(≒未晒クラフト紙)");
				select3.options[17] = new Option("-----カラー封筒-----","-----カラー封筒-----",true);
				select3.options[17].disabled = "true";
				select3.options[18] = new Option("色上質紙","色上質紙");
				select3.options[19] = new Option("-----その他-----","-----その他-----");
				select3.options[19].disabled = "true";
				select3.options[20] = new Option("その他","その他");

		else if (select1.options[select1.selectedIndex].value === "【その他・お見積商品等】")
			{
				select2.options[0] = new Option("-","-",true);
				select2.options[0].disabled = "true";

				select3.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select3.options[0].disabled = "true";
				select3.options[1] = new Option("【その他・お見積商品等】","【その他・お見積商品等】");
			}

	}
