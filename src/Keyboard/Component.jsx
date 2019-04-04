import React, { Component } from "react";
import PropTypes from "prop-types";

import MapKeys from "./MapKeys";

export default class Keyboard extends Component {
    static propTypes = {
        keyboard: PropTypes.array.isRequired,
        mapKeys: PropTypes.objectOf(MapKeys).isRequired,
    };

    render() {
        return (
            <div />
        );
    }
}
