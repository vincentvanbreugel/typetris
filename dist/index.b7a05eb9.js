// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"84Rv8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jeorp":[function(require,module,exports) {
var _game = require("./Game");
const game = new (0, _game.Game)("tetris");

},{"./Game":"TyEjs"}],"TyEjs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _litHtml = require("lit-html");
var _board = require("./Board");
var _tetrominos = require("./constants/tetrominos");
var _game = require("./constants/game");
var _templates = require("./templates");
var _piece = require("./Piece");
var _nextPieceBoard = require("./NextPieceBoard");
var _gameState = require("./GameState");
class Game {
    gameOptionsId = "gameOptions";
    overlayId = "gameOverlay";
    boardId = "board";
    gameTimer = {
        start: 0,
        elapsed: 0
    };
    constructor(elementId){
        this.renderGameTemplate(elementId);
        this.gameOptionsElement = document.getElementById(this.gameOptionsId);
        this.renderGameOptionsTemplate();
        this.overlayElement = document.getElementById(this.overlayId);
        this.state = new (0, _gameState.GameState)(this);
        this.board = new (0, _board.Board)(this.boardId);
        this.nextPieceBoard = new (0, _nextPieceBoard.NextPieceBoard)();
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
        this.attachEventHandlers();
    }
    startGame() {
        this.setGameOptions();
        this.renderGameOptionsTemplate("hide");
        this.movePiece({
            direction: (0, _game.DIRECTIONS).NO_CHANGE
        });
        this.nextPieceBoard.draw(this.nextPiece);
        this.startGameLoop();
    }
    restartGame() {
        this.stopGameLoop();
        this.state.reset();
        this.board = new (0, _board.Board)(this.boardId);
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
        this.renderOverlayTemplate("hide");
        this.renderGameOptionsTemplate();
    }
    renderGameTemplate(elementId) {
        const element = document.getElementById(elementId);
        (0, _litHtml.render)((0, _templates.gameTemplate)(), element);
    }
    renderGameOptionsTemplate(state = "show") {
        const data = {
            hide: state === "hide" ? true : false,
            startGame: this.startGame.bind(this)
        };
        (0, _litHtml.render)((0, _templates.gameOptionsTemplate)(data), this.gameOptionsElement);
    }
    renderOverlayTemplate(state) {
        const data = {
            text: state === "paused" ? "Paused" : "Game over",
            hide: state === "hide" ? true : false,
            restartGame: this.restartGame.bind(this)
        };
        (0, _litHtml.render)((0, _templates.overlayTemplate)(data), this.overlayElement);
    }
    attachEventHandlers() {
        document.addEventListener("keydown", (event)=>{
            switch(event.key){
                case (0, _game.KEYS).PAUSE:
                    this.handleClickPause();
                    break;
                case (0, _game.KEYS).HARD_DROP:
                    this.hardDrop();
                    break;
                case (0, _game.KEYS).DOWN:
                    this.movePiece({
                        direction: (0, _game.DIRECTIONS).DOWN,
                        userInput: true
                    });
                    break;
                case (0, _game.KEYS).LEFT:
                    this.movePiece({
                        direction: (0, _game.DIRECTIONS).LEFT,
                        userInput: true
                    });
                    break;
                case (0, _game.KEYS).RIGHT:
                    this.movePiece({
                        direction: (0, _game.DIRECTIONS).RIGHT,
                        userInput: true
                    });
                    break;
                case (0, _game.KEYS).ROTATE_CLOCKWISE:
                    this.rotatePiece("clockwise");
                    break;
                case (0, _game.KEYS).ROTATE_COUNTER_CLOCKWISE:
                    this.rotatePiece("counterClockwise");
                    break;
            }
        });
    }
    async startGameLoop(timeStamp = 0) {
        this.gameTimer.elapsed = timeStamp - this.gameTimer.start;
        if (this.gameTimer.elapsed > this.state.speed) {
            this.gameTimer.start = timeStamp;
            if (this.piece.isLocked) await this.handleLockedPiece();
            this.movePiece({
                direction: (0, _game.DIRECTIONS).DOWN
            });
            if (this.state.isGameOver) return;
        }
        this.requestId = requestAnimationFrame(this.startGameLoop.bind(this));
    }
    stopGameLoop() {
        cancelAnimationFrame(this.requestId);
    }
    setGameOptions() {
        const selectedLevel = document.querySelector('input[name="level-select"]:checked')?.value;
        this.state.setGameOptions({
            level: parseInt(selectedLevel, 10)
        });
    }
    movePiece(params) {
        const { direction , initialDrop , userInput  } = params;
        if (this.state.isPaused || !this.piece.isMoveValid({
            direction
        })) {
            if (initialDrop) this.gameOver();
            return;
        }
        this.piece.move(direction);
        if (userInput && direction === (0, _game.DIRECTIONS).DOWN) {
            this.state.dropScore++;
            if (this.piece.isLocked) this.handleLockedPiece();
        }
        this.board.draw();
    }
    rotatePiece(rotation) {
        if (this.state.isPaused || !this.piece.isMoveValid({
            rotation
        })) return;
        this.piece.rotate(rotation);
        this.board.draw();
    }
    hardDrop() {
        const cellsDropped = this.piece.hardDrop();
        this.state.dropScore = this.state.dropScore + cellsDropped * (0, _game.BASE_SCORE_HARD_DROP);
        this.board.draw();
        if (this.piece.isLocked) this.handleLockedPiece();
    }
    getRandomPiece() {
        let tetromino = this.getRandomTetromino();
        // re-roll once
        if (this.piece && tetromino.id === this.piece.id) tetromino = this.getRandomTetromino();
        return new (0, _piece.Piece)(tetromino, this.board);
    }
    getRandomTetromino() {
        const index = Math.floor(Math.random() * (0, _tetrominos.TETROMINOS).length);
        return JSON.parse(JSON.stringify((0, _tetrominos.TETROMINOS)[index]));
    }
    async handleLockedPiece() {
        this.stopGameLoop();
        await this.checkLinesClear();
        this.state.updateScore();
        this.state.checkLevelChange();
        this.piece = this.nextPiece;
        this.nextPiece = this.getRandomPiece();
        this.nextPieceBoard.draw(this.nextPiece);
        this.movePiece({
            direction: (0, _game.DIRECTIONS).NO_CHANGE,
            initialDrop: true
        });
        this.startGameLoop();
    }
    async checkLinesClear() {
        const linesCleared = this.board.getLinesCleared();
        if (linesCleared.length) {
            await this.board.handleClearLines(linesCleared);
            this.state.newLinesCleared = linesCleared.length;
        }
    }
    handleClickPause() {
        this.state.togglePause();
        if (!this.state.isPaused) {
            this.startGameLoop();
            this.renderOverlayTemplate("hide");
        } else {
            this.stopGameLoop();
            this.renderOverlayTemplate("paused");
        }
    }
    gameOver() {
        this.state.isGameOver = true;
        this.nextPieceBoard.clear();
        this.renderOverlayTemplate("gameOver");
    }
}

},{"lit-html":"1cmQt","./Board":"4daYq","./constants/tetrominos":"dVpHQ","./constants/game":"be0O0","./templates":"68iIp","./Piece":"6E5CQ","./NextPieceBoard":"dSE8P","./GameState":"4wLIF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1cmQt":[function(require,module,exports) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>L);
parcelHelpers.export(exports, "html", ()=>y);
parcelHelpers.export(exports, "noChange", ()=>x);
parcelHelpers.export(exports, "nothing", ()=>b);
parcelHelpers.export(exports, "render", ()=>Z);
parcelHelpers.export(exports, "svg", ()=>w);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = `lit$${(Math.random() + "").slice(9)}$`, n = "?" + o, l = `<${n}>`, h = document, r = (t = "")=>h.createComment(t), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, u = Array.isArray, c = (t)=>u(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, a = /-->/g, f = />/g, _ = RegExp(">|[ 	\n\f\r](?:([^\\s\"'>=/]+)([ 	\n\f\r]*=[ 	\n\f\r]*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)", "g"), m = /'/g, p = /"/g, $ = /^(?:script|style|textarea|title)$/i, g = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), y = g(1), w = g(2), x = Symbol.for("lit-noChange"), b = Symbol.for("lit-nothing"), T = new WeakMap, A = h.createTreeWalker(h, 129, null, !1), E = (t, i)=>{
    const s = t.length - 1, n = [];
    let h, r = 2 === i ? "<svg>" : "", d = v;
    for(let i1 = 0; i1 < s; i1++){
        const s1 = t[i1];
        let e1, u, c = -1, g = 0;
        for(; g < s1.length && (d.lastIndex = g, u = d.exec(s1), null !== u);)g = d.lastIndex, d === v ? "!--" === u[1] ? d = a : void 0 !== u[1] ? d = f : void 0 !== u[2] ? ($.test(u[2]) && (h = RegExp("</" + u[2], "g")), d = _) : void 0 !== u[3] && (d = _) : d === _ ? ">" === u[0] ? (d = null != h ? h : v, c = -1) : void 0 === u[1] ? c = -2 : (c = d.lastIndex - u[2].length, e1 = u[1], d = void 0 === u[3] ? _ : '"' === u[3] ? p : m) : d === p || d === m ? d = _ : d === a || d === f ? d = v : (d = _, h = void 0);
        const y = d === _ && t[i1 + 1].startsWith("/>") ? " " : "";
        r += d === v ? s1 + l : c >= 0 ? (n.push(e1), s1.slice(0, c) + "$lit$" + s1.slice(c) + o + y) : s1 + o + (-2 === c ? (n.push(void 0), i1) : y);
    }
    const u1 = r + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return [
        void 0 !== e ? e.createHTML(u1) : u1,
        n
    ];
};
class C {
    constructor({ strings: t , _$litType$: i  }, e){
        let l;
        this.parts = [];
        let h = 0, d = 0;
        const u = t.length - 1, c = this.parts, [v, a] = E(t, i);
        if (this.el = C.createElement(v, e), A.currentNode = this.el.content, 2 === i) {
            const t1 = this.el.content, i1 = t1.firstChild;
            i1.remove(), t1.append(...i1.childNodes);
        }
        for(; null !== (l = A.nextNode()) && c.length < u;){
            if (1 === l.nodeType) {
                if (l.hasAttributes()) {
                    const t2 = [];
                    for (const i2 of l.getAttributeNames())if (i2.endsWith("$lit$") || i2.startsWith(o)) {
                        const s1 = a[d++];
                        if (t2.push(i2), void 0 !== s1) {
                            const t3 = l.getAttribute(s1.toLowerCase() + "$lit$").split(o), i3 = /([.?@])?(.*)/.exec(s1);
                            c.push({
                                type: 1,
                                index: h,
                                name: i3[2],
                                strings: t3,
                                ctor: "." === i3[1] ? M : "?" === i3[1] ? k : "@" === i3[1] ? H : S
                            });
                        } else c.push({
                            type: 6,
                            index: h
                        });
                    }
                    for (const i4 of t2)l.removeAttribute(i4);
                }
                if ($.test(l.tagName)) {
                    const t4 = l.textContent.split(o), i5 = t4.length - 1;
                    if (i5 > 0) {
                        l.textContent = s ? s.emptyScript : "";
                        for(let s2 = 0; s2 < i5; s2++)l.append(t4[s2], r()), A.nextNode(), c.push({
                            type: 2,
                            index: ++h
                        });
                        l.append(t4[i5], r());
                    }
                }
            } else if (8 === l.nodeType) {
                if (l.data === n) c.push({
                    type: 2,
                    index: h
                });
                else {
                    let t5 = -1;
                    for(; -1 !== (t5 = l.data.indexOf(o, t5 + 1));)c.push({
                        type: 7,
                        index: h
                    }), t5 += o.length - 1;
                }
            }
            h++;
        }
    }
    static createElement(t, i) {
        const s = h.createElement("template");
        return s.innerHTML = t, s;
    }
}
function P(t, i, s = t, e) {
    var o, n, l, h;
    if (i === x) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = P(t, r._$AS(t, i.values), r, e)), i;
}
class V {
    constructor(t, i){
        this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    v(t) {
        var i;
        const { el: { content: s  } , parts: e  } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : h).importNode(s, !0);
        A.currentNode = o;
        let n = A.nextNode(), l = 0, r = 0, d = e[0];
        for(; void 0 !== d;){
            if (l === d.index) {
                let i1;
                2 === d.type ? i1 = new N(n, n.nextSibling, this, t) : 1 === d.type ? i1 = new d.ctor(n, d.name, d.strings, this, t) : 6 === d.type && (i1 = new I(n, this, t)), this.u.push(i1), d = e[++r];
            }
            l !== (null == d ? void 0 : d.index) && (n = A.nextNode(), l++);
        }
        return o;
    }
    p(t) {
        let i = 0;
        for (const s of this.u)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class N {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = b, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cm = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cm;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = P(this, t, i), d(t) ? t === b || null == t || "" === t ? (this._$AH !== b && this._$AR(), this._$AH = b) : t !== this._$AH && t !== x && this.g(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : c(t) ? this.k(t) : this.g(t);
    }
    O(t, i = this._$AB) {
        return this._$AA.parentNode.insertBefore(t, i);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    g(t) {
        this._$AH !== b && d(this._$AH) ? this._$AA.nextSibling.data = t : this.T(h.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        var i;
        const { values: s , _$litType$: e  } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = C.createElement(e.h, this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.p(s);
        else {
            const t1 = new V(o, this), i1 = t1.v(this.options);
            t1.p(s), this.T(i1), this._$AH = t1;
        }
    }
    _$AC(t) {
        let i = T.get(t.strings);
        return void 0 === i && T.set(t.strings, i = new C(t)), i;
    }
    k(t) {
        u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new N(this.O(r()), this.O(r()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i1 = t.nextSibling;
            t.remove(), t = i1;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cm = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class S {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = b, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = b;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = P(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== x, n && (this._$AH = t);
        else {
            const e1 = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = P(this, e1[s + l], i, l), h === x && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === b ? t = b : t !== b && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === b ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class M extends S {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === b ? void 0 : t;
    }
}
const R = s ? s.emptyScript : "";
class k extends S {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== b ? this.element.setAttribute(this.name, R) : this.element.removeAttribute(this.name);
    }
}
class H extends S {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = P(this, t, i, 0)) && void 0 !== s ? s : b) === x) return;
        const e = this._$AH, o = t === b && e !== b || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== b && (e === b || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class I {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        P(this, t);
    }
}
const L = {
    P: "$lit$",
    A: o,
    M: n,
    C: 1,
    L: E,
    R: V,
    D: c,
    V: P,
    I: N,
    H: S,
    N: k,
    U: H,
    B: M,
    F: I
}, z = i.litHtmlPolyfillSupport;
null == z || z(C, N), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.5.0");
const Z = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t1 = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new N(i.insertBefore(r(), t1), t1, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4daYq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Board", ()=>Board);
var _game = require("./constants/game");
var _colors = require("./constants/colors");
var _tetrominos = require("./constants/tetrominos");
var _utils = require("./Utils");
class Board {
    animatedLines = [];
    animationTimer = {
        start: 0,
        elapsed: 0
    };
    constructor(boardId){
        this.canvas = document.getElementById(boardId);
        this.context = this.canvas.getContext("2d");
        this.state = Array.from(Array((0, _game.ROWS)), ()=>Array((0, _game.COLS)).fill(0));
        this.create();
    }
    draw() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.fillStyle = (0, _colors.COLORS).gray["darker"];
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        for(let y = 0; y < this.state.length; y++)for(let x = 0; x < this.state[0].length; x++){
            const tetromino = (0, _tetrominos.TETROMINOS).find((tetromino)=>{
                return tetromino.id === this.state[y][x];
            });
            tetromino && (0, _utils.Utils).drawMino(x, y, this.context, tetromino.color);
        }
    }
    async handleClearLines(lines) {
        this.animatedLines = lines;
        this.animateClearedLines();
        await (0, _utils.Utils).sleep((0, _game.LINE_CLEAR_DELAY));
        cancelAnimationFrame(this.requestId);
        this.animatedLines = [];
        this.clearLines(lines);
    }
    getLinesCleared() {
        const linesCleared = this.state.reduce((array, row, index)=>{
            if (row.every((col)=>col !== 0)) array.push(index);
            return array;
        }, []);
        return linesCleared || [];
    }
    clearLines(lines) {
        lines.forEach((line)=>{
            const currentState = JSON.parse(JSON.stringify(this.state));
            this.state.forEach((row, rowIndex)=>{
                if (rowIndex === 0) for(let i = 0; i < row.length; i++)row[i] = 0;
                if (rowIndex > 0 && rowIndex <= line) for(let i1 = 0; i1 < row.length; i1++)row[i1] = currentState[rowIndex - 1][i1];
            });
        });
    }
    animateClearedLines(timeStamp = 0) {
        this.context.fillStyle = (0, _colors.COLORS).gray["darker"];
        this.animationTimer.elapsed = timeStamp - this.animationTimer.start;
        if (this.animationTimer.elapsed >= (0, _game.LINE_CLEAR_DELAY) / 5) {
            this.animationTimer.start = timeStamp;
            this.animatedLines.forEach((line)=>{
                const lastClearedIndexFromLeft = this.state[line].indexOf(0);
                const nextIndexFromLeft = lastClearedIndexFromLeft !== -1 ? lastClearedIndexFromLeft - 1 : 4;
                const lastClearedIndexFromRight = this.state[line].lastIndexOf(0);
                const nextIndexFromRight = lastClearedIndexFromRight !== -1 ? lastClearedIndexFromRight + 1 : 5;
                this.context.clearRect(nextIndexFromLeft, line, 1, 1);
                this.context.clearRect(nextIndexFromRight, line, 1, 1);
                this.context.fillRect(nextIndexFromLeft, line, 1, 1);
                this.context.fillRect(nextIndexFromRight, line, 1, 1);
                this.state[line][nextIndexFromLeft] = 0;
                this.state[line][nextIndexFromRight] = 0;
            });
        }
        this.requestId = requestAnimationFrame(this.animateClearedLines.bind(this));
    }
    create() {
        this.context.canvas.width = (0, _game.COLS) * (0, _game.BLOCK_SIZE);
        this.context.canvas.height = (0, _game.ROWS) * (0, _game.BLOCK_SIZE);
        this.context.scale((0, _game.BLOCK_SIZE), (0, _game.BLOCK_SIZE));
    }
}

},{"./constants/game":"be0O0","./constants/colors":"dVpQr","./constants/tetrominos":"dVpHQ","./Utils":"7ma2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"be0O0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COLS", ()=>COLS);
parcelHelpers.export(exports, "ROWS", ()=>ROWS);
parcelHelpers.export(exports, "BLOCK_SIZE", ()=>BLOCK_SIZE);
parcelHelpers.export(exports, "SPAWN_POSITION", ()=>SPAWN_POSITION);
parcelHelpers.export(exports, "DIRECTIONS", ()=>DIRECTIONS);
parcelHelpers.export(exports, "KEYS", ()=>KEYS);
parcelHelpers.export(exports, "BASE_SCORES_LINE_CLEAR", ()=>BASE_SCORES_LINE_CLEAR);
parcelHelpers.export(exports, "BASE_SCORE_SOFT_DROP", ()=>BASE_SCORE_SOFT_DROP);
parcelHelpers.export(exports, "BASE_SCORE_HARD_DROP", ()=>BASE_SCORE_HARD_DROP);
parcelHelpers.export(exports, "GAME_SPEEDS", ()=>GAME_SPEEDS);
parcelHelpers.export(exports, "MAX_LEVEL", ()=>MAX_LEVEL);
parcelHelpers.export(exports, "LEVEL_LIMIT", ()=>LEVEL_LIMIT);
parcelHelpers.export(exports, "LINE_CLEAR_DELAY", ()=>LINE_CLEAR_DELAY);
const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const SPAWN_POSITION = {
    x: 4,
    y: 0
};
const DIRECTIONS = {
    NO_CHANGE: {
        y: 0,
        x: 0
    },
    LEFT: {
        y: 0,
        x: -1
    },
    DOWN: {
        y: 1,
        x: 0
    },
    RIGHT: {
        y: 0,
        x: 1
    }
};
const KEYS = {
    LEFT: "j",
    DOWN: "k",
    RIGHT: "l",
    ROTATE_CLOCKWISE: "d",
    ROTATE_COUNTER_CLOCKWISE: "s",
    HARD_DROP: "i",
    PAUSE: "p"
};
const BASE_SCORES_LINE_CLEAR = [
    40,
    100,
    300,
    1200
];
const BASE_SCORE_SOFT_DROP = 1;
const BASE_SCORE_HARD_DROP = 2;
const getSpeedinMilliSeconds = (frames)=>{
    return frames / 60 * 1000;
};
const GAME_SPEEDS = [
    getSpeedinMilliSeconds(53),
    getSpeedinMilliSeconds(49),
    getSpeedinMilliSeconds(45),
    getSpeedinMilliSeconds(41),
    getSpeedinMilliSeconds(37),
    getSpeedinMilliSeconds(33),
    getSpeedinMilliSeconds(28),
    getSpeedinMilliSeconds(22),
    getSpeedinMilliSeconds(17),
    getSpeedinMilliSeconds(11),
    getSpeedinMilliSeconds(10),
    getSpeedinMilliSeconds(9),
    getSpeedinMilliSeconds(8),
    getSpeedinMilliSeconds(7),
    getSpeedinMilliSeconds(6),
    getSpeedinMilliSeconds(6),
    getSpeedinMilliSeconds(5),
    getSpeedinMilliSeconds(5),
    getSpeedinMilliSeconds(4),
    getSpeedinMilliSeconds(4),
    getSpeedinMilliSeconds(3)
];
const MAX_LEVEL = 20;
const LEVEL_LIMIT = 10;
const LINE_CLEAR_DELAY = 400;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVpQr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COLORS", ()=>COLORS);
var _colors = require("tailwindcss/colors");
var _colorsDefault = parcelHelpers.interopDefault(_colors);
const COLORS = {
    gray: {
        lighter: (0, _colorsDefault.default).gray[100],
        light: (0, _colorsDefault.default).gray[300],
        neutral: (0, _colorsDefault.default).gray[500],
        dark: (0, _colorsDefault.default).gray[700],
        darker: (0, _colorsDefault.default).gray[900]
    },
    red: {
        lighter: (0, _colorsDefault.default).red[100],
        light: (0, _colorsDefault.default).red[300],
        neutral: (0, _colorsDefault.default).red[500],
        dark: (0, _colorsDefault.default).red[700],
        darker: (0, _colorsDefault.default).red[900]
    },
    orange: {
        lighter: (0, _colorsDefault.default).orange[100],
        light: (0, _colorsDefault.default).orange[300],
        neutral: (0, _colorsDefault.default).orange[500],
        dark: (0, _colorsDefault.default).orange[700],
        darker: (0, _colorsDefault.default).orange[900]
    },
    green: {
        lighter: (0, _colorsDefault.default).green[100],
        light: (0, _colorsDefault.default).green[300],
        neutral: (0, _colorsDefault.default).green[500],
        dark: (0, _colorsDefault.default).green[700],
        darker: (0, _colorsDefault.default).green[900]
    },
    purple: {
        lighter: (0, _colorsDefault.default).purple[100],
        light: (0, _colorsDefault.default).purple[300],
        neutral: (0, _colorsDefault.default).purple[500],
        dark: (0, _colorsDefault.default).purple[700],
        darker: (0, _colorsDefault.default).purple[900]
    },
    blue: {
        lighter: (0, _colorsDefault.default).blue[100],
        light: (0, _colorsDefault.default).blue[300],
        neutral: (0, _colorsDefault.default).blue[500],
        dark: (0, _colorsDefault.default).blue[700],
        darker: (0, _colorsDefault.default).blue[900]
    },
    cyan: {
        lighter: (0, _colorsDefault.default).cyan[100],
        light: (0, _colorsDefault.default).cyan[300],
        neutral: (0, _colorsDefault.default).cyan[500],
        dark: (0, _colorsDefault.default).cyan[700],
        darker: (0, _colorsDefault.default).cyan[900]
    },
    yellow: {
        lighter: (0, _colorsDefault.default).yellow[100],
        light: (0, _colorsDefault.default).yellow[300],
        neutral: (0, _colorsDefault.default).yellow[500],
        dark: (0, _colorsDefault.default).yellow[700],
        darker: (0, _colorsDefault.default).yellow[900]
    }
};

},{"tailwindcss/colors":"3Lpw2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Lpw2":[function(require,module,exports) {
let colors = require("./lib/public/colors");
module.exports = (colors.__esModule ? colors : {
    default: colors
}).default;

},{"./lib/public/colors":"197EX"}],"197EX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _log = /*#__PURE__*/ _interopRequireDefault(require("../util/log"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function warn({ version , from , to  }) {
    _log.default.warn(`${from}-color-renamed`, [
        `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
        "Update your configuration file to silence this warning."
    ]);
}
const _default = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a"
    },
    gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
    },
    zinc: {
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#3f3f46",
        800: "#27272a",
        900: "#18181b"
    },
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717"
    },
    stone: {
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917"
    },
    red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
    },
    orange: {
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#f97316",
        600: "#ea580c",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12"
    },
    amber: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
    },
    yellow: {
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#facc15",
        500: "#eab308",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12"
    },
    lime: {
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#a3e635",
        500: "#84cc16",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314"
    },
    green: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d"
    },
    emerald: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
    },
    teal: {
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dd4bf",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a"
    },
    cyan: {
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63"
    },
    sky: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#0284c7",
        700: "#0369a1",
        800: "#075985",
        900: "#0c4a6e"
    },
    blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
    },
    indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
    },
    violet: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
    },
    purple: {
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87"
    },
    fuchsia: {
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#f0abfc",
        400: "#e879f9",
        500: "#d946ef",
        600: "#c026d3",
        700: "#a21caf",
        800: "#86198f",
        900: "#701a75"
    },
    pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
    },
    rose: {
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337"
    },
    get lightBlue () {
        warn({
            version: "v2.2",
            from: "lightBlue",
            to: "sky"
        });
        return this.sky;
    },
    get warmGray () {
        warn({
            version: "v3.0",
            from: "warmGray",
            to: "stone"
        });
        return this.stone;
    },
    get trueGray () {
        warn({
            version: "v3.0",
            from: "trueGray",
            to: "neutral"
        });
        return this.neutral;
    },
    get coolGray () {
        warn({
            version: "v3.0",
            from: "coolGray",
            to: "gray"
        });
        return this.gray;
    },
    get blueGray () {
        warn({
            version: "v3.0",
            from: "blueGray",
            to: "slate"
        });
        return this.slate;
    }
};

},{"../util/log":"lXBVK"}],"lXBVK":[function(require,module,exports) {
var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    dim: ()=>dim,
    default: ()=>_default
});
const _picocolors = /*#__PURE__*/ _interopRequireDefault(require("picocolors"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let alreadyShown = new Set();
function log(type, messages, key) {
    typeof process !== "undefined" && undefined;
    if (key && alreadyShown.has(key)) return;
    if (key) alreadyShown.add(key);
    console.warn("");
    messages.forEach((message)=>console.warn(type, "-", message));
}
function dim(input) {
    return _picocolors.default.dim(input);
}
const _default = {
    info (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    warn (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    },
    risk (key, messages) {
        log(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
            key
        ] : [
            messages,
            key
        ]);
    }
};

},{"process":"d5jf4","picocolors":"1298x"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"1298x":[function(require,module,exports) {
var x = String;
var create = function() {
    return {
        isColorSupported: false,
        reset: x,
        bold: x,
        dim: x,
        italic: x,
        underline: x,
        inverse: x,
        hidden: x,
        strikethrough: x,
        black: x,
        red: x,
        green: x,
        yellow: x,
        blue: x,
        magenta: x,
        cyan: x,
        white: x,
        gray: x,
        bgBlack: x,
        bgRed: x,
        bgGreen: x,
        bgYellow: x,
        bgBlue: x,
        bgMagenta: x,
        bgCyan: x,
        bgWhite: x
    };
};
module.exports = create();
module.exports.createColors = create;

},{}],"dVpHQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TETROMINOS", ()=>TETROMINOS);
var _colors = require("./colors");
const TETROMINOS = [
    {
        id: 1,
        color: (0, _colors.COLORS).yellow,
        shapes: [
            [
                [
                    1,
                    1
                ],
                [
                    1,
                    1
                ]
            ],
            [
                [
                    1,
                    1
                ],
                [
                    1,
                    1
                ]
            ],
            [
                [
                    1,
                    1
                ],
                [
                    1,
                    1
                ]
            ],
            [
                [
                    1,
                    1
                ],
                [
                    1,
                    1
                ]
            ]
        ]
    },
    {
        id: 2,
        color: (0, _colors.COLORS).blue,
        shapes: [
            [
                [
                    1,
                    0,
                    0
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            [
                [
                    0,
                    1,
                    1
                ],
                [
                    0,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                [
                    0,
                    0,
                    0
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    0,
                    0,
                    1
                ]
            ],
            [
                [
                    0,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    0
                ],
                [
                    1,
                    1,
                    0
                ]
            ]
        ]
    },
    {
        id: 3,
        color: (0, _colors.COLORS).orange,
        shapes: [
            [
                [
                    0,
                    0,
                    1
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            [
                [
                    0,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    1
                ]
            ],
            [
                [
                    0,
                    0,
                    0
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    1,
                    0,
                    0
                ]
            ],
            [
                [
                    1,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    0
                ]
            ]
        ]
    },
    {
        id: 4,
        color: (0, _colors.COLORS).green,
        shapes: [
            [
                [
                    0,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    0
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            [
                [
                    0,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    1
                ],
                [
                    0,
                    0,
                    1
                ]
            ],
            [
                [
                    0,
                    0,
                    0
                ],
                [
                    0,
                    1,
                    1
                ],
                [
                    1,
                    1,
                    0
                ]
            ],
            [
                [
                    1,
                    0,
                    0
                ],
                [
                    1,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    0
                ]
            ]
        ]
    },
    {
        id: 5,
        color: (0, _colors.COLORS).red,
        shapes: [
            [
                [
                    1,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    1
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            [
                [
                    0,
                    0,
                    1
                ],
                [
                    0,
                    1,
                    1
                ],
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                [
                    0,
                    0,
                    0
                ],
                [
                    1,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    1
                ]
            ],
            [
                [
                    0,
                    1,
                    0
                ],
                [
                    1,
                    1,
                    0
                ],
                [
                    1,
                    0,
                    0
                ]
            ]
        ]
    },
    {
        id: 6,
        color: (0, _colors.COLORS).purple,
        shapes: [
            [
                [
                    0,
                    1,
                    0
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    0,
                    0,
                    0
                ]
            ],
            [
                [
                    0,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    1
                ],
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                [
                    0,
                    0,
                    0
                ],
                [
                    1,
                    1,
                    1
                ],
                [
                    0,
                    1,
                    0
                ]
            ],
            [
                [
                    0,
                    1,
                    0
                ],
                [
                    1,
                    1,
                    0
                ],
                [
                    0,
                    1,
                    0
                ]
            ]
        ]
    },
    {
        id: 7,
        color: (0, _colors.COLORS).cyan,
        shapes: [
            [
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0,
                    0
                ]
            ],
            [
                [
                    0,
                    0,
                    1,
                    0
                ],
                [
                    0,
                    0,
                    1,
                    0
                ],
                [
                    0,
                    0,
                    1,
                    0
                ],
                [
                    0,
                    0,
                    1,
                    0
                ]
            ],
            [
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    0,
                    0,
                    0,
                    0
                ],
                [
                    1,
                    1,
                    1,
                    1
                ],
                [
                    0,
                    0,
                    0,
                    0
                ]
            ],
            [
                [
                    0,
                    1,
                    0,
                    0
                ],
                [
                    0,
                    1,
                    0,
                    0
                ],
                [
                    0,
                    1,
                    0,
                    0
                ],
                [
                    0,
                    1,
                    0,
                    0
                ]
            ]
        ]
    }
];

},{"./colors":"dVpQr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ma2M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Utils", ()=>Utils);
var _game = require("./constants/game");
class Utils {
    static sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
    static drawMino(x, y, context, color) {
        const borderWidth = 1 / (0, _game.BLOCK_SIZE);
        const offset = borderWidth * 2;
        context.fillStyle = color["light"];
        context.fillRect(x, y, 1, 1);
        context.fillStyle = color["neutral"];
        context.fillRect(x + borderWidth, y + borderWidth, 1 - offset, 1 - offset);
    }
}

},{"./constants/game":"be0O0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"68iIp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameTemplate", ()=>(0, _game.gameTemplate));
parcelHelpers.export(exports, "gameOptionsTemplate", ()=>(0, _gameOptions.gameOptionsTemplate));
parcelHelpers.export(exports, "nextPieceTemplate", ()=>(0, _nextPiece.nextPieceTemplate));
parcelHelpers.export(exports, "overlayTemplate", ()=>(0, _overlay.overlayTemplate));
parcelHelpers.export(exports, "controlsTemplate", ()=>(0, _controls.controlsTemplate));
parcelHelpers.export(exports, "scoreTemplate", ()=>(0, _score.scoreTemplate));
var _game = require("./game");
var _gameOptions = require("./gameOptions");
var _nextPiece = require("./nextPiece");
var _overlay = require("./overlay");
var _controls = require("./controls");
var _score = require("./score");

},{"./game":"gPbNQ","./gameOptions":"bJHL9","./nextPiece":"khlyX","./overlay":"kPR7L","./controls":"cKwU5","./score":"e22W5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPbNQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameTemplate", ()=>gameTemplate);
var _litHtml = require("lit-html");
var _controls = require("./controls");
const gameTemplate = ()=>{
    return (0, _litHtml.html)`<div class="flex gap-8 justify-around mx-auto mt-8">
        <div class="h-[604px] w-[300px] relative ml-auto">
            <canvas id="board" class="board"></canvas>
            <div id="gameOptions"></div>
            <div id="gameOverlay"></div>
        </div>
        <div class="mr-auto">
            <div id="nextPiece"></div>
            <div id="gameScore"></div>
            ${(0, _controls.controlsTemplate)()}
        </div>
    </div>`;
};

},{"lit-html":"1cmQt","./controls":"cKwU5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cKwU5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "controlsTemplate", ()=>controlsTemplate);
var _litHtml = require("lit-html");
const controlsTemplate = ()=>{
    return (0, _litHtml.html)`<div>
  <div>Controls</div>
    <div class="control">
        <span class="button">J</span>
        <span class="action">Move Left</span>
    </div>
    <div class="control">
        <span class="button">L</span>
        <span class="action">Move Right</span>
    </div>
    <div class="control">
        <span class="button">K</span>
        <span class="action">Move Down</span>
    </div>
    <div class="control">
        <span class="button">D</span>
        <span class="action">Rotate Clockwise</span>
    </div>
    <div class="control">
        <span class="button">S</span>
        <span class="action">Rotate Counter Clockwise</span>
    </div>
    <div class="control">
        <span class="button">I</span>
        <span class="action">Hard Drop</span>
    </div>
    <div class="control">
        <span class="button">P</span>
        <span class="action">Pause</span>
    </div>
  </div>
  `;
};

},{"lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bJHL9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameOptionsTemplate", ()=>gameOptionsTemplate);
var _litHtml = require("lit-html");
const levels = Array.from(Array(10).keys());
const gameOptionsTemplate = (data)=>{
    return (0, _litHtml.html)`<div
        class="game-options absolute top-0 right-0 bottom-0 left-0 bg-gray-900 items-center justify-center flex-col ${data.hide ? "hidden" : "flex"}"
    >
        <form class="mb-4">
            <fieldset>
                <legend>Level select</legend>
                ${levels.map((level)=>{
        return (0, _litHtml.html)`<div>
                            <label for="level${level}">${level}</label>
                            <input type="radio" name="level-select" id="level${level}" value=${level} ?checked=${level === 0}></input>
                        </div>`;
    })}
            </fieldset>
        </form>
        <button type="button" @click=${data.startGame} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Start
        </button>
    </div>`;
};

},{"lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"khlyX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "nextPieceTemplate", ()=>nextPieceTemplate);
var _litHtml = require("lit-html");
const nextPieceTemplate = ()=>{
    return (0, _litHtml.html)`<div class="next-piece-container bg-gray-900 h-[140px] w-[140px] mb-3 flex items-center justify-center">
        <canvas id="nextPieceBoard" class="next-piece-canvas"></canvas>
    </div>`;
};

},{"lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPR7L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "overlayTemplate", ()=>overlayTemplate);
var _litHtml = require("lit-html");
const overlayTemplate = (data)=>{
    return (0, _litHtml.html)`<div
        class="game-overlay absolute top-0 right-0 bottom-0 left-0 bg-gray-900 items-center justify-center flex-col ${data.hide ? "hidden" : "flex"}"
    >
        <span class="mb-4">${data.text}</span>
        <button type="button" @click=${data.restartGame} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Start new game
        </button>
    </div>`;
};

},{"lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e22W5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scoreTemplate", ()=>scoreTemplate);
var _litHtml = require("lit-html");
const scoreTemplate = (data)=>{
    return (0, _litHtml.html)`<div class="mb-3">
            <div>Score</div>
            <div class="score">${data.score}</div>
        </div>
        <div class="mb-3">
            <div>Lines Cleared</div>
            <div class="cleared-lines">${data.clearedLines}</div>
        </div>
        <div class="mb-3">
            <div>Level</div>
            <div class="level">${data.level}</div>
        </div>`;
};

},{"lit-html":"1cmQt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6E5CQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Piece", ()=>Piece);
var _game = require("./constants/game");
class Piece {
    isLocked = false;
    constructor(tetromino, board){
        this.id = tetromino.id;
        this.anchorPoint = (0, _game.SPAWN_POSITION);
        this.piecePosition = [];
        this.shapes = tetromino.shapes;
        this.color = tetromino.color;
        this.shapeIndex = 0;
        this.board = board;
    }
    move(direction) {
        this.clearPiecePosition();
        this.updateBoardPosition({
            direction,
            value: this.id
        });
        this.isLocked = this.isPieceLocked();
    }
    rotate(rotation) {
        if (rotation === "clockwise") this.incrementShapeIndex();
        else this.decrementShapeIndex();
        this.move((0, _game.DIRECTIONS).NO_CHANGE);
    }
    hardDrop() {
        let cellsDropped = 0;
        while(this.isMoveValid({
            direction: (0, _game.DIRECTIONS).DOWN
        })){
            this.move((0, _game.DIRECTIONS).DOWN);
            cellsDropped++;
        }
        return cellsDropped;
    }
    isPieceLocked() {
        const params = {
            direction: (0, _game.DIRECTIONS).DOWN,
            piecePosition: this.getCopyPiecePosition()
        };
        return !this.isAboveFloor(params) || !this.isAboveOtherPieces(params);
    }
    isMoveValid(params) {
        const { direction , rotation  } = params;
        const newPiecePosition = [];
        let newShapeIndex = this.shapeIndex;
        if (rotation) {
            if (rotation === "clockwise") this.shapeIndex !== 3 ? newShapeIndex++ : newShapeIndex = 0;
            else this.shapeIndex !== 0 ? newShapeIndex-- : newShapeIndex = 3;
        }
        this.shapes[newShapeIndex].forEach((row, rowIndex)=>{
            row.forEach((value, valueIndex)=>{
                if (value === 1) newPiecePosition.push({
                    x: this.anchorPoint.x + valueIndex,
                    y: this.anchorPoint.y + rowIndex
                });
            });
        });
        const config = {
            ...direction && {
                direction
            },
            piecePosition: newPiecePosition
        };
        if (!this.isBetweenWalls(config) || !this.isBetweenOtherPieces(config)) return false;
        if (!this.isAboveFloor(config) || !this.isAboveOtherPieces(config)) return false;
        return true;
    }
    updatePiecePosition() {
        this.piecePosition = [];
        this.shapes[this.shapeIndex].forEach((row, rowIndex)=>{
            row.forEach((value, valueIndex)=>{
                if (value === 1) this.piecePosition.push({
                    x: this.anchorPoint.x + valueIndex,
                    y: this.anchorPoint.y + rowIndex
                });
            });
        });
    }
    updateBoardPosition({ direction =(0, _game.DIRECTIONS).NO_CHANGE , value =0  }) {
        this.anchorPoint = {
            x: this.anchorPoint.x + direction.x,
            y: this.anchorPoint.y + direction.y
        };
        this.updatePiecePosition();
        this.piecePosition.forEach((pos)=>{
            this.board.state[pos.y][pos.x] = value;
        });
    }
    incrementShapeIndex() {
        this.shapeIndex !== 3 ? this.shapeIndex++ : this.shapeIndex = 0;
    }
    decrementShapeIndex() {
        this.shapeIndex !== 0 ? this.shapeIndex-- : this.shapeIndex = 3;
    }
    isBetweenOtherPieces(params) {
        const { direction , piecePosition  } = params;
        return piecePosition.every((point)=>{
            const xPosition = direction ? point.x + direction.x : point.x;
            return this.board.state[point.y][xPosition] === 0 || this.piecePosition.find((p)=>p.x === xPosition && p.y === point.y);
        });
    }
    isBetweenWalls(params) {
        const { direction , piecePosition  } = params;
        return piecePosition.every((point)=>{
            const xPosition = direction ? point.x + direction.x : point.x;
            return xPosition >= 0 && xPosition < (0, _game.COLS);
        });
    }
    isAboveOtherPieces(params) {
        const { direction , piecePosition  } = params;
        return piecePosition.every((point)=>{
            const yPosition = direction ? point.y + direction.y : point.y;
            // check if new point position on the board is either empty or taken up by one of the current Piece points.
            return this.board.state[yPosition][point.x] === 0 || this.piecePosition.find((p)=>p.x === point.x && p.y === yPosition);
        });
    }
    isAboveFloor(params) {
        const { direction , piecePosition  } = params;
        return piecePosition.every((point)=>{
            const yPosition = direction ? point.y + direction.y : point.y;
            return yPosition < (0, _game.ROWS);
        });
    }
    clearPiecePosition() {
        this.piecePosition.forEach((pos)=>{
            this.board.state[pos.y][pos.x] = 0;
        });
    }
    getCopyPiecePosition() {
        return Object.assign([], this.piecePosition);
    }
}

},{"./constants/game":"be0O0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSE8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NextPieceBoard", ()=>NextPieceBoard);
var _litHtml = require("lit-html");
var _templates = require("./templates");
var _game = require("./constants/game");
var _utils = require("./Utils");
class NextPieceBoard {
    clearState = [
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ],
        [
            0,
            0,
            0,
            0
        ]
    ];
    nextPieceElementId = "nextPiece";
    canvasId = "nextPieceBoard";
    constructor(){
        this.nextPieceElement = document.getElementById(this.nextPieceElementId);
        this.renderNextPieceTemplate();
        this.canvas = document.getElementById(this.canvasId);
        this.context = this.canvas.getContext("2d");
    }
    renderNextPieceTemplate() {
        (0, _litHtml.render)((0, _templates.nextPieceTemplate)(), this.nextPieceElement);
    }
    draw(piece) {
        const shape = piece.shapes[0];
        this.setCanvasDimensions(shape);
        for(let y = 0; y < shape.length; y++){
            for(let x = 0; x < shape[0].length; x++)if (shape[y][x] !== 0) (0, _utils.Utils).drawMino(x, y, this.context, piece.color);
        }
    }
    clear() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
    setCanvasDimensions(shape) {
        const height = shape.length === 2 ? 2 : shape.length - 1;
        this.context.canvas.width = shape.length * (0, _game.BLOCK_SIZE);
        this.context.canvas.height = height * (0, _game.BLOCK_SIZE);
        this.context.scale((0, _game.BLOCK_SIZE), (0, _game.BLOCK_SIZE));
    }
}

},{"lit-html":"1cmQt","./templates":"68iIp","./constants/game":"be0O0","./Utils":"7ma2M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wLIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameState", ()=>GameState);
var _litHtml = require("lit-html");
var _templates = require("./templates");
var _game = require("./constants/game");
class GameState {
    score = 0;
    level = 0;
    isPaused = false;
    isGameOver = false;
    totalLinesCleared = 0;
    dropScore = 0;
    newLinesCleared = 0;
    scoreElementId = "gameScore";
    constructor(game){
        this.game = game;
        this.speed = (0, _game.GAME_SPEEDS)[this.level];
        this.scoreElement = document.getElementById(this.scoreElementId);
        this.renderScoreTemplate();
    }
    renderScoreTemplate() {
        (0, _litHtml.render)((0, _templates.scoreTemplate)({
            score: this.score,
            clearedLines: this.totalLinesCleared,
            level: this.level
        }), this.scoreElement);
    }
    reset() {
        this.totalLinesCleared = 0;
        this.dropScore = 0;
        this.score = 0;
        this.level = 0;
        this.speed = (0, _game.GAME_SPEEDS)[this.level];
        this.isPaused = false;
        this.isGameOver = false;
        this.updateScore();
    }
    updateScore() {
        if (this.newLinesCleared) {
            this.score = this.score + (0, _game.BASE_SCORES_LINE_CLEAR)[this.newLinesCleared - 1] * (this.level + 1);
            this.totalLinesCleared = this.totalLinesCleared + this.newLinesCleared;
        }
        if (this.dropScore) this.score = this.score + this.dropScore * (0, _game.BASE_SCORE_SOFT_DROP);
        this.newLinesCleared = 0;
        this.dropScore = 0;
        this.renderScoreTemplate();
    }
    setGameOptions(config) {
        const { level  } = config;
        this.setLevel(level);
    }
    setLevel(level) {
        this.level = level;
        this.speed = (0, _game.GAME_SPEEDS)[this.level];
        this.renderScoreTemplate();
    }
    checkLevelChange() {
        if (this.totalLinesCleared > (this.level + 1) * (0, _game.LEVEL_LIMIT) && this.level < (0, _game.MAX_LEVEL)) this.setLevel(this.level + 1);
    }
    togglePause() {
        this.isPaused = !this.isPaused;
    }
}

},{"lit-html":"1cmQt","./templates":"68iIp","./constants/game":"be0O0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["84Rv8","jeorp"], "jeorp", "parcelRequire477f")

//# sourceMappingURL=index.b7a05eb9.js.map
