(async function() {
        while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        var big_cat = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/app.tsx
  var require_app = __commonJS({
    "src/app.tsx"() {
      "use strict";
      var style = document.createElement("style");
      document.head.appendChild(style);
      function waitForElement(selector, callback) {
        const el = document.querySelector(selector);
        if (el)
          return callback(el);
        const observer = new MutationObserver(() => {
          const el2 = document.querySelector(selector);
          if (el2) {
            observer.disconnect();
            callback(el2);
          }
        });
        observer.observe(document.body, { childList: true, subtree: true });
      }
      var button = new Spicetify.Topbar.Button("Biig Cat", "download", () => {
        waitForElement("#catjam-webm", (cat) => {
          console.log(cat);
          cat.style.display = "none";
          cat.id = "catjam-webm_old";
        });
        let vid = document.getElementsByClassName("main-nowPlayingView-coverArtContainer")[0];
        console.log(vid);
        vid.innerHTML = '<video loop="true" style="position: relative; scale: 1.2; top: 10%" autoplay="true" muted="true" src="https://github.com/BlafKing/spicetify-cat-jam-synced/raw/main/src/resources/catjam.webm" id="catjam-webm" class="big-cat"></video>';
        Spicetify.showNotification("Dr\xFCcke Ctrl + Shift + R um die Katze wieder zu verkleinern");
      });
      var btn = button.element.children[0];
      var catSvg = btn.children[0];
      catSvg.setAttribute("height", "32");
      catSvg.setAttribute("width", "32");
      catSvg.style.transform = "rotate(180deg)";
      button.disabled = false;
      console.log("[BIG-CAT] Extension started");
    }
  });

  // ../../../../tmp/spicetify-creator/index.jsx
  var import_app = __toESM(require_app());
  (async () => {
    await (0, import_app.default)();
  })();
})();

      })();