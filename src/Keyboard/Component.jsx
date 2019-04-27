import React, { Component as ReactComponet } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

class Component extends ReactComponet {
    static propTypes = {
        keyboard: PropTypes.array.isRequired,
        mapKeys: PropTypes.object.isRequired,
        mapEvents: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.clickBuntton = this.clickBuntton.bind(this);
        this.props.mapKeys.setCallback(this.clickBuntton);
        this.props.mapKeys.setMap();
        this.props.mapEvents.setMap();
    }

    clickBuntton(btn) {
        return btn;
    }

    render() {
        let { keyboard, mapKeys } = this.props;

        return (
            <Paper>
                <Grid container spacing={0}>
                    {keyboard.map(row => row.map(btn => (
                        <Grid key={btn} item xs={Math.ceil(12/row.length)}>
                            {mapKeys.get(btn)}
                        </Grid>
                    )))}
                </Grid>
            </Paper>
        );
    }
}

export default withStyles({})(Component);
