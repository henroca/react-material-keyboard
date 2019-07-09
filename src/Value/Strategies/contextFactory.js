import { appConfig } from "../../Keyboard/appContext";
import ValueContext from "./ValueContext";

export default (value) => {
    let context = appConfig[value.getContext()];
    let strategy = new context(value);

    return new ValueContext(strategy);
};
