import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import Math from "./Math";
import { Backspace } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    root: {
        height: "150px",
        padding: "1em 2em",
    },
    icon: {
        float: "right",
    },
    screen: {
        display: "flex",
        justifyContent: "center",
    },
});

class Screen extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        screenValue: PropTypes.object,
        onKeyUp: PropTypes.func,
    };

    renderValue() {
        let { screenValue } = this.props;

        if (screenValue) {
            return (<Math value={screenValue.last().getTeX()} />);
        }

        return (<span>Degite um valor</span>);
    }

    render() {
        let { classes, onKeyUp } = this.props;

        return (
            <Grid container onKeyUp={onKeyUp} className={classes.root} spacing={0}>
                <Grid item xs={6}>
                    <span>LIMPAR</span>
                </Grid>
                <Grid item xs={6}>
                    <Backspace className={classes.icon} fontSize="small"/>
                </Grid>
                <Grid item xs={12} className={classes.screen}>
                    {this.renderValue()}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Screen);
