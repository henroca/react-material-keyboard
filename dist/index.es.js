import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';
import Grid from '@material-ui/core/Grid';
import { Backspace } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Collapse from '@material-ui/core/Collapse';
import '@material-ui/core/List';
import '@material-ui/core/ListItem';
import CloseIcon from '@material-ui/icons/Close';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

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

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
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
                        if (mjx.innerHTML == "∣") {
                            mjx.style.fontSize = "1em";
                            _this2.timeCursor = setInterval(function () {
                                if (mjx.style.visibility == "hidden") {
                                    mjx.style.visibility = "visible";
                                } else {
                                    mjx.style.visibility = "hidden";
                                }
                            }, 500);
                        }

                        mjx.parentElement.style.marginLeft = "0";
                    };

                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = mjxEls[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            var mjx = _step2.value;

                            _loop(mjx);
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

var styles = function styles() {
    return {
        root: {
            height: "150px",
            padding: "1em 2em"
        },
        icon: {
            float: "right",
            cursor: "pointer"
        },
        screen: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative"
        },
        status: {
            top: "-12px",
            left: "20px",
            padding: "0 10px",
            margin: 0,
            position: "absolute",
            background: "white"
        },
        actionBtn: {
            cursor: "pointer"
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
                return React.createElement(Math$1, { value: screenValue.last().getTeX() });
            }

            return React.createElement(
                "span",
                null,
                "Degite um valor"
            );
        }
    }, {
        key: "getCorrectText",
        value: function getCorrectText() {
            var _props = this.props,
                correct = _props.correct,
                classes = _props.classes;


            if (typeof correct === "undefined") {
                return "";
            }

            if (correct) {
                return React.createElement(
                    "h4",
                    {
                        className: classes.status,
                        style: { color: "#228416" }
                    },
                    "Correto"
                );
            }

            return React.createElement(
                "h4",
                {
                    className: classes.status,
                    style: { color: "#ec211d" }
                },
                "Incorreto"
            );
        }
    }, {
        key: "getCorrectBorder",
        value: function getCorrectBorder() {
            var correct = this.props.correct;


            if (typeof correct === "undefined") {
                return {};
            }

            if (correct) {
                return {
                    border: "2px solid",
                    borderColor: "#228416"
                };
            }

            return {
                border: "2px solid",
                borderColor: "#ec211d"
            };
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                classes = _props2.classes,
                onKeyUp = _props2.onKeyUp,
                onClear = _props2.onClear,
                onRemove = _props2.onRemove;


            return React.createElement(
                Grid,
                { container: true, onKeyUp: onKeyUp, className: classes.root, spacing: 0 },
                React.createElement(
                    Grid,
                    { item: true, xs: 6 },
                    React.createElement(
                        "span",
                        {
                            id: "clear",
                            onClick: onClear,
                            className: classes.actionBtn
                        },
                        "LIMPAR"
                    )
                ),
                React.createElement(
                    Grid,
                    { item: true, xs: 6 },
                    React.createElement(Backspace, {
                        className: classes.icon,
                        fontSize: "small",
                        onClick: onRemove
                    })
                ),
                React.createElement(
                    Grid,
                    {
                        item: true,
                        xs: 12,
                        className: classes.screen,
                        style: this.getCorrectBorder()
                    },
                    this.getCorrectText(),
                    this.renderValue()
                )
            );
        }
    }]);
    return Screen;
}(React.Component);

Screen.propTypes = {
    classes: PropTypes.object.isRequired,
    screenValue: PropTypes.object,
    onKeyUp: PropTypes.func,
    onRemove: PropTypes.func,
    onClear: PropTypes.func,
    correct: PropTypes.bool
};


var Screen$1 = withStyles(styles)(Screen);

var appConfig = {};

function init(config) {
    appConfig = config;
    Object.freeze(appConfig);
}

var ValueContext = function () {

    /**
     *
     * @param {Object} strategy
     */
    function ValueContext(strategy) {
        classCallCheck(this, ValueContext);

        this.strategy = strategy;
    }

    /**
     *
     * @param {Object} value
     *
     * @returns {Object}
     */


    createClass(ValueContext, [{
        key: "addValue",
        value: function addValue(value) {
            return this.strategy.addValue(value);
        }

        /**
         *
         * @returns {Obejct}
         */

    }, {
        key: "remove",
        value: function remove() {
            return this.strategy.remove();
        }

        /**
         *
         * @returns {any}
         */

    }, {
        key: "changeValue",
        value: function changeValue(direction) {
            return this.strategy.changeValue(direction);
        }
    }]);
    return ValueContext;
}();

var contextFactory = (function (value) {
    var context = appConfig[value.getContext()];
    var strategy = new context(value);

    return new ValueContext(strategy);
});

var NEXT_VALUE = "nextValue";
var PREV_VALUE = "prevValue";

var ValueList = function () {
    /**
     *
     * @param {Object} value
     */
    function ValueList(value) {
        classCallCheck(this, ValueList);

        this.value = value;
        this.boot();
    }

    /**
     * Boot the instance
     */


    createClass(ValueList, [{
        key: "boot",
        value: function boot() {
            if (!this.value.cursor) {
                this.value.cursor = true;
            }
        }

        /**
         * set the current value to next value
         */

    }, {
        key: "nextValue",
        value: function nextValue() {
            var value = this.getContext().changeValue(NEXT_VALUE);

            if (value === null) return value;
            this.value = value;

            return true;
        }

        /**
         * set the current value to prev value
         */

    }, {
        key: "prevValue",
        value: function prevValue() {
            var value = this.getContext().changeValue(PREV_VALUE);

            if (value === null) return value;
            this.value = value;

            return true;
        }

        /**
         *  add value to list
         *
         * @param {Object} value
         */

    }, {
        key: "addValue",
        value: function addValue(value) {
            this.value = this.getContext().addValue(value);
        }

        /**
         * remove the current value
         */

    }, {
        key: "remove",
        value: function remove() {
            this.value = this.getContext().remove();
        }

        /**
         * unfocus value list
         */

    }, {
        key: "unfocus",
        value: function unfocus() {
            if (!this.value.cursor) return;

            this.value.toggleCursor();
        }

        /**
         * focus value list
         */

    }, {
        key: "focus",
        value: function focus() {
            if (this.value.cursor) return;

            this.value.toggleCursor();
        }

        /**
         * Focus last value
         */

    }, {
        key: "focusLast",
        value: function focusLast() {
            this.unfocus();
            this.value = this.last();
            this.focus();
        }

        /**
         * Focus first value
         */

    }, {
        key: "focusFirst",
        value: function focusFirst() {
            this.unfocus();
            this.value = this.first();
            this.focus();
        }

        /**
         *  returns the last Value from list
         *
         * @returns {Object}
         */

    }, {
        key: "last",
        value: function last() {
            var value = this.value;
            var nextValue = null;

            while (nextValue = value.nextValue) {
                value = nextValue;
            }

            return value;
        }

        /**
         * returns the first Value from list
         *
         * @returns {Object}
         */

    }, {
        key: "first",
        value: function first() {
            var value = this.value;
            var prevValue = null;

            while (prevValue = value.prevValue) {
                value = prevValue;
            }

            return value;
        }

        /**
         * @returns {Object}
         */

    }, {
        key: "getContext",
        value: function getContext() {
            return contextFactory(this.value);
        }
    }]);
    return ValueList;
}();

var LEFT = 37;
var RIGHT = 39;

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
            if (this.nextValue) {
                nextValue.nextValue = this.nextValue;
                nextValue.nextValue.setPrevValue(nextValue);
            }

            this.nextValue = nextValue;
        }
    }, {
        key: "getContext",
        value: function getContext() {
            return "value";
        }
    }, {
        key: "setPrevValue",
        value: function setPrevValue(prevValue) {
            this.prevValue = prevValue;
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

var DIVIDER = "DIVIDER";
var DIVIDEND = "DIVIDEND";

var Fraction = function (_Value) {
    inherits(Fraction, _Value);

    /**
     *
     * @param {Object} prevValue
     */
    function Fraction(prevValue) {
        classCallCheck(this, Fraction);

        var _this = possibleConstructorReturn(this, (Fraction.__proto__ || Object.getPrototypeOf(Fraction)).call(this, "/", prevValue));

        _this.divider = null;

        var value = new Value("");
        value.toggleCursor();

        _this.dividend = new ValueList(value);
        _this.currentCursor = DIVIDEND;
        return _this;
    }

    createClass(Fraction, [{
        key: "toggleCursor",
        value: function toggleCursor() {
            get(Fraction.prototype.__proto__ || Object.getPrototypeOf(Fraction.prototype), "toggleCursor", this).call(this);

            if (this.cursor) {
                this.setCursor(DIVIDEND);
            } else {
                this.unfocus();
            }
        }

        /**
         *  Add value in divider
         *
         * @param {Object} divider
         */

    }, {
        key: "addDivider",
        value: function addDivider(divider) {
            if (this.currentCursor === DIVIDEND) {
                this.unfocus();
                this.currentCursor = DIVIDER;
            }

            if (!this.divider) {
                return this.divider = new ValueList(divider);
            }

            this.divider.addValue(divider);
        }

        /**
         *  Add value in dividend
         *
         * @param {Object} dividend
         */

    }, {
        key: "addDividend",
        value: function addDividend(dividend) {
            if (this.currentCursor === DIVIDER) {
                this.unfocus();
                this.currentCursor = DIVIDEND;
            }

            this.dividend.addValue(dividend);
        }

        /**
         *  Get context key
         *
         * @returns {String}
         */

    }, {
        key: "getContext",
        value: function getContext() {
            return "fraction";
        }

        /**
         * unfocus fraction
         *
         */

    }, {
        key: "unfocus",
        value: function unfocus() {
            if (this.dividend) {
                this.dividend.unfocus();
            }

            if (this.divider) {
                this.divider.unfocus();
            }

            this.currentCursor = null;
        }

        /**
         * Set cursor in operator
         *
         * @param {String} operator
         */

    }, {
        key: "setCursor",
        value: function setCursor(operator) {
            if (operator === DIVIDER) {
                if (this.divider) {
                    this.divider.focusFirst();
                } else {
                    this.divider = new ValueList(new Value(""));
                }

                this.currentCursor = DIVIDER;
            } else {
                if (this.dividend) {
                    this.dividend.focusLast();
                } else {
                    this.dividend = new ValueList(new Value(""));
                }

                this.currentCursor = DIVIDEND;
            }
        }

        /**
         * get the current value
         *
         * @returns {Object}
         */

    }, {
        key: "getCurrentValue",
        value: function getCurrentValue() {
            if (this.currentCursor == DIVIDER) {
                return this.divider.value;
            }

            return this.dividend.value;
        }

        /**
         *  Change value direction
         *
         * @param {String} direction
         * @returns {Object}
         */

    }, {
        key: "changeValue",
        value: function changeValue(direction) {
            if (this.currentCursor == DIVIDER) {
                return this.divider[direction]();
            }

            return this.dividend[direction]();
        }

        /**
         *
         *
         */

    }, {
        key: "remove",
        value: function remove() {
            if (this.currentCursor == DIVIDER) {
                return this.divider.remove();
            }

            return this.dividend.remove();
        }

        /**
         * set prentheses
         *
         * @param {String} value
         *
         * @returns {String}
         */

    }, {
        key: "setParentheses",
        value: function setParentheses(value) {
            return "[" + value + "]";
        }

        /**
         * get value
         *
         * @returns {String}
         */

    }, {
        key: "value",
        value: function value() {
            var dividend = this.setParentheses(this.getDividendValue());
            var divider = this.setParentheses(this.getDividerValue());

            return dividend + "/" + divider;
        }

        /**
         * get TEX value
         *
         * @returns {String}
         */

    }, {
        key: "valueTeX",
        value: function valueTeX() {
            return "\\frac{" + this.getDividendTeX() + "}{" + this.getDividerTeX() + "}";
        }

        /**
         * get divider TEX
         *
         * @returns {String}
         */

    }, {
        key: "getDividerTeX",
        value: function getDividerTeX() {
            return this.divider ? this.divider.last().getTeX() : "";
        }

        /**
         * get dividend TEX
         *
         * @returns {String}
         */

    }, {
        key: "getDividendTeX",
        value: function getDividendTeX() {
            return this.dividend ? this.dividend.last().getTeX() : "";
        }

        /**
         * get divider Value
         *
         * @returns {String}
         */

    }, {
        key: "getDividerValue",
        value: function getDividerValue() {
            return this.divider ? this.divider.last().getValue() : "";
        }

        /**
         * get dividend Value
         *
         * @returns {String}
         */

    }, {
        key: "getDividendValue",
        value: function getDividendValue() {
            return this.dividend ? this.dividend.last().getValue() : "";
        }
    }]);
    return Fraction;
}(Value);

var Exponent = function (_Value) {
    inherits(Exponent, _Value);

    /**
     *
     * @param {Object} prevValue
     */
    function Exponent(prevValue) {
        classCallCheck(this, Exponent);

        var _this = possibleConstructorReturn(this, (Exponent.__proto__ || Object.getPrototypeOf(Exponent)).call(this, "^", prevValue));

        var value = new Value("");
        value.toggleCursor();

        _this.valueList = new ValueList(value);
        return _this;
    }

    createClass(Exponent, [{
        key: "toggleCursor",
        value: function toggleCursor() {
            get(Exponent.prototype.__proto__ || Object.getPrototypeOf(Exponent.prototype), "toggleCursor", this).call(this);

            if (this.cursor) {
                this.valueList.focusLast();
            } else {
                this.unfocus();
            }
        }

        /**
         *
         * @param {Object} value
         */

    }, {
        key: "addValue",
        value: function addValue(value) {
            this.valueList.addValue(value);
        }

        /**
         *
         */

    }, {
        key: "remove",
        value: function remove() {
            this.valueList.remove();
        }

        /**
         * unfocus potentiation
         *
         */

    }, {
        key: "unfocus",
        value: function unfocus() {
            this.valueList.unfocus();
        }

        /**
         * Get value
         *
         * @returns {String}
         */

    }, {
        key: "value",
        value: function value() {
            return "^[" + this.valueList.last().getValue() + "]";
        }

        /**
         * Get TEX value
         *
         * @returns {String}
         */

    }, {
        key: "valueTeX",
        value: function valueTeX() {
            return "^{" + this.valueList.last().getTeX() + "}";
        }

        /**
         *  Get context key
         *
         * @returns {String}
         */

    }, {
        key: "getContext",
        value: function getContext() {
            return "exponent";
        }
    }]);
    return Exponent;
}(Value);

var RADICAND = "RADICAND";
var INDEX = "INDEX";

var Root = function (_Value) {
    inherits(Root, _Value);

    /**
     *
     * @param {Object} prevValue
     */
    function Root(prevValue) {
        classCallCheck(this, Root);

        var _this = possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, "sqrt", prevValue));

        _this.index = null;

        var value = new Value("");
        value.toggleCursor();

        _this.radicand = new ValueList(value);
        _this.currentCursor = RADICAND;
        return _this;
    }

    createClass(Root, [{
        key: "addRadicand",
        value: function addRadicand(value) {
            if (!this.isRadicand()) {
                this.unfocus();
                this.focus(RADICAND);
            }

            if (!this.radicand) {
                this.radicand = new ValueList(value);
                return;
            }

            this.radicand.addValue(value);
        }
    }, {
        key: "addIndex",
        value: function addIndex(value) {
            if (!this.isIndex()) {
                this.unfocus();
                this.focus(INDEX);
            }

            if (!this.index) {
                this.index = new ValueList(value);
                return;
            }

            this.index.addValue(value);
        }
    }, {
        key: "focus",
        value: function focus(operator) {
            this.cursor = true;

            if (operator === RADICAND) {
                this.currentCursor = RADICAND;
                if (!this.radicand) return;
                this.radicand.focusLast();
                return;
            }

            this.currentCursor = INDEX;
            if (!this.index) return;
            this.index.focusLast();
        }
    }, {
        key: "toggleCursor",
        value: function toggleCursor() {
            get(Root.prototype.__proto__ || Object.getPrototypeOf(Root.prototype), "toggleCursor", this).call(this);

            if (this.cursor) {
                this.focus(RADICAND);
            } else {
                this.unfocus();
            }
        }
    }, {
        key: "remove",
        value: function remove() {
            if (this.isIndex()) {
                return this.index.remove();
            }

            this.radicand.remove();
        }

        /**
         * Get value
         *
         * @returns {String}
         */

    }, {
        key: "value",
        value: function value() {
            if (this.index) return "sqrt(" + this.radicand.last().getValue() + ", " + this.index.last().getValue() + ")";

            return "sqrt(" + this.radicand.last().getValue() + ")";
        }

        /**
         * Get TEX value
         *
         * @returns {String}
         */

    }, {
        key: "valueTeX",
        value: function valueTeX() {
            if (this.index) return "\\sqrt[" + this.index.last().getTeX() + "]{" + this.radicand.last().getTeX() + "}";

            return "\\sqrt{" + this.radicand.last().getTeX() + "}";
        }

        /**
         * unfocus
         *
         */

    }, {
        key: "unfocus",
        value: function unfocus() {
            if (this.radicand) this.radicand.unfocus();
            if (this.index) this.index.unfocus();

            this.currentCursor = null;
            this.cursor = false;
        }

        /**
         * get the current value
         *
         * @returns {Object}
         */

    }, {
        key: "getCurrentValue",
        value: function getCurrentValue() {
            var valueList = this.index;

            if (this.isRadicand()) {
                valueList = this.radicand;
            }

            if (!valueList) return null;

            return valueList.value;
        }

        /**
         *  Change value direction
         *
         * @param {String} direction
         * @returns {Object}
         */

    }, {
        key: "changeValue",
        value: function changeValue(direction) {
            if (this.isRadicand()) {
                return this.radicand[direction]();
            }

            return this.index[direction]();
        }
    }, {
        key: "toNextValue",
        value: function toNextValue() {
            if (this.isRadicand()) {
                this.radicand.nextValue();
            } else {
                this.index.nextValue();
            }
        }
    }, {
        key: "toPrevValue",
        value: function toPrevValue() {
            if (this.isRadicand()) {
                this.radicand.prevValue();
            } else {
                this.index.prevValue();
            }
        }
    }, {
        key: "isRadicand",
        value: function isRadicand() {
            return this.currentCursor === RADICAND;
        }
    }, {
        key: "isIndex",
        value: function isIndex() {
            return this.currentCursor === INDEX;
        }

        /**
         *  Get context key
         *
         * @returns {String}
         */

    }, {
        key: "getContext",
        value: function getContext() {
            return "root";
        }
    }]);
    return Root;
}(Value);

var isSqrt = function isSqrt(string, i) {
    return string.charAt(i + 1) === "q" && string.charAt(i + 2) === "r" && string.charAt(i + 3) === "t";
};

var parser = function parser(string, mapEvents) {
    var valueList = new ValueList(new Value(""));

    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);

        switch (char) {
            case " ":
                break;
            case "/":
                i++;
                break;
            case ")":
            case ",":
            case "]":
                valueList.nextValue();
                break;
            case "[":
                valueList.addValue(new Fraction());
                break;
            case "^":
                valueList.addValue(new Exponent());
                i++;
                break;
            case "s":
                if (isSqrt(string, i)) {
                    valueList.addValue(new Root());
                    i += 4;
                    break;
                }

                valueList.addValue(mapEvents.get(char)());
                break;
            case ".":
                char = ",";
                valueList.addValue(mapEvents.get(char)());
                break;
            default:
                valueList.addValue(mapEvents.get(char)());
                break;
        }
    }

    return valueList;
};

var styles$1 = function styles() {
    return {
        root: {
            position: "relative",
            zIndex: "1"
        },
        item: {
            display: "flex",
            justifyContent: "center",
            marginTop: "1px"
        },
        responseBtn: {
            position: "absolute",
            backgroundColor: red[600],
            left: "10px",
            marginTop: "-20px",
            zIndex: "2",

            "&:hover": {
                backgroundColor: red[900]
            }
        },
        container: {
            backgroundColor: green["A200"],
            zIndex: "1"
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
        "#MathJax_Message": { display: "none" },
        "#MathJax_MSIE_Frame": { display: "none" }
    }
};

var Component$1 = function (_ReactComponet) {
    inherits(Component$$1, _ReactComponet);

    function Component$$1(props) {
        classCallCheck(this, Component$$1);

        var _this = possibleConstructorReturn(this, (Component$$1.__proto__ || Object.getPrototypeOf(Component$$1)).call(this, props));

        _this.state = {
            valueList: null,
            showKeyboard: false,
            correct: undefined
        };

        _this.clickBuntton = _this.clickBuntton.bind(_this);
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        _this.handleKeyClear = _this.handleKeyClear.bind(_this);
        _this.handleKeyRemove = _this.handleKeyRemove.bind(_this);
        _this.handleToggleResponses = _this.handleToggleResponses.bind(_this);

        _this.props.mapKeys.setCallback(_this.clickBuntton);
        _this.props.mapKeys.setMap();
        _this.props.mapEvents.setMap();
        init(_this.props.contextConfig);
        return _this;
    }

    createClass(Component$$1, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            var _props = this.props,
                current = _props.current,
                mapEvents = _props.mapEvents;


            if (current) {
                var valueList = parser(current.value, mapEvents);
                valueList.unfocus();

                this.setState({
                    valueList: valueList,
                    correct: current.correct
                });
            }
        }
    }, {
        key: "clickBuntton",
        value: function clickBuntton(btn) {
            var mapEvents = this.props.mapEvents;
            var valueList = this.state.valueList;

            var nextValue = mapEvents.get(btn)();

            if (!valueList) {
                valueList = new ValueList(nextValue);
            } else {
                valueList.addValue(nextValue);
            }

            this.setState({
                valueList: valueList,
                correct: undefined
            });
        }
    }, {
        key: "handleKeyUp",
        value: function handleKeyUp(_ref) {
            var keyCode = _ref.keyCode;
            var valueList = this.state.valueList;


            if (keyCode == LEFT) {
                valueList.prevValue();
            } else if (keyCode == RIGHT) {
                valueList.nextValue();
            } else {
                return;
            }

            this.setState({
                valueList: valueList,
                correct: undefined
            });
        }
    }, {
        key: "handleKeyClear",
        value: function handleKeyClear() {
            var valueList = this.state.valueList;


            if (valueList) {
                valueList = new ValueList(new Value(""));
                this.setState({
                    valueList: valueList,
                    correct: undefined
                });
            }
        }
    }, {
        key: "handleKeyRemove",
        value: function handleKeyRemove() {
            var valueList = this.state.valueList;


            if (valueList) {
                valueList.remove();
                this.setState({
                    valueList: valueList,
                    correct: undefined
                });
            }
        }
    }, {
        key: "handleToggleResponses",
        value: function handleToggleResponses() {
            var showKeyboard = this.state.showKeyboard;


            showKeyboard = !showKeyboard;

            this.setState({ showKeyboard: showKeyboard });
        }
    }, {
        key: "hasResponses",
        value: function hasResponses() {
            var responses = this.props.responses;


            return responses && responses.length > 0;
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                keyboard = _props2.keyboard,
                mapKeys = _props2.mapKeys,
                classes = _props2.classes,
                responses = _props2.responses;
            var _state = this.state,
                valueList = _state.valueList,
                showKeyboard = _state.showKeyboard,
                correct = _state.correct;


            var btnResponses = "";
            var responsesComp = "";

            if (this.hasResponses()) {
                btnResponses = React.createElement(
                    Fab,
                    {
                        onClick: this.handleToggleResponses,
                        color: "primary",
                        size: "small",
                        className: classes.responseBtn
                    },
                    showKeyboard ? React.createElement(CloseIcon, null) : responses.length
                );

                var response = Object.assign({}, responses[0]);
                delete response.id;
                delete response.tex;
                var header = Object.keys(response);

                responsesComp = React.createElement(
                    Collapse,
                    {
                        "in": showKeyboard,
                        timeout: "auto",
                        unmountOnExit: true
                    },
                    React.createElement(
                        Table,
                        { className: classes.table, size: "small" },
                        React.createElement(
                            TableHead,
                            null,
                            React.createElement(
                                TableRow,
                                null,
                                React.createElement(
                                    TableCell,
                                    { align: "center" },
                                    "Resposta"
                                ),
                                header.map(function (value) {
                                    return React.createElement(
                                        TableCell,
                                        { align: "center" },
                                        value
                                    );
                                })
                            )
                        ),
                        React.createElement(
                            TableBody,
                            null,
                            responses.map(function (response) {
                                return React.createElement(
                                    TableRow,
                                    { key: response.id },
                                    React.createElement(
                                        TableCell,
                                        { align: "center" },
                                        React.createElement(MathJax.Node, { formula: response.tex })
                                    ),
                                    header.map(function (value) {
                                        return React.createElement(
                                            TableCell,
                                            { align: "center" },
                                            response[value]
                                        );
                                    })
                                );
                            })
                        )
                    )
                );
            }

            return React.createElement(
                Paper,
                { onKeyUp: this.handleKeyUp, className: classes.root },
                React.createElement(
                    MathJax.Provider,
                    { options: mathJaxConfig },
                    React.createElement(Screen$1, {
                        screenValue: valueList,
                        onKeyUp: this.handleKeyUp,
                        onClear: this.handleKeyClear,
                        onRemove: this.handleKeyRemove,
                        correct: correct
                    }),
                    btnResponses,
                    responsesComp,
                    React.createElement(
                        Grid,
                        {
                            container: true,
                            className: classes.container,
                            spacing: 0
                        },
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
    contextConfig: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    responses: PropTypes.array,
    current: PropTypes.object
};


var Component$2 = withStyles(styles$1)(Component$1);

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

var styles$2 = function styles() {
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

var Key = withStyles(styles$2)(Component$3);

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
            this.set("(", this.getComponent("(", "("));
            this.set(")", this.getComponent(")", ")"));
            this.set("^", this.getComponent("x^y", "^"));
            this.set("sqrt", this.getComponent("\\sqrt[y]{x}", "sqrt"));
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

var Dot = function (_Value) {
    inherits(Dot, _Value);

    function Dot(prevValue) {
        classCallCheck(this, Dot);
        return possibleConstructorReturn(this, (Dot.__proto__ || Object.getPrototypeOf(Dot)).call(this, ".", prevValue));
    }

    createClass(Dot, [{
        key: "valueTeX",
        value: function valueTeX() {
            if (this.cursor) {
                return ",\\mid";
            }

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
            this.set("(", function (value) {
                return new Value("(", value);
            });
            this.set(")", function (value) {
                return new Value(")", value);
            });
            this.set("^", function (value) {
                return new Exponent(value);
            });
            this.set("sqrt", function (value) {
                return new Root(value);
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

var defaultKeyboard = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], [",", "0", "=", "/"], ["(", ")", "^", "sqrt"]];

var BaseCommand = function () {
    /**
     *
     * @param {Object} currentValue
     */
    function BaseCommand(currentValue) {
        classCallCheck(this, BaseCommand);

        this.currentValue = currentValue;
    }

    /**
     * @return {Object}
     */


    createClass(BaseCommand, [{
        key: "execute",
        value: function execute() {
            throw "Method not implemented";
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "isEmptyValue",
        value: function isEmptyValue() {
            return this.currentValue.operator === "";
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "nextIsNull",
        value: function nextIsNull() {
            return this.currentValue.nextValue === null || this.currentValue.nextValue === undefined;
        }

        /**
         * @return {boolean}
         */

    }, {
        key: "prevIsNull",
        value: function prevIsNull() {
            return this.currentValue.prevValue === null || this.currentValue.prevValue === undefined;
        }
    }]);
    return BaseCommand;
}();

var AddValue = function (_BaseCommand) {
    inherits(AddValue, _BaseCommand);

    /**
     *
     * @param {Object} currentValue
     * @param {Object} newValue
     */
    function AddValue(currentValue, newValue) {
        classCallCheck(this, AddValue);

        var _this = possibleConstructorReturn(this, (AddValue.__proto__ || Object.getPrototypeOf(AddValue)).call(this, currentValue));

        _this.newValue = newValue;
        return _this;
    }

    /**
     * @return {Object}
     */


    createClass(AddValue, [{
        key: "execute",
        value: function execute() {
            if (this.isEmptyValue()) {
                this.replaceValue();
            } else {
                this.addValue();
            }

            this.newValue.cursor = true;

            return this.newValue;
        }

        /**
         *
         */

    }, {
        key: "replaceValue",
        value: function replaceValue() {
            var nextValue = this.currentValue.nextValue;
            var prevValue = this.currentValue.prevValue;

            if (nextValue) {
                nextValue.prevValue = this.newValue;
                this.newValue.nextValue = nextValue;
            }

            if (prevValue) {
                prevValue.nextValue = this.newValue;
                this.newValue.prevValue = prevValue;
            }
        }

        /**
         *
         */

    }, {
        key: "addValue",
        value: function addValue() {
            this.newValue.setPrevValue(this.currentValue);
            this.currentValue.setNextValue(this.newValue);
            this.currentValue.cursor = false;
        }
    }]);
    return AddValue;
}(BaseCommand);

var ChangeValue = function (_BaseCommand) {
    inherits(ChangeValue, _BaseCommand);

    /**
     *
     * @param {Object} currentValue
     * @param {string} direction
     */
    function ChangeValue(currentValue, direction) {
        classCallCheck(this, ChangeValue);

        var _this = possibleConstructorReturn(this, (ChangeValue.__proto__ || Object.getPrototypeOf(ChangeValue)).call(this, currentValue));

        _this.direction = direction;
        return _this;
    }

    /**
     * @returns {Object}
     */


    createClass(ChangeValue, [{
        key: "execute",
        value: function execute() {
            if (this.direction === NEXT_VALUE) {
                return this.nextValue();
            }

            return this.prevValue();
        }

        /**
         * @returns {Object}
         */

    }, {
        key: "nextValue",
        value: function nextValue() {
            if (this.nextIsNull()) return null;

            var nextValue = this.currentValue.nextValue;

            if (this.isEmptyValue()) {
                if (this.currentValue.prevValue) {
                    nextValue.setPrevValue(this.currentValue.prevValue);
                    nextValue.prevValue.nextValue = nextValue;
                } else {
                    nextValue.prevValue = undefined;
                }
            } else {
                nextValue.prevValue.cursor = false;
            }

            nextValue.toggleCursor();

            return this.setFraction(nextValue);
        }

        /**
         * @returns {Object}
         */

    }, {
        key: "prevValue",
        value: function prevValue() {
            if (this.isEmptyValue() && this.prevIsNull()) return null;

            var prevValue = this.currentValue.prevValue;

            if (this.prevIsNull()) {
                prevValue = new Value("");
                prevValue.setNextValue(this.currentValue);
            }

            if (this.isEmptyValue()) {
                if (this.currentValue.nextValue) {
                    this.currentValue.nextValue.setPrevValue(prevValue);
                    prevValue.nextValue = this.currentValue.nextValue;
                } else {
                    prevValue.nextValue = undefined;
                }
            } else {
                prevValue.nextValue.prevValue = prevValue;
                prevValue.nextValue.cursor = false;
            }

            prevValue.toggleCursor();

            return this.setFraction(prevValue);
        }
    }, {
        key: "setFraction",
        value: function setFraction(value) {
            var className = value.constructor.name;

            if (className !== "Fraction") return value;
            value.unfocus();

            if (this.direction === PREV_VALUE && this.isEmptyValue()) {
                value.setCursor(DIVIDER);
                value.divider.focusLast();

                return value;
            }

            if (this.direction === PREV_VALUE) {
                var newValue = new Value("");
                value.cursor = false;
                value.setNextValue(newValue);
                newValue.setPrevValue(value);
                newValue.cursor = true;

                return newValue;
            }

            value.setCursor(DIVIDEND);
            value.dividend.focusFirst();

            return value;
        }
    }]);
    return ChangeValue;
}(BaseCommand);

var ValueStrategy = function () {
    /**
     *
     * @param {Object} currentValue
     */
    function ValueStrategy(currentValue) {
        classCallCheck(this, ValueStrategy);

        this.currentValue = currentValue;
    }

    /**
     *
     * @param {Object} value
     *
     * @returns {Object}
     */


    createClass(ValueStrategy, [{
        key: "addValue",
        value: function addValue(value) {
            var addValue = new AddValue(this.currentValue, value);
            return addValue.execute();
        }

        /**
         *
         * @returns {Object}
         */

    }, {
        key: "remove",
        value: function remove() {
            var prevValue = this.currentValue.prevValue;
            var nextValue = this.currentValue.nextValue;

            if (!prevValue) {
                prevValue = new Value("");
            }

            if (prevValue.getContext() !== "value") {
                if (this.currentValue.operator == "") {
                    prevValue = prevValue.prevValue;

                    if (!prevValue) {
                        prevValue = new Value("");
                    }
                } else {
                    prevValue = new Value("", prevValue);
                }
            }

            if (nextValue) {
                prevValue.nextValue = nextValue;
                nextValue.prevValue = prevValue;
            } else {
                prevValue.nextValue = undefined;
            }

            prevValue.toggleCursor();

            return prevValue;
        }

        /**
         *
         * @returns {any}
         */

    }, {
        key: "changeValue",
        value: function changeValue(direction) {
            var changeValue = new ChangeValue(this.currentValue, direction);
            return changeValue.execute();
        }

        /**
         *  change to next value
         *
         * @returns {Object}
         */

    }, {
        key: "changeToNext",
        value: function changeToNext() {
            var newValue = new Value("", this.currentValue);
            newValue.cursor = true;

            this.currentValue.setNextValue(newValue);

            return newValue;
        }

        /**
         * change to prev value
         *
         * @returns {Object}
         */

    }, {
        key: "changeToPrev",
        value: function changeToPrev() {
            if (this.currentValue.prevValue) {
                this.currentValue.prevValue.cursor = true;

                return this.currentValue.prevValue;
            }

            var newValue = new Value("");
            newValue.setNextValue(this.currentValue);
            newValue.cursor = true;

            this.currentValue.setPrevValue(newValue);

            return newValue;
        }
    }]);
    return ValueStrategy;
}();

/**
 * Get the current value
 *
 * @returns {Object}
 */
var getCurrentValue = function getCurrentValue(fraction) {
    var valueList = fraction.divider;

    if (fraction.currentCursor === DIVIDEND) {
        valueList = fraction.dividend;
    }

    return valueList.value;
};

var ChangeValue$1 = function (_BaseCommand) {
    inherits(ChangeValue, _BaseCommand);

    /**
     *
     * @param {Object} fraction
     * @param {string} direction
     */
    function ChangeValue(fraction, direction) {
        classCallCheck(this, ChangeValue);

        var _this = possibleConstructorReturn(this, (ChangeValue.__proto__ || Object.getPrototypeOf(ChangeValue)).call(this, getCurrentValue(fraction)));

        _this.fraction = fraction;
        _this.direction = direction;
        return _this;
    }

    /**
     *
     */


    createClass(ChangeValue, [{
        key: "execute",
        value: function execute() {
            if (this.direction === NEXT_VALUE) {
                return this.nextValue();
            }

            return this.prevValue();
        }

        /**
         * set next value
         *
         * @returns {Object}
         */

    }, {
        key: "nextValue",
        value: function nextValue() {
            if (this.isDividend()) {
                if (this.nextIsNull()) {
                    this.fraction.unfocus();
                    this.fraction.setCursor(DIVIDER);
                } else {
                    this.fraction.dividend.nextValue();
                }

                return this.fraction;
            }

            if (this.nextIsNull()) {
                this.fraction.unfocus();
                return null;
            }

            this.fraction.divider.nextValue();

            return this.fraction;
        }

        /**
         * set prev value
         *
         * @returns {Object}
         */

    }, {
        key: "prevValue",
        value: function prevValue() {
            if (this.isDividend()) {
                if (this.prevIsNull() && this.isEmptyValue()) {
                    this.fraction.unfocus();
                    return null;
                }

                this.fraction.dividend.prevValue();
                return this.fraction;
            }

            if (this.prevIsNull()) {
                if (this.isEmptyValue()) {
                    if (this.nextIsNull()) {
                        this.fraction.divider = null;
                    } else {
                        var value = this.fraction.divider.value;
                        var next = value.nextValue;
                        next.prevValue = null;
                        this.fraction.divider.value = next;
                        this.fraction.divider.focus();
                        this.fraction.unfocus();
                    }

                    this.fraction.setCursor(DIVIDEND);
                } else {
                    this.fraction.divider.prevValue();
                }
            } else {
                this.fraction.divider.prevValue();
            }

            return this.fraction;
        }

        /**
         * is dividend?
         *
         * @returns {boolean}
         */

    }, {
        key: "isDividend",
        value: function isDividend() {
            return this.fraction.currentCursor === DIVIDEND;
        }
    }]);
    return ChangeValue;
}(BaseCommand);

var FractionStrategy = function (_ValueStrategy) {
    inherits(FractionStrategy, _ValueStrategy);

    function FractionStrategy() {
        classCallCheck(this, FractionStrategy);
        return possibleConstructorReturn(this, (FractionStrategy.__proto__ || Object.getPrototypeOf(FractionStrategy)).apply(this, arguments));
    }

    createClass(FractionStrategy, [{
        key: "addValue",

        /**
         *
         * @param {Object} value
         */
        value: function addValue(value) {
            if (this.currentValue.currentCursor === DIVIDER) {
                this.currentValue.addDivider(value);
            } else {
                this.currentValue.addDividend(value);
            }

            return this.currentValue;
        }

        /**
         *
         * @returns {Object}
         */

    }, {
        key: "remove",
        value: function remove() {
            this.currentValue.remove();
            return this.currentValue;
        }
        /**
         *
         * @returns {Object}
         */

    }, {
        key: "changeValue",
        value: function changeValue(direction) {
            var value = this.currentValue.getCurrentValue();

            if (value && value.getContext() !== "value") {
                this.currentValue.changeValue(direction);
                return this.currentValue;
            }

            var command = new ChangeValue$1(this.currentValue, direction);
            var result = command.execute();

            if (result) return result;

            this.currentValue.unfocus();

            if (direction === NEXT_VALUE) {
                return this.changeToNext();
            }

            return this.changeToPrev();
        }
    }]);
    return FractionStrategy;
}(ValueStrategy);

var ExponentStrategy = function (_ValueStrategy) {
    inherits(ExponentStrategy, _ValueStrategy);

    function ExponentStrategy() {
        classCallCheck(this, ExponentStrategy);
        return possibleConstructorReturn(this, (ExponentStrategy.__proto__ || Object.getPrototypeOf(ExponentStrategy)).apply(this, arguments));
    }

    createClass(ExponentStrategy, [{
        key: "addValue",

        /**
         *
         * @param {Object} value
         * @returns {Object}
         */
        value: function addValue(value) {
            this.currentValue.addValue(value);
            return this.currentValue;
        }

        /**
         *
         * @returns {any}
         */

    }, {
        key: "changeValue",
        value: function changeValue(direction) {
            if (direction == NEXT_VALUE) {
                return this.nextValue();
            }

            return this.prevValue();
        }
    }, {
        key: "remove",
        value: function remove() {
            this.currentValue.remove();
        }
    }, {
        key: "nextValue",
        value: function nextValue() {
            var currentValue = this.currentValue.valueList.value;
            var nextValue = currentValue.nextValue;

            if (nextValue) {
                this.currentValue.valueList.nextValue();
                return this.currentValue;
            }

            if (currentValue.getContext() !== "value") {
                this.currentValue.valueList.nextValue();
                return this.currentValue;
            }

            nextValue = new Value("", this.currentValue);
            this.currentValue.unfocus();
            this.currentValue.cursor = false;
            this.currentValue.setNextValue(nextValue);
            nextValue.cursor = true;

            return nextValue;
        }
    }, {
        key: "prevValue",
        value: function prevValue() {
            var currentValue = this.currentValue.valueList.value;
            var prevValue = currentValue.prevValue;

            if (prevValue) {
                this.currentValue.valueList.prevValue();
                return this.currentValue;
            }

            if (currentValue.getContext() !== "value") {
                this.currentValue.valueList.prevValue();
                return this.currentValue;
            }

            if (currentValue.operator === "") {
                currentValue.nextValue.prevValue = undefined;
                this.currentValue.valueList.value = currentValue.nextValue;
                this.currentValue.unfocus();
                this.currentValue.cursor = false;

                return this.getPrev();
            }

            var newValue = new Value("");
            newValue.setNextValue(currentValue);
            currentValue.setPrevValue(newValue);

            this.currentValue.valueList.prevValue();
            return this.currentValue;
        }
    }, {
        key: "getPrev",
        value: function getPrev() {
            var prevValue = this.currentValue.prevValue;

            if (!prevValue) {
                prevValue = new Value("");
                prevValue.setNextValue(this.currentValue);
            }

            prevValue.cursor = true;

            return prevValue;
        }
    }]);
    return ExponentStrategy;
}(ValueStrategy);

var ChangeValue$2 = function (_BaseCommand) {
    inherits(ChangeValue, _BaseCommand);

    /**
     *
     * @param {Object} root
     * @param {string} direction
     */
    function ChangeValue(root, direction) {
        classCallCheck(this, ChangeValue);

        var _this = possibleConstructorReturn(this, (ChangeValue.__proto__ || Object.getPrototypeOf(ChangeValue)).call(this, root.getCurrentValue()));

        _this.root = root;
        _this.direction = direction;
        return _this;
    }

    /**
     *  Execute the command to change position value
     *
     * @returns {Object}
     */


    createClass(ChangeValue, [{
        key: "execute",
        value: function execute() {
            if (this.direction === NEXT_VALUE) {
                return this.nextValue();
            }

            return this.prevValue();
        }

        /**
         * set next value
         *
         * @returns {Object}
         */

    }, {
        key: "nextValue",
        value: function nextValue() {
            if (this.nextIsNull()) {
                if (this.root.isRadicand()) return null;

                this.root.unfocus();
                this.root.focus(RADICAND);

                if (!this.root.radicand) {
                    this.root.radicand = new ValueList(new Value(""));
                    this.root.radicand.boot();
                }
            } else {
                this.root.toNextValue();
            }

            return this.root;
        }

        /**
         * set prev value
         *
         * @returns {Object}
         */

    }, {
        key: "prevValue",
        value: function prevValue() {
            if (this.prevIsNull() && this.isEmptyValue()) {
                if (this.nextIsNull()) {
                    this.changeToNullValue();
                } else {
                    var nextValue = this.currentValue.nextValue;
                    nextValue.prevValue = null;
                    this.setCurrentValue(nextValue);
                }

                if (this.root.isIndex()) return null;

                this.root.unfocus();
                this.root.focus(INDEX);

                if (!this.root.index) {
                    this.root.index = new ValueList(new Value(""));
                    this.root.index.boot();
                }

                return this.root;
            }

            if (this.prevIsNull()) {
                var value = new Value("");
                value.setNextValue(this.currentValue);
                this.currentValue.setPrevValue(value);
            }

            this.root.toPrevValue();
            return this.root;
        }
    }, {
        key: "setCurrentValue",
        value: function setCurrentValue(value) {
            if (this.root.isIndex()) {
                this.root.index.value = value;
            } else {
                this.root.radicand.value = value;
            }
        }
    }, {
        key: "changeToNullValue",
        value: function changeToNullValue() {
            if (this.root.isIndex()) {
                this.root.index = null;
            } else {
                this.root.radicand = null;
            }
        }
    }]);
    return ChangeValue;
}(BaseCommand);

var RootStrategy = function (_ValueStrategy) {
    inherits(RootStrategy, _ValueStrategy);

    function RootStrategy() {
        classCallCheck(this, RootStrategy);
        return possibleConstructorReturn(this, (RootStrategy.__proto__ || Object.getPrototypeOf(RootStrategy)).apply(this, arguments));
    }

    createClass(RootStrategy, [{
        key: "addValue",

        /**
         *
         * @param {Object} value
         * @returns {Object}
         */
        value: function addValue(value) {
            if (this.currentValue.isRadicand()) {
                this.currentValue.addRadicand(value);
            } else {
                this.currentValue.addIndex(value);
            }

            return this.currentValue;
        }

        /**
         *
         * @returns {Object}
         */

    }, {
        key: "remove",
        value: function remove() {
            this.currentValue.remove();
            return this.currentValue;
        }

        /**
         *
         * @returns {Object}
         */

    }, {
        key: "changeValue",
        value: function changeValue(direction) {
            var value = this.currentValue.getCurrentValue();

            if (value && value.getContext() !== "value") {
                this.currentValue.changeValue(direction);
                return this.currentValue;
            }

            var command = new ChangeValue$2(this.currentValue, direction);
            var result = command.execute();

            if (result) return result;

            this.currentValue.unfocus();

            if (direction === NEXT_VALUE) {
                return this.changeToNext();
            }

            return this.changeToPrev();
        }
    }]);
    return RootStrategy;
}(ValueStrategy);

var contextConfig = {
    "fraction": FractionStrategy,
    "value": ValueStrategy,
    "exponent": ExponentStrategy,
    "root": RootStrategy
};

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
                    var props = _extends({
                        keyboard: keyboard,
                        mapKeys: mapKeys,
                        mapEvents: mapEvents,
                        contextConfig: contextConfig
                    }, this.props);

                    return React.createElement(WrappedComponent, props);
                }
            }]);
            return WithKeyboard;
        }(Component), _class.propTypes = {
            keyboard: PropTypes.array,
            mapKeys: PropTypes.object,
            mapEvents: PropTypes.object,
            contextConfig: PropTypes.object
        }, _temp;
    };
});

var Keyboard = withKeyboard()(Component$2);

export { Keyboard };
//# sourceMappingURL=index.es.js.map
