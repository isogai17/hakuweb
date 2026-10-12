window.addEventListener("popstate", function (e) {
  history.pushState(null, null, null);
  return;
});

$(function () {
  $("#rdo_23,#rdo_24").click(function () {
    $("#secondBox").show();
  });
});

$(function () {
  $("#rdo_22").click(function () {
    $("#secondBox").hide();
  });
});

(function ($) {
  $(function () {
    var $header = $("#top-head");

    // Nav Fixed
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $header.addClass("fixed");
      } else {
        $header.removeClass("fixed");
      }
    });

    // Nav Toggle Button
    $("#nav-toggle").click(function () {
      $header.toggleClass("open");
    });
  });
})(jQuery);

//▼郵便番号や各種住所の入力欄に関するID名を指定する
$(window).ready(function () {
  if (typeof $.fn.jpostal !== "function") return;
  $("#postcode1").jpostal({
    postcode: ["#postcode1", "#postcode2"],
    address: {
      "#address1": "%3",
      "#address2": "%4%5",
    },
  });
});

//ジャンプメニュー 設定
function MM_jumpMenu(targ, selObj, restore) {
  //v3.0
  eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
  if (restore) selObj.selectedIndex = 0;
}

///////////////////////////////////////////////////////////
//================== 各種商品のジャンプ ==================//
///////////////////////////////////////////////////////////
// 商品のページジャンプ用

document.addEventListener("DOMContentLoaded", function () {
  var selectElem = document.getElementById("pageJump");
  if (!selectElem) return;

  // 読み込み時点での初期値を記録
  var previousValue = selectElem.value;

  // 0.5秒（500ミリ秒）ごとにプルダウンの値が変わっていないか監視し続ける
  setInterval(function () {
    var currentValue = selectElem.value;

    // 前回の値と現在の値が違っていたら（＝プルダウンが操作されたら）処理を実行
    if (currentValue !== previousValue) {
      previousValue = currentValue; // 新しい値を記録
      var url;

      switch (currentValue) {
        case "カード類【名刺・ショップカード】":
          url = "order_print-BusinessCard.html";
          break;
        case "カード類【診察券・メンバーズカード】":
          url = "order_print-MembersCard.html";
          break;
        case "カード類【はがき・ポストカード】":
          url = "order_print-PostCard.html";
          break;
        case "カード類【A・B判カード】":
          url = "order_print-AbCard.html";
          break;
        case "カード類【正方形カード】":
          url = "order_print-SquareCard.html";
          break;
        case "カード類【折りカード】":
          url = "order_print-Ori_Card.html";
          break;
        case "カード類【商品タグ】":
          url = "order_print-ProductTag.html";
          break;
        case "うす物類【フライヤー】":
          url = "order_print-Flyer.html";
          break;
        case "うす物類【正方形フライヤー】":
          url = "order_print-SquareFlyer.html";
          break;
        case "うす物類【折りパンフレット】":
          url = "order_print-Pamphlet.html";
          break;
        case "刷り込み封筒【オンデマンドタイプ】":
          url = "order_print-Envelope.html";
          break;
        case "【その他・お見積商品等】":
          url = "order_print-Estimate.html";
          break;
        case "試し刷り／カード・フライヤー":
          url = "order_testprint-Card_Flyer.html";
          break;
        case "試し刷り／刷り込み封筒【オンデマンドタイプ】":
          url = "order_testprint-Envelope.html";
          break;
        default:
          break;
      }
      // 遷移先URL（ファイル名）が現在のURLに含まれていない場合のみジャンプする
      if (url && window.location.href.indexOf(url) === -1) {
        window.location.href = url;
      }
    }
  }, 500);
});

// /////////////////////////////////////////////////////////////////////////////////////
// //================== サイズの分岐とモーダル、モーダル内部の絞り込み ==================//
// /////////////////////////////////////////////////////////////////////////////////////
// // モーダルと関連要素の取得
// var modal = document.getElementById("modalOpen");
// var modalButton = document.getElementById("modal-button");
// var modalClose = document.getElementById("modal-close");
// var closeSpan = document.querySelector(".close");
// var firstSelect = document.getElementById("first-select");
// var selectedValueDiv = document.getElementById("selected-value");
// var mfpjs = document.getElementById("mfpjs");

// // グローバル変数として選択されたサイズとカラーを保持
// var selectedSize = "";
// var selectedColor = "AllColor"; // デフォルトはAllColor

// // サイズとカラーに基づいてフィルタリングを適用する関数
// function applyFilter() {
//   var radioButtons = document.querySelectorAll('input[name="印刷用紙"]');
//   for (var i = 0; i < radioButtons.length; i++) {
//     var dataColors = (radioButtons[i].dataset.color || "").split(" ");
//     var dataSizes = (radioButtons[i].dataset.size || "").split(" ");
//     if ((selectedColor === "AllColor" || dataColors.includes(selectedColor)) && dataSizes.includes(selectedSize)) {
//       // 選択されたサイズとカラーに合致する項目を表示
//       radioButtons[i].parentElement.style.display = "block";
//     } else {
//       // 選択されたサイズとカラーに合致しない項目を非表示
//       radioButtons[i].parentElement.style.display = "none";
//     }
//   }
// }

// // サイズの選択変更時にフィルタリングを実行
// firstSelect.addEventListener("change", function () {
//   selectedSize = this.value; // 選択されたサイズを保持
//   selectedColor = "AllColor"; // サイズが変更されたらカラーをリセット
//   selectedValueDiv.textContent = ""; // 選択用紙の表示をリセット

//   // カラーの選択をリセット
//   var colorRadioButtons = document.querySelectorAll('input[name="color"]');
//   for (var i = 0; i < colorRadioButtons.length; i++) {
//     colorRadioButtons[i].checked = false;
//   }

//   applyFilter(); // サイズが変更されたらフィルタリングを実行
// });

// // カラーの選択変更時にフィルタリングを実行
// var colorRadioButtons = document.querySelectorAll('input[name="color"]');
// for (var i = 0; i < colorRadioButtons.length; i++) {
//   colorRadioButtons[i].addEventListener("change", function () {
//     selectedColor = this.value; // 選択されたカラーを保持
//     applyFilter(); // カラーが変更されたらフィルタリングを実行
//   });
// }

// // 背景の固定を制御する関数
// function toggleBackgroundScroll() {
//   var modalOpen = modal.style.display === "block";
//   document.body.style.overflow = modalOpen ? "hidden" : "visible";
// }

// // 選択された項目を表示してモーダルを閉じる関数
// function selectItem(value) {
//   var warningMessage = document.getElementById("warning-message");

//   if (!warningMessage) {
//     // 要素が存在しない場合は新しく作成する
//     warningMessage = document.createElement("span");
//     warningMessage.id = "warning-message";
//     warningMessage.classList.add("warning", "hidden");
//     warningMessage.textContent = "印刷用紙が選択されていません。";
//     warningMessage.style.color = "#ff0000";
//     selectedValueDiv.appendChild(warningMessage);
//   }

//   if (value !== "") {
//     selectedValueDiv.textContent = "選択用紙: " + value;
//     warningMessage.classList.add("hidden"); // 選択がある場合は警告メッセージを非表示にする
//     modal.style.display = "none"; // モーダルを閉じる
//     mfpjs.setAttribute("onSubmit", "return inputCheck(this);"); // フォームバリデーションを適用
//     toggleBackgroundScroll(); // 背景の固定を解除
//   } else {
//     selectedValueDiv.textContent = ""; // 選択用紙の表示をリセット
//     warningMessage.classList.remove("hidden"); // 選択がない場合は警告メッセージを表示する
//   }
// }

// // 各label要素をクリックした時の処理
// var selectDataLabels = document.querySelectorAll(".select-data");
// for (var i = 0; i < selectDataLabels.length; i++) {
//   selectDataLabels[i].addEventListener("click", function () {
//     var selectedValue = this.querySelector('input[type="radio"]').value; // 選択された値を取得
//     selectItem(selectedValue); // 選択された項目を表示してモーダルを閉じる
//   });
// }

// // モーダルボタンの要素が定義されていることを確認
// if (modalButton) {
//   modalButton.addEventListener("click", function () {
//     modal.style.display = "block";
//     selectedValueDiv.textContent = "印刷用紙が選択されていません。"; // モーダルを開く際に警告メッセージを初期化
//     applyFilter(); // モーダルが開かれた際にサイズに応じたフィルタリングを実行
//     toggleBackgroundScroll(); // 背景の固定
//   });
// }

// // モーダルを開く処理
// function openModal() {
//   modal.style.display = "block";
//   applyFilter(); // モーダルが開かれた際にサイズに応じたフィルタリングを実行
//   toggleBackgroundScroll(); // 背景の固定
// }

// // モーダルボタンがクリックされた時の処理
// modalButton.addEventListener("click", openModal);

// // モーダルを閉じる処理
// function closeModal() {
//   modal.style.display = "none";
//   toggleBackgroundScroll(); // 背景の固定を解除
// }

// modalClose.addEventListener("click", closeModal);
// closeSpan.addEventListener("click", closeModal);

// // ページ読み込み時にモーダルを非表示にする
// window.addEventListener("load", function () {
//   modal.style.display = "none";
// });


/////////////////////////////////////////////////////////////////////////////////////
//================== サイズの分岐とモーダル、モーダル内部の絞り込み ==================//
/////////////////////////////////////////////////////////////////////////////////////
// 商品ごとに用紙モーダルを初期化する。IDの重複やラジオグループの干渉を防ぐ。
(function () {
  "use strict";
  var activeModal = null;
  var savedOverflow = "";
  var closeHandlers = [];

  document.querySelectorAll(".product-details").forEach(function (block) {
    var modal = block.querySelector(".modalOpen");
    if (!modal) return; // その他・お見積ページは用紙名のテキスト入力。
    var button = block.querySelector(".modal-_paper-select");
    // 複製時に name は サイズ_2 等へ変わるが data-base-name は共通。
    var size = block.querySelector('select[data-base-name="サイズ"]') || block.querySelector('select[name="サイズ"], select[name="サイズ_2"]');
    var summary = block.querySelector(".selected-value");
    var items = Array.prototype.slice.call(block.querySelectorAll(".select-data"));
    var filters = Array.prototype.slice.call(block.querySelectorAll(".filter_groups"));
    var paperInputs = Array.prototype.slice.call(modal.querySelectorAll('.select-data input[type="radio"]'));
    var skipValues = ["AllColor", "AllQUALITY", "FoilAll", "PPPETAll", "", "on"];

    // HTML の checked を初期値にする。MFP の保存値やブラウザの復元値は
    // 用紙検索には引き継がず、1件目・2件目をそれぞれ初期化する。
    function initializeFilters() {
      filters.forEach(function (group) {
        group.querySelectorAll('input[type="radio"]').forEach(function (input) {
          input.checked = input.defaultChecked;
        });
      });
      filterPapers();
    }

    function filterPapers() {
      filters.forEach(function (group) {
        group.querySelectorAll("label[for]").forEach(function (label) {
          var input = document.getElementById(label.htmlFor);
          label.classList.toggle("is-selected", !!input && input.checked);
        });
      });
      items.forEach(function (item) {
        var input = item.tagName === "INPUT" ? item : item.querySelector("input");
        if (!input) return;
        // 全角スペースは「定形郵便　縦4ページ」などのサイズ名の一部。
        var sizes = (input.getAttribute("data-size") || "").split(" ");
        var visible = !size || !size.value || sizes.indexOf(size.value) !== -1;
        filters.forEach(function (group) {
          var checked = group.querySelector("input:checked");
          if (!checked || skipValues.indexOf(checked.value) !== -1) return;
          // Cloned field names end in _2; paper metadata still uses data-color, etc.
          var key = checked.getAttribute("data-base-name") || checked.getAttribute("data-original-name") || checked.name.replace(/_2$/, "");
          var values = (input.getAttribute("data-" + key) || "").split(/\s+/);
          if (values.indexOf(checked.value) === -1) visible = false;
        });
        item.style.display = visible ? "block" : "none";
        item.classList.toggle("is-hide", !visible);
      });
    }

    function renderSelection() {
      if (!summary) return;
      var checked = paperInputs.filter(function (input) { return input.checked; })[0];
      summary.textContent = checked ? "選択用紙: " + checked.value : "印刷用紙を選択してください";
      summary.classList.toggle("paper-unselected", !checked);
    }

    function clearPaper() {
      paperInputs.forEach(function (input) { input.checked = false; });
      if (paperInputs.length && window.mfp && window.mfp.Elements[paperInputs[0].name]) {
        window.mfp.setresume(paperInputs[0]);
      }
      renderSelection();
    }

    function closeModal() {
      modal.style.display = "none";
      if (button) button.setAttribute("aria-expanded", "false");
      if (activeModal === modal) {
        activeModal = null;
        document.body.style.overflow = savedOverflow;
      }
    }
    closeHandlers.push({ block: block, close: closeModal });

    function openModal() {
      if (button && button.disabled) return;
      if (!size || !size.value) {
        if (summary) summary.textContent = "サイズを選択してから用紙を選択してください。";
        if (size) size.focus();
        return;
      }
      if (!activeModal) savedOverflow = document.body.style.overflow;
      activeModal = modal;
      filterPapers();
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
      if (button) button.setAttribute("aria-expanded", "true");
      var close = modal.querySelector(".close");
      if (close) close.focus();
    }

    function activateWithKeyboard(element, action) {
      element.setAttribute("role", "button");
      element.setAttribute("tabindex", "0");
      element.addEventListener("click", action);
      element.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          action();
        }
      });
    }

    if (button) {
      button.setAttribute("aria-controls", modal.id);
      button.setAttribute("aria-expanded", "false");
      activateWithKeyboard(button, openModal);
    }
    modal.querySelectorAll(".close, .modal-close").forEach(function (close) {
      close.setAttribute("aria-label", "用紙選択を閉じる");
      activateWithKeyboard(close, function () {
        clearPaper(); // 既存の案内文に合わせ、×・閉じるでは選択を解除。
        closeModal();
        if (button) button.focus();
      });
    });
    modal.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        clearPaper();
        closeModal();
        if (button) button.focus();
      }
    });
    filters.forEach(function (group) {
      group.addEventListener("change", filterPapers);
    });
    paperInputs.forEach(function (input) {
      input.addEventListener("click", function () {
        renderSelection();
        if (window.mfp && window.mfp.Elements[input.name]) window.mfp.check(input);
        closeModal();
        if (button) button.focus();
      });
    });
    if (size) {
      size.addEventListener("change", function () {
        clearPaper(); // 表示だけでなく送信値もクリアする。
        var allColor = modal.querySelector('.filter_groups input[value="AllColor"]');
        if (allColor) allColor.checked = true;
        filterPapers();
      });
    }
    var form = document.getElementById("mailformpro");
    if (form) form.addEventListener("reset", function () {
      window.setTimeout(function () {
        closeModal();
        renderSelection();
        filterPapers();
      }, 0);
    });
    initializeFilters();
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeFilters);
    }
    renderSelection();
    window.addEventListener("pageshow", function (event) {
      if (!event.persisted) initializeFilters();
      else filterPapers();
      renderSelection();
    });
  });

  // 件数を1件に戻す際は2件目の開いたモーダルだけを閉じ、入力値は保持する。
  window.closeProductPaperModal = function (block) {
    closeHandlers.forEach(function (handler) {
      if (handler.block === block) handler.close();
    });
  };
})();

// data-base-name はブラウザでの参照用。メール送信キーは各要素の name を使う。
// MFP の確認画面と送信データから、用紙検索の color/kind 等を除外する。
(function () {
  "use strict";
  var filters = document.querySelectorAll(".product-details .filter_groups input");
  filters.forEach(function (input) {
    input.setAttribute("data-post-disable", "true");
  });
  if (!window.mfp || !window.mfp.extend) return;
  window.mfp.extend.event("send", function () {
    // MFP 標準処理は各グループの先頭のみ無効化するため、全候補を処理する。
    filters.forEach(function (input) { input.disabled = true; });
  });
})();
