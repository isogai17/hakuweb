// JavaScript Document

function chg_chekbox(){
		"use strict";
		var select1 = document.forms.order_material.検討している商品; //変数select1を宣言

	if (select1.options[select1.selectedIndex].value === "▼選択してください▼")
			{
				select2.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select2.options[0].disabled = "true";
				select3.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select3.options[0].disabled = "true";
				select4.options[0] = new Option("▼選択してください▼","▼選択してください▼",true);
				select4.options[0].disabled = "true";
			}

		else if (select1.options[select1.selectedIndex].value === "名刺・ショップカード")
			{
				$("<input>", {
					  type: 'checkbox',
					  id: 'input_id',
					  value: 12345
					}).appendTo('#target_size');
			}
	}
