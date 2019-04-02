import React, { Component } from "react";
import PropTypes from "prop-types";

import Keyboard from "./Component";

export const defaultKeyboard = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    [",", "0", "=", "/"],
];

function withKeyboard(WrappedComponent, keyboard) {
    return class WithKeyboard extends Component {
        static propTypes = {
            keyboard: PropTypes.array,
        };

        render() {
            let props = {keyboard, ...this.props};

            return (
                <WrappedComponent {...props} />
            );
        }
    };
}

export default withKeyboard(Keyboard, defaultKeyboard);
