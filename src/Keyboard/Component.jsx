import React, { Component as ReactComponet } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MathJax from "react-mathjax";
import Screen from "../Screen";

const styles = () => ({
    container: {
        backgroundColor: green["A200"],
    },
});

const mathJaxConfig = {
    tex2jax: {
        inlineMath: []
    },
    showMathMenu: false,
    showMathMenuMSIE: false,
    "fast-preview": {
        disabled: true
    },
    showProcessingMessages: false,
    styles: {
        "#MathJax_Message": {display: 'none'},
        "#MathJax_MSIE_Frame": {display: 'none'}
    }
};

class Component extends ReactComponet {
    static propTypes = {
        keyboard: PropTypes.array.isRequired,
        mapKeys: PropTypes.object.isRequired,
        mapEvents: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            value: undefined,
        };

        this.clickBuntton = this.clickBuntton.bind(this);
        this.props.mapKeys.setCallback(this.clickBuntton);
        this.props.mapKeys.setMap();
        this.props.mapEvents.setMap();
    }

    clickBuntton(btn) {
        let { mapEvents } = this.props;
        let nextValue = mapEvents.get(btn)(this.state.value);

        if (this.state.value) {
            this.state.value.setNextValue(nextValue);
            this.state.value.toggleCursor();
        }

        nextValue.toggleCursor();

        return this.setState({
            value: nextValue,
        });
    }

    render() {
        let { keyboard, mapKeys, classes } = this.props;
        let { value } = this.state;

        return (
            <Paper>
                <MathJax.Provider options={mathJaxConfig}>
                    <Screen screenValue={value} />
                    <Grid container className={classes.container} spacing={0}>
                        {keyboard.map(row => row.map(btn => (
                            <Grid key={btn} item xs={Math.ceil(12/row.length)}>
                                {mapKeys.get(btn)}
                            </Grid>
                        )))}
                    </Grid>
                </MathJax.Provider>
            </Paper>
        );
    }
}

export default withStyles(styles)(Component);
