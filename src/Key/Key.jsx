import React, { Component } from "react";
import PropTypes from "prop-types";


export default class Key extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { onClick, value } = this.props;
        onClick(value);
    }

    render() {
        const { text } = this.props;

        return (
            <button onClick={this.handleClick}>{text}</button>
        );
    }
}
