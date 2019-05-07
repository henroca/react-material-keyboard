import { withStyles } from "@material-ui/core/styles";
import Component from "./Component";

const styles = () => ({
    button: {
        margin: 0,
        width: "100%",
        height: "68px",
    },
    input: {
        display: "none",
    },
});

export default withStyles(styles)(Component);
