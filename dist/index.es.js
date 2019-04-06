import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

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

    function Component$$1() {
        classCallCheck(this, Component$$1);
        return possibleConstructorReturn(this, (Component$$1.__proto__ || Object.getPrototypeOf(Component$$1)).apply(this, arguments));
    }

    createClass(Component$$1, [{
        key: "render",
        value: function render() {
            return React.createElement("div", null);
        }
    }]);
    return Component$$1;
}(Component);

Component$1.propTypes = {
    keyboard: PropTypes.array.isRequired,
    mapKeys: PropTypes.object.isRequired
};

var Component$2 = function (_ReactComponent) {
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

Component$2.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

var styles = function styles(theme) {
    return {
        button: {
            margin: theme.spacing.unit
        },
        input: {
            display: "none"
        }
    };
};

var Key = withStyles(styles)(Component$2);

var MapKeys = function () {
    function MapKeys(callback) {
        classCallCheck(this, MapKeys);

        this.callback = callback;
        this.map = new Map();
        this.setMap();
    }

    createClass(MapKeys, [{
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

var defaultKeyboard = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], [",", "0", "=", "/"]];

var mapKeys = new MapKeys();

function withKeyboard(WrappedComponent, keyboard, mapKeys) {
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
                var props = _extends({ keyboard: keyboard, mapKeys: mapKeys }, this.props);

                return React.createElement(WrappedComponent, props);
            }
        }]);
        return WithKeyboard;
    }(Component), _class.propTypes = {
        keyboard: PropTypes.array,
        mapKeys: PropTypes.object
    }, _temp;
}

var Keyboard = withKeyboard(Component$1, defaultKeyboard, mapKeys);

export default Keyboard;
//# sourceMappingURL=index.es.js.map
