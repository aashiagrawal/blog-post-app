var $lgQxb$react = require("react");
var $lgQxb$reactdom = require("react-dom");
var $lgQxb$reachrouter = require("@reach/router");
var $lgQxb$antd = require("antd");
var $lgQxb$antdesignicons = require("@ant-design/icons");
var $lgQxb$lodash = require("lodash");
var $lgQxb$firebaseapp = require("firebase/app");
var $lgQxb$firebasefirestore = require("firebase/firestore");
var $lgQxb$firebaseauth = require("firebase/auth");
var $lgQxb$firebaseanalytics = require("firebase/analytics");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireba50"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireba50"] = parcelRequire;
}
"use strict";

var $84b79afa456f6c66$var$_react = $84b79afa456f6c66$var$_interopRequireDefault($lgQxb$react);

var $84b79afa456f6c66$var$_reactDom = $84b79afa456f6c66$var$_interopRequireDefault($lgQxb$reactdom);
parcelRequire.register("8B28h", function(module, exports) {
"use strict";
function $116be5e11dc8215c$var$_typeof(obj1) {
    return $116be5e11dc8215c$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $116be5e11dc8215c$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $116be5e11dc8215c$var$_react = $116be5e11dc8215c$var$_interopRequireWildcard($lgQxb$react);

var $116be5e11dc8215c$var$_Posts = $116be5e11dc8215c$var$_interopRequireDefault((parcelRequire("7GtZH")));

var $116be5e11dc8215c$var$_Post = $116be5e11dc8215c$var$_interopRequireDefault((parcelRequire("ftZGR")));

var $116be5e11dc8215c$var$_CreatePost = $116be5e11dc8215c$var$_interopRequireDefault((parcelRequire("bDpgB")));

var $116be5e11dc8215c$var$_updatePost = $116be5e11dc8215c$var$_interopRequireDefault((parcelRequire("c5mhI")));




var $116be5e11dc8215c$var$_SignUp = $116be5e11dc8215c$var$_interopRequireDefault((parcelRequire("eSw1o")));

var $116be5e11dc8215c$var$_SignIn = $116be5e11dc8215c$var$_interopRequireDefault((parcelRequire("79jzz")));

var $lMDN7 = parcelRequire("lMDN7");
function $116be5e11dc8215c$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $116be5e11dc8215c$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($116be5e11dc8215c$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $116be5e11dc8215c$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $116be5e11dc8215c$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $116be5e11dc8215c$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $116be5e11dc8215c$var$_slicedToArray(arr, i) {
    return $116be5e11dc8215c$var$_arrayWithHoles(arr) || $116be5e11dc8215c$var$_iterableToArrayLimit(arr, i) || $116be5e11dc8215c$var$_unsupportedIterableToArray(arr, i) || $116be5e11dc8215c$var$_nonIterableRest();
}
function $116be5e11dc8215c$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $116be5e11dc8215c$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $116be5e11dc8215c$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $116be5e11dc8215c$var$_arrayLikeToArray(o, minLen);
}
function $116be5e11dc8215c$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $116be5e11dc8215c$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $116be5e11dc8215c$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var $116be5e11dc8215c$var$SubMenu = $lgQxb$antd.Menu.SubMenu;
function $116be5e11dc8215c$var$App(props) {
    var _useState = (0, $116be5e11dc8215c$var$_react.useState)(false), _useState2 = $116be5e11dc8215c$var$_slicedToArray(_useState, 2), user1 = _useState2[0], setUser = _useState2[1];
    (0, $lMDN7.onAuthStateChanged)($lMDN7.auth, function(user) {
        if (user) setUser(user);
        else console.log("no user is signed in");
    });
    var onSignOut = function onSignOut() {
        console.log('signing out');
        (0, $lMDN7.signOut)($lMDN7.auth).then(function() {
            console.log('user signed out');
            setUser(false);
        })["catch"](function(error) {
        });
    };
    return(/*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement("div", {
        className: "app_container"
    }, /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement("div", {
        className: "app_main_navigation"
    }, /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$antd.Menu, {
        mode: "horizontal"
    }, /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$antd.Menu.Item, {
        key: "posts",
        icon: /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$antdesignicons.FormOutlined, null)
    }, /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$reachrouter.Link, {
        to: "/posts"
    }, "Posts")), user1 && /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$antd.Menu.Item, {
        key: "create_post",
        icon: /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$antdesignicons.EditOutlined, null)
    }, /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$reachrouter.Link, {
        to: "/create_post"
    }, "Create Post")), /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$antd.Menu.Item, {
        key: "sign_out",
        style: {
            "float": 'right'
        },
        icon: /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$antdesignicons.EditOutlined, null)
    }, !user1 ? /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$reachrouter.Link, {
        to: "/sign_in",
        style: {
            "float": 'right'
        }
    }, "Sign In") : /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement("p", {
        onClick: onSignOut,
        style: {
            "float": 'right'
        }
    }, "Sign Out")))), /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($lgQxb$reachrouter.Router, null, /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($116be5e11dc8215c$var$_SignUp["default"], {
        path: "sign_up"
    }), /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($116be5e11dc8215c$var$_SignIn["default"], {
        path: "sign_in",
        "default": true
    }), /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($116be5e11dc8215c$var$_Posts["default"], {
        path: "posts",
        user: user1
    }), /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($116be5e11dc8215c$var$_Post["default"], {
        path: "post/:id"
    }), /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($116be5e11dc8215c$var$_CreatePost["default"], {
        path: "create_post"
    }), /*#__PURE__*/ $116be5e11dc8215c$var$_react["default"].createElement($116be5e11dc8215c$var$_updatePost["default"], {
        path: "update_post/:id"
    }))));
}
var $116be5e11dc8215c$var$_default = $116be5e11dc8215c$var$App;
module.exports["default"] = $116be5e11dc8215c$var$_default;

});
parcelRequire.register("7GtZH", function(module, exports) {
"use strict";
function $242b68242a5c0a0d$var$_typeof(obj1) {
    return $242b68242a5c0a0d$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $242b68242a5c0a0d$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $242b68242a5c0a0d$var$_react = $242b68242a5c0a0d$var$_interopRequireWildcard($lgQxb$react);


var $242b68242a5c0a0d$var$_PostSnippet = $242b68242a5c0a0d$var$_interopRequireDefault((parcelRequire("5w0Jy")));

var $242b68242a5c0a0d$var$_lodash = $242b68242a5c0a0d$var$_interopRequireDefault($lgQxb$lodash);

var $242b68242a5c0a0d$var$_firebase = $242b68242a5c0a0d$var$_interopRequireWildcard((parcelRequire("lMDN7")));
function $242b68242a5c0a0d$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $242b68242a5c0a0d$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($242b68242a5c0a0d$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $242b68242a5c0a0d$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $242b68242a5c0a0d$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $242b68242a5c0a0d$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $242b68242a5c0a0d$var$_toConsumableArray(arr) {
    return $242b68242a5c0a0d$var$_arrayWithoutHoles(arr) || $242b68242a5c0a0d$var$_iterableToArray(arr) || $242b68242a5c0a0d$var$_unsupportedIterableToArray(arr) || $242b68242a5c0a0d$var$_nonIterableSpread();
}
function $242b68242a5c0a0d$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $242b68242a5c0a0d$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function $242b68242a5c0a0d$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $242b68242a5c0a0d$var$_arrayLikeToArray(arr);
}
function $242b68242a5c0a0d$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $242b68242a5c0a0d$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {
        };
        i % 2 ? $242b68242a5c0a0d$var$ownKeys(Object(source), !0).forEach(function(key) {
            $242b68242a5c0a0d$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $242b68242a5c0a0d$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $242b68242a5c0a0d$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $242b68242a5c0a0d$var$_slicedToArray(arr, i) {
    return $242b68242a5c0a0d$var$_arrayWithHoles(arr) || $242b68242a5c0a0d$var$_iterableToArrayLimit(arr, i) || $242b68242a5c0a0d$var$_unsupportedIterableToArray(arr, i) || $242b68242a5c0a0d$var$_nonIterableRest();
}
function $242b68242a5c0a0d$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $242b68242a5c0a0d$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $242b68242a5c0a0d$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $242b68242a5c0a0d$var$_arrayLikeToArray(o, minLen);
}
function $242b68242a5c0a0d$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $242b68242a5c0a0d$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $242b68242a5c0a0d$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function $242b68242a5c0a0d$var$Posts(props) {
    var _useState = (0, $242b68242a5c0a0d$var$_react.useState)([]), _useState2 = $242b68242a5c0a0d$var$_slicedToArray(_useState, 2), posts1 = _useState2[0], setPosts = _useState2[1];
    (0, $242b68242a5c0a0d$var$_react.useEffect)(function() {
        console.log("line 13");
        var postRef = (0, $242b68242a5c0a0d$var$_firebase.collection)($242b68242a5c0a0d$var$_firebase["default"], "posts");
        (0, $242b68242a5c0a0d$var$_firebase.getDocs)(postRef).then(function(postsnapshots) {
            postsnapshots.forEach(function(post) {
                var data = post.data();
                var id = post.id; // console.log("data and id: ", id, data)
                var payload = $242b68242a5c0a0d$var$_objectSpread({
                    id: id
                }, data);
                setPosts(function(posts) {
                    return [].concat($242b68242a5c0a0d$var$_toConsumableArray(posts), [
                        payload
                    ]);
                });
            });
        });
    }, []);
    return(/*#__PURE__*/ $242b68242a5c0a0d$var$_react["default"].createElement("div", {
        className: "posts_container"
    }, /*#__PURE__*/ $242b68242a5c0a0d$var$_react["default"].createElement("div", {
        className: "page_header_container"
    }, /*#__PURE__*/ $242b68242a5c0a0d$var$_react["default"].createElement($lgQxb$antd.PageHeader, {
        className: "site-page-header",
        title: "Posts"
    })), /*#__PURE__*/ $242b68242a5c0a0d$var$_react["default"].createElement("div", {
        className: "articles_container"
    }, $242b68242a5c0a0d$var$_lodash["default"].map(posts1, function(article, idx) {
        return(/*#__PURE__*/ $242b68242a5c0a0d$var$_react["default"].createElement($242b68242a5c0a0d$var$_PostSnippet["default"], {
            key: idx,
            id: article.id,
            title: $242b68242a5c0a0d$var$_lodash["default"].capitalize(article.title),
            content: article.content,
            user: props.user,
            time: article.time
        }));
    }))));
}
var $242b68242a5c0a0d$var$_default = $242b68242a5c0a0d$var$Posts;
module.exports["default"] = $242b68242a5c0a0d$var$_default;

});
parcelRequire.register("5w0Jy", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $e17d65d91634e70e$var$_react = $e17d65d91634e70e$var$_interopRequireDefault($lgQxb$react);


function $e17d65d91634e70e$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
function $e17d65d91634e70e$var$PostSnippet(props) {
    console.log("props.time: ", props.time);
    return(/*#__PURE__*/ $e17d65d91634e70e$var$_react["default"].createElement("div", {
        className: "post_snippet_container"
    }, /*#__PURE__*/ $e17d65d91634e70e$var$_react["default"].createElement($lgQxb$antd.Card, {
        style: {
            marginTop: 16
        },
        type: "inner",
        title: props.title,
        extra: /*#__PURE__*/ $e17d65d91634e70e$var$_react["default"].createElement("div", {
            className: "post_snippet_inks"
        }, /*#__PURE__*/ $e17d65d91634e70e$var$_react["default"].createElement("div", null, props.time), props.user && /*#__PURE__*/ $e17d65d91634e70e$var$_react["default"].createElement($lgQxb$reachrouter.Link, {
            to: "/update_post/".concat(props.id),
            style: {
                marginRight: '20px'
            }
        }, "Edit"), /*#__PURE__*/ $e17d65d91634e70e$var$_react["default"].createElement($lgQxb$reachrouter.Link, {
            to: "/post/".concat(props.id)
        }, "Read Full Article"))
    }, /*#__PURE__*/ $e17d65d91634e70e$var$_react["default"].createElement("p", {
        className: "article_content"
    }, props.content))));
}
var $e17d65d91634e70e$var$_default = $e17d65d91634e70e$var$PostSnippet;
module.exports["default"] = $e17d65d91634e70e$var$_default;

});

parcelRequire.register("lMDN7", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
Object.defineProperty(module.exports, "addDoc", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebasefirestore.addDoc;
    }
});
module.exports.auth = void 0;
Object.defineProperty(module.exports, "collection", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebasefirestore.collection;
    }
});
Object.defineProperty(module.exports, "createUserWithEmailAndPassword", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebaseauth.createUserWithEmailAndPassword;
    }
});
module.exports["default"] = void 0;
Object.defineProperty(module.exports, "doc", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebasefirestore.doc;
    }
});
Object.defineProperty(module.exports, "getAuth", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebaseauth.getAuth;
    }
});
Object.defineProperty(module.exports, "getDoc", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebasefirestore.getDoc;
    }
});
Object.defineProperty(module.exports, "getDocs", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebasefirestore.getDocs;
    }
});
Object.defineProperty(module.exports, "onAuthStateChanged", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebaseauth.onAuthStateChanged;
    }
});
Object.defineProperty(module.exports, "signInWithEmailAndPassword", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebaseauth.signInWithEmailAndPassword;
    }
});
Object.defineProperty(module.exports, "signOut", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebaseauth.signOut;
    }
});
Object.defineProperty(module.exports, "updateDoc", {
    enumerable: true,
    get: function get() {
        return $lgQxb$firebasefirestore.updateDoc;
    }
});




// require("firebase/firestore");
var $fdbcf261e44889d4$var$firebaseConfig = {
    apiKey: "AIzaSyA-zFv_K1k3G4_baPcsDI1OxqoCP7EKoaY",
    authDomain: "react-intro-blog-19ec1.firebaseapp.com",
    projectId: "react-intro-blog-19ec1",
    storageBucket: "react-intro-blog-19ec1.appspot.com",
    messagingSenderId: "637825989012",
    appId: "1:637825989012:web:2356fb885365a2f5f4f781",
    measurementId: "G-3GNB2V49JP"
}; // Initialize Firebase
var $fdbcf261e44889d4$var$app = (0, $lgQxb$firebaseapp.initializeApp)($fdbcf261e44889d4$var$firebaseConfig);
var $fdbcf261e44889d4$var$analytics = (0, $lgQxb$firebaseanalytics.getAnalytics)($fdbcf261e44889d4$var$app);
var $fdbcf261e44889d4$var$db = (0, $lgQxb$firebasefirestore.getFirestore)($fdbcf261e44889d4$var$app); //   var db = firebase.firestore();
var $fdbcf261e44889d4$var$auth = (0, $lgQxb$firebaseauth.getAuth)($fdbcf261e44889d4$var$app); // export const firestore = firebase.firestore
module.exports.auth = $fdbcf261e44889d4$var$auth;
var $fdbcf261e44889d4$var$_default = $fdbcf261e44889d4$var$db;
module.exports["default"] = $fdbcf261e44889d4$var$_default;

});


parcelRequire.register("ftZGR", function(module, exports) {
"use strict";
function $e2197d449bf020c9$var$_typeof(obj1) {
    return $e2197d449bf020c9$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $e2197d449bf020c9$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $e2197d449bf020c9$var$_react = $e2197d449bf020c9$var$_interopRequireWildcard($lgQxb$react);


var $e2197d449bf020c9$var$_firebase = $e2197d449bf020c9$var$_interopRequireWildcard((parcelRequire("lMDN7")));
function $e2197d449bf020c9$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($e2197d449bf020c9$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $e2197d449bf020c9$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $e2197d449bf020c9$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $e2197d449bf020c9$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $e2197d449bf020c9$var$_slicedToArray(arr, i) {
    return $e2197d449bf020c9$var$_arrayWithHoles(arr) || $e2197d449bf020c9$var$_iterableToArrayLimit(arr, i) || $e2197d449bf020c9$var$_unsupportedIterableToArray(arr, i) || $e2197d449bf020c9$var$_nonIterableRest();
}
function $e2197d449bf020c9$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $e2197d449bf020c9$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $e2197d449bf020c9$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $e2197d449bf020c9$var$_arrayLikeToArray(o, minLen);
}
function $e2197d449bf020c9$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $e2197d449bf020c9$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $e2197d449bf020c9$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
// var content = `
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in gravida nisl. Nunc sodales egestas consectetur. Pellentesque rhoncus arcu sed massa congue fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas venenatis condimentum mauris, at pretium quam tincidunt ac. Aliquam ante arcu, efficitur vitae pharetra dictum, rhoncus at diam. Donec malesuada ante ut volutpat ultricies. Cras blandit, lectus eget mattis vestibulum, lacus ipsum accumsan lectus, quis sagittis arcu sem sit amet massa.
// Duis consectetur ultrices interdum. Quisque scelerisque ex ac odio ultricies, eu sollicitudin odio congue. Mauris venenatis mattis tortor, lobortis suscipit leo accumsan sagittis. Sed in scelerisque mauris, ac suscipit urna. Vivamus tincidunt tincidunt placerat. Cras consectetur dictum ex non aliquet. Vestibulum pulvinar, tellus vel placerat pellentesque, nisi orci sollicitudin augue, nec rutrum magna dui sit amet nibh. Vestibulum ullamcorper ultrices elit, vel maximus ligula pretium id. Integer pretium velit non erat aliquet accumsan. Praesent ac magna blandit, luctus sem id, pretium ligula. Quisque tempor metus eu dui tristique semper.
// Sed sollicitudin tempus ligula, nec laoreet lectus feugiat eget. Integer nec viverra nunc. Donec lacus nisl, pharetra sed commodo non, faucibus at orci. Donec mattis pharetra ipsum, aliquet vehicula mi finibus vitae. Suspendisse mi sem, hendrerit et blandit eu, pulvinar sollicitudin leo. Integer justo dui, varius a aliquam sit amet, lobortis id sapien. Praesent mi enim, sodales vitae maximus et, dictum a ante. Suspendisse et eros sem. In vitae efficitur nibh, a aliquam enim. Maecenas aliquam eu elit congue pellentesque. Mauris volutpat lacus diam, nec auctor erat congue non. Pellentesque semper viverra felis, tincidunt egestas dolor aliquam a. Vivamus ut pharetra eros. Nullam ante magna, rhoncus ac purus in, porta malesuada augue. Aliquam erat volutpat. Maecenas pellentesque gravida nulla quis laoreet.
// Etiam finibus, augue non elementum suscipit, ante quam finibus felis, in dictum orci lacus a nulla. Nunc rhoncus ac leo in ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eget dictum nisl, vel ultricies ligula. Quisque condimentum tellus non dui bibendum, ut tincidunt nibh tincidunt. Vestibulum eu aliquet justo. Vestibulum scelerisque pulvinar laoreet. Nam sollicitudin eros at ligula ornare accumsan. Sed quis lacus eu leo commodo viverra. Proin et augue vel mauris consectetur auctor eget vel nibh. Proin lacinia, eros at porttitor consequat, orci velit sodales ex, ut consequat eros odio in nibh.
// Curabitur sed lacus turpis. Integer gravida aliquam pharetra. Donec pretium augue vel lorem sagittis, quis rhoncus massa facilisis. Curabitur sodales mi sed lectus vehicula, sit amet elementum risus ultrices. Etiam nisi lacus, accumsan at iaculis ut, dictum nec eros. In vel dui vitae turpis efficitur consectetur sit amet venenatis eros. Curabitur auctor felis non odio dignissim elementum. Suspendisse vitae accumsan augue. Cras faucibus vestibulum nulla, vel malesuada lacus bibendum venenatis.
// `
var $e2197d449bf020c9$var$Post = function Post(props) {
    console.log('props', props);
    var _useState = (0, $e2197d449bf020c9$var$_react.useState)(''), _useState2 = $e2197d449bf020c9$var$_slicedToArray(_useState, 2), title1 = _useState2[0], setTitle = _useState2[1];
    var _useState3 = (0, $e2197d449bf020c9$var$_react.useState)(''), _useState4 = $e2197d449bf020c9$var$_slicedToArray(_useState3, 2), content1 = _useState4[0], setContent = _useState4[1];
    var _useState5 = (0, $e2197d449bf020c9$var$_react.useState)(''), _useState6 = $e2197d449bf020c9$var$_slicedToArray(_useState5, 2), time1 = _useState6[0], setTime = _useState6[1];
    (0, $e2197d449bf020c9$var$_react.useEffect)(function() {
        var postRef = (0, $e2197d449bf020c9$var$_firebase.doc)((0, $e2197d449bf020c9$var$_firebase.collection)($e2197d449bf020c9$var$_firebase["default"], "posts"), props.id);
        (0, $e2197d449bf020c9$var$_firebase.getDoc)(postRef).then(function(doc) {
            var _doc$data = doc.data(), content = _doc$data.content, title = _doc$data.title, time = _doc$data.time;
            setTitle(title);
            setContent(content);
            setTime(time);
        });
    }, []);
    console.log('time', time1);
    return(/*#__PURE__*/ $e2197d449bf020c9$var$_react["default"].createElement("div", {
        className: "post_container"
    }, /*#__PURE__*/ $e2197d449bf020c9$var$_react["default"].createElement("div", {
        className: "page_header_container"
    }, /*#__PURE__*/ $e2197d449bf020c9$var$_react["default"].createElement($lgQxb$antd.PageHeader, {
        className: "site-page-header",
        title: title1
    })), /*#__PURE__*/ $e2197d449bf020c9$var$_react["default"].createElement("div", {
        classsName: "post_content_container"
    }, /*#__PURE__*/ $e2197d449bf020c9$var$_react["default"].createElement($lgQxb$antd.Card, {
        style: {
            marginTop: '20px'
        }
    }, content1.split('\n').map(function(paragraph, idx) {
        return(/*#__PURE__*/ $e2197d449bf020c9$var$_react["default"].createElement("p", {
            key: idx
        }, paragraph));
    })))));
};
var $e2197d449bf020c9$var$_default = $e2197d449bf020c9$var$Post;
module.exports["default"] = $e2197d449bf020c9$var$_default;

});

parcelRequire.register("bDpgB", function(module, exports) {
"use strict";
function $0ae81da93bf6890d$var$_typeof(obj1) {
    return $0ae81da93bf6890d$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $0ae81da93bf6890d$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $0ae81da93bf6890d$var$_react = $0ae81da93bf6890d$var$_interopRequireWildcard($lgQxb$react);


var $0ae81da93bf6890d$var$_firebase = $0ae81da93bf6890d$var$_interopRequireWildcard((parcelRequire("lMDN7")));

function $0ae81da93bf6890d$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($0ae81da93bf6890d$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $0ae81da93bf6890d$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $0ae81da93bf6890d$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $0ae81da93bf6890d$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $0ae81da93bf6890d$var$_slicedToArray(arr, i) {
    return $0ae81da93bf6890d$var$_arrayWithHoles(arr) || $0ae81da93bf6890d$var$_iterableToArrayLimit(arr, i) || $0ae81da93bf6890d$var$_unsupportedIterableToArray(arr, i) || $0ae81da93bf6890d$var$_nonIterableRest();
}
function $0ae81da93bf6890d$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $0ae81da93bf6890d$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $0ae81da93bf6890d$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $0ae81da93bf6890d$var$_arrayLikeToArray(o, minLen);
}
function $0ae81da93bf6890d$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $0ae81da93bf6890d$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $0ae81da93bf6890d$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var $0ae81da93bf6890d$var$TextArea = $lgQxb$antd.Input.TextArea;
var $0ae81da93bf6890d$var$CreatePost = function CreatePost() {
    var _useState = (0, $0ae81da93bf6890d$var$_react.useState)(''), _useState2 = $0ae81da93bf6890d$var$_slicedToArray(_useState, 2), title = _useState2[0], setTitle = _useState2[1];
    var _useState3 = (0, $0ae81da93bf6890d$var$_react.useState)(''), _useState4 = $0ae81da93bf6890d$var$_slicedToArray(_useState3, 2), content = _useState4[0], setContent = _useState4[1];
    var time = (0, $0ae81da93bf6890d$var$_react.useState)('');
    var onTitleChange = function onTitleChange(event) {
        return setTitle(event.target.value);
    };
    var onContentChange = function onContentChange(event) {
        return setContent(event.target.value);
    };
    var onCreatePost = function onCreatePost() {
        time = Date.now();
        time = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }).format(time);
        var postRef = (0, $0ae81da93bf6890d$var$_firebase.collection)($0ae81da93bf6890d$var$_firebase["default"], "posts");
        var payload = {
            title: title,
            content: content,
            time: time
        };
        (0, $0ae81da93bf6890d$var$_firebase.addDoc)(postRef, payload).then(function(doc) {
            console.log("Doc updated!", doc.id);
        });
        setTitle('');
        setContent('');
        (0, $lgQxb$reachrouter.navigate)("/posts");
    };
    var formatting = {
        fontSize: '20px',
        marginTop: '20px'
    };
    return(/*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("h1", null, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "create_post_container"
    }, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "page_header_container"
    }, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement($lgQxb$antd.PageHeader, {
        className: "site-page-header",
        title: "Create Post"
    }))), /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "posts_input_container",
        style: {
            marginTop: "20px"
        }
    }, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "post_input_container"
    }, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "post_input_title",
        style: {
            fontSize: '20px'
        }
    }, "Post Title"), /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "post_input"
    }, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement($lgQxb$antd.Input, {
        placeholder: "Post Title",
        value: title,
        onChange: onTitleChange
    }))), /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "input"
    }, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "post_input_title",
        style: formatting
    }, "Post Content"), /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "post_input"
    }, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement($0ae81da93bf6890d$var$TextArea, {
        rows: 10,
        value: content,
        onChange: onContentChange
    }))), /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement("div", {
        className: "post_input_button"
    }, /*#__PURE__*/ $0ae81da93bf6890d$var$_react["default"].createElement($lgQxb$antd.Button, {
        type: "primary",
        size: "large",
        onClick: onCreatePost,
        style: {
            marginTop: '20px'
        }
    }, "Create Post")))));
};
var $0ae81da93bf6890d$var$_default = $0ae81da93bf6890d$var$CreatePost;
module.exports["default"] = $0ae81da93bf6890d$var$_default;

});

parcelRequire.register("c5mhI", function(module, exports) {
"use strict";
function $12b902b12d3be326$var$_typeof(obj1) {
    return $12b902b12d3be326$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $12b902b12d3be326$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;


var $12b902b12d3be326$var$_firebase = $12b902b12d3be326$var$_interopRequireWildcard((parcelRequire("lMDN7")));


var $12b902b12d3be326$var$_react = $12b902b12d3be326$var$_interopRequireWildcard($lgQxb$react);
function $12b902b12d3be326$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($12b902b12d3be326$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $12b902b12d3be326$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $12b902b12d3be326$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $12b902b12d3be326$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $12b902b12d3be326$var$_slicedToArray(arr, i) {
    return $12b902b12d3be326$var$_arrayWithHoles(arr) || $12b902b12d3be326$var$_iterableToArrayLimit(arr, i) || $12b902b12d3be326$var$_unsupportedIterableToArray(arr, i) || $12b902b12d3be326$var$_nonIterableRest();
}
function $12b902b12d3be326$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $12b902b12d3be326$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $12b902b12d3be326$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $12b902b12d3be326$var$_arrayLikeToArray(o, minLen);
}
function $12b902b12d3be326$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $12b902b12d3be326$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $12b902b12d3be326$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var $12b902b12d3be326$var$TextArea = $lgQxb$antd.Input.TextArea;
var $12b902b12d3be326$var$UpdatePost = function UpdatePost(props) {
    var _useState = (0, $12b902b12d3be326$var$_react.useState)(''), _useState2 = $12b902b12d3be326$var$_slicedToArray(_useState, 2), title1 = _useState2[0], setTitle = _useState2[1];
    var _useState3 = (0, $12b902b12d3be326$var$_react.useState)(''), _useState4 = $12b902b12d3be326$var$_slicedToArray(_useState3, 2), content1 = _useState4[0], setContent = _useState4[1];
    (0, $12b902b12d3be326$var$_react.useEffect)(function() {
        var postRef = (0, $12b902b12d3be326$var$_firebase.doc)((0, $12b902b12d3be326$var$_firebase.collection)($12b902b12d3be326$var$_firebase["default"], "posts"), props.id);
        (0, $12b902b12d3be326$var$_firebase.getDoc)(postRef).then(function(doc) {
            var _doc$data = doc.data(), content = _doc$data.content, title = _doc$data.title;
            setTitle(title);
            setContent(content);
        });
    }, []);
    var onTitleChange = function onTitleChange(event) {
        return setTitle(event.target.value);
    };
    var onContentChange = function onContentChange(event) {
        return setContent(event.target.value);
    };
    var onEditPost = function onEditPost() {
        var postRef = (0, $12b902b12d3be326$var$_firebase.doc)((0, $12b902b12d3be326$var$_firebase.collection)($12b902b12d3be326$var$_firebase["default"], "posts"), props.id);
        var payload = {
            title: title1,
            content: content1
        };
        (0, $12b902b12d3be326$var$_firebase.updateDoc)(postRef, payload).then(function(doc) {
            console.log("Doc successfully updated!", doc.id);
        });
        (0, $lgQxb$reachrouter.navigate)("/posts");
    };
    return(/*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("h1", null, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "create_post_container"
    }, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "page_header_container"
    }, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement($lgQxb$antd.PageHeader, {
        className: "site-page-header",
        title: "Create Post"
    }))), /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "posts_input_container"
    }, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "post_input_container"
    }, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "post_input_title"
    }, "Post Title"), /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "post_input"
    }, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement($lgQxb$antd.Input, {
        placeholder: "Post Title",
        value: title1,
        onChange: onTitleChange
    }))), /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "input"
    }, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "post_input_title"
    }, "Post Content"), /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "post_input"
    }, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement($12b902b12d3be326$var$TextArea, {
        rows: 10,
        value: content1,
        onChange: onContentChange
    }))), /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement("div", {
        className: "post_input_button"
    }, /*#__PURE__*/ $12b902b12d3be326$var$_react["default"].createElement($lgQxb$antd.Button, {
        type: "primary",
        size: "large",
        onClick: onEditPost
    }, "Edit Post")))));
};
var $12b902b12d3be326$var$_default = $12b902b12d3be326$var$UpdatePost;
module.exports["default"] = $12b902b12d3be326$var$_default;

});

parcelRequire.register("eSw1o", function(module, exports) {
"use strict";
function $72b8f2c2c7f05fda$var$_typeof(obj1) {
    return $72b8f2c2c7f05fda$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $72b8f2c2c7f05fda$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $72b8f2c2c7f05fda$var$_react = $72b8f2c2c7f05fda$var$_interopRequireWildcard($lgQxb$react);


var $lMDN7 = parcelRequire("lMDN7");

function $72b8f2c2c7f05fda$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($72b8f2c2c7f05fda$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $72b8f2c2c7f05fda$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $72b8f2c2c7f05fda$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $72b8f2c2c7f05fda$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $72b8f2c2c7f05fda$var$_slicedToArray(arr, i) {
    return $72b8f2c2c7f05fda$var$_arrayWithHoles(arr) || $72b8f2c2c7f05fda$var$_iterableToArrayLimit(arr, i) || $72b8f2c2c7f05fda$var$_unsupportedIterableToArray(arr, i) || $72b8f2c2c7f05fda$var$_nonIterableRest();
}
function $72b8f2c2c7f05fda$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $72b8f2c2c7f05fda$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $72b8f2c2c7f05fda$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $72b8f2c2c7f05fda$var$_arrayLikeToArray(o, minLen);
}
function $72b8f2c2c7f05fda$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $72b8f2c2c7f05fda$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $72b8f2c2c7f05fda$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var $72b8f2c2c7f05fda$var$TextArea = $lgQxb$antd.Input.TextArea;
var $72b8f2c2c7f05fda$var$SignUp = function SignUp(props) {
    var _useState = (0, $72b8f2c2c7f05fda$var$_react.useState)(''), _useState2 = $72b8f2c2c7f05fda$var$_slicedToArray(_useState, 2), email = _useState2[0], setEmail = _useState2[1];
    var _useState3 = (0, $72b8f2c2c7f05fda$var$_react.useState)(''), _useState4 = $72b8f2c2c7f05fda$var$_slicedToArray(_useState3, 2), password = _useState4[0], setPassword = _useState4[1];
    var onEmailChange = function onEmailChange(event) {
        return setEmail(event.target.value);
    };
    var onPasswordChange = function onPasswordChange(event) {
        return setPassword(event.target.value);
    };
    var onSignUp = function onSignUp() {
        console.log('sign up');
        console.log(email, password);
        (0, $lMDN7.createUserWithEmailAndPassword)($lMDN7.auth, email, password)["catch"](function(error) {
            console.log('error in signup');
        });
        setEmail('');
        setPassword('');
    };
    return(/*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "sign_up_container"
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "page_header_container"
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement($lgQxb$antd.PageHeader, {
        className: "site-page-header",
        title: "Sign Up"
    })), /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "sign_up_input_container",
        style: {
            marginTop: "20px"
        }
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "post_input_container"
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "post_input_title"
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("h2", null, "Email")), /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "post_input"
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement($lgQxb$antd.Input, {
        placeholder: "Email",
        onChange: onEmailChange
    }))), /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "post_input_container"
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "post_input_title",
        style: {
            marginTop: '20px'
        }
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("h2", null, "Password")), /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "post_input"
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement($lgQxb$antd.Input.Password, {
        placeholder: "Password",
        onChange: onPasswordChange
    }))), /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        style: {
            width: "100%"
        }
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        style: {
            "float": "left"
        }
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement($lgQxb$reachrouter.Link, {
        to: "/sign_in"
    }, "Have an account, Sign In")), /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement("div", {
        className: "post_input_button"
    }, /*#__PURE__*/ $72b8f2c2c7f05fda$var$_react["default"].createElement($lgQxb$antd.Button, {
        type: "primary",
        size: "large",
        style: {
            marginTop: '20px'
        },
        onClick: onSignUp
    }, "Sign Up"))))));
};
var $72b8f2c2c7f05fda$var$_default = $72b8f2c2c7f05fda$var$SignUp;
module.exports["default"] = $72b8f2c2c7f05fda$var$_default;

});

parcelRequire.register("79jzz", function(module, exports) {
"use strict";
function $740acdfb9a473284$var$_typeof(obj1) {
    return $740acdfb9a473284$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $740acdfb9a473284$var$_typeof(obj1);
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $740acdfb9a473284$var$_react = $740acdfb9a473284$var$_interopRequireWildcard($lgQxb$react);



var $lMDN7 = parcelRequire("lMDN7");
function $740acdfb9a473284$var$_getRequireWildcardCache(nodeInterop1) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return ($740acdfb9a473284$var$_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop1);
}
function $740acdfb9a473284$var$_interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || $740acdfb9a473284$var$_typeof(obj) !== "object" && typeof obj !== "function") return {
        "default": obj
    };
    var cache = $740acdfb9a473284$var$_getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj["default"] = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
function $740acdfb9a473284$var$_slicedToArray(arr, i) {
    return $740acdfb9a473284$var$_arrayWithHoles(arr) || $740acdfb9a473284$var$_iterableToArrayLimit(arr, i) || $740acdfb9a473284$var$_unsupportedIterableToArray(arr, i) || $740acdfb9a473284$var$_nonIterableRest();
}
function $740acdfb9a473284$var$_nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $740acdfb9a473284$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $740acdfb9a473284$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $740acdfb9a473284$var$_arrayLikeToArray(o, minLen);
}
function $740acdfb9a473284$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function $740acdfb9a473284$var$_iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function $740acdfb9a473284$var$_arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var $740acdfb9a473284$var$TextArea = $lgQxb$antd.Input.TextArea;
var $740acdfb9a473284$var$SignIn = function SignIn(props) {
    var _useState = (0, $740acdfb9a473284$var$_react.useState)(''), _useState2 = $740acdfb9a473284$var$_slicedToArray(_useState, 2), email = _useState2[0], setEmail = _useState2[1];
    var _useState3 = (0, $740acdfb9a473284$var$_react.useState)(''), _useState4 = $740acdfb9a473284$var$_slicedToArray(_useState3, 2), password = _useState4[0], setPassword = _useState4[1];
    var onEmailChange = function onEmailChange(event) {
        return setEmail(event.target.value);
    };
    var onPasswordChange = function onPasswordChange(event) {
        return setPassword(event.target.value);
    };
    var onSignIn = function onSignIn() {
        console.log(email, password);
        (0, $lMDN7.signInWithEmailAndPassword)($lMDN7.auth, email, password).then(function(result) {
            console.log('user signed in');
        })["catch"](function(error) {
            console.log('there was an error signing in');
            console.log(error);
        });
        setEmail('');
        setPassword('');
        (0, $lgQxb$reachrouter.navigate)('/posts');
    };
    return(/*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "sign_up_container"
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "page_header_container"
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement($lgQxb$antd.PageHeader, {
        className: "site-page-header",
        title: "Sign In"
    })), /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "sign_up_input_container",
        style: {
            marginTop: "20px"
        }
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "post_input_container"
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "post_input_title"
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("h2", null, "Email")), /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "post_input"
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement($lgQxb$antd.Input, {
        placeholder: "Email",
        onChange: onEmailChange
    }))), /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "post_input_container"
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "post_input_title",
        style: {
            marginTop: '20px'
        }
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("h2", null, "Password")), /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "post_input"
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement($lgQxb$antd.Input.Password, {
        placeholder: "Password",
        onChange: onPasswordChange
    }))), /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        style: {
            width: "100%"
        }
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        style: {
            "float": "left"
        }
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement($lgQxb$reachrouter.Link, {
        to: "/sign_up"
    }, "Don't have an account, Sign Up")), /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement("div", {
        className: "post_input_button"
    }, /*#__PURE__*/ $740acdfb9a473284$var$_react["default"].createElement($lgQxb$antd.Button, {
        type: "primary",
        size: "large",
        style: {
            marginTop: '20px'
        },
        onClick: onSignIn
    }, "Sign In"))))));
};
var $740acdfb9a473284$var$_default = $740acdfb9a473284$var$SignIn;
module.exports["default"] = $740acdfb9a473284$var$_default;

});



var $84b79afa456f6c66$var$_App = $84b79afa456f6c66$var$_interopRequireDefault((parcelRequire("8B28h")));
function $84b79afa456f6c66$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}
if (null) null.accept();
var $84b79afa456f6c66$var$rootElement = document.getElementById('root');
$84b79afa456f6c66$var$_reactDom["default"].render(/*#__PURE__*/ $84b79afa456f6c66$var$_react["default"].createElement($84b79afa456f6c66$var$_App["default"], null), $84b79afa456f6c66$var$rootElement);


