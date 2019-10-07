import React from "react";
import Grid from "@material-ui/core/Grid";
import SendIcon from "@material-ui/icons/Send";
import orange from "@material-ui/core/colors/orange";
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
        zIndex: "1",
        marginBottom: "10px",
    },
    send: {
        position: "absolute",
        bottom: "-10px",
        zIndex: "2",
        color: orange[800],
        background: "white",
        padding: "0 10px",
        cursor: "pointer",
    },
    sendIcon: {
        marginBottom: "-5px"
    },
    status: {
        zIndex: "2",
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
        onSubmit: PropTypes.func,
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

    getResponse (screenValue) {
        return {
            value: screenValue.last().getValue(),
            value_tex: screenValue.last().getTeX(),
        };
    }

    render() {
        let {
            classes,
            onKeyUp,
            onClear,
            onRemove,
            onSubmit,
            screenValue,
            correct,
        } = this.props;

        let submit = "";

        if (onSubmit && typeof correct === "undefined") {
            submit = (
                <div
                    className={classes.send}
                    onClick={() => onSubmit(this.getResponse(screenValue))}
                >
                    ENVIAR <SendIcon fontSize="small" className={classes.sendIcon}/>
                </div>
            );
        }

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
                    {submit}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Screen);
