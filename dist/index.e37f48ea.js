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
})({"d8XZh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
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
        assetsToAccept = [];
        assetsToDispose = [];
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
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _viewJs = require("./view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _addAsideMarkupJs = require("./views/addAsideMarkup.js");
var _addAsideMarkupJsDefault = parcelHelpers.interopDefault(_addAsideMarkupJs);
var _addHighlightsJs = require("./views/addHighlights.js");
var _addHighlightsJsDefault = parcelHelpers.interopDefault(_addHighlightsJs);
var _addDaysJs = require("./views/addDays.js");
var _addDaysJsDefault = parcelHelpers.interopDefault(_addDaysJs);
"use strict";
// DOM ELEMENTS
const _parentElement = document.querySelector(".weather-section--weather__display--box");
// FUNCTION
// FUNCTION USER INPUT
const userInputFunction = async function() {
    const id1 = document.querySelector(".aside__input--box__user--input").value;
    if (id1 === "") return;
    await _modelJs.getWeatherApi(id1);
    (0, _viewJsDefault.default).setData(_modelJs.state);
    (0, _addAsideMarkupJsDefault.default)._renderText(_modelJs.state);
    (0, _addHighlightsJsDefault.default).generateHighlightsMarkup(_modelJs.state);
    (0, _addDaysJsDefault.default).generateMarkupWeekDays(_modelJs.state);
};
// TODO:
// 1. Error handling
const renderErrorFunction = function() {
    const _errorMessage = "We could not find that location. Please try another one!";
    const errorMarkup = `<h1>${_errorMessage}</h1>`;
    _parentElement.insertAdjacentHTML("afterbegin", errorMarkup);
};
const displayErrorOnScreen = async function() {
    try {
        await _modelJs.getWeatherApi(id);
        console.log(_modelJs.state);
    } catch (error) {
        console.error(`🥲 ERROR IS WORKING`, error);
        renderErrorFunction(error);
    }
};
// APP INITIALIZATION
const init = function() {
    (0, _addAsideMarkupJsDefault.default).userInput(userInputFunction);
};
init();

},{"./model.js":"Y4A21","./view.js":"ky8MP","./views/addAsideMarkup.js":"4wDdN","./views/addHighlights.js":"gKboZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/addDays.js":"9OHQ7"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "getWeatherApi", ()=>getWeatherApi);
parcelHelpers.export(exports, "weatherObjectFunction", ()=>weatherObjectFunction);
"use strict";
const _KEY = "61956096fab848c5a78133732232204";
let state = {};
const getWeatherApi = async function(id) {
    try {
        const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${_KEY}&q=${id}&days=7&aqi=yes&alerts=no`);
        const json = await data.json();
        console.log(json);
        state = weatherObjectFunction(json);
        return weatherObjectFunction(json);
    } catch (error) {
        console.error(`${error} this is the error 🥲.`);
        throw error;
    }
};
const weatherObjectFunction = function(json) {
    try {
        return {
            id: json.location.name,
            location: json.location.name,
            time: json.location.localtime,
            temerature: json.current.temp_c,
            weatherCondition: json.current.condition.text,
            dailyChanceOfRain: json.forecast.forecastday[0].day.daily_chance_of_rain,
            indexUV: json.current.uv,
            windStatus: json.current.wind_kph,
            sunRise: json.forecast.forecastday[0].astro.sunrise,
            sunSet: json.forecast.forecastday[0].astro.sunset,
            humidity: json.current.humidity,
            visibility: json.current.vis_km,
            airQuality: json.current.air_quality["us-epa-index"],
            daysInTheWeek: json.forecast.forecastday
        };
    } catch (error) {
        console.error(error, `HEREEEEEEEEEEEEEE`);
        throw error;
    }
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

},{}],"ky8MP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
"use strict";
class Weather {
    _userForm = document.querySelector(".user__input");
    static data = {};
    constructor(){}
    static setData(data) {
        Weather.data = data;
        console.log(this.data);
    }
    static async getData(data) {}
}
exports.default = Weather;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4wDdN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AddAsideMarkup extends (0, _viewJsDefault.default) {
    _asideElement = document.querySelector(".aside__output--box");
    _daysInAWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    _date = new Date();
    constructor(){
        super();
    }
    userInput(handler) {
        this._userForm.addEventListener("submit", (e)=>{
            e.preventDefault();
            handler(this.data);
        });
    }
    _renderText(data) {
        const html = `
    <div class="aside__output--box__img--box">
          <div class="aside__output--box__img--box__icon">
            <i class="fa-regular fa-sun"></i>
          </div>
          <div class="aside__output--box__img--box__text">
            <p class="aside__output--box__img--box__text__degrees">${data.temerature}&#8451;</p>
            <div class="aside__output--box__img--box__text__location--box">
              <span class="aside__output--box__img--box__text__day"
                >${this._daysInAWeek[this._date.getDay()]}</span
              >
              <span class="aside__output--box__img--box__text__hour"
                >${data.time.split(" ").slice(1)}</span
              >
            </div>

            <div class="aside__output--box__img--box__text__weather_info--box">
              <span
                class="aside__output--box__img--box__text__weather_info--box--weather-type-one"
              >
                <i class="fa-solid fa-cloud-sun"></i>Mostly sunny</span
              >
              <span
                class="aside__output--box__img--box__text__weather_info--box--weather--type-two"
                >Rain chance ${data.dailyChanceOfRain}</span
              >
              <span
                class="aside__output--box__img--box__text__weather_info--box__location"
              >
                ${data.location}
              </span>
            </div>
          </div>
        </div>
    `;
        this._asideElement.insertAdjacentHTML("afterbegin", html);
    }
}
exports.default = new AddAsideMarkup();

},{"../view.js":"ky8MP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gKboZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../view.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class WeatherHighlights extends (0, _viewJsDefault.default) {
    _parentElementHighlights = document.querySelector(".weather-section--weather__highlights");
    constructor(){
        super();
    }
    generateHighlightsMarkup(data) {
        const html = `
      <h2 class="heading--primary">Today's highlights</h2>  
      <div class="weather-section--weather__highlights--box">
        <div class="weather-highlight--box">
          <h3>UV index</h3>
          <i class="fa-solid fa-temperature-low"></i>
          <span>${data.indexUV}</span>
        </div>
        <div class="weather-highlight--box">
          <h3>Wind Status</h3>
          <i class="fa-solid fa-wind"></i>
          <span>${data.windStatus} km/h</span>
        </div>
        <div class="weather-highlight--box">
          <h3>Sunrise & Sunset</h3>
          <div class="weather-highlight--box__inner-flex">
            <i class="fa-regular fa-sun"></i> <span>${data.sunRise}</span>
          </div>

        <div class="weather-highlight--box__inner-flex">
          <i class="fa-regular fa-moon"></i> <span>
          ${data.sunSet}</span>
        </div>
      </div>
      <div class="weather-highlight--box">
        <h3>Humidity</h3>
        <i class="fa-solid fa-temperature-low"></i>
        <span>${data.humidity}%</span>
      </div>
      <div class="weather-highlight--box">
        <h3>Visibility</h3>
        <i class="fa-solid fa-mountain"></i>
        <span>${data.visibility}km</span>
      </div>
      <div class="weather-highlight--box">
        <h3>Air Quality</h3>
        <i class="fa-solid fa-temperature-low"></i>
        <span>${data.airQuality}</span>
      </div>
    </div>
      `;
        this._parentElementHighlights.insertAdjacentHTML("afterbegin", html);
    }
}
exports.default = new WeatherHighlights();

},{"../view.js":"ky8MP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OHQ7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("../view");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddDaysOfTheWeek extends (0, _viewDefault.default) {
    _weekDaysElement = document.querySelector(".weather-section--weather__display--box");
    constructor(){
        super();
    }
    generateMarkupWeekDays(data) {
        const html = `
    <div
    class="weather-section--weather__display--box--weather__day--box">
    <h2>Monday</h2>
    <i class="fa-solid fa-cloud"></i>
    <div class="weather__day__morning--num--box">
      <span class="weather__day__morning--num">${data.daysInTheWeek[1].day.mintemp_c}&#8451;</span>
      <span class="weather__day__evening--num">${data.daysInTheWeek[1].day.maxtemp_c}&#8451;</span>
    </div>
  </div>

  <div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Tuesday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
    <span class="weather__day__morning--num">${data.daysInTheWeek[2].day.mintemp_c}&#8451;</span>
    <span class="weather__day__evening--num">${data.daysInTheWeek[2].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Wednesday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
    <span class="weather__day__morning--num">${data.daysInTheWeek[3].day.mintemp_c}&#8451;</span>
    <span class="weather__day__evening--num">${data.daysInTheWeek[3].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Thursday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${data.daysInTheWeek[4].day.mintemp_c}&#8451;</span>
  <span class="weather__day__evening--num">${data.daysInTheWeek[4].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Friday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${data.daysInTheWeek[5].day.mintemp_c}&#8451;</span>
  <span class="weather__day__evening--num">${data.daysInTheWeek[5].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Saturday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${data.daysInTheWeek[6].day.mintemp_c}&#8451;</span>
  <span class="weather__day__evening--num">${data.daysInTheWeek[6].day.maxtemp_c}&#8451;</span>
  </div>
</div>
<div
  class="weather-section--weather__display--box--weather__day--box">
  <h2>Sunday</h2>
  <i class="fa-solid fa-cloud"></i>
  <div class="weather__day__morning--num--box">
  <span class="weather__day__morning--num">${data.daysInTheWeek[0].day.mintemp_c}&#8451;</span>
  <span class="weather__day__evening--num">${data.daysInTheWeek[0].day.maxtemp_c}&#8451;</span>
  </div>
</div>
    `;
        this._weekDaysElement.insertAdjacentHTML("afterbegin", html);
    }
}
exports.default = new AddDaysOfTheWeek();

},{"../view":"ky8MP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["d8XZh","aenu9"], "aenu9", "parcelRequiref129")

//# sourceMappingURL=index.e37f48ea.js.map
