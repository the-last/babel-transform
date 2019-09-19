(function() {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function(r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function(require, module, exports) {
        "use strict";

        var _typeof =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _utils = require("./utils.js");

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        var A = (function() {
          function A() {
            var _this = this;

            _classCallCheck(this, A);

            this.getNumber = function() {
              var number = 1;
              return "name: " + _this.name + " + number: " + number;
            };

            this.name = "the-last";
          }

          _createClass(A, [
            {
              key: "getName",
              value: function getName() {
                var age = 100;
                return "name: " + this.name + " + age: " + age;
              }
            }
          ]);

          return A;
        })();

        var func = function func() {
          var con = 10;
          var le = 100;
          console.log(con + le);
        };
        func();
        var met = _utils.methods;
        met(20);

        console.log(
          _utils.methods + "",
          typeof _utils.methods === "undefined"
            ? "undefined"
            : _typeof(_utils.methods),
          (0, _utils.methods)(20)
        );
      },
      { "./utils.js": 2 }
    ],
    2: [
      function(require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        function methods(v) {
          return 28 + v;
        }
        exports.methods = methods;
      },
      {}
    ]
  },
  {},
  [1]
);
