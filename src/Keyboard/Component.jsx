import React, { Component as ReactComponet } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";
import MathJax from "react-mathjax";
import Screen from "../Screen";
import ValueList from "../Value/ValueList";
import { init } from "./appContext";

import { LEFT, RIGHT } from "../keyConsts";
import Value from "../Value/Value";
import { parser } from "../Value/parser";

const styles = () => ({
    root: {
        position: "relative",
        zIndex: "1",
    },
    item: {
        display: "flex",
        justifyContent: "center",
        marginTop: "1px",
    },
    responseBtn: {
        position: "absolute",
        backgroundColor: red[600],
        left: "10px",
        marginTop: "-20px",
        zIndex: "2",

        "&:hover": {
            backgroundColor: red[900],
        },
    },
    table: {
        marginTop: "25px",
    },
    container: {
        backgroundColor: green["A200"],
        zIndex: "1",
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
        "#MathJax_Message": {display: "none"},
        "#MathJax_MSIE_Frame": {display: "none"}
    }
};

class Component extends ReactComponet {
    static propTypes = {
        keyboard: PropTypes.array.isRequired,
        mapKeys: PropTypes.object.isRequired,
        mapEvents: PropTypes.object.isRequired,
        contextConfig: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        responses: PropTypes.array,
        current: PropTypes.object,
        onSubmit: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            valueList: null,
            showKeyboard: false,
            correct: undefined,
        };

        this.clickBuntton = this.clickBuntton.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyClear = this.handleKeyClear.bind(this);
        this.handleKeyRemove = this.handleKeyRemove.bind(this);
        this.handleToggleResponses = this.handleToggleResponses.bind(this);

        this.props.mapKeys.setCallback(this.clickBuntton);
        this.props.mapKeys.setMap();
        this.props.mapEvents.setMap();
        init(this.props.contextConfig);
    }

    componentWillMount() {
        let { current, mapEvents } = this.props;

        if (current) {
            let valueList = parser(current.value, mapEvents);
            valueList.unfocus();

            this.setState({
                valueList,
                correct: current.correct
            });
        }
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

        this.setState({
            valueList,
            correct: undefined,
        });
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

        this.setState({
            valueList,
            correct: undefined,
        });
    }

    handleKeyClear() {
        let { valueList } = this.state;

        if (valueList) {
            valueList = new ValueList(new Value(""));
            this.setState({
                valueList,
                correct: undefined,
            });
        }
    }

    handleKeyRemove() {
        let { valueList } = this.state;

        if (valueList) {
            valueList.remove();
            this.setState({
                valueList,
                correct: undefined,
            });
        }
    }

    handleToggleResponses() {
        let { showKeyboard } = this.state;

        showKeyboard = !showKeyboard;

        this.setState({ showKeyboard });
    }

    hasResponses() {
        let { responses } = this.props;

        return responses && responses.length > 0;
    }

    render() {
        let {
            keyboard,
            mapKeys,
            classes,
            responses,
            onSubmit,
        } = this.props;

        let {
            valueList,
            showKeyboard,
            correct,
        } = this.state;

        let btnResponses = "";
        let responsesComp = "";

        if (this.hasResponses()) {
            btnResponses = (
                <Fab
                    onClick={this.handleToggleResponses}
                    color="primary"
                    size="small"
                    className={classes.responseBtn}
                >
                    {showKeyboard ? <CloseIcon /> : responses.length}
                </Fab>
            );

            let response = Object.assign({}, responses[0]);
            delete response.id;
            delete response.tex;
            let header = Object.keys(response);

            responsesComp = (
                <Collapse
                    className={classes.table}
                    in={showKeyboard}
                    timeout="auto"
                    unmountOnExit
                >
                    <Divider />
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Resposta</TableCell>
                                {header.map((value, index) => (
                                    <TableCell
                                        key={value + index}
                                        align="center"
                                    >
                                        {value}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {responses.map((response) => (
                                <TableRow key={response.id}>
                                    <TableCell align="center">
                                        <MathJax.Node formula={response.tex}/>
                                    </TableCell>
                                    {header.map((value, index) => (
                                        <TableCell
                                            key={value + index}
                                            align="center"
                                        >
                                            {response[value]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Collapse>
            );
        }

        return (
            <Paper onKeyUp={this.handleKeyUp} className={classes.root}>
                <MathJax.Provider options={mathJaxConfig}>
                    <Screen
                        screenValue={valueList}
                        onKeyUp={this.handleKeyUp}
                        onClear={this.handleKeyClear}
                        onRemove={this.handleKeyRemove}
                        onSubmit={onSubmit}
                        correct={correct}
                    />
                    {btnResponses}
                    {responsesComp}
                    <Grid
                        container
                        className={classes.container}
                        spacing={0}
                    >
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
