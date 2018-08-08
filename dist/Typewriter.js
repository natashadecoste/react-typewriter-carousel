'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Typewriter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./typewriter.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _proptypes = require('proptypes');

var _proptypes2 = _interopRequireDefault(_proptypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Typewriter = exports.Typewriter = function (_React$Component) {
  _inherits(Typewriter, _React$Component);

  function Typewriter(props) {
    _classCallCheck(this, Typewriter);

    var _this = _possibleConstructorReturn(this, (Typewriter.__proto__ || Object.getPrototypeOf(Typewriter)).call(this, props));

    _this.autoType = function () {
      return new Promise(function (resolve, reject) {
        var amntOfChars = _this.state.current.length;
        var textContent = _this.state.current.split("");
        var newString = "";

        setTimeout(function () {
          for (var i = -1; i < amntOfChars - 1; i++) {
            (function (i) {
              setTimeout(function () {
                _this.addChar(textContent[i], i * 200);
                if (i == amntOfChars - 1) {
                  resolve(true);
                }
              }, i * _this.props.typeSpeed);
            })(i + 1);
          }
        }, 1200);
      });
    };

    _this.autoDelete = function () {
      return new Promise(function (resolve, reject) {
        var amntOfChars = _this.state.message.length;
        var newString = "";
        setTimeout(function () {
          for (var i = -1; i < amntOfChars - 1; i++) {
            (function (i) {
              setTimeout(function () {
                newString = String(_this.state.message).substr(0, _this.state.message.length - 1);
                _this.setState({
                  message: newString
                });
                if (i == amntOfChars - 1) {
                  resolve(true);
                }
              }, i * _this.props.typeSpeed);
            })(i + 1);
          }
        }, 1200);
      });
    };

    _this.state = {
      index: 0,
      current: _this.props.data[0],
      message: ""
    };
    return _this;
  }

  _createClass(Typewriter, [{
    key: 'createMessage',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var t, newIndex;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!true) {
                  _context.next = 12;
                  break;
                }

                _context.next = 3;
                return this.autoType();

              case 3:
                t = _context.sent;

                if (!t) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return this.autoDelete();

              case 7:
                t = _context.sent;

              case 8:
                newIndex = (this.state.index + 1) % this.props.data.length;

                this.setState({
                  index: newIndex,
                  current: this.props.data[newIndex]
                });
                _context.next = 0;
                break;

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function createMessage() {
        return _ref.apply(this, arguments);
      }

      return createMessage;
    }()
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createMessage();
    }
  }, {
    key: 'addChar',
    value: function addChar(char) {
      var newString = this.state.message;
      newString += char;

      this.setState({
        message: newString
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var width = this.props.width;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)("typewriter-wrapper", { "ios-chat": this.props.chatStyle }) },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)("typewriter") },
          this.state.message
        )
      );
    }
  }]);

  return Typewriter;
}(_react2.default.Component);

Typewriter.propTypes = {
  data: _proptypes2.default.arrayOf(_proptypes2.default.string).isRequired,
  width: _proptypes2.default.string,
  typeSpeed: _proptypes2.default.number
};

Typewriter.defaultProps = {
  data: null,
  width: "100%",
  typeSpeed: 100
};