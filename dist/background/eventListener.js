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
})({"d8hwB":[function(require,module,exports) {
"use strict";
var HMR_HOST = "localhost";
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e792fbbdaa78ee84";
module.bundle.HMR_BUNDLE_ID = "144484b682beff4b";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
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

},{}],"5ymc4":[function(require,module,exports) {
var _anki = require("../anki");
var _logger = require("../logger");
var _messages = require("../messages");
chrome.runtime.onMessage.addListener(async (message)=>{
    switch(message.type){
        case _messages.MessageType.addNote:
            {
                const response = await _anki.addNote(message.payload);
                const body = await response.json();
                let notificationMessage = "Note added";
                if (body.error !== null) {
                    notificationMessage = body.error;
                    _logger.logger.error(body.error);
                }
                chrome.notifications.create("", {
                    message: notificationMessage,
                    iconUrl: "images/logo.png",
                    title: "Wiktionary ++",
                    type: "basic"
                });
                chrome.tabs.query({
                    active: true,
                    currentWindow: true
                }, (tabs)=>{
                    const [tab] = tabs;
                    if (tab === undefined) return;
                    const tabId = tab.id;
                    if (tabId === undefined) return;
                    chrome.tabs.sendMessage(tabId, {
                        type: _messages.MessageType.addNoteResponse,
                        payload: body
                    });
                });
                break;
            }
        default:
            _logger.logger.error(message, `Unexpected message type: ${message.type}`);
    }
});

},{"../anki":"7a5om","../logger":"llFXF","../messages":"cgXUU"}],"7a5om":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addNote", ()=>_addNote.addNote
);
var _addNote = require("./addNote");

},{"./addNote":"fZEHK","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"fZEHK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultAddNoteParams", ()=>getDefaultAddNoteParams
);
parcelHelpers.export(exports, "addNote", ()=>addNote
);
var _invokeAction = require("./invokeAction");
var _actions = require("./actions");
function getDefaultAddNoteParams({ front , back , deckName  }) {
    return {
        note: {
            deckName,
            modelName: "Basic",
            fields: {
                Front: front,
                Back: back
            },
            options: {
                allowDuplicate: false,
                duplicateScope: "deck",
                duplicateScopeOptions: {
                    deckName: null,
                    checkChildren: false,
                    checkAllModels: false
                }
            },
            tags: []
        }
    };
}
function addNote(params) {
    return _invokeAction.invokeAction({
        action: _actions.ActionType.AddNote,
        params: getDefaultAddNoteParams(params)
    });
}

},{"./invokeAction":"3qUPc","./actions":"cq3Lf","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"3qUPc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invokeAction", ()=>invokeAction
);
function invokeAction(params) {
    const body = JSON.stringify({
        ...params,
        version: 6
    });
    return fetch("http://127.0.0.1:8765", {
        method: "POST",
        body
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"boKlo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"cq3Lf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ActionType", ()=>ActionType
);
let ActionType;
(function(ActionType1) {
    ActionType1["AddNote"] = "addNote";
})(ActionType || (ActionType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"llFXF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logger", ()=>logger
);
var _pino = require("pino");
var _pinoDefault = parcelHelpers.interopDefault(_pino);
const logger = _pinoDefault.default();

},{"pino":"lV5td","@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}],"lV5td":[function(require,module,exports) {
'use strict';
const format = require('quick-format-unescaped');
module.exports = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue
};
function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
            return k !== '!stdSerializers.err';
        });
        return hasToFilter;
    } else if (serialize === true) return Object.keys(serializers);
    return false;
}
function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit1 = opts.browser.transmit;
    if (transmit1 && typeof transmit1.send !== 'function') throw Error('pino: transmit option must have a send function');
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf('!stdSerializers.err') > -1) stdErrSerialize = false;
    const levels = [
        'error',
        'fatal',
        'warn',
        'info',
        'debug',
        'trace'
    ];
    if (typeof proto === 'function') proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
    if (opts.enabled === false) opts.level = 'silent';
    const level1 = opts.level || 'info';
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    Object.defineProperty(logger, 'levelVal', {
        get: getLevelVal
    });
    Object.defineProperty(logger, 'level', {
        get: getLevel,
        set: setLevel
    });
    const setOpts = {
        transmit: transmit1,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
    };
    logger.levels = pino.levels;
    logger.level = level1;
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = child;
    if (transmit1) logger._logEvent = createLogEventShape();
    function getLevelVal() {
        return this.level === 'silent' ? Infinity : this.levels.values[this.level];
    }
    function getLevel() {
        return this._level;
    }
    function setLevel(level) {
        if (level !== 'silent' && !this.levels.values[level]) throw Error('unknown level ' + level);
        this._level = level;
        set(setOpts, logger, 'error', 'log') // <-- must stay first
        ;
        set(setOpts, logger, 'fatal', 'error');
        set(setOpts, logger, 'warn', 'error');
        set(setOpts, logger, 'info', 'log');
        set(setOpts, logger, 'debug', 'log');
        set(setOpts, logger, 'trace', 'log');
    }
    function child(bindings, childOptions) {
        if (!bindings) throw new Error('missing bindings for child Pino');
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) childOptions.serializers = bindings.serializers;
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            applySerializers([
                bindings
            ], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            this.error = bind(parent, bindings, 'error');
            this.fatal = bind(parent, bindings, 'fatal');
            this.warn = bind(parent, bindings, 'warn');
            this.info = bind(parent, bindings, 'info');
            this.debug = bind(parent, bindings, 'debug');
            this.trace = bind(parent, bindings, 'trace');
            if (childSerializers) {
                this.serializers = childSerializers;
                this._serialize = childSerialize;
            }
            if (transmit1) this._logEvent = createLogEventShape([].concat(parent._logEvent.bindings, bindings));
        }
        Child.prototype = this;
        return new Child(this);
    }
    return logger;
}
pino.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
    }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, {
    nullTime,
    epochTime,
    unixTime,
    isoTime
});
function set(opts, logger, level, fallback) {
    const proto = Object.getPrototypeOf(logger);
    logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
    wrap(opts, logger, level);
}
function wrap(opts, logger, level) {
    if (!opts.transmit && logger[level] === noop) return;
    logger[level] = function(write) {
        return function LOG() {
            const ts = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
            for(var i = 0; i < args.length; i++)args[i] = arguments[i];
            if (opts.serialize && !opts.asObject) applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
            if (opts.asObject) write.call(proto, asObject(this, level, args, ts));
            else write.apply(proto, args);
            if (opts.transmit) {
                const transmitLevel = opts.transmit.level || logger.level;
                const transmitValue = pino.levels.values[transmitLevel];
                const methodValue = pino.levels.values[level];
                if (methodValue < transmitValue) return;
                transmit(this, {
                    ts,
                    methodLevel: level,
                    methodValue,
                    transmitLevel,
                    transmitValue: pino.levels.values[opts.transmit.level || logger.level],
                    send: opts.transmit.send,
                    val: logger.levelVal
                }, args);
            }
        };
    }(logger[level]);
}
function asObject(logger, level, args, ts) {
    if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const o = {};
    if (ts) o.time = ts;
    o.level = pino.levels.values[level];
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    // deliberate, catching objects, arrays
    if (msg !== null && typeof msg === 'object') {
        while((lvl--) && typeof argsCloned[0] === 'object')Object.assign(o, argsCloned.shift());
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
    } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
    if (msg !== undefined) o.msg = msg;
    return o;
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for(const i in args){
        if (stdErrSerialize && args[i] instanceof Error) args[i] = pino.stdSerializers.err(args[i]);
        else if (typeof args[i] === 'object' && !Array.isArray(args[i])) {
            for(const k in args[i])if (serialize && serialize.indexOf(k) > -1 && k in serializers) args[i][k] = serializers[k](args[i][k]);
        }
    }
}
function bind(parent, bindings, level) {
    return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for(var i = 1; i < args.length; i++)args[i] = arguments[i - 1];
        return parent[level].apply(this, args);
    };
}
function transmit(logger, opts, args) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    applySerializers(args, logger._serialize || Object.keys(logger.serializers), logger.serializers, logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize);
    logger._logEvent.ts = ts;
    logger._logEvent.messages = args.filter(function(arg) {
        // bindings can only be objects, so reference equality check via indexOf is fine
        return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
    return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: {
            label: '',
            value: 0
        }
    };
}
function asErrValue(err) {
    const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
    };
    for(const key in err)if (obj[key] === undefined) obj[key] = err[key];
    return obj;
}
function getTimeFunction(opts) {
    if (typeof opts.timestamp === 'function') return opts.timestamp;
    if (opts.timestamp === false) return nullTime;
    return epochTime;
}
function mock() {
    return {};
}
function passthrough(a) {
    return a;
}
function noop() {}
function nullTime() {
    return false;
}
function epochTime() {
    return Date.now();
}
function unixTime() {
    return Math.round(Date.now() / 1000);
}
function isoTime() {
    return new Date(Date.now()).toISOString();
} // using Date.now() for testability
/* eslint-disable */ /* istanbul ignore next */ function pfGlobalThisOrFallback() {
    function defd(o) {
        return typeof o !== 'undefined' && o;
    }
    try {
        if (typeof globalThis !== 'undefined') return globalThis;
        Object.defineProperty(Object.prototype, 'globalThis', {
            get: function() {
                delete Object.prototype.globalThis;
                return this.globalThis = this;
            },
            configurable: true
        });
        return globalThis;
    } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
    }
} /* eslint-enable */ 

},{"quick-format-unescaped":"9aVKV"}],"9aVKV":[function(require,module,exports) {
'use strict';
function tryStringify(o) {
    try {
        return JSON.stringify(o);
    } catch (e) {
        return '"[Circular]"';
    }
}
module.exports = format;
function format(f, args, opts) {
    var ss = opts && opts.stringify || tryStringify;
    var offset = 1;
    if (typeof f === 'object' && f !== null) {
        var len = args.length + offset;
        if (len === 1) return f;
        var objects = new Array(len);
        objects[0] = ss(f);
        for(var index = 1; index < len; index++)objects[index] = ss(args[index]);
        return objects.join(' ');
    }
    if (typeof f !== 'string') return f;
    var argLen = args.length;
    if (argLen === 0) return f;
    var str = '';
    var a = 1 - offset;
    var lastPos = -1;
    var flen = f && f.length || 0;
    for(var i = 0; i < flen;){
        if (f.charCodeAt(i) === 37 && i + 1 < flen) {
            lastPos = lastPos > -1 ? lastPos : 0;
            switch(f.charCodeAt(i + 1)){
                case 100:
                case 102:
                    if (a >= argLen) break;
                    if (args[a] == null) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += Number(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 105:
                    if (a >= argLen) break;
                    if (args[a] == null) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += Math.floor(Number(args[a]));
                    lastPos = i + 2;
                    i++;
                    break;
                case 79:
                case 111:
                case 106:
                    if (a >= argLen) break;
                    if (args[a] === undefined) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    var type = typeof args[a];
                    if (type === 'string') {
                        str += '\'' + args[a] + '\'';
                        lastPos = i + 2;
                        i++;
                        break;
                    }
                    if (type === 'function') {
                        str += args[a].name || '<anonymous>';
                        lastPos = i + 2;
                        i++;
                        break;
                    }
                    str += ss(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 115:
                    if (a >= argLen) break;
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += String(args[a]);
                    lastPos = i + 2;
                    i++;
                    break;
                case 37:
                    if (lastPos < i) str += f.slice(lastPos, i);
                    str += '%';
                    lastPos = i + 2;
                    i++;
                    a--;
                    break;
            }
            ++a;
        }
        ++i;
    }
    if (lastPos === -1) return f;
    else if (lastPos < flen) str += f.slice(lastPos);
    return str;
}

},{}],"cgXUU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MessageType", ()=>MessageType
);
let MessageType;
(function(MessageType1) {
    MessageType1[MessageType1["addNote"] = 0] = "addNote";
    MessageType1[MessageType1["addNoteResponse"] = 1] = "addNoteResponse";
})(MessageType || (MessageType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"boKlo"}]},["d8hwB","5ymc4"], "5ymc4", "parcelRequiredbbd")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2SixZQUFZLENBQUM7QUFBMUssSUFBSSxRQUFRLEdBQUcsV0FBVyxBQUFDO0FBQUEsSUFBSSxRQUFRLEdBQUcsSUFBSSxBQUFDO0FBQUEsSUFBSSxVQUFVLEdBQUcsS0FBSyxBQUFDO0FBQUEsSUFBSSxZQUFZLEdBQUcsa0JBQWtCLEFBQUM7QUFBQSxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQztBQUU3SixTQUFTLGtCQUFrQixDQUFDLEdBQUcsRUFBRTtJQUFFLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksMkJBQTJCLENBQUMsR0FBRyxDQUFDLElBQUksa0JBQWtCLEVBQUUsQ0FBQztDQUFFO0FBRXpKLFNBQVMsa0JBQWtCLEdBQUc7SUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLHNJQUFzSSxDQUFDLENBQUM7Q0FBRTtBQUU5TCxTQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRTtJQUFFLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLEVBQUUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQUU7QUFFOUosU0FBUyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUU7SUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUFFO0FBRTNGLFNBQVMsMEJBQTBCLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRTtJQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQUFBQztJQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUssQ0FBQSxFQUFFLEdBQUcsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLENBQUEsSUFBSyxjQUFjLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxBQUFDO1lBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsRUFBRSxBQUFDO1lBQUMsT0FBTztnQkFBRSxDQUFDLEVBQUUsQ0FBQztnQkFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUc7b0JBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPO3dCQUFFLElBQUksRUFBRSxJQUFJO3FCQUFFLENBQUM7b0JBQUMsT0FBTzt3QkFBRSxJQUFJLEVBQUUsS0FBSzt3QkFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3FCQUFFLENBQUM7aUJBQUU7Z0JBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFBRSxNQUFNLEVBQUUsQ0FBQztpQkFBRTtnQkFBRSxDQUFDLEVBQUUsQ0FBQzthQUFFLENBQUM7U0FBRTtRQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsdUlBQXVJLENBQUMsQ0FBQztLQUFFO0lBQUMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLEVBQUUsTUFBTSxHQUFHLEtBQUssRUFBRSxHQUFHLEFBQUM7SUFBQyxPQUFPO1FBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHO1lBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FBRTtRQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsR0FBRztZQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQUFBQztZQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBQyxPQUFPLElBQUksQ0FBQztTQUFFO1FBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUFFLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQUU7UUFBRSxDQUFDLEVBQUUsU0FBUyxDQUFDLEdBQUc7WUFBRSxJQUFJO2dCQUFFLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7YUFBRSxRQUFTO2dCQUFFLElBQUksTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO2FBQUU7U0FBRTtLQUFFLENBQUM7Q0FBRTtBQUV0K0IsU0FBUywyQkFBMkIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFO0lBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxPQUFPO0lBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQUFBQztJQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsSUFBSSwyQ0FBMkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8saUJBQWlCLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQUU7QUFFaGEsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0lBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBQUMsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFHLE9BQU8sSUFBSSxDQUFDO0NBQUU7QUFFdkwseURBQXlELENBRXpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWdDRSxDQUNGLElBQUksVUFBVSxHQUFHLDRCQUE0QixBQUFDO0FBQzlDLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxBQUFDO0FBRXJDLFNBQVMsTUFBTSxDQUFDLFVBQVUsRUFBRTtJQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqQyxJQUFJLENBQUMsR0FBRyxHQUFHO1FBQ1QsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTztRQUMzQixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGlCQUFpQixFQUFFLEVBQUU7UUFDckIsTUFBTSxFQUFFLFNBQVMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxXQUFZLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxFQUFFLFNBQVMsT0FBTyxDQUFDLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0tBQ0YsQ0FBQztJQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztDQUNuQztBQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM5QixJQUFJLGFBQWEsRUFFZixjQUFjLEVBRWQsY0FBYyxDQUNoQixxQ0FBcUMsQ0FEckIsQUFFZjtBQUVELFNBQVMsV0FBVyxHQUFHO0lBQ3JCLE9BQU8sUUFBUSxJQUFLLENBQUEsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFBLEFBQUMsQ0FBQztDQUNoRztBQUVELFNBQVMsT0FBTyxHQUFHO0lBQ2pCLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUM7Q0FDbEMsQ0FBQyx3Q0FBd0M7QUFHMUMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEFBQUM7QUFFbEMsSUFBSSxBQUFDLENBQUEsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFBLElBQUssT0FBTyxTQUFTLEtBQUssV0FBVyxFQUFFO0lBQzVFLElBQUksUUFBUSxHQUFHLFdBQVcsRUFBRSxBQUFDO0lBQzdCLElBQUksSUFBSSxHQUFHLE9BQU8sRUFBRSxBQUFDO0lBQ3JCLElBQUksUUFBUSxHQUFHLFVBQVUsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsSUFBSSxDQUFDLDhCQUE4QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQUFBQztJQUMzSCxJQUFJLEVBQUUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLFFBQVEsR0FBSSxDQUFBLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQSxHQUFJLEdBQUcsQ0FBQyxBQUFDLEVBQUMsYUFBYTtJQUVuRyxFQUFFLENBQUMsU0FBUyxHQUFHLFNBQVUsS0FBSyxFQUU1QjtRQUNBLGFBQWEsR0FBRyxFQUFFLENBQ2xCLDRCQUE0QixDQURWLENBRWpCO1FBQ0QsY0FBYyxHQUFHLEVBQUUsQ0FDbkIsNEJBQTRCLENBRFQsQ0FFbEI7UUFDRCxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxHQUVOLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxBQUFDO1FBRXpCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDMUIsdUNBQXVDO1lBQ3ZDLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUNqQyxrQkFBa0IsRUFBRSxDQUFDO1lBR3ZCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVUsS0FBSyxFQUFFO2dCQUMvQyxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssWUFBWSxDQUFDO2FBQ3ZDLENBQUMsQUFBQyxFQUFDLG9CQUFvQjtZQUV4QixJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVUsS0FBSyxFQUFFO2dCQUMxQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4SCxDQUFDLEFBQUM7WUFFSCxJQUFJLE9BQU8sRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBVSxLQUFLLEVBQUU7b0JBQzlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDckMsQ0FBQyxDQUFDO2dCQUVILElBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFFO29CQUM5QyxJQUFJLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQUM7b0JBRTlCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQ3JCLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7aUJBRTFDO2FBQ0YsTUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBRTVCO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUN6QiwrQkFBK0I7WUFDL0IsSUFBSSxTQUFTLEdBQUcsMEJBQTBCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFDN0QsS0FBSyxBQUFDO1lBRVYsSUFBSTtnQkFDRixJQUFLLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEFBQUMsQ0FBQSxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFBLENBQUUsSUFBSSxFQUFHO29CQUNsRCxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUMsS0FBSyxBQUFDO29CQUNqQyxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLEtBQUssQUFBQztvQkFDdkYsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBYyxHQUFNLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxNQUFNLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztpQkFDbEg7YUFDTCxDQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEIsUUFBUztnQkFDUixTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7YUFDZjtZQUVELElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFO2dCQUNuQyxnQ0FBZ0M7Z0JBQ2hDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3JCLElBQUksT0FBTyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEFBQUMsRUFBQyxhQUFhO2dCQUV0RSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQztTQUNGO0tBQ0YsQ0FBQztJQUVGLEVBQUUsQ0FBQyxPQUFPLEdBQUcsU0FBVSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUIsQ0FBQztJQUVGLEVBQUUsQ0FBQyxPQUFPLEdBQUcsV0FBWTtRQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLHFEQUFrRCxDQUFJLENBQUM7S0FDbEUsQ0FBRjtDQUNIO0FBRUQsU0FBUyxrQkFBa0IsR0FBRztJQUM1QixJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxBQUFDO0lBRWxELElBQUksT0FBTyxFQUFFO1FBQ1gsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTJCLENBQUcsQ0FBQztLQUMxQztDQUNKO0FBRUQsU0FBUyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUU7SUFDdkMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQUFBQztJQUM1QyxPQUFPLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztJQUN4QixJQUFJLFNBQVMsR0FBRyx3TkFBd04sQUFBQztJQUV6TyxJQUFJLFVBQVUsR0FBRywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsRUFDcEQsTUFBTSxBQUFDO0lBRVgsSUFBSTtRQUNGLElBQUssVUFBVSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQUFBQyxDQUFBLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUEsQ0FBRSxJQUFJLEVBQUc7WUFDckQsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQUFBQztZQUM5QixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssQUFBQztZQUMzRSxTQUFTLElBQUksdUhBQXVILENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsaUNBQWlDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLG1DQUFtQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVUsSUFBSSxFQUFFO2dCQUNoUyxPQUFPLFlBQVMsR0FBRyxJQUFJLEdBQUcsUUFBUSxDQUFDO2FBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsNEJBQTRCLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxzREFBc0QsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSwyQ0FBMkMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQ2pQO0tBQ0YsQ0FBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDbkIsUUFBUztRQUNSLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUNoQjtJQUVELFNBQVMsSUFBSSxRQUFRLENBQUM7SUFDdEIsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDOUIsT0FBTyxPQUFPLENBQUM7Q0FDaEI7QUFFRCxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUM5QixxQ0FBcUMsQ0FDckM7SUFDRSxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxBQUFDO0lBRTdCLElBQUksQ0FBQyxPQUFPLEVBQ1YsT0FBTyxFQUFFLENBQUM7SUFHWixJQUFJLE9BQU8sR0FBRyxFQUFFLEFBQUM7SUFDakIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQUFBQztJQUVkLElBQUssQ0FBQyxJQUFJLE9BQU8sQ0FDZixJQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUU7UUFDdkIsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV2QixJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFBQyxNQUFNO1lBQUUsQ0FBQztTQUFDLENBQUMsQ0FBQztLQUU3QjtJQUdILElBQUksTUFBTSxDQUFDLE1BQU0sRUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRzFELE9BQU8sT0FBTyxDQUFDO0NBQ2hCO0FBRUQsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0lBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQUFBQztJQUUvQixPQUFPLENBQUMsTUFBTSxHQUFHLFdBQVk7UUFDM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFDMUIsYUFBYTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBRXJDLENBQUM7SUFFRixPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYTtJQUUxRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0NBQ3pEO0FBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxBQUFDO0FBRXRCLFNBQVMsU0FBUyxHQUFHO0lBQ25CLElBQUksVUFBVSxFQUNaLE9BQU87SUFHVCxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVk7UUFDbEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLEFBQUM7UUFFaEUsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUU7WUFDckMsZ0NBQWdDO1lBQ2hDLElBQUksSUFBSSxHQUVOLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEFBQUM7WUFDaEMsSUFBSSxRQUFRLEdBQUcsV0FBVyxFQUFFLEFBQUM7WUFDN0IsSUFBSSxtQkFBbUIsR0FBRyxRQUFRLEtBQUssV0FBVyxHQUFHLElBQUksTUFBTSxDQUFDLGdEQUFnRCxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQyxBQUFDO1lBQ3BMLElBQUksUUFBUSxHQUFHLGdCQUFnQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixBQUFDO1lBRWhILElBQUksQ0FBQyxRQUFRLEVBQ1gsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBRXhCO1FBRUQsVUFBVSxHQUFHLElBQUksQ0FBQztLQUNuQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ1I7QUFFRCxTQUFTLFFBQVEsQ0FBQyxNQUFNLEVBRXRCLEtBQUssRUFFTDtJQUNBLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEFBQUM7SUFFN0IsSUFBSSxDQUFDLE9BQU8sRUFDVixPQUFPO0lBR1QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssRUFDdEIsU0FBUyxFQUFFLENBQUM7U0FDUCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQzlCLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxBQUFDO1FBRXBELElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixpRUFBaUU7Z0JBQ2pFLG9IQUFvSDtnQkFDcEgsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFBQztnQkFFbkMsSUFBSyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDNUMsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxBQUFDO29CQUN0QixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEFBQUM7b0JBRWpELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFFckM7YUFFSjtZQUVELElBQUksRUFBRSxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQUFBQztZQUNwRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHO2dCQUFDLEVBQUU7Z0JBQUUsSUFBSTthQUFDLENBQUM7U0FDaEMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQ3RCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBRWxDO0NBQ0Y7QUFFRCxTQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRSxFQUFFO0lBQzdCLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEFBQUM7SUFFN0IsSUFBSSxDQUFDLE9BQU8sRUFDVixPQUFPO0lBR1QsSUFBSSxPQUFPLENBQUMsR0FBRSxDQUFDLEVBQUU7UUFDZiw4RUFBOEU7UUFDOUUsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQUFDO1FBQzFCLElBQUksT0FBTyxHQUFHLEVBQUUsQUFBQztRQUVqQixJQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBRTtZQUNwQixJQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEFBQUM7WUFFeEQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUUzQixDQUFDLHNHQUFzRztRQUd4RyxPQUFPLE9BQU8sQ0FBQyxHQUFFLENBQUMsQ0FBQztRQUNuQixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFFbkQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFVLEVBQUUsRUFBRTtZQUM1QixTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDbkMsQ0FBQyxDQUFDO0tBQ0osTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQ3RCLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0NBRWhDO0FBRUQsU0FBUyxjQUFjLENBQUMsTUFBTSxFQUU1QixFQUFFLEVBRUYsWUFBWSxFQUVaO0lBQ0EsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFlBQVksQ0FBQyxFQUM3QyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUMsdUdBQXVHO0lBR3pHLElBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQUFBQztJQUNqRCxJQUFJLFFBQVEsR0FBRyxLQUFLLEFBQUM7SUFFckIsTUFBTyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRTtRQUN6QixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLEFBQUM7UUFDeEIsSUFBSSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQUFBQztRQUU1QyxJQUFJLENBQUMsRUFDSCwrRUFBK0U7UUFDL0UsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNYO1lBQ0wseURBQXlEO1lBQ3pELElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFBQztZQUU3QyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNsQixrRkFBa0Y7Z0JBQ2xGLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07YUFDUDtZQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO0tBQ0Y7SUFFRCxPQUFPLFFBQVEsQ0FBQztDQUNqQjtBQUVELFNBQVMsaUJBQWlCLENBQUMsTUFBTSxFQUUvQixFQUFFLEVBRUYsWUFBWSxFQUVaO0lBQ0EsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQUFBQztJQUU3QixJQUFJLENBQUMsT0FBTyxFQUNWLE9BQU87SUFHVCxJQUFJLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDdkQsMkVBQTJFO1FBQzNFLHlFQUF5RTtRQUN6RSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFDaEIsT0FBTyxJQUFJLENBQUM7UUFHZCxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUN4RDtJQUVELElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUNuQixPQUFPLElBQUksQ0FBQztJQUdkLGFBQWEsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDekIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQUFBQztJQUM5QixjQUFjLENBQUMsSUFBSSxDQUFDO1FBQUMsTUFBTTtRQUFFLEVBQUU7S0FBQyxDQUFDLENBQUM7SUFFbEMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUM3RCxPQUFPLElBQUksQ0FBQztDQUVmO0FBRUQsU0FBUyxZQUFZLENBQUMsTUFBTSxFQUUxQixFQUFFLEVBRUY7SUFDQSxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxBQUFDO0lBQzlCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRXBCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFHbkMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFDN0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBVSxFQUFFLEVBQUU7UUFDakQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNwQixDQUFDLENBQUM7SUFHTCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFMUIsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBVSxFQUFFLEVBQUU7UUFDaEQsSUFBSSxrQkFBa0IsR0FBRyxFQUFFLENBQUMsV0FBWTtZQUN0QyxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMzQyxDQUFDLEFBQUM7UUFFSCxJQUFJLGtCQUFrQixJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQzdDLCtCQUErQjtRQUMvQixjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztLQUVqRSxDQUFDLENBQUM7SUFHTCxjQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO0NBQzNCOzs7QUN4ZEQsOEJBQWtDO0FBRWxDLGtDQUFtQztBQUNuQyxzQ0FBNEU7QUFFNUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sT0FBaUIsR0FBSztJQUNoRSxPQUFRLE9BQU8sQ0FBQyxJQUFJO1FBQ2xCLEtBQUsscUJBQVcsQ0FBQyxPQUFPO1lBQUU7Z0JBQ3hCLE1BQU0sUUFBUSxHQUFHLE1BQU0sYUFBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQUFBQztnQkFDaEQsTUFBTSxJQUFJLEdBQWlCLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxBQUFDO2dCQUVqRCxJQUFJLG1CQUFtQixHQUFHLFlBQVksQUFBQztnQkFDdkMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDdkIsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFDakMsY0FBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzFCO2dCQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDOUIsT0FBTyxFQUFFLG1CQUFtQjtvQkFDNUIsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsS0FBSyxFQUFFLGVBQWU7b0JBQ3RCLElBQUksRUFBRSxPQUFPO2lCQUNkLENBQUMsQ0FBQztnQkFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztvQkFBRSxNQUFNLEVBQUUsSUFBSTtvQkFBRSxhQUFhLEVBQUUsSUFBSTtpQkFBRSxFQUFFLENBQUMsSUFBSSxHQUFJO29CQUNoRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxBQUFDO29CQUNuQixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQ25CLE9BQU87b0JBR1QsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQUUsQUFBQztvQkFDckIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUNyQixPQUFPO29CQUdULE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTt3QkFDN0IsSUFBSSxFQUFFLHFCQUFXLENBQUMsZUFBZTt3QkFDakMsT0FBTyxFQUFFLElBQUk7cUJBQ2QsQ0FBMkIsQ0FBQztpQkFDOUIsQ0FBQyxDQUFDO2dCQUNILE1BQU07YUFDUDtRQUNEO1lBQ0UsY0FBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JFO0NBQ0YsQ0FBQyxDQUFDOzs7QUM3Q0g7d0NBQUE7QUFBQTtDQUFvQyxBQUFwQztBQUFBLG1DQUFvQzs7O0FDQXBDO3dDQUFBO0FBaUNBLDZEQUFnQix1QkFBdUI7Q0F5QnRDLEFBMUREO0FBNERBLDZDQUFnQixPQUFPO0NBS3RCLEFBakVEO0FBQUEsNkNBQThDO0FBQzlDLG1DQUF1QztBQWdDaEMsU0FBUyx1QkFBdUIsQ0FBQyxFQUN0QyxLQUFLLENBQUEsRUFDTCxJQUFJLENBQUEsRUFDSixRQUFRLENBQUEsRUFDVyxFQUFpQjtJQUNwQyxPQUFPO1FBQ0wsSUFBSSxFQUFFO1lBQ0osUUFBUTtZQUNSLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLE1BQU0sRUFBRTtnQkFDTixLQUFLLEVBQUUsS0FBSztnQkFDWixJQUFJLEVBQUUsSUFBSTthQUNYO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxLQUFLO2dCQUNyQixjQUFjLEVBQUUsTUFBTTtnQkFDdEIscUJBQXFCLEVBQUU7b0JBQ3JCLFFBQVEsRUFBRSxJQUFJO29CQUNkLGFBQWEsRUFBRSxLQUFLO29CQUNwQixjQUFjLEVBQUUsS0FBSztpQkFDdEI7YUFDRjtZQUNELElBQUksRUFBRSxFQUFFO1NBQ1Q7S0FDRixDQUFDO0NBQ0g7QUFFTSxTQUFTLE9BQU8sQ0FBQyxNQUEwQixFQUFFO0lBQ2xELE9BQU8sMEJBQVksQ0FBQztRQUNsQixNQUFNLEVBQUUsbUJBQVUsQ0FBQyxPQUFPO1FBQzFCLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLENBQUM7S0FDeEMsQ0FBQyxDQUFDO0NBQ0o7OztBQ2pFRDt3Q0FBQTtBQU9BLGtEQUFnQixZQUFZO0NBVTNCLEFBakJEO0FBT08sU0FBUyxZQUFZLENBQUMsTUFBMEIsRUFBRTtJQUN2RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLEdBQUcsTUFBTTtRQUNULE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQyxBQUFDO0lBRUgsT0FBTyxLQUFLLENBQUMsdUJBQXVCLEVBQUU7UUFDcEMsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJO0tBQ0wsQ0FBQyxDQUFDO0NBQ0o7OztBQ2pCRCxPQUFPLENBQUMsY0FBYyxHQUFHLFNBQVUsQ0FBQyxFQUFFO0lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHO1FBQUMsT0FBTyxFQUFFLENBQUM7S0FBQyxDQUFDO0NBQzdDLENBQUM7QUFFRixPQUFPLENBQUMsaUJBQWlCLEdBQUcsU0FBVSxDQUFDLEVBQUU7SUFDdkMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxFQUFFO1FBQUMsS0FBSyxFQUFFLElBQUk7S0FBQyxDQUFDLENBQUM7Q0FDdkQsQ0FBQztBQUVGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBVSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVUsR0FBRyxFQUFFO1FBQ3pDLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssWUFBWSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQ3ZFLE9BQU87UUFHVCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDL0IsVUFBVSxFQUFFLElBQUk7WUFDaEIsR0FBRyxFQUFFLFdBQVk7Z0JBQ2YsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDcEI7U0FDRixDQUFDLENBQUM7S0FDSixDQUFDLENBQUM7SUFFSCxPQUFPLElBQUksQ0FBQztDQUNiLENBQUM7QUFFRixPQUFPLENBQUMsTUFBTSxHQUFHLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDOUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1FBQ3BDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLEdBQUcsRUFBRSxHQUFHO0tBQ1QsQ0FBQyxDQUFDO0NBQ0osQ0FBQzs7O0FDOUJGO3dDQUFBOztDQUFBO0lBQU8sVUFFTjtVQUZXLFdBQVU7SUFBVixXQUFVLENBQ3BCLFNBQU8sSUFBRyxTQUFTLEFBRHJCO0dBQVksVUFBVSxLQUFWLFVBQVUsT0FBdEI7OztBQ0FBO3dDQUFBOzRDQUVhLE1BQU07Q0FGbkI7QUFBQSwyQkFBd0I7O0FBRWpCLE1BQU0sTUFBTSxHQUFHLG9CQUFJLEVBQUUsQUFBQzs7O0FDRjdCLFlBQVksQUFBWjtBQUVBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztBQUVoRCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQUFKckI7QUFNQSxNQUFNLFFBQVEsR0FBRyxzQkFBc0IsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFO0FBQ3ZELE1BQU0sY0FBYyxHQUFHO0lBQ3JCLGNBQWMsRUFBRSxJQUFJO0lBQ3BCLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLHFCQUFxQixFQUFFLFdBQVc7SUFDbEMsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxtQkFBbUIsRUFBRSxXQUFXO0lBQ2hDLEdBQUcsRUFBRSxJQUFJO0lBQ1QsR0FBRyxFQUFFLElBQUk7SUFDVCxHQUFHLEVBQUUsVUFBVTtDQUNoQjtBQUVELFNBQVMsZUFBZSxDQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUU7SUFDaEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBVSxDQUFDLEVBQUU7WUFDaEQsT0FBTyxDQUFDLEtBQUsscUJBQXFCLENBQUE7U0FDbkMsQ0FBQztRQUNGLE9BQU8sV0FBVyxDQUFBO0tBQ25CLE1BQU0sSUFBSSxTQUFTLEtBQUssSUFBSSxFQUMzQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFHakMsT0FBTyxLQUFLLENBQUE7Q0FDYjtBQUVELFNBQVMsSUFBSSxDQUFFLElBQUksRUFBRTtJQUNuQixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQUFoQ25CO0lBaUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFLEFBakNuQztJQW1DRSxNQUFNLFNBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVE7SUFDdEMsSUFBSSxTQUFRLElBQUksT0FBTyxTQUFRLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBSSxNQUFNLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO0lBRXJILE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLFFBQVE7SUFDNUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLEFBdkN0RDtJQXdDRSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLEVBQUU7SUFDMUMsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztJQUN0RSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7SUFFNUMsSUFDRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsRUFDMUQsZUFBZSxHQUFHLEtBQUssQUEvQzNCO0lBaURFLE1BQU0sTUFBTSxHQUFHO1FBQUMsT0FBTztRQUFFLE9BQU87UUFBRSxNQUFNO1FBQUUsTUFBTTtRQUFFLE9BQU87UUFBRSxPQUFPO0tBQUM7SUFFbkUsSUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVLEVBQzdCLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxHQUN0QyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEFBckRsRDtJQXVERSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxBQXZEbkQ7SUF3REUsTUFBTSxNQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNO0lBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxBQTFEcEM7SUE0REUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFO1FBQ3hDLEdBQUcsRUFBRSxXQUFXO0tBQ2pCLENBQUMsQUE5REo7SUErREUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFO1FBQ3JDLEdBQUcsRUFBRSxRQUFRO1FBQ2IsR0FBRyxFQUFFLFFBQVE7S0FDZCxDQUFDLEFBbEVKO0lBb0VFLE1BQU0sT0FBTyxHQUFHO1FBQ2QsUUFBUSxFQUFSLFNBQVE7UUFDUixTQUFTO1FBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUTtRQUMvQixNQUFNO1FBQ04sU0FBUyxFQUFFLGVBQWUsQ0FBQyxJQUFJLENBQUM7S0FDakM7SUFDRCxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEFBM0U3QjtJQTRFRSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQUssQUE1RXRCO0lBOEVFLE1BQU0sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsR0FDL0MsTUFBTSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQzVDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksR0FDcEMsTUFBTSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxjQUFjLEdBQ2xELE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUM1QyxNQUFNLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxVQUFVLEdBQ3hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEFBcEZwQztJQXFGRSxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQUFyRmxDO0lBc0ZFLE1BQU0sQ0FBQyxVQUFVLEdBQUcsU0FBUyxBQXRGL0I7SUF1RkUsTUFBTSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQUF2RjNDO0lBd0ZFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxBQXhGdEI7SUEwRkUsSUFBSSxTQUFRLEVBQUUsTUFBTSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsRUFBRSxBQTFGeEQ7SUE0RkUsU0FBUyxXQUFXLEdBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsR0FDMUIsUUFBUSxHQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUNuQztJQUVELFNBQVMsUUFBUSxHQUFJO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQTtLQUNuQjtJQUNELFNBQVMsUUFBUSxDQUFFLEtBQUssRUFBRTtRQUN4QixJQUFJLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDbEQsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFFdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEFBekd2QjtRQTJHSSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsc0JBQXNCO0FBM0cvRDtRQTRHSSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEFBNUcxQztRQTZHSSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLEFBN0d6QztRQThHSSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEFBOUd2QztRQStHSSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEFBL0d4QztRQWdISSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLEFBaEh4QztLQWlIRztJQUVELFNBQVMsS0FBSyxDQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUU7UUFDdEMsSUFBSSxDQUFDLFFBQVEsRUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFFcEQsWUFBWSxHQUFHLFlBQVksSUFBSSxFQUFFLEFBdkhyQztRQXdISSxJQUFJLFNBQVMsSUFBSSxRQUFRLENBQUMsV0FBVyxFQUNuQyxZQUFZLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEFBekhyRDtRQTJISSxNQUFNLHVCQUF1QixHQUFHLFlBQVksQ0FBQyxXQUFXO1FBQ3hELElBQUksU0FBUyxJQUFJLHVCQUF1QixFQUFFO1lBQ3hDLElBQUksZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixDQUFDO1lBQzlFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLElBQUksR0FDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUM3QixTQUFTO1lBQ2IsT0FBTyxRQUFRLENBQUMsV0FBVyxBQWpJakM7WUFrSU0sZ0JBQWdCLENBQUM7Z0JBQUMsUUFBUTthQUFDLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxBQWxJM0Y7U0FtSUs7UUFDRCxTQUFTLEtBQUssQ0FBRSxNQUFNLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxBQUFDLENBQUEsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUEsR0FBSSxDQUFDLEFBcklyRDtZQXNJTSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxBQXRJbEQ7WUF1SU0sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQUF2SWxEO1lBd0lNLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLEFBeEloRDtZQXlJTSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxBQXpJaEQ7WUEwSU0sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQUExSWxEO1lBMklNLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEFBM0lsRDtZQTRJTSxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixBQTdJM0M7Z0JBOElRLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxBQTlJeEM7YUErSU87WUFDRCxJQUFJLFNBQVEsRUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUNsQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUMvQyxBQW5KVDtTQXFKSztRQUNELEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxBQXRKMUI7UUF1SkksT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtLQUN2QjtJQUNELE9BQU8sTUFBTSxDQUFBO0NBQ2Q7QUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHO0lBQ1osTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxFQUFFLEVBQUU7UUFDUixLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO0tBQ1Y7SUFDRCxNQUFNLEVBQUU7QUFDTixRQUFBLEVBQUUsRUFBRSxPQUFPO0FBQ1gsUUFBQSxFQUFFLEVBQUUsT0FBTztBQUNYLFFBQUEsRUFBRSxFQUFFLE1BQU07QUFDVixRQUFBLEVBQUUsRUFBRSxNQUFNO0FBQ1YsUUFBQSxFQUFFLEVBQUUsT0FBTztBQUNYLFFBQUEsRUFBRSxFQUFFLE9BQU87S0FDWjtDQUNGLEFBN0tEO0FBK0tBLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxBQS9LcEM7QUFnTEEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO0lBQUUsUUFBUTtJQUFFLFNBQVM7SUFBRSxRQUFRO0lBQUUsT0FBTztDQUFFLENBQUMsQUFoTHJGO0FBa0xBLFNBQVMsR0FBRyxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtJQUMzQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FDekQsSUFBSSxHQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLEFBQUMsQUFBQyxBQXRMckY7SUF3TEUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEFBeEwzQjtDQXlMQztBQUVELFNBQVMsSUFBSSxDQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsT0FBTTtJQUVwRCxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQUFBQyxTQUFVLEtBQUssRUFBRTtRQUNoQyxPQUFPLFNBQVMsR0FBRyxHQUFJO1lBQ3JCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxNQUFNLEtBQUssR0FBRyxBQUFDLE1BQU0sQ0FBQyxjQUFjLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxRQUFRLEdBQUksUUFBUSxHQUFHLElBQUk7WUFDbkcsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQUFuTWxFO1lBcU1NLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQ2xDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEFBdE14RjtZQXdNTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEFBeE0zRTtpQkF5TVcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEFBek1uQztZQTJNTSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLO2dCQUN6RCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDN0MsSUFBSSxXQUFXLEdBQUcsYUFBYSxFQUFFLE9BQU07Z0JBQ3ZDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsRUFBRTtvQkFDRixXQUFXLEVBQUUsS0FBSztvQkFDbEIsV0FBVztvQkFDWCxhQUFhO29CQUNiLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO29CQUN0RSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO29CQUN4QixHQUFHLEVBQUUsTUFBTSxDQUFDLFFBQVE7aUJBQ3JCLEVBQUUsSUFBSSxDQUFDLEFBeE5oQjthQXlOTztTQUNGLENBQUE7S0FDRixDQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQTNObkI7Q0E0TkM7QUFFRCxTQUFTLFFBQVEsQ0FBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7SUFDMUMsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEFBL04vRztJQWdPRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFO0lBQy9CLElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdkIsTUFBTSxDQUFDLEdBQUcsRUFBRTtJQUNaLElBQUksRUFBRSxFQUNKLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRSxBQXBPZjtJQXNPRSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxBQXRPckM7SUF1T0UsSUFBSSxHQUFHLEdBQUcsQUFBQyxDQUFBLE1BQU0sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBLEdBQUksQ0FBQztJQUN0QyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQUF4T3RCO0lBeU9FLHVDQUF1QztJQUN2QyxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1FBQzNDLE1BQU8sQ0FBQSxHQUFHLEVBQUUsQ0FBQSxJQUFJLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEFBNU8xQztRQThPSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsQ0FBQyxHQUFHLFNBQVMsQUE5T2hGO0tBK09HLE1BQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsVUFBVSxDQUFDLEFBL09sRjtJQWdQRSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEFBaFBwQztJQWlQRSxPQUFPLENBQUMsQ0FBQTtDQUNUO0FBRUQsU0FBUyxnQkFBZ0IsQ0FBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUU7SUFDeEUsSUFBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUU7UUFDcEIsSUFBSSxlQUFlLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssRUFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQXZQaEQ7YUF3UFcsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLElBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNyQixJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksV0FBVyxFQUM1RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQTNQakQ7U0E4UEs7S0FDRjtDQUNGO0FBRUQsU0FBUyxJQUFJLENBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7SUFDdEMsT0FBTyxXQUFZO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEFBclF0QjtRQXNRSSxJQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEFBdlFoQztRQXlRSSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO0tBQ3ZDLENBQUE7Q0FDRjtBQUVELFNBQVMsUUFBUSxDQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQ3JDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJO0lBQ3RCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFO0lBQ2xCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXO0lBQ3BDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXO0lBQ3BDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHO0lBQ3BCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUTtJQUUxQyxnQkFBZ0IsQ0FDZCxJQUFJLEVBQ0osTUFBTSxDQUFDLFVBQVUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFDcEQsTUFBTSxDQUFDLFdBQVcsRUFDbEIsTUFBTSxDQUFDLGdCQUFnQixLQUFLLFNBQVMsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUN2RSxBQTFSSDtJQTJSRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEFBM1IxQjtJQTRSRSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVUsR0FBRyxFQUFFO1FBQ3JELGdGQUFnRjtRQUNoRixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBO0tBQ3BDLENBQUMsQUEvUko7SUFpU0UsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFdBQVcsQUFqUzVDO0lBa1NFLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEFBbFM1QztJQW9TRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEFBcFMxQztJQXNTRSxNQUFNLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxBQXRTbEQ7Q0F1U0M7QUFFRCxTQUFTLG1CQUFtQixDQUFFLFFBQVEsRUFBRTtJQUN0QyxPQUFPO1FBQ0wsRUFBRSxFQUFFLENBQUM7UUFDTCxRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxRQUFRLElBQUksRUFBRTtRQUN4QixLQUFLLEVBQUU7WUFBRSxLQUFLLEVBQUUsRUFBRTtZQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7S0FDL0IsQ0FBQTtDQUNGO0FBRUQsU0FBUyxVQUFVLENBQUUsR0FBRyxFQUFFO0lBQ3hCLE1BQU0sR0FBRyxHQUFHO1FBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSTtRQUMxQixHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU87UUFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO0tBQ2pCO0lBQ0QsSUFBSyxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQ25CLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFDeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQUExVHpCO0lBNlRFLE9BQU8sR0FBRyxDQUFBO0NBQ1g7QUFFRCxTQUFTLGVBQWUsQ0FBRSxJQUFJLEVBQUU7SUFDOUIsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUE7SUFFdkIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssRUFDMUIsT0FBTyxRQUFRLENBQUE7SUFFakIsT0FBTyxTQUFTLENBQUE7Q0FDakI7QUFFRCxTQUFTLElBQUksR0FBSTtJQUFFLE9BQU8sRUFBRSxDQUFBO0NBQUU7QUFDOUIsU0FBUyxXQUFXLENBQUUsQ0FBQyxFQUFFO0lBQUUsT0FBTyxDQUFDLENBQUE7Q0FBRTtBQUNyQyxTQUFTLElBQUksR0FBSSxFQUFFO0FBRW5CLFNBQVMsUUFBUSxHQUFJO0lBQUUsT0FBTyxLQUFLLENBQUE7Q0FBRTtBQUNyQyxTQUFTLFNBQVMsR0FBSTtJQUFFLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFBO0NBQUU7QUFDM0MsU0FBUyxRQUFRLEdBQUk7SUFBRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQU0sQ0FBQyxDQUFBO0NBQUU7QUFDL0QsU0FBUyxPQUFPLEdBQUk7SUFBRSxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0NBQUUsQ0FBQyxtQ0FBbUM7QUFFckcsb0JBQW9CLENBQ3BCLDBCQUEwQixDQUMxQixTQUFTLHNCQUFzQixHQUFJO0lBQ2pDLFNBQVMsSUFBSSxDQUFFLENBQUMsRUFBRTtRQUFFLE9BQU8sT0FBTyxDQUFDLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQTtLQUFFO0lBQzFELElBQUk7UUFDRixJQUFJLE9BQU8sVUFBVSxLQUFLLFdBQVcsRUFBRSxPQUFPLFVBQVUsQ0FBQTtRQUN4RCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFO1lBQ3BELEdBQUcsRUFBRSxXQUFZO2dCQUNmLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEFBM1YxQztnQkE0VlEsT0FBUSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNoQztZQUNELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQUEvVk47UUFnV0ksT0FBTyxVQUFVLENBQUE7S0FDbEIsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0tBQ3REO0NBQ0YsQ0FDRCxtQkFBbUI7OztBQ3JXbkIsWUFBWSxBQUFaO0FBQ0EsU0FBUyxZQUFZLENBQUUsQ0FBQyxFQUFFO0lBQ3hCLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7S0FBRSxDQUFDLE9BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxjQUFjLENBQUE7S0FBRTtDQUNwRTtBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxBQUx2QjtBQU9BLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0lBQzdCLElBQUksRUFBRSxHQUFHLEFBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUssWUFBWTtJQUNqRCxJQUFJLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtRQUN2QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07UUFDOUIsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxBQWR0QjtRQWVJLElBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEFBaEJ0QztRQWtCSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDekI7SUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFDdkIsT0FBTyxDQUFDLENBQUE7SUFFVixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTtJQUN4QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDMUIsSUFBSSxHQUFHLEdBQUcsRUFBRTtJQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNO0lBQ2xCLElBQUksT0FBTyxHQUFHLEVBQUU7SUFDaEIsSUFBSSxJQUFJLEdBQUcsQUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSyxDQUFDO0lBQy9CLElBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUc7UUFDekIsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRTtZQUMxQyxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsR0FBRyxPQUFPLEdBQUcsQ0FBQyxBQS9CMUM7WUFnQ00sT0FBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUssR0FBRyxDQUFDO2dCQUNULEtBQUssR0FBRztvQkFDTixJQUFJLENBQUMsSUFBSSxNQUFNLEVBQ2IsTUFBSztvQkFDUCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUcsTUFBSztvQkFDM0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUNiLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQUF2Q3RDO29CQXdDVSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxBQXhDaEM7b0JBeUNVLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxBQXpDekI7b0JBMENVLENBQUMsRUFBRSxBQTFDYjtvQkEyQ1UsTUFBSztnQkFDUCxLQUFLLEdBQUc7b0JBQ04sSUFBSSxDQUFDLElBQUksTUFBTSxFQUNiLE1BQUs7b0JBQ1AsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFHLE1BQUs7b0JBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsRUFDYixHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEFBakR0QztvQkFrRFUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBbEQ1QztvQkFtRFUsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLEFBbkR6QjtvQkFvRFUsQ0FBQyxFQUFFLEFBcERiO29CQXFEVSxNQUFLO2dCQUNQLEtBQUssRUFBRSxDQUFDO2dCQUNSLEtBQUssR0FBRyxDQUFDO2dCQUNULEtBQUssR0FBRztvQkFDTixJQUFJLENBQUMsSUFBSSxNQUFNLEVBQ2IsTUFBSztvQkFDUCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLEVBQUUsTUFBSztvQkFDaEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUNiLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQUE3RHRDO29CQThEVSxJQUFJLElBQUksR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTt3QkFDckIsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxBQWhFeEM7d0JBaUVZLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxBQWpFM0I7d0JBa0VZLENBQUMsRUFBRSxBQWxFZjt3QkFtRVksTUFBSztxQkFDTjtvQkFDRCxJQUFJLElBQUksS0FBSyxVQUFVLEVBQUU7d0JBQ3ZCLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQUF0RWhEO3dCQXVFWSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQUF2RTNCO3dCQXdFWSxDQUFDLEVBQUUsQUF4RWY7d0JBeUVZLE1BQUs7cUJBQ047b0JBQ0QsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQUEzRTVCO29CQTRFVSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQUE1RXpCO29CQTZFVSxDQUFDLEVBQUUsQUE3RWI7b0JBOEVVLE1BQUs7Z0JBQ1AsS0FBSyxHQUFHO29CQUNOLElBQUksQ0FBQyxJQUFJLE1BQU0sRUFDYixNQUFLO29CQUNQLElBQUksT0FBTyxHQUFHLENBQUMsRUFDYixHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEFBbkZ0QztvQkFvRlUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFwRmhDO29CQXFGVSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQUFyRnpCO29CQXNGVSxDQUFDLEVBQUUsQUF0RmI7b0JBdUZVLE1BQUs7Z0JBQ1AsS0FBSyxFQUFFO29CQUNMLElBQUksT0FBTyxHQUFHLENBQUMsRUFDYixHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEFBMUZ0QztvQkEyRlUsR0FBRyxJQUFJLEdBQUcsQUEzRnBCO29CQTRGVSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQUE1RnpCO29CQTZGVSxDQUFDLEVBQUUsQUE3RmI7b0JBOEZVLENBQUMsRUFBRSxBQTlGYjtvQkErRlUsTUFBSzthQUNSO1lBQ0QsRUFBRSxDQUFDLEFBakdUO1NBa0dLO1FBQ0QsRUFBRSxDQUFDLEFBbkdQO0tBb0dHO0lBQ0QsSUFBSSxPQUFPLEtBQUssRUFBRSxFQUNoQixPQUFPLENBQUMsQ0FBQTtTQUNMLElBQUksT0FBTyxHQUFHLElBQUksRUFDckIsR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEFBeEczQjtJQTJHRSxPQUFPLEdBQUcsQ0FBQTtDQUNYOzs7QUM1R0Q7d0NBQUE7O0NBQUE7SUFHTyxXQUdOO1VBSFcsWUFBVztJQUFYLFlBQVcsQ0FBWCxZQUFXLENBQ3JCLFNBQU8sSUFBUCxDQUFPLElBQVAsU0FBTyxBQUpUO0lBR1ksWUFBVyxDQUFYLFlBQVcsQ0FFckIsaUJBQWUsSUFBZixDQUFlLElBQWYsaUJBQWUsQUFMakI7R0FHWSxXQUFXLEtBQVgsV0FBVyxPQUh2QiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1icm93c2VyLWhtci9saWIvcnVudGltZS1lNDVhYjdiMTBlZTRkMGVmLmpzIiwic3JjL2V4dGVuc2lvbi9iYWNrZ3JvdW5kL2V2ZW50TGlzdGVuZXIudHMiLCJzcmMvZXh0ZW5zaW9uL2Fua2kvaW5kZXgudHMiLCJzcmMvZXh0ZW5zaW9uL2Fua2kvYWRkTm90ZS50cyIsInNyYy9leHRlbnNpb24vYW5raS9pbnZva2VBY3Rpb24udHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9leHRlbnNpb24vYW5raS9hY3Rpb25zLnRzIiwic3JjL2V4dGVuc2lvbi9sb2dnZXIudHMiLCJub2RlX21vZHVsZXMvcGluby9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3F1aWNrLWZvcm1hdC11bmVzY2FwZWQvaW5kZXguanMiLCJzcmMvZXh0ZW5zaW9uL21lc3NhZ2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gbnVsbDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcImU3OTJmYmJkYWE3OGVlODRcIjttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcIjE0NDQ4NGI2ODJiZWZmNGJcIjtcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZXJbU3ltYm9sLml0ZXJhdG9yXSAhPSBudWxsIHx8IGl0ZXJbXCJAQGl0ZXJhdG9yXCJdICE9IG51bGwpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmICghaXQpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gaXQuY2FsbChvKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdC5yZXR1cm4gIT0gbnVsbCkgaXQucmV0dXJuKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUgKi9cblxuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YTogbWl4ZWQ7XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcblxuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiBhY2NlcHQoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIGRpc3Bvc2UoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xudmFyIGNoZWNrZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYWNjZXB0ZWRBc3NldHNcbi8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiwgYXNzZXRzVG9BY2NlcHRcbi8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi9cbjtcblxuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAobG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCBsb2NhdGlvbi5wb3J0O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuXG5pZiAoKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gIHZhciBwb3J0ID0gZ2V0UG9ydCgpO1xuICB2YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IGxvY2F0aW9uLnByb3RvY29sID09ICdodHRwczonICYmICEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgd3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50XG4gIC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovXG4gICkge1xuICAgIGNoZWNrZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYWNjZXB0ZWRBc3NldHMgPSB7fVxuICAgIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi9cbiAgICA7XG4gICAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgICB2YXIgZGF0YVxuICAgIC8qOiBITVJNZXNzYWdlICovXG4gICAgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhc3NldHMgPSBkYXRhLmFzc2V0cy5maWx0ZXIoZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhc3NldC5lbnZIYXNoID09PSBITVJfRU5WX0hBU0g7XG4gICAgICB9KTsgLy8gSGFuZGxlIEhNUiBVcGRhdGVcblxuICAgICAgdmFyIGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuXG4gICAgICAgICAgaWYgKCFhY2NlcHRlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICAgIGhtckFjY2VwdFJ1bihhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkYXRhLmRpYWdub3N0aWNzLmFuc2kpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBhbnNpRGlhZ25vc3RpYyA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIHZhciBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA/IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA6IGFuc2lEaWFnbm9zdGljLnN0YWNrO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICB9O1xuXG4gIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuXG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICB2YXIgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG5cbiAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihkaWFnbm9zdGljcyksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgdmFyIGRpYWdub3N0aWMgPSBfc3RlcDIudmFsdWU7XG4gICAgICB2YXIgc3RhY2sgPSBkaWFnbm9zdGljLmNvZGVmcmFtZSA/IGRpYWdub3N0aWMuY29kZWZyYW1lIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICAgIGVycm9ySFRNTCArPSBcIlxcbiAgICAgIDxkaXY+XFxuICAgICAgICA8ZGl2IHN0eWxlPVxcXCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1xcXCI+XFxuICAgICAgICAgIFxcdUQ4M0RcXHVERUE4IFwiLmNvbmNhdChkaWFnbm9zdGljLm1lc3NhZ2UsIFwiXFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxwcmU+XCIpLmNvbmNhdChzdGFjaywgXCI8L3ByZT5cXG4gICAgICAgIDxkaXY+XFxuICAgICAgICAgIFwiKS5jb25jYXQoZGlhZ25vc3RpYy5oaW50cy5tYXAoZnVuY3Rpb24gKGhpbnQpIHtcbiAgICAgICAgcmV0dXJuICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+JztcbiAgICAgIH0pLmpvaW4oJycpLCBcIlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICBcIikuY29uY2F0KGRpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IFwiPGRpdj5cXHVEODNEXFx1RENERCA8YSBzdHlsZT1cXFwiY29sb3I6IHZpb2xldFxcXCIgaHJlZj1cXFwiXCIuY29uY2F0KGRpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5MZWFybiBtb3JlPC9hPjwvZGl2PlwiKSA6ICcnLCBcIlxcbiAgICAgIDwvZGl2PlxcbiAgICBcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IyLmYoKTtcbiAgfVxuXG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpXG4vKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovXG57XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG5cbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcblxuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuXG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50cztcbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcblxuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuXG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgLy8gJEZsb3dGaXhNZVxuICBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTsgLy8gJEZsb3dGaXhNZVxuXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG5cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcblxuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZlxuICAgICAgLyo6IHN0cmluZyAqL1xuICAgICAgPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZih3aW5kb3cubG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcblxuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuXG5mdW5jdGlvbiBobXJBcHBseShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGFzc2V0XG4vKjogIEhNUkFzc2V0ICovXG4pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgdmFyIGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuXG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIGlmIChtb2R1bGVzW2Fzc2V0LmlkXSkge1xuICAgICAgICAvLyBSZW1vdmUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIHJlbW92ZWQgYW5kIHdpbGwgYmVjb21lIG9ycGhhbmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IGlmIHRoZSBhc3NldCBpcyBhZGRlZCBiYWNrIGFnYWluLCB0aGUgY2FjaGUgaXMgZ29uZSwgYW5kIHdlIHByZXZlbnQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICB2YXIgb2xkRGVwcyA9IG1vZHVsZXNbYXNzZXQuaWRdWzFdO1xuXG4gICAgICAgIGZvciAodmFyIGRlcCBpbiBvbGREZXBzKSB7XG4gICAgICAgICAgaWYgKCFkZXBzW2RlcF0gfHwgZGVwc1tkZXBdICE9PSBvbGREZXBzW2RlcF0pIHtcbiAgICAgICAgICAgIHZhciBpZCA9IG9sZERlcHNbZGVwXTtcbiAgICAgICAgICAgIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGZuID0gbmV3IEZ1bmN0aW9uKCdyZXF1aXJlJywgJ21vZHVsZScsICdleHBvcnRzJywgYXNzZXQub3V0cHV0KTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaG1yRGVsZXRlKGJ1bmRsZSwgaWQpIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcblxuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobW9kdWxlc1tpZF0pIHtcbiAgICAvLyBDb2xsZWN0IGRlcGVuZGVuY2llcyB0aGF0IHdpbGwgYmVjb21lIG9ycGhhbmVkIHdoZW4gdGhpcyBtb2R1bGUgaXMgZGVsZXRlZC5cbiAgICB2YXIgZGVwcyA9IG1vZHVsZXNbaWRdWzFdO1xuICAgIHZhciBvcnBoYW5zID0gW107XG5cbiAgICBmb3IgKHZhciBkZXAgaW4gZGVwcykge1xuICAgICAgdmFyIHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgZGVwc1tkZXBdKTtcblxuICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9ycGhhbnMucHVzaChkZXBzW2RlcF0pO1xuICAgICAgfVxuICAgIH0gLy8gRGVsZXRlIHRoZSBtb2R1bGUuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBkZWxldGluZyBkZXBlbmRlbmNpZXMgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG5cblxuICAgIGRlbGV0ZSBtb2R1bGVzW2lkXTtcbiAgICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTsgLy8gTm93IGRlbGV0ZSB0aGUgb3JwaGFucy5cblxuICAgIG9ycGhhbnMuZm9yRWFjaChmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgaG1yRGVsZXRlKGJ1bmRsZS5wYXJlbnQsIGlkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFRyYXZlcnNlIHBhcmVudHMgYnJlYWR0aCBmaXJzdC4gQWxsIHBvc3NpYmxlIGFuY2VzdHJpZXMgbXVzdCBhY2NlcHQgdGhlIEhNUiB1cGRhdGUsIG9yIHdlJ2xsIHJlbG9hZC5cblxuXG4gIHZhciBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgdmFyIGFjY2VwdGVkID0gZmFsc2U7XG5cbiAgd2hpbGUgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgIHZhciB2ID0gcGFyZW50cy5zaGlmdCgpO1xuICAgIHZhciBhID0gaG1yQWNjZXB0Q2hlY2tPbmUodlswXSwgdlsxXSwgbnVsbCk7XG5cbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIHZhciBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuXG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmVudHMsIHRoZW4gd2UndmUgcmVhY2hlZCBhbiBlbnRyeSB3aXRob3V0IGFjY2VwdGluZy4gUmVsb2FkLlxuICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcGFyZW50cy5wdXNoLmFwcGx5KHBhcmVudHMsIF90b0NvbnN1bWFibGVBcnJheShwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuXG5mdW5jdGlvbiBobXJBY2NlcHRDaGVja09uZShidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4sIGRlcHNCeUJ1bmRsZVxuLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki9cbikge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuXG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuXG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuXG4gIGlmICghY2FjaGVkIHx8IGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhtckFjY2VwdFJ1bihidW5kbGVcbi8qOiBQYXJjZWxSZXF1aXJlICovXG4sIGlkXG4vKjogc3RyaW5nICovXG4pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhID0ge307XG5cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGE7XG4gIH1cblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlKGlkKTtcbiAgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcblxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgdmFyIGFzc2V0c1RvQWxzb0FjY2VwdCA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdCAmJiBhc3NldHNUb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgICAgLy8gJEZsb3dGaXhNZVttZXRob2QtdW5iaW5kaW5nXVxuICAgICAgICBhc3NldHNUb0FjY2VwdC5wdXNoLmFwcGx5KGFzc2V0c1RvQWNjZXB0LCBhc3NldHNUb0Fsc29BY2NlcHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWNjZXB0ZWRBc3NldHNbaWRdID0gdHJ1ZTtcbn0iLCJpbXBvcnQgeyBhZGROb3RlIH0gZnJvbSBcIi4uL2Fua2lcIjtcclxuaW1wb3J0IHsgQW5raVJlc3BvbnNlIH0gZnJvbSBcIi4uL2Fua2kvcmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBBZGROb3RlUmVzcG9uc2VNZXNzYWdlLCBNZXNzYWdlVHlwZSwgTWVzc3NhZ2UgfSBmcm9tIFwiLi4vbWVzc2FnZXNcIjtcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAobWVzc2FnZTogTWVzc3NhZ2UpID0+IHtcclxuICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgY2FzZSBNZXNzYWdlVHlwZS5hZGROb3RlOiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYWRkTm90ZShtZXNzYWdlLnBheWxvYWQpO1xyXG4gICAgICBjb25zdCBib2R5OiBBbmtpUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICBsZXQgbm90aWZpY2F0aW9uTWVzc2FnZSA9IFwiTm90ZSBhZGRlZFwiO1xyXG4gICAgICBpZiAoYm9keS5lcnJvciAhPT0gbnVsbCkge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBib2R5LmVycm9yO1xyXG4gICAgICAgIGxvZ2dlci5lcnJvcihib2R5LmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGNocm9tZS5ub3RpZmljYXRpb25zLmNyZWF0ZShcIlwiLCB7XHJcbiAgICAgICAgbWVzc2FnZTogbm90aWZpY2F0aW9uTWVzc2FnZSxcclxuICAgICAgICBpY29uVXJsOiBcImltYWdlcy9sb2dvLnBuZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIldpa3Rpb25hcnkgKytcIixcclxuICAgICAgICB0eXBlOiBcImJhc2ljXCIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpPT4ge1xyXG4gICAgICAgIGNvbnN0IFt0YWJdID0gdGFicztcclxuICAgICAgICBpZiAodGFiID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRhYklkID0gdGFiLmlkO1xyXG4gICAgICAgIGlmICh0YWJJZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZCwge1xyXG4gICAgICAgICAgdHlwZTogTWVzc2FnZVR5cGUuYWRkTm90ZVJlc3BvbnNlLFxyXG4gICAgICAgICAgcGF5bG9hZDogYm9keSxcclxuICAgICAgICB9IGFzIEFkZE5vdGVSZXNwb25zZU1lc3NhZ2UpOyAgXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGxvZ2dlci5lcnJvcihtZXNzYWdlLCBgVW5leHBlY3RlZCBtZXNzYWdlIHR5cGU6ICR7bWVzc2FnZS50eXBlfWApO1xyXG4gIH1cclxufSk7IiwiZXhwb3J0IHsgYWRkTm90ZSB9IGZyb20gXCIuL2FkZE5vdGVcIjtcclxuIiwiaW1wb3J0IHsgaW52b2tlQWN0aW9uIH0gZnJvbSBcIi4vaW52b2tlQWN0aW9uXCI7XHJcbmltcG9ydCB7IEFjdGlvblR5cGUgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcblxyXG4vKipcclxuICogQHNlZSBfX2FkZE5vdGVfXyBpbiBbZG9jc10oaHR0cHM6Ly9mb29zb2Z0Lm5ldC9wcm9qZWN0cy9hbmtpLWNvbm5lY3QvI25vdGUtYWN0aW9ucylcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkTm90ZVBhcmFtcyB7XHJcbiAgbm90ZToge1xyXG4gICAgZGVja05hbWU6IHN0cmluZztcclxuICAgIG1vZGVsTmFtZTogXCJCYXNpY1wiO1xyXG4gICAgZmllbGRzOiB7XHJcbiAgICAgIEZyb250OiBzdHJpbmc7XHJcbiAgICAgIEJhY2s6IHN0cmluZztcclxuICAgIH07XHJcbiAgICBvcHRpb25zPzoge1xyXG4gICAgICBhbGxvd0R1cGxpY2F0ZTogZmFsc2U7XHJcbiAgICAgIGR1cGxpY2F0ZVNjb3BlOiBcImRlY2tcIjtcclxuICAgICAgZHVwbGljYXRlU2NvcGVPcHRpb25zOiB7XHJcbiAgICAgICAgZGVja05hbWU/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgICAgIGNoZWNrQ2hpbGRyZW4/OiBib29sZWFuO1xyXG4gICAgICAgIGNoZWNrQWxsTW9kZWxzOiBib29sZWFuO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIHRhZ3M/OiBzdHJpbmdbXTtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljQWRkTm90ZVBhcmFtcyB7XHJcbiAgZGVja05hbWU6IEFkZE5vdGVQYXJhbXNbXCJub3RlXCJdW1wiZGVja05hbWVcIl0sXHJcbiAgZnJvbnQ6IEFkZE5vdGVQYXJhbXNbXCJub3RlXCJdW1wiZmllbGRzXCJdW1wiRnJvbnRcIl0sXHJcbiAgYmFjazogQWRkTm90ZVBhcmFtc1tcIm5vdGVcIl1bXCJmaWVsZHNcIl1bXCJCYWNrXCJdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0QWRkTm90ZVBhcmFtcyh7XHJcbiAgZnJvbnQsXHJcbiAgYmFjayxcclxuICBkZWNrTmFtZSxcclxufTogQmFzaWNBZGROb3RlUGFyYW1zKTogQWRkTm90ZVBhcmFtcyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5vdGU6IHtcclxuICAgICAgZGVja05hbWUsXHJcbiAgICAgIG1vZGVsTmFtZTogXCJCYXNpY1wiLFxyXG4gICAgICBmaWVsZHM6IHtcclxuICAgICAgICBGcm9udDogZnJvbnQsXHJcbiAgICAgICAgQmFjazogYmFjayxcclxuICAgICAgfSxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGFsbG93RHVwbGljYXRlOiBmYWxzZSxcclxuICAgICAgICBkdXBsaWNhdGVTY29wZTogXCJkZWNrXCIsXHJcbiAgICAgICAgZHVwbGljYXRlU2NvcGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBkZWNrTmFtZTogbnVsbCxcclxuICAgICAgICAgIGNoZWNrQ2hpbGRyZW46IGZhbHNlLFxyXG4gICAgICAgICAgY2hlY2tBbGxNb2RlbHM6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHRhZ3M6IFtdLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTm90ZShwYXJhbXM6IEJhc2ljQWRkTm90ZVBhcmFtcykge1xyXG4gIHJldHVybiBpbnZva2VBY3Rpb24oe1xyXG4gICAgYWN0aW9uOiBBY3Rpb25UeXBlLkFkZE5vdGUsXHJcbiAgICBwYXJhbXM6IGdldERlZmF1bHRBZGROb3RlUGFyYW1zKHBhcmFtcyksXHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uVHlwZSB9IGZyb20gXCIuL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW52b2tlQWN0aW9uUGFyYW1zIHtcclxuICBhY3Rpb246IEFjdGlvblR5cGUuQWRkTm90ZSxcclxuICBwYXJhbXM6IG9iamVjdCxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZUFjdGlvbihwYXJhbXM6IEludm9rZUFjdGlvblBhcmFtcykge1xyXG4gIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAuLi5wYXJhbXMsXHJcbiAgICB2ZXJzaW9uOiA2LFxyXG4gIH0pO1xyXG4gICAgXHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovLzEyNy4wLjAuMTo4NzY1XCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5LFxyXG4gIH0pO1xyXG59IiwiZXhwb3J0cy5pbnRlcm9wRGVmYXVsdCA9IGZ1bmN0aW9uIChhKSB7XG4gIHJldHVybiBhICYmIGEuX19lc01vZHVsZSA/IGEgOiB7ZGVmYXVsdDogYX07XG59O1xuXG5leHBvcnRzLmRlZmluZUludGVyb3BGbGFnID0gZnVuY3Rpb24gKGEpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsICdfX2VzTW9kdWxlJywge3ZhbHVlOiB0cnVlfSk7XG59O1xuXG5leHBvcnRzLmV4cG9ydEFsbCA9IGZ1bmN0aW9uIChzb3VyY2UsIGRlc3QpIHtcbiAgT2JqZWN0LmtleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoa2V5ID09PSAnZGVmYXVsdCcgfHwga2V5ID09PSAnX19lc01vZHVsZScgfHwgZGVzdC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGtleSwge1xuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc291cmNlW2tleV07XG4gICAgICB9LFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZGVzdDtcbn07XG5cbmV4cG9ydHMuZXhwb3J0ID0gZnVuY3Rpb24gKGRlc3QsIGRlc3ROYW1lLCBnZXQpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRlc3QsIGRlc3ROYW1lLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldCxcbiAgfSk7XG59O1xuIiwiZXhwb3J0IGVudW0gQWN0aW9uVHlwZSB7XHJcbiAgQWRkTm90ZSA9IFwiYWRkTm90ZVwiLFxyXG59XHJcblxyXG4iLCJpbXBvcnQgcGlubyBmcm9tIFwicGlub1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IHBpbm8oKTtcclxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGZvcm1hdCA9IHJlcXVpcmUoJ3F1aWNrLWZvcm1hdC11bmVzY2FwZWQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBpbm9cblxuY29uc3QgX2NvbnNvbGUgPSBwZkdsb2JhbFRoaXNPckZhbGxiYWNrKCkuY29uc29sZSB8fCB7fVxuY29uc3Qgc3RkU2VyaWFsaXplcnMgPSB7XG4gIG1hcEh0dHBSZXF1ZXN0OiBtb2NrLFxuICBtYXBIdHRwUmVzcG9uc2U6IG1vY2ssXG4gIHdyYXBSZXF1ZXN0U2VyaWFsaXplcjogcGFzc3Rocm91Z2gsXG4gIHdyYXBSZXNwb25zZVNlcmlhbGl6ZXI6IHBhc3N0aHJvdWdoLFxuICB3cmFwRXJyb3JTZXJpYWxpemVyOiBwYXNzdGhyb3VnaCxcbiAgcmVxOiBtb2NrLFxuICByZXM6IG1vY2ssXG4gIGVycjogYXNFcnJWYWx1ZVxufVxuXG5mdW5jdGlvbiBzaG91bGRTZXJpYWxpemUgKHNlcmlhbGl6ZSwgc2VyaWFsaXplcnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc2VyaWFsaXplKSkge1xuICAgIGNvbnN0IGhhc1RvRmlsdGVyID0gc2VyaWFsaXplLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuIGsgIT09ICchc3RkU2VyaWFsaXplcnMuZXJyJ1xuICAgIH0pXG4gICAgcmV0dXJuIGhhc1RvRmlsdGVyXG4gIH0gZWxzZSBpZiAoc2VyaWFsaXplID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNlcmlhbGl6ZXJzKVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIHBpbm8gKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge31cbiAgb3B0cy5icm93c2VyID0gb3B0cy5icm93c2VyIHx8IHt9XG5cbiAgY29uc3QgdHJhbnNtaXQgPSBvcHRzLmJyb3dzZXIudHJhbnNtaXRcbiAgaWYgKHRyYW5zbWl0ICYmIHR5cGVvZiB0cmFuc21pdC5zZW5kICE9PSAnZnVuY3Rpb24nKSB7IHRocm93IEVycm9yKCdwaW5vOiB0cmFuc21pdCBvcHRpb24gbXVzdCBoYXZlIGEgc2VuZCBmdW5jdGlvbicpIH1cblxuICBjb25zdCBwcm90byA9IG9wdHMuYnJvd3Nlci53cml0ZSB8fCBfY29uc29sZVxuICBpZiAob3B0cy5icm93c2VyLndyaXRlKSBvcHRzLmJyb3dzZXIuYXNPYmplY3QgPSB0cnVlXG4gIGNvbnN0IHNlcmlhbGl6ZXJzID0gb3B0cy5zZXJpYWxpemVycyB8fCB7fVxuICBjb25zdCBzZXJpYWxpemUgPSBzaG91bGRTZXJpYWxpemUob3B0cy5icm93c2VyLnNlcmlhbGl6ZSwgc2VyaWFsaXplcnMpXG4gIGxldCBzdGRFcnJTZXJpYWxpemUgPSBvcHRzLmJyb3dzZXIuc2VyaWFsaXplXG5cbiAgaWYgKFxuICAgIEFycmF5LmlzQXJyYXkob3B0cy5icm93c2VyLnNlcmlhbGl6ZSkgJiZcbiAgICBvcHRzLmJyb3dzZXIuc2VyaWFsaXplLmluZGV4T2YoJyFzdGRTZXJpYWxpemVycy5lcnInKSA+IC0xXG4gICkgc3RkRXJyU2VyaWFsaXplID0gZmFsc2VcblxuICBjb25zdCBsZXZlbHMgPSBbJ2Vycm9yJywgJ2ZhdGFsJywgJ3dhcm4nLCAnaW5mbycsICdkZWJ1ZycsICd0cmFjZSddXG5cbiAgaWYgKHR5cGVvZiBwcm90byA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHByb3RvLmVycm9yID0gcHJvdG8uZmF0YWwgPSBwcm90by53YXJuID1cbiAgICBwcm90by5pbmZvID0gcHJvdG8uZGVidWcgPSBwcm90by50cmFjZSA9IHByb3RvXG4gIH1cbiAgaWYgKG9wdHMuZW5hYmxlZCA9PT0gZmFsc2UpIG9wdHMubGV2ZWwgPSAnc2lsZW50J1xuICBjb25zdCBsZXZlbCA9IG9wdHMubGV2ZWwgfHwgJ2luZm8nXG4gIGNvbnN0IGxvZ2dlciA9IE9iamVjdC5jcmVhdGUocHJvdG8pXG4gIGlmICghbG9nZ2VyLmxvZykgbG9nZ2VyLmxvZyA9IG5vb3BcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobG9nZ2VyLCAnbGV2ZWxWYWwnLCB7XG4gICAgZ2V0OiBnZXRMZXZlbFZhbFxuICB9KVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkobG9nZ2VyLCAnbGV2ZWwnLCB7XG4gICAgZ2V0OiBnZXRMZXZlbCxcbiAgICBzZXQ6IHNldExldmVsXG4gIH0pXG5cbiAgY29uc3Qgc2V0T3B0cyA9IHtcbiAgICB0cmFuc21pdCxcbiAgICBzZXJpYWxpemUsXG4gICAgYXNPYmplY3Q6IG9wdHMuYnJvd3Nlci5hc09iamVjdCxcbiAgICBsZXZlbHMsXG4gICAgdGltZXN0YW1wOiBnZXRUaW1lRnVuY3Rpb24ob3B0cylcbiAgfVxuICBsb2dnZXIubGV2ZWxzID0gcGluby5sZXZlbHNcbiAgbG9nZ2VyLmxldmVsID0gbGV2ZWxcblxuICBsb2dnZXIuc2V0TWF4TGlzdGVuZXJzID0gbG9nZ2VyLmdldE1heExpc3RlbmVycyA9XG4gIGxvZ2dlci5lbWl0ID0gbG9nZ2VyLmFkZExpc3RlbmVyID0gbG9nZ2VyLm9uID1cbiAgbG9nZ2VyLnByZXBlbmRMaXN0ZW5lciA9IGxvZ2dlci5vbmNlID1cbiAgbG9nZ2VyLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBsb2dnZXIucmVtb3ZlTGlzdGVuZXIgPVxuICBsb2dnZXIucmVtb3ZlQWxsTGlzdGVuZXJzID0gbG9nZ2VyLmxpc3RlbmVycyA9XG4gIGxvZ2dlci5saXN0ZW5lckNvdW50ID0gbG9nZ2VyLmV2ZW50TmFtZXMgPVxuICBsb2dnZXIud3JpdGUgPSBsb2dnZXIuZmx1c2ggPSBub29wXG4gIGxvZ2dlci5zZXJpYWxpemVycyA9IHNlcmlhbGl6ZXJzXG4gIGxvZ2dlci5fc2VyaWFsaXplID0gc2VyaWFsaXplXG4gIGxvZ2dlci5fc3RkRXJyU2VyaWFsaXplID0gc3RkRXJyU2VyaWFsaXplXG4gIGxvZ2dlci5jaGlsZCA9IGNoaWxkXG5cbiAgaWYgKHRyYW5zbWl0KSBsb2dnZXIuX2xvZ0V2ZW50ID0gY3JlYXRlTG9nRXZlbnRTaGFwZSgpXG5cbiAgZnVuY3Rpb24gZ2V0TGV2ZWxWYWwgKCkge1xuICAgIHJldHVybiB0aGlzLmxldmVsID09PSAnc2lsZW50J1xuICAgICAgPyBJbmZpbml0eVxuICAgICAgOiB0aGlzLmxldmVscy52YWx1ZXNbdGhpcy5sZXZlbF1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldExldmVsICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWxcbiAgfVxuICBmdW5jdGlvbiBzZXRMZXZlbCAobGV2ZWwpIHtcbiAgICBpZiAobGV2ZWwgIT09ICdzaWxlbnQnICYmICF0aGlzLmxldmVscy52YWx1ZXNbbGV2ZWxdKSB7XG4gICAgICB0aHJvdyBFcnJvcigndW5rbm93biBsZXZlbCAnICsgbGV2ZWwpXG4gICAgfVxuICAgIHRoaXMuX2xldmVsID0gbGV2ZWxcblxuICAgIHNldChzZXRPcHRzLCBsb2dnZXIsICdlcnJvcicsICdsb2cnKSAvLyA8LS0gbXVzdCBzdGF5IGZpcnN0XG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ2ZhdGFsJywgJ2Vycm9yJylcbiAgICBzZXQoc2V0T3B0cywgbG9nZ2VyLCAnd2FybicsICdlcnJvcicpXG4gICAgc2V0KHNldE9wdHMsIGxvZ2dlciwgJ2luZm8nLCAnbG9nJylcbiAgICBzZXQoc2V0T3B0cywgbG9nZ2VyLCAnZGVidWcnLCAnbG9nJylcbiAgICBzZXQoc2V0T3B0cywgbG9nZ2VyLCAndHJhY2UnLCAnbG9nJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoaWxkIChiaW5kaW5ncywgY2hpbGRPcHRpb25zKSB7XG4gICAgaWYgKCFiaW5kaW5ncykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIGJpbmRpbmdzIGZvciBjaGlsZCBQaW5vJylcbiAgICB9XG4gICAgY2hpbGRPcHRpb25zID0gY2hpbGRPcHRpb25zIHx8IHt9XG4gICAgaWYgKHNlcmlhbGl6ZSAmJiBiaW5kaW5ncy5zZXJpYWxpemVycykge1xuICAgICAgY2hpbGRPcHRpb25zLnNlcmlhbGl6ZXJzID0gYmluZGluZ3Muc2VyaWFsaXplcnNcbiAgICB9XG4gICAgY29uc3QgY2hpbGRPcHRpb25zU2VyaWFsaXplcnMgPSBjaGlsZE9wdGlvbnMuc2VyaWFsaXplcnNcbiAgICBpZiAoc2VyaWFsaXplICYmIGNoaWxkT3B0aW9uc1NlcmlhbGl6ZXJzKSB7XG4gICAgICB2YXIgY2hpbGRTZXJpYWxpemVycyA9IE9iamVjdC5hc3NpZ24oe30sIHNlcmlhbGl6ZXJzLCBjaGlsZE9wdGlvbnNTZXJpYWxpemVycylcbiAgICAgIHZhciBjaGlsZFNlcmlhbGl6ZSA9IG9wdHMuYnJvd3Nlci5zZXJpYWxpemUgPT09IHRydWVcbiAgICAgICAgPyBPYmplY3Qua2V5cyhjaGlsZFNlcmlhbGl6ZXJzKVxuICAgICAgICA6IHNlcmlhbGl6ZVxuICAgICAgZGVsZXRlIGJpbmRpbmdzLnNlcmlhbGl6ZXJzXG4gICAgICBhcHBseVNlcmlhbGl6ZXJzKFtiaW5kaW5nc10sIGNoaWxkU2VyaWFsaXplLCBjaGlsZFNlcmlhbGl6ZXJzLCB0aGlzLl9zdGRFcnJTZXJpYWxpemUpXG4gICAgfVxuICAgIGZ1bmN0aW9uIENoaWxkIChwYXJlbnQpIHtcbiAgICAgIHRoaXMuX2NoaWxkTGV2ZWwgPSAocGFyZW50Ll9jaGlsZExldmVsIHwgMCkgKyAxXG4gICAgICB0aGlzLmVycm9yID0gYmluZChwYXJlbnQsIGJpbmRpbmdzLCAnZXJyb3InKVxuICAgICAgdGhpcy5mYXRhbCA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ2ZhdGFsJylcbiAgICAgIHRoaXMud2FybiA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ3dhcm4nKVxuICAgICAgdGhpcy5pbmZvID0gYmluZChwYXJlbnQsIGJpbmRpbmdzLCAnaW5mbycpXG4gICAgICB0aGlzLmRlYnVnID0gYmluZChwYXJlbnQsIGJpbmRpbmdzLCAnZGVidWcnKVxuICAgICAgdGhpcy50cmFjZSA9IGJpbmQocGFyZW50LCBiaW5kaW5ncywgJ3RyYWNlJylcbiAgICAgIGlmIChjaGlsZFNlcmlhbGl6ZXJzKSB7XG4gICAgICAgIHRoaXMuc2VyaWFsaXplcnMgPSBjaGlsZFNlcmlhbGl6ZXJzXG4gICAgICAgIHRoaXMuX3NlcmlhbGl6ZSA9IGNoaWxkU2VyaWFsaXplXG4gICAgICB9XG4gICAgICBpZiAodHJhbnNtaXQpIHtcbiAgICAgICAgdGhpcy5fbG9nRXZlbnQgPSBjcmVhdGVMb2dFdmVudFNoYXBlKFxuICAgICAgICAgIFtdLmNvbmNhdChwYXJlbnQuX2xvZ0V2ZW50LmJpbmRpbmdzLCBiaW5kaW5ncylcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICBDaGlsZC5wcm90b3R5cGUgPSB0aGlzXG4gICAgcmV0dXJuIG5ldyBDaGlsZCh0aGlzKVxuICB9XG4gIHJldHVybiBsb2dnZXJcbn1cblxucGluby5sZXZlbHMgPSB7XG4gIHZhbHVlczoge1xuICAgIGZhdGFsOiA2MCxcbiAgICBlcnJvcjogNTAsXG4gICAgd2FybjogNDAsXG4gICAgaW5mbzogMzAsXG4gICAgZGVidWc6IDIwLFxuICAgIHRyYWNlOiAxMFxuICB9LFxuICBsYWJlbHM6IHtcbiAgICAxMDogJ3RyYWNlJyxcbiAgICAyMDogJ2RlYnVnJyxcbiAgICAzMDogJ2luZm8nLFxuICAgIDQwOiAnd2FybicsXG4gICAgNTA6ICdlcnJvcicsXG4gICAgNjA6ICdmYXRhbCdcbiAgfVxufVxuXG5waW5vLnN0ZFNlcmlhbGl6ZXJzID0gc3RkU2VyaWFsaXplcnNcbnBpbm8uc3RkVGltZUZ1bmN0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHsgbnVsbFRpbWUsIGVwb2NoVGltZSwgdW5peFRpbWUsIGlzb1RpbWUgfSlcblxuZnVuY3Rpb24gc2V0IChvcHRzLCBsb2dnZXIsIGxldmVsLCBmYWxsYmFjaykge1xuICBjb25zdCBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihsb2dnZXIpXG4gIGxvZ2dlcltsZXZlbF0gPSBsb2dnZXIubGV2ZWxWYWwgPiBsb2dnZXIubGV2ZWxzLnZhbHVlc1tsZXZlbF1cbiAgICA/IG5vb3BcbiAgICA6IChwcm90b1tsZXZlbF0gPyBwcm90b1tsZXZlbF0gOiAoX2NvbnNvbGVbbGV2ZWxdIHx8IF9jb25zb2xlW2ZhbGxiYWNrXSB8fCBub29wKSlcblxuICB3cmFwKG9wdHMsIGxvZ2dlciwgbGV2ZWwpXG59XG5cbmZ1bmN0aW9uIHdyYXAgKG9wdHMsIGxvZ2dlciwgbGV2ZWwpIHtcbiAgaWYgKCFvcHRzLnRyYW5zbWl0ICYmIGxvZ2dlcltsZXZlbF0gPT09IG5vb3ApIHJldHVyblxuXG4gIGxvZ2dlcltsZXZlbF0gPSAoZnVuY3Rpb24gKHdyaXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIExPRyAoKSB7XG4gICAgICBjb25zdCB0cyA9IG9wdHMudGltZXN0YW1wKClcbiAgICAgIGNvbnN0IGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcbiAgICAgIGNvbnN0IHByb3RvID0gKE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykgPT09IF9jb25zb2xlKSA/IF9jb25zb2xlIDogdGhpc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG5cbiAgICAgIGlmIChvcHRzLnNlcmlhbGl6ZSAmJiAhb3B0cy5hc09iamVjdCkge1xuICAgICAgICBhcHBseVNlcmlhbGl6ZXJzKGFyZ3MsIHRoaXMuX3NlcmlhbGl6ZSwgdGhpcy5zZXJpYWxpemVycywgdGhpcy5fc3RkRXJyU2VyaWFsaXplKVxuICAgICAgfVxuICAgICAgaWYgKG9wdHMuYXNPYmplY3QpIHdyaXRlLmNhbGwocHJvdG8sIGFzT2JqZWN0KHRoaXMsIGxldmVsLCBhcmdzLCB0cykpXG4gICAgICBlbHNlIHdyaXRlLmFwcGx5KHByb3RvLCBhcmdzKVxuXG4gICAgICBpZiAob3B0cy50cmFuc21pdCkge1xuICAgICAgICBjb25zdCB0cmFuc21pdExldmVsID0gb3B0cy50cmFuc21pdC5sZXZlbCB8fCBsb2dnZXIubGV2ZWxcbiAgICAgICAgY29uc3QgdHJhbnNtaXRWYWx1ZSA9IHBpbm8ubGV2ZWxzLnZhbHVlc1t0cmFuc21pdExldmVsXVxuICAgICAgICBjb25zdCBtZXRob2RWYWx1ZSA9IHBpbm8ubGV2ZWxzLnZhbHVlc1tsZXZlbF1cbiAgICAgICAgaWYgKG1ldGhvZFZhbHVlIDwgdHJhbnNtaXRWYWx1ZSkgcmV0dXJuXG4gICAgICAgIHRyYW5zbWl0KHRoaXMsIHtcbiAgICAgICAgICB0cyxcbiAgICAgICAgICBtZXRob2RMZXZlbDogbGV2ZWwsXG4gICAgICAgICAgbWV0aG9kVmFsdWUsXG4gICAgICAgICAgdHJhbnNtaXRMZXZlbCxcbiAgICAgICAgICB0cmFuc21pdFZhbHVlOiBwaW5vLmxldmVscy52YWx1ZXNbb3B0cy50cmFuc21pdC5sZXZlbCB8fCBsb2dnZXIubGV2ZWxdLFxuICAgICAgICAgIHNlbmQ6IG9wdHMudHJhbnNtaXQuc2VuZCxcbiAgICAgICAgICB2YWw6IGxvZ2dlci5sZXZlbFZhbFxuICAgICAgICB9LCBhcmdzKVxuICAgICAgfVxuICAgIH1cbiAgfSkobG9nZ2VyW2xldmVsXSlcbn1cblxuZnVuY3Rpb24gYXNPYmplY3QgKGxvZ2dlciwgbGV2ZWwsIGFyZ3MsIHRzKSB7XG4gIGlmIChsb2dnZXIuX3NlcmlhbGl6ZSkgYXBwbHlTZXJpYWxpemVycyhhcmdzLCBsb2dnZXIuX3NlcmlhbGl6ZSwgbG9nZ2VyLnNlcmlhbGl6ZXJzLCBsb2dnZXIuX3N0ZEVyclNlcmlhbGl6ZSlcbiAgY29uc3QgYXJnc0Nsb25lZCA9IGFyZ3Muc2xpY2UoKVxuICBsZXQgbXNnID0gYXJnc0Nsb25lZFswXVxuICBjb25zdCBvID0ge31cbiAgaWYgKHRzKSB7XG4gICAgby50aW1lID0gdHNcbiAgfVxuICBvLmxldmVsID0gcGluby5sZXZlbHMudmFsdWVzW2xldmVsXVxuICBsZXQgbHZsID0gKGxvZ2dlci5fY2hpbGRMZXZlbCB8IDApICsgMVxuICBpZiAobHZsIDwgMSkgbHZsID0gMVxuICAvLyBkZWxpYmVyYXRlLCBjYXRjaGluZyBvYmplY3RzLCBhcnJheXNcbiAgaWYgKG1zZyAhPT0gbnVsbCAmJiB0eXBlb2YgbXNnID09PSAnb2JqZWN0Jykge1xuICAgIHdoaWxlIChsdmwtLSAmJiB0eXBlb2YgYXJnc0Nsb25lZFswXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24obywgYXJnc0Nsb25lZC5zaGlmdCgpKVxuICAgIH1cbiAgICBtc2cgPSBhcmdzQ2xvbmVkLmxlbmd0aCA/IGZvcm1hdChhcmdzQ2xvbmVkLnNoaWZ0KCksIGFyZ3NDbG9uZWQpIDogdW5kZWZpbmVkXG4gIH0gZWxzZSBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIG1zZyA9IGZvcm1hdChhcmdzQ2xvbmVkLnNoaWZ0KCksIGFyZ3NDbG9uZWQpXG4gIGlmIChtc2cgIT09IHVuZGVmaW5lZCkgby5tc2cgPSBtc2dcbiAgcmV0dXJuIG9cbn1cblxuZnVuY3Rpb24gYXBwbHlTZXJpYWxpemVycyAoYXJncywgc2VyaWFsaXplLCBzZXJpYWxpemVycywgc3RkRXJyU2VyaWFsaXplKSB7XG4gIGZvciAoY29uc3QgaSBpbiBhcmdzKSB7XG4gICAgaWYgKHN0ZEVyclNlcmlhbGl6ZSAmJiBhcmdzW2ldIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIGFyZ3NbaV0gPSBwaW5vLnN0ZFNlcmlhbGl6ZXJzLmVycihhcmdzW2ldKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGFyZ3NbaV0pKSB7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gYXJnc1tpXSkge1xuICAgICAgICBpZiAoc2VyaWFsaXplICYmIHNlcmlhbGl6ZS5pbmRleE9mKGspID4gLTEgJiYgayBpbiBzZXJpYWxpemVycykge1xuICAgICAgICAgIGFyZ3NbaV1ba10gPSBzZXJpYWxpemVyc1trXShhcmdzW2ldW2tdKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmQgKHBhcmVudCwgYmluZGluZ3MsIGxldmVsKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXJncyA9IG5ldyBBcnJheSgxICsgYXJndW1lbnRzLmxlbmd0aClcbiAgICBhcmdzWzBdID0gYmluZGluZ3NcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSAtIDFdXG4gICAgfVxuICAgIHJldHVybiBwYXJlbnRbbGV2ZWxdLmFwcGx5KHRoaXMsIGFyZ3MpXG4gIH1cbn1cblxuZnVuY3Rpb24gdHJhbnNtaXQgKGxvZ2dlciwgb3B0cywgYXJncykge1xuICBjb25zdCBzZW5kID0gb3B0cy5zZW5kXG4gIGNvbnN0IHRzID0gb3B0cy50c1xuICBjb25zdCBtZXRob2RMZXZlbCA9IG9wdHMubWV0aG9kTGV2ZWxcbiAgY29uc3QgbWV0aG9kVmFsdWUgPSBvcHRzLm1ldGhvZFZhbHVlXG4gIGNvbnN0IHZhbCA9IG9wdHMudmFsXG4gIGNvbnN0IGJpbmRpbmdzID0gbG9nZ2VyLl9sb2dFdmVudC5iaW5kaW5nc1xuXG4gIGFwcGx5U2VyaWFsaXplcnMoXG4gICAgYXJncyxcbiAgICBsb2dnZXIuX3NlcmlhbGl6ZSB8fCBPYmplY3Qua2V5cyhsb2dnZXIuc2VyaWFsaXplcnMpLFxuICAgIGxvZ2dlci5zZXJpYWxpemVycyxcbiAgICBsb2dnZXIuX3N0ZEVyclNlcmlhbGl6ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGxvZ2dlci5fc3RkRXJyU2VyaWFsaXplXG4gIClcbiAgbG9nZ2VyLl9sb2dFdmVudC50cyA9IHRzXG4gIGxvZ2dlci5fbG9nRXZlbnQubWVzc2FnZXMgPSBhcmdzLmZpbHRlcihmdW5jdGlvbiAoYXJnKSB7XG4gICAgLy8gYmluZGluZ3MgY2FuIG9ubHkgYmUgb2JqZWN0cywgc28gcmVmZXJlbmNlIGVxdWFsaXR5IGNoZWNrIHZpYSBpbmRleE9mIGlzIGZpbmVcbiAgICByZXR1cm4gYmluZGluZ3MuaW5kZXhPZihhcmcpID09PSAtMVxuICB9KVxuXG4gIGxvZ2dlci5fbG9nRXZlbnQubGV2ZWwubGFiZWwgPSBtZXRob2RMZXZlbFxuICBsb2dnZXIuX2xvZ0V2ZW50LmxldmVsLnZhbHVlID0gbWV0aG9kVmFsdWVcblxuICBzZW5kKG1ldGhvZExldmVsLCBsb2dnZXIuX2xvZ0V2ZW50LCB2YWwpXG5cbiAgbG9nZ2VyLl9sb2dFdmVudCA9IGNyZWF0ZUxvZ0V2ZW50U2hhcGUoYmluZGluZ3MpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvZ0V2ZW50U2hhcGUgKGJpbmRpbmdzKSB7XG4gIHJldHVybiB7XG4gICAgdHM6IDAsXG4gICAgbWVzc2FnZXM6IFtdLFxuICAgIGJpbmRpbmdzOiBiaW5kaW5ncyB8fCBbXSxcbiAgICBsZXZlbDogeyBsYWJlbDogJycsIHZhbHVlOiAwIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhc0VyclZhbHVlIChlcnIpIHtcbiAgY29uc3Qgb2JqID0ge1xuICAgIHR5cGU6IGVyci5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgIG1zZzogZXJyLm1lc3NhZ2UsXG4gICAgc3RhY2s6IGVyci5zdGFja1xuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIGVycikge1xuICAgIGlmIChvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmpba2V5XSA9IGVycltrZXldXG4gICAgfVxuICB9XG4gIHJldHVybiBvYmpcbn1cblxuZnVuY3Rpb24gZ2V0VGltZUZ1bmN0aW9uIChvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cy50aW1lc3RhbXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gb3B0cy50aW1lc3RhbXBcbiAgfVxuICBpZiAob3B0cy50aW1lc3RhbXAgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG51bGxUaW1lXG4gIH1cbiAgcmV0dXJuIGVwb2NoVGltZVxufVxuXG5mdW5jdGlvbiBtb2NrICgpIHsgcmV0dXJuIHt9IH1cbmZ1bmN0aW9uIHBhc3N0aHJvdWdoIChhKSB7IHJldHVybiBhIH1cbmZ1bmN0aW9uIG5vb3AgKCkge31cblxuZnVuY3Rpb24gbnVsbFRpbWUgKCkgeyByZXR1cm4gZmFsc2UgfVxuZnVuY3Rpb24gZXBvY2hUaW1lICgpIHsgcmV0dXJuIERhdGUubm93KCkgfVxuZnVuY3Rpb24gdW5peFRpbWUgKCkgeyByZXR1cm4gTWF0aC5yb3VuZChEYXRlLm5vdygpIC8gMTAwMC4wKSB9XG5mdW5jdGlvbiBpc29UaW1lICgpIHsgcmV0dXJuIG5ldyBEYXRlKERhdGUubm93KCkpLnRvSVNPU3RyaW5nKCkgfSAvLyB1c2luZyBEYXRlLm5vdygpIGZvciB0ZXN0YWJpbGl0eVxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBmR2xvYmFsVGhpc09yRmFsbGJhY2sgKCkge1xuICBmdW5jdGlvbiBkZWZkIChvKSB7IHJldHVybiB0eXBlb2YgbyAhPT0gJ3VuZGVmaW5lZCcgJiYgbyB9XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJykgcmV0dXJuIGdsb2JhbFRoaXNcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT2JqZWN0LnByb3RvdHlwZSwgJ2dsb2JhbFRoaXMnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVsZXRlIE9iamVjdC5wcm90b3R5cGUuZ2xvYmFsVGhpc1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2xvYmFsVGhpcyA9IHRoaXMpXG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgICByZXR1cm4gZ2xvYmFsVGhpc1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGRlZmQoc2VsZikgfHwgZGVmZCh3aW5kb3cpIHx8IGRlZmQodGhpcykgfHwge31cbiAgfVxufVxuLyogZXNsaW50LWVuYWJsZSAqL1xuIiwiJ3VzZSBzdHJpY3QnXG5mdW5jdGlvbiB0cnlTdHJpbmdpZnkgKG8pIHtcbiAgdHJ5IHsgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG8pIH0gY2F0Y2goZSkgeyByZXR1cm4gJ1wiW0NpcmN1bGFyXVwiJyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0XG5cbmZ1bmN0aW9uIGZvcm1hdChmLCBhcmdzLCBvcHRzKSB7XG4gIHZhciBzcyA9IChvcHRzICYmIG9wdHMuc3RyaW5naWZ5KSB8fCB0cnlTdHJpbmdpZnlcbiAgdmFyIG9mZnNldCA9IDFcbiAgaWYgKHR5cGVvZiBmID09PSAnb2JqZWN0JyAmJiBmICE9PSBudWxsKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoICsgb2Zmc2V0XG4gICAgaWYgKGxlbiA9PT0gMSkgcmV0dXJuIGZcbiAgICB2YXIgb2JqZWN0cyA9IG5ldyBBcnJheShsZW4pXG4gICAgb2JqZWN0c1swXSA9IHNzKGYpXG4gICAgZm9yICh2YXIgaW5kZXggPSAxOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgb2JqZWN0c1tpbmRleF0gPSBzcyhhcmdzW2luZGV4XSlcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdHMuam9pbignICcpXG4gIH1cbiAgaWYgKHR5cGVvZiBmICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmXG4gIH1cbiAgdmFyIGFyZ0xlbiA9IGFyZ3MubGVuZ3RoXG4gIGlmIChhcmdMZW4gPT09IDApIHJldHVybiBmXG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgYSA9IDEgLSBvZmZzZXRcbiAgdmFyIGxhc3RQb3MgPSAtMVxuICB2YXIgZmxlbiA9IChmICYmIGYubGVuZ3RoKSB8fCAwXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZmxlbjspIHtcbiAgICBpZiAoZi5jaGFyQ29kZUF0KGkpID09PSAzNyAmJiBpICsgMSA8IGZsZW4pIHtcbiAgICAgIGxhc3RQb3MgPSBsYXN0UG9zID4gLTEgPyBsYXN0UG9zIDogMFxuICAgICAgc3dpdGNoIChmLmNoYXJDb2RlQXQoaSArIDEpKSB7XG4gICAgICAgIGNhc2UgMTAwOiAvLyAnZCdcbiAgICAgICAgY2FzZSAxMDI6IC8vICdmJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGFyZ3NbYV0gPT0gbnVsbCkgIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gTnVtYmVyKGFyZ3NbYV0pXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAxMDU6IC8vICdpJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGFyZ3NbYV0gPT0gbnVsbCkgIGJyZWFrXG4gICAgICAgICAgaWYgKGxhc3RQb3MgPCBpKVxuICAgICAgICAgICAgc3RyICs9IGYuc2xpY2UobGFzdFBvcywgaSlcbiAgICAgICAgICBzdHIgKz0gTWF0aC5mbG9vcihOdW1iZXIoYXJnc1thXSkpXG4gICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgaSsrXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA3OTogLy8gJ08nXG4gICAgICAgIGNhc2UgMTExOiAvLyAnbydcbiAgICAgICAgY2FzZSAxMDY6IC8vICdqJ1xuICAgICAgICAgIGlmIChhID49IGFyZ0xlbilcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgaWYgKGFyZ3NbYV0gPT09IHVuZGVmaW5lZCkgYnJlYWtcbiAgICAgICAgICBpZiAobGFzdFBvcyA8IGkpXG4gICAgICAgICAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zLCBpKVxuICAgICAgICAgIHZhciB0eXBlID0gdHlwZW9mIGFyZ3NbYV1cbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0ciArPSAnXFwnJyArIGFyZ3NbYV0gKyAnXFwnJ1xuICAgICAgICAgICAgbGFzdFBvcyA9IGkgKyAyXG4gICAgICAgICAgICBpKytcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBzdHIgKz0gYXJnc1thXS5uYW1lIHx8ICc8YW5vbnltb3VzPidcbiAgICAgICAgICAgIGxhc3RQb3MgPSBpICsgMlxuICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdHIgKz0gc3MoYXJnc1thXSlcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICBpKytcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDExNTogLy8gJ3MnXG4gICAgICAgICAgaWYgKGEgPj0gYXJnTGVuKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBpZiAobGFzdFBvcyA8IGkpXG4gICAgICAgICAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zLCBpKVxuICAgICAgICAgIHN0ciArPSBTdHJpbmcoYXJnc1thXSlcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICBpKytcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDM3OiAvLyAnJSdcbiAgICAgICAgICBpZiAobGFzdFBvcyA8IGkpXG4gICAgICAgICAgICBzdHIgKz0gZi5zbGljZShsYXN0UG9zLCBpKVxuICAgICAgICAgIHN0ciArPSAnJSdcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDJcbiAgICAgICAgICBpKytcbiAgICAgICAgICBhLS1cbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgKythXG4gICAgfVxuICAgICsraVxuICB9XG4gIGlmIChsYXN0UG9zID09PSAtMSlcbiAgICByZXR1cm4gZlxuICBlbHNlIGlmIChsYXN0UG9zIDwgZmxlbikge1xuICAgIHN0ciArPSBmLnNsaWNlKGxhc3RQb3MpXG4gIH1cblxuICByZXR1cm4gc3RyXG59XG4iLCJpbXBvcnQgeyBCYXNpY0FkZE5vdGVQYXJhbXMgfSBmcm9tIFwiLi9hbmtpL2FkZE5vdGVcIjtcclxuaW1wb3J0IHsgQW5raVJlc3BvbnNlIH0gZnJvbSBcIi4vYW5raS9yZXNwb25zZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xyXG4gIGFkZE5vdGUsXHJcbiAgYWRkTm90ZVJlc3BvbnNlLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZE5vdGVNZXNzYWdlIHtcclxuICB0eXBlOiBNZXNzYWdlVHlwZS5hZGROb3RlLFxyXG4gIHBheWxvYWQ6IEJhc2ljQWRkTm90ZVBhcmFtcyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGROb3RlUmVzcG9uc2VNZXNzYWdlIHtcclxuICB0eXBlOiBNZXNzYWdlVHlwZS5hZGROb3RlUmVzcG9uc2UsXHJcbiAgcGF5bG9hZDogQW5raVJlc3BvbnNlLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZXNzc2FnZSA9XHJcbiB8IEFkZE5vdGVNZXNzYWdlXHJcbiB8IEFkZE5vdGVSZXNwb25zZU1lc3NhZ2VcclxuOyJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJldmVudExpc3RlbmVyLmpzLm1hcCJ9
