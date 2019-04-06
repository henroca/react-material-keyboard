import { withStyles } from "@material-ui/core/styles";
import Component from "./Component";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: "none",
    },
});

export default withStyles(styles)(Component);
