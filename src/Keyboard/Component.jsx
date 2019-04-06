import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Keyboard extends Component {
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
