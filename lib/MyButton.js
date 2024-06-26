"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MyButton = function MyButton(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick;
  var buttonStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: buttonStyle,
    onClick: onClick,
    type: "button"
  }, label);
};
var _default = exports["default"] = MyButton;