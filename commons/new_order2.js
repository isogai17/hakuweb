window.addEventListener("popstate", function (e) {
  history.pushState(null, null, null);
  return;
});

$(function () {$("#rdo_23,#rdo_24").click(function () {
    $("#secondBox").show();
  });
});

$(function () {$("#rdo_22").click(function () {
    $("#secondBox").hide();
  });
});

(function ($) {
  $(function () {
    var $header =$("#top-head");

    // Nav Fixed
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {$header.addClass("fixed");
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

//▼郵便番号や各種住所の入力欄に関するID名を指定する（jpostal未読み込み対策を追加）
$(window).ready(function () {
  if ($.fn && $.fn.jpostal) {
    $("#postcode1").jpostal({
      postcode: ["#postcode1", "#postcode2"],
      address: {
        "#address1": "%3",
        "#address2": "%4%5",
      },
    });
  }
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
// 商品のページジャンプ用（Nullチェックを追加）
// 修正：DOMの読み込みが完了してから要素を取得するように変更
document.addEventListener("DOMContentLoaded", function () {
  var pageJumpElem = document.getElementById("pageJump");
  
  if (pageJumpElem) {
    pageJumpElem.addEventListener("change", function () {
      var selectedValue = this.value;
      var url;

      switch (selectedValue) {
        case "カード類【名刺・ショップカード】":
          url = "https://foil.timetable.jp/form/order_print-BusinessCard.html";
          break;
        case "カード類【診察券・メンバーズカード】":
          url = "https://foil.timetable.jp/form/order_print-MembersCard.html";
          break;
        case "カード類【はがき・ポストカード】":
          url = "https://foil.timetable.jp/form/order_print-PostCard.html";
          break;
        case "カード類【A・B判カード】":
          url = "https://foil.timetable.jp/form/order_print-AbCard.html";
          break;
        case "カード類【正方形カード】":
          url = "https://foil.timetable.jp/form/order_print-SquareCard.html";
          break;
        case "カード類【折りカード】":
          url = "https://foil.timetable.jp/form/order_print-Ori_Card.html";
          break;
        case "カード類【商品タグ】":
          url = "https://foil.timetable.jp/form/order_print-ProductTag.html";
          break;
        case "うす物類【フライヤー】":
          url = "https://foil.timetable.jp/form/order_print-Flyer.html";
          break;
        case "うす物類【正方形フライヤー】":
          url = "https://foil.timetable.jp/form/order_print-SquareFlyer.html";
          break;
        case "うす物類【折りパンフレット】":
          url = "https://foil.timetable.jp/form/order_print-Pamphlet.html";
          break;
        case "刷り込み封筒【オンデマンドタイプ】":
          url = "https://foil.timetable.jp/form/order_print-Envelope.html";
          break;
        case "【その他・お見積商品等】":
          url = "https://foil.timetable.jp/form/order_print-Estimate.html";
          break;
        case "試し刷り／カード・フライヤー":
          url = "https://foil.timetable.jp/form/order_testprint-Card_Flyer.html";
          break;
        case "試し刷り／刷り込み封筒【オンデマンドタイプ】":
          url = "https://foil.timetable.jp/form/order_testprint-Envelope.html";
          break;
        default:
          break;
      }

    //   if (url) {
    //     window.location.href = url;
        //   }
        if (url) {
        // 遷移先URLが現在のURLと異なる場合のみジャンプする
        if (window.location.href.indexOf(url) === -1) {
          window.location.href = url;
        }
      }
    });
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// サイズの分岐とモーダル、モーダル内部の絞り込み（完全フェイルセーフ版）
/////////////////////////////////////////////////////////////////////////////////////

const searchBox = ".filter_groups";
const listItem = ".select-data";
const hideClass = "is-hide"; 

// ==========================================
// アニメーション再発火用ヘルパー関数（追加）
// ==========================================
function refreshFilterAnimations(container) {
    if (!container) return;
    const checkedRadios = container.querySelectorAll('.filter_groups input[type="radio"]:checked');
    checkedRadios.forEach((radio) => {
        const label = container.querySelector(`label[for="${radio.id}"]`);
        if (label) {
            label.style.animation = "none";
            void label.offsetHeight; // リフロー（再描画）を発生させてアニメーションをリセット
            label.style.animation = "";
        }
    });
}

// ==========================================
// 1. 絞り込みメイン関数
// ==========================================
function searchFilter(productBlock) {
    if (!productBlock) return;

    const itemsToHide = new Set();
    const items = productBlock.querySelectorAll(listItem);

    // ▼ サイズの絞り込み
    const firstSelect = productBlock.querySelector('select[data-base-id="first-select"]') || productBlock.querySelector('select[id$="first-select"]');
    if (firstSelect && firstSelect.value) {
        const selectedSize = firstSelect.value;
        items.forEach((item) => {
            const targetInput = item.tagName === "INPUT" ? item : item.querySelector("input");
            if (!targetInput) return;
            const dataSizes = (targetInput.getAttribute("data-size") || "").split(" ");
            if (!dataSizes.includes(selectedSize)) {
                itemsToHide.add(item);
            }
        });
    }

    const skipValues = ["AllColor", "AllQUALITY", "FoilAll", "PPPETAll", "", "on"];

    // ▼ フィルターグループの処理
    productBlock.querySelectorAll(searchBox).forEach((box) => {
        const inputElement = box.querySelector("input");
        if (!inputElement) return;

        const currentName = inputElement.getAttribute("name");
        if (!currentName) return;

        let filterType = inputElement.getAttribute("data-base-name");
        if (!filterType) {
            const match = currentName.match(/\[([^\]]+)\]$/);
            filterType = match ? match[1] : currentName;
        }

        const searchData = getSelectedInputItems(productBlock, currentName);
        if (!searchData.length || skipValues.includes(searchData[0])) {
            return;
        }

        items.forEach((item) => {
            if (itemsToHide.has(item)) return;
            const targetInput = item.tagName === "INPUT" ? item : item.querySelector("input");
            if (!targetInput) return;

            const attr = targetInput.getAttribute(`data-${filterType}`);
            const itemDataArray = attr ? attr.split(" ") : [];

            if (searchData.filter((value) => itemDataArray.includes(value)).length === 0) {
                itemsToHide.add(item);
            }
        });
    });

    // ▼ 表示・非表示の適用
    items.forEach((item) => {
        if (itemsToHide.has(item)) {
            item.style.display = "none";
            item.classList.add(hideClass);
        } else {
            item.style.display = "block";
            item.classList.remove(hideClass);
        }
    });
}

function getSelectedInputItems(productBlock, inputName) {
    const searchData = [];
    productBlock.querySelectorAll(`input[type="radio"]:checked`).forEach((input) => {
        if (input.name === inputName) searchData.push(input.value);
    });
    return searchData;
}

// ==========================================
// 2. クリックイベント（イベントデリゲーション）
// ==========================================
document.addEventListener("click", function(e) {

    // --- フィルタータブ(label)がクリックされた時の補正処理 ---
    const filterLabel = e.target.closest('.filter_groups label');
    if (filterLabel) {
        const targetId = filterLabel.getAttribute('for');
        if (targetId) {
            const targetRadio = document.getElementById(targetId);
            if (targetRadio) {
                targetRadio.checked = true;
                targetRadio.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    }

    // --- モーダルを開く ---
    if (e.target.closest('.paper-modal-btn')) {
        const block = e.target.closest('.product-block');
        if (!block) return;
        const modal = block.querySelector('.modalOpen');
        if (modal) {
            modal.style.display = "block";
            searchFilter(block);
            refreshFilterAnimations(modal); // モーダル表示時にアニメーションを再トリガー
            document.body.style.overflow = "hidden";
        }
    }

    // --- モーダルを閉じる ---
    if (e.target.matches('.close') || e.target.closest('.modal-close')) {
        const modal = e.target.closest('.modalOpen');
        if (modal) {
            modal.style.display = "none";
            document.body.style.overflow = "visible";
        }
    }

    // --- 用紙を選択したとき ---
    const selectDataLabel = e.target.closest('.select-data');
    if (selectDataLabel) {
        const block = selectDataLabel.closest('.product-block');
        const targetInput = selectDataLabel.tagName === "INPUT" ? selectDataLabel : selectDataLabel.querySelector('input[type="radio"]');

            if (targetInput && block) {
            targetInput.checked = true;

            // Mailform Proと他の変更監視処理に通知
            targetInput.dispatchEvent(
            new Event('change', { bubbles: true })
            );
            const selectedValueDiv = block.querySelector('.selected-value-display') || 
                                     block.querySelector('[data-base-id="selected-value"]') ||
                                     block.querySelector('#selected-value');

            if (selectedValueDiv) {
                selectedValueDiv.textContent = "選択用紙: " + targetInput.value;
                selectedValueDiv.style.color = ""; 
            }

            const modal = block.querySelector('.modalOpen');
            if (modal) {
                modal.style.display = "none";
                document.body.style.overflow = "visible";
            }
        }
    }
});

// ==========================================
// 3. 変更イベント（絞り込み・サイズ変更）
// ==========================================
document.addEventListener("change", (event) => {
    const block = event.target.closest('.product-block');
    if (!block) return;

    if (event.target.closest(searchBox)) {
        searchFilter(block);
    }

    if (event.target.getAttribute("data-base-id") === "first-select" || event.target.id.includes("first-select")) {
        const selectedValueDiv = block.querySelector('.selected-value-display') || 
                                 block.querySelector('[data-base-id="selected-value"]') ||
                                 block.querySelector('#selected-value');
                                 
        if (selectedValueDiv) selectedValueDiv.textContent = "";

        const allColorRadios = block.querySelectorAll('input[value="AllColor"]');
        if (allColorRadios.length > 0) allColorRadios[0].checked = true;

        searchFilter(block);
    }
});


// ================================================
// 4. 商品1〜3をMailform Proの初期化より先に生成する
// ================================================
window.prepareOrderProductsForMFP = function () {
  const container = document.getElementById('products-container');
  const template = document.getElementById('product-template');
  const addButton = document.getElementById('add-product-btn');
  const productSelect = document.getElementById('pageJump');

  if (!container || !template || !productSelect) return;
  if (container.dataset.orderPrepared === '1') return;
  container.dataset.orderPrepared = '1';

  const MAX = 3;
  let activeCount = 1;
  const blocks = [];

  // 加工オプションの確認画面用テキスト
  function updateOptions(block) {
    const pp = block.querySelector('[data-base-name="PP加工・PET加工"]');
    const cut = block.querySelector('[data-base-name="プロッター・カット加工"]');
    const summary = block.querySelector('.mfp-order-summary');

    if (summary) {
      summary.value =
        'PP加工・PET加工：' +
        (pp && pp.value ? pp.value : 'なし') +
        '／プロッター・カット加工：' +
        (cut && cut.value ? cut.value : 'なし');
    }
  }

  // 選択済み用紙の表示を更新
  function refreshPaper(block) {
    const selected = block.querySelector('input[data-base-name="印刷用紙"]:checked');
    const display = block.querySelector('.selected-value-display');

    if (display) {
      display.textContent = selected ? '選択用紙: ' + selected.value : '';
    }
  }

  // 使用していない商品の入力欄を無効化
  function setActive(block, active) {
    block.style.display = active ? '' : 'none';

    block.querySelectorAll('input,select,textarea').forEach(el => {
      // required情報はMFP側で保持する
      // ここではdisabledのみ変更する
      el.disabled = !active;
    });
  }

  // ================================================
  // 最初に商品1〜3をすべてDOMへ登録
  // ================================================
  for (let n = 1; n <= MAX; n++) {
    const clone = template.content.cloneNode(true);
    const block = clone.querySelector('.product-block');
    const usedIds = Object.create(null);

    // nameを連番化
    block.querySelectorAll('input,select,textarea').forEach(el => {
      if (el.dataset.baseName) {
        el.name = el.dataset.baseName + n;
      }

      // 用紙絞り込み用radioを確認画面から除外
      if (el.closest('.filter_groups')) {
        el.dataset.postDisable = '1';
      }
    });

    // IDを連番化し、重複IDも解消
    block.querySelectorAll('[id]').forEach(el => {
      const base = el.dataset.baseId || el.id;

      if (base.indexOf('errormsg_') === 0) {
        el.id = base + n;
      } else {
        usedIds[base] = (usedIds[base] || 0) + 1;
        el.id = base + '_' + n + (usedIds[base] > 1 ? '_' + usedIds[base] : '');
      }
    });

    // labelのfor属性を更新
    block.querySelectorAll('label[data-base-for]').forEach(label => {
      label.htmlFor = label.dataset.baseFor + '_' + n;
    });

    const title = block.querySelector('.product-title');
    title.textContent = '【商品 ' + n + '】';
    title.style.display = n === 1 ? 'none' : '';

    // メール送信用の商品名
    const product = document.createElement('input');
    product.type = 'hidden';
    product.name = '商品' + n;
    product.id = 'order_product_' + n;
    product.className = 'hidden-product-name';
    product.value = productSelect.value;
    block.appendChild(product);

    // 確認画面に表示する加工オプション
    // text型としてMFPに登録し、入力画面では非表示
    const summary = document.createElement('input');
    summary.type = 'text';
    summary.name = '加工オプション' + n;
    summary.id = 'order_options_' + n;
    summary.className = 'mfp-order-summary';
    summary.readOnly = true;
    summary.style.display = 'none';
    block.appendChild(summary);

    container.appendChild(clone);
    blocks.push(block);

    updateOptions(block);
    setActive(block, n === 1);
  }

  // ================================================
  // 商品の表示を更新
  // ================================================
  function refreshUI() {
    blocks.forEach((block, i) => {
      setActive(block, i < activeCount);

      const del = block.querySelector('.delete-product-btn');

      if (del) {
        del.style.display = i === 0 ? 'none' : '';
      }

      if (i < activeCount) {
        refreshPaper(block);
        updateOptions(block);

        if (typeof searchFilter === 'function') {
          searchFilter(block);
        }
      }
    });

    if (addButton) {
      addButton.style.display = activeCount < MAX ? '' : 'none';
    }
  }

  // ================================================
  // 商品の入力内容をリセット
  // ================================================
  function resetBlock(block) {
    block.querySelectorAll('input,select,textarea').forEach(el => {
      if (
        el.classList.contains('hidden-product-name') ||
        el.classList.contains('mfp-order-summary')
      ) {
        return;
      }

      if (el.type === 'radio' || el.type === 'checkbox') {
        el.checked = el.defaultChecked;
      } else if (el.tagName === 'SELECT') {
        el.selectedIndex = 0;
      } else {
        el.value = '';
      }
    });

    block.querySelectorAll('.mfp_err').forEach(err => {
      err.textContent = '';
      err.style.display = 'none';
    });
  }

  // ================================================
  // 商品削除時に次の商品の値を前へ移動
  // ================================================
  function copyValues(from, to) {
    const sources = from.querySelectorAll('input,select,textarea');
    const targets = to.querySelectorAll('input,select,textarea');

    sources.forEach((source, i) => {
      const target = targets[i];

      if (
        !target ||
        target.classList.contains('hidden-product-name') ||
        target.classList.contains('mfp-order-summary')
      ) {
        return;
      }

      if (source.type === 'radio' || source.type === 'checkbox') {
        target.checked = source.checked;
      } else {
        target.value = source.value;
      }
    });
  }

  // ================================================
  // 商品追加ボタン
  // ================================================
  if (addButton) {
    addButton.addEventListener('click', function () {
      if (activeCount >= MAX) return;

      resetBlock(blocks[activeCount]);
      activeCount++;
      refreshUI();
    });
  }

  // ================================================
  // 商品削除ボタン
  // ================================================
  container.addEventListener('click', function (event) {
    const button = event.target.closest('.delete-product-btn');

    if (!button) return;

    const index = blocks.indexOf(button.closest('.product-block'));

    if (index < 1 || index >= activeCount) return;

    // MFPに登録したname/idは変更しない
    // 値だけを前の商品へ移動する
    for (let i = index; i < activeCount - 1; i++) {
      copyValues(blocks[i + 1], blocks[i]);
    }

    resetBlock(blocks[activeCount - 1]);
    activeCount--;

    refreshUI();
  });

  // ================================================
  // 商品選択変更時
  // ================================================
  productSelect.addEventListener('change', function () {
    blocks.forEach(block => {
      block.querySelector('.hidden-product-name').value = productSelect.value;
    });
  });

  // ================================================
  // 入力値変更時
  // ================================================
  document.addEventListener('change', function (event) {
    const block = event.target.closest('.product-block');

    if (!block) return;

    updateOptions(block);

    // サイズ変更時は印刷用紙の選択を解除
    if (event.target.dataset.baseName === 'サイズ') {
      block.querySelectorAll('input[data-base-name="印刷用紙"]').forEach(r => {
        r.checked = false;
      });

      refreshPaper(block);
    }
  });

  // 初期表示は商品1のみ
  refreshUI();
};

// ================================================
// 5. Mailform Pro確認画面の加工オプションを整理
// ================================================
window.installOrderMfpConfirmHook = function () {
  if (!window.mfp || !mfp.extend) return;

  // 確認画面生成後、表示する行を整理
  mfp.extend.event('confirm', function () {
    const table = document.createElement('table');

    table.innerHTML = '<tbody>' + mfp.ConfirmHTML + '</tbody>';

    Array.from(table.querySelectorAll('tr')).forEach(tr => {
      const th = tr.querySelector('th');
      const key = th ? th.textContent.trim() : '';

      // 加工オプションは集約行のみ表示
      // 商品1〜3のhidden値も確認画面では非表示
      if (/^(?:PP加工・PET加工|プロッター・カット加工|商品)[123]$/.test(key)) {
        tr.remove();
      }
    });

    mfp.ConfirmHTML = table.querySelector('tbody').innerHTML;
  });

  // 用紙絞り込み用のradioは注文データとして送信しない
  mfp.extend.event('send', function () {
    document.querySelectorAll('.product-block .filter_groups input').forEach(el => {
      el.disabled = true;
    });
  });
};

// 背景（#modal-bg）を表示（flex指定で中央寄せ）
$('#modal-bg').css('display', 'flex');

// 閉じる時
$('.close, #modal-bg').click(function(e) {
  if (e.target === this) {
    $('#modal-bg').hide();
  }
});

// --- 用紙を選択したとき ---
    // const selectDataLabel = e.target.closest('.select-data');
    // if (selectDataLabel) {
    //     const block = selectDataLabel.closest('.product-block');
    //     const targetInput = selectDataLabel.tagName === "INPUT" ? selectDataLabel : selectDataLabel.querySelector('input[type="radio"]');

    //     if (targetInput && block) {
    //         targetInput.checked = true;
            
    //         // ▼この1行を追加してMailform Proに変更を検知させます
    //         targetInput.dispatchEvent(new Event('change', { bubbles: true }));

    //         const selectedValueDiv = block.querySelector('.selected-value-display') || 
    //                                  block.querySelector('[data-base-id="selected-value"]') ||
    //                                  block.querySelector('#selected-value');

    //         if (selectedValueDiv) {
    //             selectedValueDiv.textContent = "選択用紙: " + targetInput.value;
    //             selectedValueDiv.style.color = ""; 
    //         }

    //         const modal = block.querySelector('.modalOpen');
    //         if (modal) {
    //             modal.style.display = "none";
    //             document.body.style.overflow = "visible";
    //         }
    //     }
    // }