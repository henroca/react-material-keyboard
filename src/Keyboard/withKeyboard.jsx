import React, { Component as ReactComponent } from "react";
import PropTypes from "prop-types";

import defaultMapKeys from "./MapKeys";
import defaultMapEvents from "./MapEvents";
import { defaultKeyboard } from "./keyboards";


export default () => {
    let mapKeys = defaultMapKeys;
    let keyboard = defaultKeyboard;
    let mapEvents = defaultMapEvents;

    return (WrappedComponent) => class WithKeyboard extends ReactComponent {
        static propTypes = {
            keyboard: PropTypes.array,
            mapKeys: PropTypes.object,
            mapEvents: PropTypes.object,
        };

        render() {
            let props = {keyboard, mapKeys, mapEvents, ...this.props};

            return (
                <WrappedComponent {...props} />
            );
        }
    };
};
