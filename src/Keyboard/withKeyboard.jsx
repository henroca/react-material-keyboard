import React, { Component as ReactComponent } from "react";
import PropTypes from "prop-types";

import defaultMapKeys from "./MapKeys";
import { defaultKeyboard } from "./keyboards";


export default (keyboard, mapKeys) => {
    mapKeys = mapKeys || defaultMapKeys;
    keyboard = keyboard || defaultKeyboard;

    return (WrappedComponent) => class WithKeyboard extends ReactComponent {
        static propTypes = {
            keyboard: PropTypes.array,
            mapKeys: PropTypes.object,
        };

        constructor(props) {
            super(props);

            this.clickBuntton = this.clickBuntton.bind(this);
        }

        clickBuntton(val) {
            val;
        }

        render() {
            let props = {keyboard, mapKeys, ...this.props};

            props.mapKeys.setCallback(this.clickBuntton);
            mapKeys.setMap();

            return (
                <WrappedComponent {...props} />
            );
        }
    };
};
