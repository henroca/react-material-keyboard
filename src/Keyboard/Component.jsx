import React, { Component as ReactComponet } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MathJax from "react-mathjax";
import Screen from "../Screen";
import ValueList from "../Value/ValueList";

import { LEFT, RIGHT } from "../keyConsts";

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
            valueList: null,
        };

        this.clickBuntton = this.clickBuntton.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.props.mapKeys.setCallback(this.clickBuntton);
        this.props.mapKeys.setMap();
        this.props.mapEvents.setMap();
    }

    clickBuntton(btn) {
        let { mapEvents } = this.props;
        let { valueList } = this.state;
        let nextValue = mapEvents.get(btn)();

        if (!valueList) {
            valueList = new ValueList(nextValue);
        } else {
            valueList.addValue(nextValue);
        }

        this.setState({ valueList });
    }

    handleKeyUp({ keyCode }) {
        let { valueList } = this.state;

        if (keyCode == LEFT) {
            valueList.prevValue();
        } else if (keyCode == RIGHT) {
            valueList.nextValue();
        } else {
            return;
        }

        this.setState({ valueList });
    }

    render() {
        let { keyboard, mapKeys, classes } = this.props;
        let { valueList } = this.state;

        return (
            <Paper onKeyUp={this.handleKeyUp}>
                <MathJax.Provider options={mathJaxConfig}>
                    <Screen screenValue={valueList} onKeyUp={this.handleKeyUp}/>
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
