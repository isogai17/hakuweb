/* 件数切り替え。必ず Mailform Pro (id="mfpjs") より前で読み込みます。 */
(function () {
  "use strict";

  var first = document.getElementById("product-details-1");
  var panel = document.getElementById("product-details-2");
  var one = document.getElementById("product-count-1");
  var two = document.getElementById("product-count-2");
  if (!first || !panel || !one || !two || panel.children.length) return;

  // 用紙の必須チェックをモーダル外にも表示できるようにする。
  var paper = first.querySelector('.select-data input[name="印刷用紙"]');
  if (paper) {
    paper.required = true;
    if (!first.querySelector('[id="errormsg_印刷用紙"]')) {
      var error = document.createElement("div");
      error.id = "errormsg_印刷用紙";
      error.className = "mfp_err";
      var summary = first.querySelector(".selected-value");
      if (summary) summary.parentNode.insertBefore(error, summary.nextSibling);
    }
  }
  // 用紙一覧の絞り込み条件は注文データではないため、確認・送信から除く。
  first.querySelectorAll(".filter_groups input").forEach(function (input) {
    input.setAttribute("data-post-disable", "true");
  });

  var second = first.cloneNode(true);
  var ids = Object.create(null);
  var names = Object.create(null);
  [second].concat(Array.prototype.slice.call(second.querySelectorAll("[id]"))).forEach(function (element) {
    if (element.id) {
      ids[element.id] = element.id + "_2";
      element.id += "_2";
    }
  });
  second.querySelectorAll("[name]").forEach(function (element) {
    // HTML に記載した元の項目名を使う。添付の new_order.js と同じ方式。
    var original = element.getAttribute("data-base-name") || element.getAttribute("name");
    // 配列形式の name が将来追加されても末尾 [] は維持する。
    var renamed = original.replace(/(\[\])?$/, "_2$1");
    names[original] = renamed;
    element.setAttribute("data-original-name", original);
    element.setAttribute("data-base-name", original);
    element.setAttribute("name", renamed);
  });
  second.querySelectorAll("*").forEach(function (element) {
    ["for", "list", "aria-controls", "aria-labelledby", "aria-describedby", "data-parent"].forEach(function (attribute) {
      var value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, value.split(/\s+/).map(function (id) { return ids[id] || id; }).join(" "));
    });
    ["data-join", "data-unjoin"].forEach(function (attribute) {
      var value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, value.split("+").map(function (name) { return names[name] || name; }).join("+"));
    });
    var href = element.getAttribute("href");
    if (href && href.charAt(0) === "#" && ids[href.slice(1)]) element.setAttribute("href", "#" + ids[href.slice(1)]);
  });

  var heading = document.createElement("h3");
  heading.id = "product-details-2-heading";
  heading.className = "product-details-heading";
  heading.textContent = "2件目の商品";
  panel.setAttribute("role", "region");
  panel.appendChild(heading);
  panel.appendChild(second);

  var controls = Array.prototype.slice.call(second.querySelectorAll("input, select, textarea, button"));
  var defaults = controls.map(function (control) { return control.disabled; });
  var form = first.closest("form");

  function sync(animate) {
    var expanded = two.checked;
    // required は削除しない。MFP が初期化時に必須属性を内部へ取り込むため。
    controls.forEach(function (control, index) { control.disabled = !expanded || defaults[index]; });
    panel.setAttribute("aria-hidden", String(!expanded));
    panel.inert = !expanded;

    
    if (!expanded) {
      if (window.closeProductPaperModal) window.closeProductPaperModal(second);
      if (panel.contains(document.activeElement)) one.focus();
      panel.querySelectorAll(".mfp_err").forEach(function (error) { error.style.display = "none"; });
    }
    // 既存の発送欄と同じ jQuery による表示切り替えに、スライドを追加。
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.jQuery) {
      var box = window.jQuery(panel).stop(true, true);
      if (animate && !reduceMotion) {
        if (expanded) box.slideDown(220);
        else box.slideUp(220);
      } else box.toggle(expanded);
    } else {
      panel.style.display = expanded ? "block" : "none";
    }
  }

  [one, two].forEach(function (radio) {
    radio.addEventListener("change", function () { sync(true); });
  });
  // MFP の保存値復元、ブラウザの戻る／進む、リセットにも追従する。
  document.addEventListener("DOMContentLoaded", function () { sync(false); });
  window.addEventListener("load", function () { sync(false); });
  window.addEventListener("pageshow", function () { sync(false); });
  if (form) form.addEventListener("reset", function () {
    window.setTimeout(function () { sync(false); }, 0);
  });
  sync(false);
})();
