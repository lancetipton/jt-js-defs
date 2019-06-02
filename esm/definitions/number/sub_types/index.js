"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FloatType", {
  enumerable: true,
  get: function get() {
    return _float.default;
  }
});
Object.defineProperty(exports, "MoneyType", {
  enumerable: true,
  get: function get() {
    return _money.default;
  }
});
Object.defineProperty(exports, "PercentType", {
  enumerable: true,
  get: function get() {
    return _percent.default;
  }
});

var _float = _interopRequireDefault(require("./float"));

var _money = _interopRequireDefault(require("./money"));

var _percent = _interopRequireDefault(require("./percent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }