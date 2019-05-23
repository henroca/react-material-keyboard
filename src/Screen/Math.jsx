import React from "react";
import PropTypes from "prop-types";
import MathJax from "react-mathjax";

export default class Math extends React.Component {
    static propTypes = {
        value: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            load: true,
            currentValue: "",
        };

        this.handleOnRender = this.handleOnRender.bind(this);
    }

    handleOnRender() {
        let { value } = this.props;

        this.setState({
            load: false,
            currentValue: value,
        });
    }

    componentWillUpdate(nextProps) {
        if (nextProps.value != this.props.value) {
            this.setState({ load: true });
        }
    }

    getStyle(load) {
        return { display: load ? "none" : "block" };
    }

    render() {
        let { value } = this.props;
        let { currentValue, load } = this.state;

        return (
            <React.Fragment>
                <div style={this.getStyle(load)}>
                    <MathJax.Node formula={value} onRender={this.handleOnRender} />
                </div>

                <div style={this.getStyle(!load)}>
                    <MathJax.Node formula={currentValue} />
                </div>
            </React.Fragment>
        );
    }
}
