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
const game = new (0, _game.Game)();

},{"./Game":"TyEjs"}],"TyEjs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Game", ()=>Game);
var _board = require("./Board");
var _tetrominos = require("./constants/tetrominos");
var _game = require("./constants/game");
var _game1 = require("./templates/game");
var _piece = require("./Piece");
var _nextPieceBoard = require("./NextPieceBoard");
var _gameState = require("./GameState");
class Game {
    startButtonId = "startButton";
    restartButtonAttr = "data-restart-button";
    scoreId = "score";
    clearedLinesId = "clearedLines";
    levelId = "level";
    newGameId = "newGameOverlay";
    pauseId = "pauseOverlay";
    gameOverId = "gameOverOverlay";
    boardId = "board";
    nextPieceBoardId = "nextPieceBoard";
    gameTimer = {
        start: 0,
        elapsed: 0
    };
    constructor(){
        this.renderTemplate();
        this.startButton = document.getElementById(this.startButtonId);
        this.restartButton = document.querySelectorAll(`[${this.restartButtonAttr}]`);
        this.scoreElement = document.getElementById(this.scoreId);
        this.clearedlinesElement = document.getElementById(this.clearedLinesId);
        this.newGameElement = document.getElementById(this.newGameId);
        this.levelElement = document.getElementById(this.levelId);
        this.pauseElement = document.getElementById(this.pauseId);
        this.gameOverElement = document.getElementById(this.gameOverId);
        this.state = new (0, _gameState.GameState)(this);
        this.board = new (0, _board.Board)(this.boardId);
        this.nextPieceBoard = new (0, _nextPieceBoard.NextPieceBoard)(this.nextPieceBoardId);
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
        this.attachEventHandlers();
    }
    startGame() {
        this.setGameOptions();
        this.newGameElement.classList.remove("is-visible");
        this.movePiece({
            direction: (0, _game.DIRECTIONS).NO_CHANGE
        });
        this.nextPieceBoard.draw(this.nextPiece);
        this.startGameLoop();
    }
    restartGame() {
        this.stopGameLoop();
        this.resetGame();
        this.newGameElement.classList.add("is-visible");
        this.pauseElement.classList.remove("is-visible");
        this.gameOverElement.classList.remove("is-visible");
    }
    renderTemplate() {
        const body = document.querySelector("body");
        body.insertAdjacentHTML("afterbegin", (0, _game1.gameTemplate));
    }
    attachEventHandlers() {
        this.startButton.addEventListener("click", (e)=>{
            this.startGame();
            e.target.blur();
        });
        this.restartButton.forEach((button)=>{
            button.addEventListener("click", (e)=>{
                this.restartGame();
                e.target.blur();
            });
        });
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
    async startGameLoop(timeStamp) {
        this.gameTimer.elapsed = timeStamp - this.gameTimer.start;
        if (this.gameTimer.elapsed > this.state.speed) {
            this.gameTimer.start = timeStamp;
            this.movePiece({
                direction: (0, _game.DIRECTIONS).DOWN
            });
            if (this.state.isGameOver) return;
            if (this.piece.isLocked) {
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
            }
        }
        this.requestId = requestAnimationFrame(this.startGameLoop.bind(this));
    }
    stopGameLoop() {
        cancelAnimationFrame(this.requestId);
    }
    resetGame() {
        this.pauseElement.classList.remove("is-visible");
        this.gameOverElement.classList.remove("is-visible");
        this.state.reset();
        this.board = new (0, _board.Board)(this.boardId);
        this.piece = this.getRandomPiece();
        this.nextPiece = this.getRandomPiece();
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
        this.board.draw();
        if (userInput && direction === (0, _game.DIRECTIONS).DOWN) this.state.dropScore++;
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
    async checkLinesClear() {
        const linesCleared = this.board.getLinesCleared();
        if (linesCleared.length) {
            await this.board.handleClearLines(linesCleared);
            this.state.newLinesCleared = linesCleared.length;
        }
    }
    handleClickPause() {
        this.state.togglePause();
        this.pauseElement.classList.toggle("is-visible");
        if (!this.state.isPaused) this.startGameLoop();
        else this.stopGameLoop();
    }
    gameOver() {
        this.state.isGameOver = true;
        this.nextPieceBoard.clear();
        this.gameOverElement.classList.add("is-visible");
    }
}

},{"./Board":"4daYq","./constants/tetrominos":"dVpHQ","./constants/game":"be0O0","./templates/game":"gPbNQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./GameState":"4wLIF","./Piece":"6E5CQ","./NextPieceBoard":"dSE8P"}],"4daYq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Board", ()=>Board);
var _game = require("./constants/game");
var _colors = require("./constants/colors");
var _tetrominos = require("./constants/tetrominos");
var _utils = require("./Utils");
class Board {
    constructor(boardId){
        this.canvas = document.getElementById(boardId);
        this.context = this.canvas.getContext("2d");
        this.state = Array.from(Array((0, _game.ROWS)), ()=>Array((0, _game.COLS)).fill(0));
        this.create();
    }
    draw() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        for(let y = 0; y < this.state.length; y++)for(let x = 0; x < this.state[0].length; x++){
            const tetromino = (0, _tetrominos.TETROMINOS).find((tetromino)=>{
                return tetromino.id === this.state[y][x];
            });
            if (tetromino) this.context.fillStyle = tetromino.color;
            else this.context.fillStyle = (0, _colors.COLORS).white;
            this.context.fillRect(x, y, 1, 1);
        }
    }
    async handleClearLines(lines) {
        const animation = this.animateClearedLines(lines);
        await (0, _utils.Utils).sleep((0, _game.LINE_CLEAR_DELAY));
        clearInterval(animation);
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
    animateClearedLines(lines) {
        let brighten = true;
        let x = 99;
        return setInterval(()=>{
            lines.forEach((line)=>{
                this.state[line].forEach((cell, index)=>{
                    const tetromino = (0, _tetrominos.TETROMINOS).find((tetromino)=>{
                        return tetromino.id === cell;
                    });
                    if (tetromino) {
                        this.context.fillStyle = tetromino.color + x;
                        this.context.clearRect(index, line, 1, 1);
                        this.context.fillRect(index, line, 1, 1);
                    }
                });
            });
            brighten && x > 25 ? x-- : brighten = false;
            !brighten && x < 99 ? x++ : brighten = true;
        }, 1);
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
const LINE_CLEAR_DELAY = 1200;

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

},{}],"dVpQr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COLORS", ()=>COLORS);
const COLORS = {
    white: "#ffffff",
    red: "#ff6b6b",
    grape: "#cc5de8",
    indigo: "#5c7cfa",
    cyan: "#22b8cf",
    green: "#51cf66",
    yellow: "#fcc419",
    orange: "#ff922b"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dVpHQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TETROMINOS", ()=>TETROMINOS);
var _colors = require("./colors");
const TETROMINOS = [
    {
        id: 1,
        color: (0, _colors.COLORS).red,
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
        color: (0, _colors.COLORS).grape,
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
        color: (0, _colors.COLORS).indigo,
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
        color: (0, _colors.COLORS).cyan,
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
        color: (0, _colors.COLORS).green,
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
        color: (0, _colors.COLORS).yellow,
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
        color: (0, _colors.COLORS).orange,
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
class Utils {
    static sleep(ms) {
        return new Promise((resolve)=>setTimeout(resolve, ms));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gPbNQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gameTemplate", ()=>gameTemplate);
const gameTemplate = `
<div class="container">
    <div class="board-wrapper">
        <canvas id="board" class="board"></canvas>
        <div id="newGameOverlay" class="new-game-overlay is-visible">
            <form>
            <fieldset>
                <legend>Level select</legend>
                <div>
                    <label for="level0">0</label>
                    <input type="radio" name="level-select" id="level0" value="0" checked></input>
                </div>
                <div>
                    <label for="level1">1</label>
                    <input type="radio" name="level-select" id="level1" value="1"></input>
                </div>
                <div>
                    <label for="level2">2</label>
                    <input type="radio" name="level-select" id="level2" value="2"></input>
                </div>
                <div>
                    <label for="level3">3</label>
                    <input type="radio" name="level-select" id="level3" value="3"></input>
                </div>
                <div>
                    <label for="level4">4</label>
                    <input type="radio" name="level-select" id="level4" value="4"></input>
                </div>
                <div>
                    <label for="level5">5</label>
                    <input type="radio" name="level-select" id="level5" value="5"></input>
                </div>
                <div>
                    <label for="level6">6</label>
                    <input type="radio" name="level-select" id="level6" value="6"></input>
                </div>
                <div>
                    <label for="level7">7</label>
                    <input type="radio" name="level-select" id="level7" value="7"></input>
                </div>
                <div>
                    <label for="level8">8</label>
                    <input type="radio" name="level-select" id="level8" value="8"></input>
                </div>
                <div>
                    <label for="level9">9</label>
                    <input type="radio" name="level-select" id="level9" value="9"></input>
                </div>
            </fieldset>

            </form>
            <button type="button" id="startButton" class="start-button">Start</button>
        </div>
        <div id="pauseOverlay" class="pause-overlay">
            <span>Paused</span>
            <button type="button" data-restart-button class="restart-button">Restart Game</button>
        </div>
        <div id="gameOverOverlay" class="game-over-overlay">
            <span>Game over</span>
            <button type="button" data-restart-button class="restart-button">Restart Game</button>
        </div>
    </div>
    <div class="game-info">
        <div class="next-piece-container">
            <canvas id="nextPieceBoard" class="next-piece-canvas"></canvas>
        </div>
        <div class="game-score">
          <div>Score</div>
          <div id="score" class="score">0</div>
        </div>
        <div class="line-score">
          <div>Lines Cleared</div>
          <div id="clearedLines" class="cleared-lines">0</div>
        </div>
        <div class="level">
            <div>Level</div>
            <div id="level" class="level">0</div>
        </div>
        <div>
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
    </div>
</div>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wLIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameState", ()=>GameState);
var _game = require("./constants/game");
class GameState {
    score = 0;
    level = 0;
    isPaused = false;
    isGameOver = false;
    totalLinesCleared = 0;
    dropScore = 0;
    newLinesCleared = 0;
    constructor(game){
        this.game = game;
        this.speed = (0, _game.GAME_SPEEDS)[this.level];
    }
    reset() {
        this.totalLinesCleared = 0;
        this.dropScore = 0;
        this.score = 0;
        this.level = 0;
        this.speed = (0, _game.GAME_SPEEDS)[this.level];
        this.isPaused = false;
        this.isGameOver = false;
        this.game.levelElement.innerHTML = `${this.level}`;
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
        this.game.scoreElement.innerHTML = `${this.score}`;
        this.game.clearedlinesElement.innerHTML = `${this.totalLinesCleared}`;
    }
    setGameOptions(config) {
        const { level  } = config;
        this.setLevel(level);
    }
    setLevel(level) {
        this.level = level;
        this.speed = (0, _game.GAME_SPEEDS)[this.level];
        this.game.levelElement.innerHTML = `${this.level}`;
    }
    checkLevelChange() {
        if (this.totalLinesCleared > (this.level + 1) * (0, _game.LEVEL_LIMIT) && this.level < (0, _game.MAX_LEVEL)) this.setLevel(this.level + 1);
    }
    togglePause() {
        this.isPaused = !this.isPaused;
    }
}

},{"./constants/game":"be0O0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6E5CQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Piece", ()=>Piece);
var _game = require("./constants/game");
class Piece {
    isLocked = false;
    constructor(tetromino, board){
        this.id = tetromino.id;
        this.shapePosition = (0, _game.SPAWN_POSITION);
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
    isMoveValid(params) {
        this.clearPiecePosition();
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
                    x: this.shapePosition.x + valueIndex,
                    y: this.shapePosition.y + rowIndex
                });
            });
        });
        const config = {
            ...direction && {
                direction
            },
            piecePosition: newPiecePosition
        };
        if (!this.isBetweenWalls(config) || !this.isBetweenOtherPieces(config)) {
            this.updateBoardPosition({
                value: this.id
            });
            return false;
        }
        if (!this.isAboveFloor(config) || !this.isAboveOtherPieces(config)) {
            this.updateBoardPosition({
                value: this.id
            });
            this.lockPiece();
            return false;
        }
        this.updateBoardPosition({
            value: this.id
        });
        return true;
    }
    updatePiecePosition() {
        this.piecePosition = [];
        this.shapes[this.shapeIndex].forEach((row, rowIndex)=>{
            row.forEach((value, valueIndex)=>{
                if (value === 1) this.piecePosition.push({
                    x: this.shapePosition.x + valueIndex,
                    y: this.shapePosition.y + rowIndex
                });
            });
        });
    }
    updateBoardPosition({ direction =(0, _game.DIRECTIONS).NO_CHANGE , value =0  }) {
        this.shapePosition = {
            x: this.shapePosition.x + direction.x,
            y: this.shapePosition.y + direction.y
        };
        this.updatePiecePosition();
        this.piecePosition.forEach((pos)=>{
            this.board.state[pos.y][pos.x] = value;
        });
    }
    lockPiece() {
        this.isLocked = true;
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
            return this.board.state[point.y][xPosition] === 0;
        });
    }
    isAboveOtherPieces(params) {
        const { direction , piecePosition  } = params;
        return piecePosition.every((point)=>{
            const yPosition = direction ? point.y + direction.y : point.y;
            return this.board.state[yPosition][point.x] === 0;
        });
    }
    isBetweenWalls(params) {
        const { direction , piecePosition  } = params;
        return piecePosition.every((point)=>{
            const xPosition = direction ? point.x + direction.x : point.x;
            return xPosition >= 0 && xPosition < (0, _game.COLS);
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
}

},{"./constants/game":"be0O0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dSE8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NextPieceBoard", ()=>NextPieceBoard);
var _game = require("./constants/game");
var _colors = require("./constants/colors");
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
    constructor(boardId){
        this.canvas = document.getElementById(boardId);
        this.context = this.canvas.getContext("2d");
    }
    draw(piece) {
        const shape = piece.shapes[0];
        this.setCanvasDimensions(shape);
        for(let y = 0; y < shape.length; y++)for(let x = 0; x < shape[0].length; x++){
            if (shape[y][x] !== 0) this.context.fillStyle = piece.color;
            else this.context.fillStyle = (0, _colors.COLORS).white;
            this.context.fillRect(x, y, 1, 1);
        }
    }
    clear() {
        this.context.fillStyle = (0, _colors.COLORS).white;
        for(let y = 0; y < this.clearState.length; y++)for(let x = 0; x < this.clearState[0].length; x++)this.context.fillRect(x, y, 1, 1);
    }
    setCanvasDimensions(shape) {
        const height = shape.length === 2 ? 2 : shape.length - 1;
        this.context.canvas.width = shape.length * (0, _game.BLOCK_SIZE);
        this.context.canvas.height = height * (0, _game.BLOCK_SIZE);
        this.context.scale((0, _game.BLOCK_SIZE), (0, _game.BLOCK_SIZE));
    }
}

},{"./constants/game":"be0O0","./constants/colors":"dVpQr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["84Rv8","jeorp"], "jeorp", "parcelRequire477f")

//# sourceMappingURL=index.b7a05eb9.js.map
