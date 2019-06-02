import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';
import Grid from '@material-ui/core/Grid';
import { Backspace } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_cursor__3_aFK {\n    margin: 0 2px;\n    font-size: 1.4em;\n}\n";
styleInject(css);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

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

var Math$1 = function (_React$Component) {
    inherits(Math, _React$Component);

    function Math(props) {
        classCallCheck(this, Math);

        var _this = possibleConstructorReturn(this, (Math.__proto__ || Object.getPrototypeOf(Math)).call(this, props));

        _this.state = {
            load: true,
            currentValue: ""
        };

        _this.handleOnRender = _this.handleOnRender.bind(_this);
        _this.timeCursor = null;
        return _this;
    }

    createClass(Math, [{
        key: "handleOnRender",
        value: function handleOnRender() {
            var value = this.props.value;


            this.setState({
                load: false,
                currentValue: value
            });
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(nextProps) {
            if (nextProps.value != this.props.value) {
                this.setState({ load: true });
            }
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.setCursor();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.setCursor();
        }
    }, {
        key: "setCursor",
        value: function setCursor() {
            var _this2 = this;

            if (this.timeCursor) {
                clearInterval(this.timeCursor);
            }

            var mathList = document.getElementsByClassName("math");

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = mathList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var el = _step.value;

                    var mjxEls = el.getElementsByClassName("mjx-char");

                    var _loop = function _loop(mjx) {
                        if (mjx.innerHTML == '∣') {
                            mjx.style.margin = "0 2px";
                            mjx.style.fontSize = "1.4em";

                            _this2.timeCursor = setInterval(function (el) {
                                if (mjx.style.visibility == 'hidden') {
                                    mjx.style.visibility = 'visible';
                                } else {
                                    mjx.style.visibility = 'hidden';
                                }
                            }, 500);

                            return {
                                v: void 0
                            };
                        }
                    };

                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = mjxEls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var mjx = _step2.value;

                            var _ret = _loop(mjx);

                            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: "getStyle",
        value: function getStyle(load) {
            return { display: load ? "none" : "block" };
        }
    }, {
        key: "render",
        value: function render() {
            var value = this.props.value;
            var _state = this.state,
                currentValue = _state.currentValue,
                load = _state.load;


            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    "div",
                    { style: this.getStyle(load), className: "math" },
                    React.createElement(MathJax.Node, { formula: value, onRender: this.handleOnRender })
                ),
                React.createElement(
                    "div",
                    { style: this.getStyle(!load), className: "math" },
                    React.createElement(MathJax.Node, { formula: currentValue })
                )
            );
        }
    }]);
    return Math;
}(React.Component);

Math$1.propTypes = {
    value: PropTypes.string
};

var styles$1 = function styles() {
    return {
        root: {
            height: "150px",
            padding: "1em 2em"
        },
        icon: {
            float: "right"
        },
        screen: {
            display: "flex",
            justifyContent: "center"
        }
    };
};

var Screen = function (_React$Component) {
    inherits(Screen, _React$Component);

    function Screen() {
        classCallCheck(this, Screen);
        return possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).apply(this, arguments));
    }

    createClass(Screen, [{
        key: "renderValue",
        value: function renderValue() {
            var screenValue = this.props.screenValue;


            if (screenValue) {
                return React.createElement(Math$1, { value: screenValue.getTeX() });
            }

            return React.createElement(
                "span",
                null,
                "Degite um valor"
            );
        }
    }, {
        key: "render",
        value: function render() {
            var classes = this.props.classes;


            return React.createElement(
                Grid,
                { container: true, className: classes.root, spacing: 0 },
                React.createElement(
                    Grid,
                    { item: true, xs: 6 },
                    React.createElement(
                        "span",
                        null,
                        "LIMPAR"
                    )
                ),
                React.createElement(
                    Grid,
                    { item: true, xs: 6 },
                    React.createElement(Backspace, { className: classes.icon, fontSize: "small" })
                ),
                React.createElement(
                    Grid,
                    { item: true, xs: 12, className: classes.screen },
                    this.renderValue()
                )
            );
        }
    }]);
    return Screen;
}(React.Component);

Screen.propTypes = {
    classes: PropTypes.object.isRequired,
    screenValue: PropTypes.object
};


var Screen$1 = withStyles(styles$1)(Screen);

var styles$2 = function styles() {
    return {
        container: {
            backgroundColor: green["A200"]
        }
    };
};

var mathJaxConfig = {
    tex2jax: {
        inlineMath: []
    },
    showMathMenu: false,
    showMathMenuMSIE: false,
    "fast-preview": {
        disabled: true
    },
    showProcessingMessages: false,
    styles: {
        "#MathJax_Message": { display: 'none' },
        "#MathJax_MSIE_Frame": { display: 'none' }
    }
};

var Component$1 = function (_ReactComponet) {
    inherits(Component$$1, _ReactComponet);

    function Component$$1(props) {
        classCallCheck(this, Component$$1);

        var _this = possibleConstructorReturn(this, (Component$$1.__proto__ || Object.getPrototypeOf(Component$$1)).call(this, props));

        _this.state = {
            value: undefined
        };

        _this.clickBuntton = _this.clickBuntton.bind(_this);
        _this.props.mapKeys.setCallback(_this.clickBuntton);
        _this.props.mapKeys.setMap();
        _this.props.mapEvents.setMap();
        return _this;
    }

    createClass(Component$$1, [{
        key: "clickBuntton",
        value: function clickBuntton(btn) {
            var mapEvents = this.props.mapEvents;

            var nextValue = mapEvents.get(btn)(this.state.value);

            if (this.state.value) {
                this.state.value.setNextValue(nextValue);
                this.state.value.toggleCursor();
            }

            nextValue.toggleCursor();

            return this.setState({
                value: nextValue
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                keyboard = _props.keyboard,
                mapKeys = _props.mapKeys,
                classes = _props.classes;
            var value = this.state.value;


            return React.createElement(
                Paper,
                null,
                React.createElement(
                    MathJax.Provider,
                    { options: mathJaxConfig },
                    React.createElement(Screen$1, { screenValue: value }),
                    React.createElement(
                        Grid,
                        { container: true, className: classes.container, spacing: 0 },
                        keyboard.map(function (row) {
                            return row.map(function (btn) {
                                return React.createElement(
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
    return Component$$1;
}(Component);

Component$1.propTypes = {
    keyboard: PropTypes.array.isRequired,
    mapKeys: PropTypes.object.isRequired,
    mapEvents: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
};


var Component$2 = withStyles(styles$2)(Component$1);

var Component$3 = function (_ReactComponent) {
    inherits(Component$$1, _ReactComponent);

    function Component$$1(props) {
        classCallCheck(this, Component$$1);

        var _this = possibleConstructorReturn(this, (Component$$1.__proto__ || Object.getPrototypeOf(Component$$1)).call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    createClass(Component$$1, [{
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


            return React.createElement(
                Button,
                { className: classes.button, onClick: this.handleClick },
                React.createElement(MathJax.Node, { formula: text })
            );
        }
    }]);
    return Component$$1;
}(Component);

Component$3.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

var styles$3 = function styles() {
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

var Key = withStyles(styles$3)(Component$3);

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
            return React.createElement(Key, { key: text + value, text: text, value: value, onClick: this.callback });
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

        this.nextValue = null;
        this.prevValue = prevValue;
        this.operator = operator;
        this.cursor = false;
    }

    createClass(Value, [{
        key: "toggleCursor",
        value: function toggleCursor() {
            this.cursor = !this.cursor;
        }
    }, {
        key: "setNextValue",
        value: function setNextValue(nextValue) {
            this.nextValue = nextValue;
        }
    }, {
        key: "value",
        value: function value() {
            return this.operator;
        }
    }, {
        key: "valueTeX",
        value: function valueTeX() {
            if (this.cursor) {
                return this.value() + "\\mid";
            }

            return this.value();
        }
    }, {
        key: "getValue",
        value: function getValue() {
            if (!this.prevValue) {
                return this.value();
            }

            return this.prevValue.getValue() + this.value();
        }
    }, {
        key: "getTeX",
        value: function getTeX() {
            if (!this.prevValue) {
                return this.valueTeX();
            }

            return this.prevValue.getTeX() + this.valueTeX();
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
            this.divider = divider.getValue();
        }
    }, {
        key: "setDividend",
        value: function setDividend(dividend) {
            this.dividend = dividend.getValue();
        }
    }, {
        key: "setParentheses",
        value: function setParentheses(value) {
            return value.length > 1 ? "(" + value + ")" : value;
        }
    }, {
        key: "value",
        value: function value() {
            var dividend = this.setParentheses(this.dividend);
            var divider = this.setParentheses(this.divider);

            return dividend + "/" + divider;
        }
    }, {
        key: "valueTeX",
        value: function valueTeX() {
            return "\\frac{" + this.dividend + "}{" + this.divider + "}";
        }
    }]);
    return Fraction;
}(Value);

var Dot = function (_Value) {
    inherits(Dot, _Value);

    function Dot(prevValue) {
        classCallCheck(this, Dot);
        return possibleConstructorReturn(this, (Dot.__proto__ || Object.getPrototypeOf(Dot)).call(this, ".", prevValue));
    }

    createClass(Dot, [{
        key: "valueTeX",
        value: function valueTeX() {
            return ",";
        }
    }]);
    return Dot;
}(Value);

var Operator = function (_Value) {
    inherits(Operator, _Value);

    function Operator() {
        classCallCheck(this, Operator);
        return possibleConstructorReturn(this, (Operator.__proto__ || Object.getPrototypeOf(Operator)).apply(this, arguments));
    }

    createClass(Operator, [{
        key: "value",
        value: function value() {
            return " " + this.operator;
        }
    }, {
        key: "getValue",
        value: function getValue() {
            if (!this.prevValue) {
                return this.value() + " ";
            }

            return this.prevValue.getValue() + this.value() + " ";
        }
    }, {
        key: "getTeX",
        value: function getTeX() {
            if (!this.prevValue) {
                return this.valueTeX() + " ";
            }

            return this.prevValue.getTeX() + this.valueTeX() + " ";
        }
    }]);
    return Operator;
}(Value);

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
                return new Operator("=", value);
            });
            this.set(",", function (value) {
                return new Dot(value);
            });
            this.set("+", function (value) {
                return new Operator("+", value);
            });
            this.set("-", function (value) {
                return new Operator("-", value);
            });
            this.set("*", function (value) {
                return new Operator("*", value);
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

                    return React.createElement(WrappedComponent, props);
                }
            }]);
            return WithKeyboard;
        }(Component), _class.propTypes = {
            keyboard: PropTypes.array,
            mapKeys: PropTypes.object,
            mapEvents: PropTypes.object
        }, _temp;
    };
});

var Keyboard = withKeyboard()(Component$2);

export { Keyboard };
//# sourceMappingURL=index.es.js.map
