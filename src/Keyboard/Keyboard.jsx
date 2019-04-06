import React, { Component as ReactComponent } from "react";
import PropTypes from "prop-types";

import Component from "./Component";
import MapKeys from "./MapKeys";

export const defaultKeyboard = [
    ["1", "2", "3", "+"],
    ["4", "5", "6", "-"],
    ["7", "8", "9", "*"],
    [",", "0", "=", "/"],
];

const mapKeys = new MapKeys();

function withKeyboard(WrappedComponent, keyboard, mapKeys) {
    return class WithKeyboard extends ReactComponent {
        static propTypes = {
            keyboard: PropTypes.array,
            mapKeys: PropTypes.object,
        };

        render() {
            let props = {keyboard, mapKeys, ...this.props};

            return (
                <WrappedComponent {...props} />
            );
        }
    };
}

export default withKeyboard(Component, defaultKeyboard, mapKeys);
