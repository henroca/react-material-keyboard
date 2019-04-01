import { withStyles } from "@material-ui/core/styles";
import Key from "./Component";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: "none",
    },
});

export default withStyles(styles)(Key);
