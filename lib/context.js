'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/* globals document */

var Context = (function (_React$Component) {
  _inherits(Context, _React$Component);

  function Context() {
    var _this = this;

    _classCallCheck(this, Context);

    _get(Object.getPrototypeOf(Context.prototype), 'constructor', this).call(this);

    this.onContextMenu = function (e) {
      e.preventDefault();
      if (!_this.state.active) _this.setState({ active: true });
      if (_this.props.onShow) _this.props.onShow(e);
      _react2['default'].findDOMNode(_this.refs.menu).style.top = e.clientY + 5;
      _react2['default'].findDOMNode(_this.refs.menu).style.left = e.clientX + 10;
    };

    this.onClick = function (e) {
      var isMenu = e.target.getAttribute('data-context');
      if (isMenu !== 'true') _this.setState({ active: false });
    };

    this.state = {};
  }

  _createClass(Context, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var node = this.props.node || document;
      node.addEventListener('contextmenu', this.onContextMenu);
      document.addEventListener('click', this.onClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = this.props.node || document;
      node.removeEventListener('click', this.onClick, false);
      document.removeEventListener('contextmenu', this.onContextMenu, false);
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      return _react2['default'].Children.map(this.props.children, function (child) {
        return _react2['default'].cloneElement(child, _extends({}, child.props, {
          'data-context': true
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.active) return null;

      var style = this.props.style || {};
      style.position = 'absolute';
      style.zIndex = 999999;

      return _react2['default'].createElement(
        'div',
        _extends({ ref: 'menu', 'data-context': 'true', style: style }, this.props),
        this.renderChildren()
      );
    }
  }]);

  return Context;
})(_react2['default'].Component);

exports['default'] = Context;
module.exports = exports['default'];