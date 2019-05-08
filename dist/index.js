'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styles = require('@material-ui/core/styles');
var Paper = _interopDefault(require('@material-ui/core/Paper'));
var Grid = _interopDefault(require('@material-ui/core/Grid'));
var MathJax = _interopDefault(require('react-mathjax'));
var Button = _interopDefault(require('@material-ui/core/Button'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Component = function (_ReactComponet) {
    inherits(Component, _ReactComponet);

    function Component(props) {
        classCallCheck(this, Component);

        var _this = possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

        _this.clickBuntton = _this.clickBuntton.bind(_this);
        _this.props.mapKeys.setCallback(_this.clickBuntton);
        _this.props.mapKeys.setMap();
        _this.props.mapEvents.setMap();
        return _this;
    }

    createClass(Component, [{
        key: "clickBuntton",
        value: function clickBuntton(btn) {
            return btn;
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                keyboard = _props.keyboard,
                mapKeys = _props.mapKeys;


            return React__default.createElement(
                Paper,
                null,
                React__default.createElement(
                    MathJax.Provider,
                    null,
                    React__default.createElement(
                        Grid,
                        { container: true, spacing: 0 },
                        keyboard.map(function (row) {
                            return row.map(function (btn) {
                                return React__default.createElement(
                                    Grid,
                                    { key: btn, item: true, xs: Math.ceil(12 / row.length) },
                                    mapKeys.get(btn)
                                );
                            });
                        })
                    )
                )
            );
        }
    }]);
    return Component;
}(React.Component);

Component.propTypes = {
    keyboard: PropTypes.array.isRequired,
    mapKeys: PropTypes.object.isRequired,
    mapEvents: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};


var Component$1 = styles.withStyles({})(Component);

var Component$2 = function (_ReactComponent) {
    inherits(Component, _ReactComponent);

    function Component(props) {
        classCallCheck(this, Component);

        var _this = possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    createClass(Component, [{
        key: "handleClick",
        value: function handleClick() {
            var _props = this.props,
                onClick = _props.onClick,
                value = _props.value;

            onClick(value);
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                text = _props2.text,
                classes = _props2.classes;


            return React__default.createElement(
                Button,
                { className: classes.button, onClick: this.handleClick },
                React__default.createElement(MathJax.Node, { formula: text })
            );
        }
    }]);
    return Component;
}(React.Component);

Component$2.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

var styles$1 = function styles$$1() {
    return {
        button: {
            margin: 0,
            width: "100%",
            height: "68px"
        },
        input: {
            display: "none"
        }
    };
};

var Key = styles.withStyles(styles$1)(Component$2);

var MapKeys = function () {
    function MapKeys() {
        classCallCheck(this, MapKeys);

        this.map = new Map();
    }

    createClass(MapKeys, [{
        key: "setCallback",
        value: function setCallback(callback) {
            this.callback = callback;
        }
    }, {
        key: "get",
        value: function get$$1(key) {
            return this.map.get(key);
        }
    }, {
        key: "set",
        value: function set$$1(key, val) {
            return this.map.set(key, val);
        }
    }, {
        key: "getComponent",
        value: function getComponent(text, value) {
            return React__default.createElement(Key, { key: text + value, text: text, value: value, onClick: this.callback });
        }
    }, {
        key: "setMap",
        value: function setMap() {
            this.setNumbersButtons();
            this.set("=", this.getComponent("=", "="));
            this.set(",", this.getComponent(",", ","));
            this.set("+", this.getComponent("+", "+"));
            this.set("-", this.getComponent("-", "-"));
            this.set("*", this.getComponent("*", "*"));
            this.set("/", this.getComponent("\\frac{x}{y}", "/"));
        }
    }, {
        key: "setNumbersButtons",
        value: function setNumbersButtons() {
            for (var index = 0; index <= 9; index++) {
                this.set(index.toString(), this.getComponent(index.toString(), index.toString()));
            }
        }
    }]);
    return MapKeys;
}();

var defaultMapKeys = new MapKeys();

var Value = function () {
    function Value(operator, prevValue) {
        classCallCheck(this, Value);

        this.prevValue = prevValue;
        this.operator = operator;
    }

    createClass(Value, [{
        key: "value",
        value: function value() {
            return " " + this.operator;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            if (!this.prevValue) {
                return this.value().trim();
            }

            if (this.prevValue.constructor.name == "Dot") {
                return this.prevValue.getValue() + this.value().trim();
            }

            return this.prevValue.getValue() + this.value();
        }
    }]);
    return Value;
}();

var Fraction = function (_Value) {
    inherits(Fraction, _Value);

    function Fraction(prevValue) {
        classCallCheck(this, Fraction);

        var _this = possibleConstructorReturn(this, (Fraction.__proto__ || Object.getPrototypeOf(Fraction)).call(this, "/", prevValue));

        _this.divider = "";
        _this.dividend = "";
        return _this;
    }

    createClass(Fraction, [{
        key: "setDivider",
        value: function setDivider(divider) {
            this.divider = this.setParentheses(divider.getValue());
        }
    }, {
        key: "setDividend",
        value: function setDividend(dividend) {
            this.dividend = this.setParentheses(dividend.getValue());
        }
    }, {
        key: "setParentheses",
        value: function setParentheses(value) {
            return value.length > 1 ? "(" + value + ")" : value;
        }
    }, {
        key: "value",
        value: function value() {
            return " " + this.dividend + "/" + this.divider;
        }
    }]);
    return Fraction;
}(Value);

var Dot = function () {
    function Dot(prevValue) {
        classCallCheck(this, Dot);

        this.prevValue = prevValue;
        this.operator = ".";
    }

    createClass(Dot, [{
        key: "value",
        value: function value() {
            return this.operator;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            if (!this.prevValue) {
                return this.value().trim();
            }

            return this.prevValue.getValue() + this.value();
        }
    }]);
    return Dot;
}();

var MapEvents = function () {
    function MapEvents() {
        classCallCheck(this, MapEvents);

        this.map = new Map();
    }

    createClass(MapEvents, [{
        key: "set",
        value: function set$$1(key, callback) {
            this.map.set(key, callback);
        }
    }, {
        key: "get",
        value: function get$$1(key) {
            return this.map.get(key);
        }
    }, {
        key: "setMap",
        value: function setMap() {
            this.setNumbersButtons();
            this.set("=", function (value) {
                return new Value("=", value);
            });
            this.set(",", function (value) {
                return new Dot(value);
            });
            this.set("+", function (value) {
                return new Value("+", value);
            });
            this.set("-", function (value) {
                return new Value("-", value);
            });
            this.set("*", function (value) {
                return new Value("*", value);
            });
            this.set("/", function (value) {
                return new Fraction(value);
            });
        }
    }, {
        key: "setNumbersButtons",
        value: function setNumbersButtons() {
            var _this = this;

            var _loop = function _loop(index) {
                _this.set(index.toString(), function (value) {
                    return new Value(index.toString(), value);
                });
            };

            for (var index = 0; index <= 9; index++) {
                _loop(index);
            }
        }
    }]);
    return MapEvents;
}();

var defaultMapEvents = new MapEvents();

var defaultKeyboard = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], [",", "0", "=", "/"]];

var withKeyboard = (function () {
    var mapKeys = defaultMapKeys;
    var keyboard = defaultKeyboard;
    var mapEvents = defaultMapEvents;

    return function (WrappedComponent) {
        var _class, _temp;

        return _temp = _class = function (_ReactComponent) {
            inherits(WithKeyboard, _ReactComponent);

            function WithKeyboard() {
                classCallCheck(this, WithKeyboard);
                return possibleConstructorReturn(this, (WithKeyboard.__proto__ || Object.getPrototypeOf(WithKeyboard)).apply(this, arguments));
            }

            createClass(WithKeyboard, [{
                key: "render",
                value: function render() {
                    var props = _extends({ keyboard: keyboard, mapKeys: mapKeys, mapEvents: mapEvents }, this.props);

                    return React__default.createElement(WrappedComponent, props);
                }
            }]);
            return WithKeyboard;
        }(React.Component), _class.propTypes = {
            keyboard: PropTypes.array,
            mapKeys: PropTypes.object,
            mapEvents: PropTypes.object
        }, _temp;
    };
});

var Keyboard = withKeyboard()(Component$1);

exports.Keyboard = Keyboard;
//# sourceMappingURL=index.js.map
