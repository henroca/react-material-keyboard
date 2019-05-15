import React from "react";
import PropTypes from "prop-types";
import MathJax from "react-mathjax";

export default class Math extends React.Component {
    static propTypes = {
        value: PropTypes.string,
    };

    render() {
        let { value } = this.props;

        return (
            <MathJax.Node formula={value} />
        );
    }
}
