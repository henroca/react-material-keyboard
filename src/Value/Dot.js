import Value from "./Value";

export default class Dot extends Value {
    constructor(prevValue) {
        super(".", prevValue);
    }

    valueTeX() {
        return ",";
    }
}
