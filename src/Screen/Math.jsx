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
        this.timeCursor = null;
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

    componentDidMount() {
        this.setCursor();
    }

    componentDidUpdate() {
        this.setCursor();
    }

    setCursor() {
        if (this.timeCursor) {
            clearInterval(this.timeCursor);
        }

        let mathList = document.getElementsByClassName("math");

        for (let el of mathList) {
            let mjxEls = el.getElementsByClassName("mjx-char");

            for (let mjx of mjxEls) {
                if (mjx.innerHTML == "∣") {
                    mjx.style.fontSize = "1em";
                    this.timeCursor = setInterval(() => {
                        if (mjx.style.visibility == "hidden") {
                            mjx.style.visibility = "visible";
                        } else {
                            mjx.style.visibility = "hidden";
                        }
                    }, 500);
                }

                mjx.parentElement.style.marginLeft = "0";
            }
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
                <div style={this.getStyle(load)} className="math">
                    <MathJax.Node formula={value} onRender={this.handleOnRender} />
                </div>

                <div style={this.getStyle(!load)} className="math">
                    <MathJax.Node formula={currentValue} />
                </div>
            </React.Fragment>
        );
    }
}
