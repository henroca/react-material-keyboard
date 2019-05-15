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
    };

    render() {
        let { classes } = this.props;

        return (
            <Grid container className={classes.root} spacing={0}>
                <Grid item xs={6}>
                    <span>LIMPAR</span>
                </Grid>
                <Grid item xs={6}>
                    <Backspace className={classes.icon} fontSize="small"/>
                </Grid>
                <Grid item xs={12} className={classes.screen}>
                    <Math value={"2 + 3"} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Screen);
