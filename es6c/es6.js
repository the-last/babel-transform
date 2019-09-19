'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('./utils.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var A = function () {
  function A() {
    var _this = this;

    _classCallCheck(this, A);

    this.getNumber = function () {
      var number = 1;
      return 'name: ' + _this.name + ' + number: ' + number;
    };

    this.name = 'the-last';
  }

  _createClass(A, [{
    key: 'getName',
    value: function getName() {
      var age = 100;
      return 'name: ' + this.name + ' + age: ' + age;
    }
  }]);

  return A;
}();

var func = function func() {
  var con = 10;
  var le = 100;
  console.log(con + le);
};
func();
var met = _utils.methods;
met(20);

console.log(_utils.methods + '', typeof _utils.methods === 'undefined' ? 'undefined' : _typeof(_utils.methods), (0, _utils.methods)(20));