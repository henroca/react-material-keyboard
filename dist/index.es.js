import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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

var Component$1 = function (_ReactComponet) {
    inherits(Component$$1, _ReactComponet);

    function Component$$1(props) {
        classCallCheck(this, Component$$1);

        var _this = possibleConstructorReturn(this, (Component$$1.__proto__ || Object.getPrototypeOf(Component$$1)).call(this, props));

        _this.state = {
            value: '',
            values: [''],
            modifiers: {}
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
            var _props = this.props,
                value = _props.value,
                values = _props.values,
                modifiers = _props.modifiers;

            var result = mapEvents.get(btn)(value);

            if ((typeof result === "undefined" ? "undefined" : _typeof(result)) == 'object') {
                result.setValues('', '');
                modifiers[result.key] = result;
            }

            values.push(result);
            this.setState({ value: result, values: values });
        }
    }, {
        key: "render",
        value: function render() {
            var _props2 = this.props,
                keyboard = _props2.keyboard,
                mapKeys = _props2.mapKeys;


            return React.createElement(
                Paper,
                null,
                React.createElement(
                    Grid,
                    { container: true, spacing: 0 },
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


var Component$2 = withStyles({})(Component$1);

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
                text
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

var styles = function styles() {
    return {
        button: {
            margin: 0,
            width: "100%",
            padding: "1vw 9px"
        },
        input: {
            display: "none"
        }
    };
};

var Key = withStyles(styles)(Component$3);

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
            this.set("/", this.getComponent("/", "/"));
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

var division = function division(accumulator) {
    var key = new Date().valueOf() + Math.floor(Math.random() * 100);
    var newAccumulator = accumulator.concat(' x' + key + '/y' + key);

    return {
        key: key,
        x: '',
        y: '',
        accumulator: newAccumulator,

        setValues: function setValues(x, y) {
            this.x = x;
            this.y = y;
        },
        getValue: function getValue(accumulator) {
            accumulator = accumulator || this.accumulator;

            return accumulator.replace('x' + this.key, this.x).replace('y' + this.key, this.y);
        }
    };
};

var MapEvents = function () {
    function MapEvents() {
        classCallCheck(this, MapEvents);

        this.map = new Map();
    }

    createClass(MapEvents, [{
        key: 'set',
        value: function set$$1(key, callback) {
            this.map.set(key, callback);
        }
    }, {
        key: 'get',
        value: function get$$1(key) {
            return this.map.get(key);
        }
    }, {
        key: 'setMap',
        value: function setMap() {
            this.setNumbersButtons();
            this.set("=", function (accumulator) {
                return accumulator.concat(" =");
            });
            this.set(",", function (accumulator) {
                return accumulator.concat(".");
            });
            this.set("+", function (accumulator) {
                return accumulator.concat(" +");
            });
            this.set("-", function (accumulator) {
                return accumulator.concat(" -");
            });
            this.set("*", function (accumulator) {
                return accumulator.concat(" *");
            });
            this.set("/", division);
        }
    }, {
        key: 'setNumbersButtons',
        value: function setNumbersButtons() {
            var _this = this;

            var _loop = function _loop(index) {
                _this.set(index.toString(), function (accumulator) {
                    return accumulator.concat(' ' + index);
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
