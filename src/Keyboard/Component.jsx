import React, { Component as ReactComponet } from "react";
import PropTypes from "prop-types";

export default class Component extends ReactComponet {
    static propTypes = {
        keyboard: PropTypes.array.isRequired,
        mapKeys: PropTypes.object.isRequired,
    };

    render() {
        return (
            <div />
        );
    }
}
