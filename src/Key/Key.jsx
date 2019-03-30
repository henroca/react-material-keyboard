import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Key extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        const { text } = this.props;

        return (
            <button>{text}</button>
        );
    }
}
