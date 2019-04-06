import React, { Component as ReactComponet } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Component extends ReactComponet {
    static propTypes = {
        keyboard: PropTypes.array.isRequired,
        mapKeys: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    render() {
        let { classes } = this.props;

        return (
            <Paper className={classes.paper}>
                <Grid container spacing={0}>

                </Grid>
            </Paper>
        );
    }
}

export default withStyles({})(Component);
