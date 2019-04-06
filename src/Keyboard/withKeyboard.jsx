import React, { Component as ReactComponent } from "react";
import PropTypes from "prop-types";

import defaultMapKeys from "./MapKeys";
import { defaultKeyboard } from "./keyboards";


export default (keyboard, mapKeys) => {
    mapKeys = mapKeys || defaultMapKeys;
    keyboard = keyboard || defaultKeyboard;

    mapKeys.setMap();

    return (WrappedComponent) => class WithKeyboard extends ReactComponent {
        static propTypes = {
            keyboard: PropTypes.array,
            mapKeys: PropTypes.object,
        };

        render() {
            let props = {keyboard, mapKeys, ...this.props};

            props.mapKeys.setCallback((val) => console.log(val));

            return (
                <WrappedComponent {...props} />
            );
        }
    };
};
