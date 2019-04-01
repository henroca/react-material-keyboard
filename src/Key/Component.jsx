import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

export default class Key extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
        classes: PropTypes.object.isRequired,
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
        const { text, classes } = this.props;

        return (
            <Button className={classes.button} onClick={this.handleClick}>
                {text}
            </Button>
        );
    }
}
