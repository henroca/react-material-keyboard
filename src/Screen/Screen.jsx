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
        cursor: "pointer",
    },
    screen: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    status: {
        top: "-12px",
        left: "20px",
        padding: "0 10px",
        margin: 0,
        position: "absolute",
        background: "white",
    },
    actionBtn: {
        cursor: "pointer",
    },
});

class Screen extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
        screenValue: PropTypes.object,
        onKeyUp: PropTypes.func,
        onRemove: PropTypes.func,
        onClear: PropTypes.func,
        correct: PropTypes.bool,
    };

    renderValue() {
        let { screenValue } = this.props;

        if (screenValue) {
            return (<Math value={screenValue.last().getTeX()} />);
        }

        return (<span>Degite um valor</span>);
    }

    getCorrectText() {
        let { correct, classes } = this.props;

        if (typeof correct === "undefined") {
            return "";
        }

        if (correct) {
            return (
                <h4
                    className={classes.status}
                    style={{ color: "#228416" }}
                >
                    Correto
                </h4>
            );
        }

        return (
            <h4
                className={classes.status}
                style={{ color: "#ec211d" }}
            >
                Incorreto
            </h4>
        );
    }

    getCorrectBorder() {
        let { correct } = this.props;

        if (typeof correct === "undefined") {
            return {};
        }

        if (correct) {
            return {
                border: "2px solid",
                borderColor: "#228416"
            };
        }

        return {
            border: "2px solid",
            borderColor: "#ec211d"
        };
    }

    render() {
        let {
            classes,
            onKeyUp,
            onClear,
            onRemove,
        } = this.props;

        return (
            <Grid container onKeyUp={onKeyUp} className={classes.root} spacing={0}>
                <Grid item xs={6}>
                    <span
                        id="clear"
                        onClick={onClear}
                        className={classes.actionBtn}
                    >
                        LIMPAR
                    </span>
                </Grid>
                <Grid item xs={6}>
                    <Backspace
                        className={classes.icon}
                        fontSize="small"
                        onClick={onRemove}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    className={classes.screen}
                    style={this.getCorrectBorder()}
                >
                    {this.getCorrectText()}
                    {this.renderValue()}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Screen);
