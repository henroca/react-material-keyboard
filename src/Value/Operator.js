import Value from "./Value";

export default class Operator extends Value {
    value() {
        return " " + this.operator;
    }

    getValue() {
        if (!this.prevValue) {
            return this.value() + " ";
        }

        return this.prevValue.getValue() + this.value() + " ";
    }

    getTeX() {
        if (!this.prevValue) {
            return this.valueTeX() + " ";
        }

        return this.prevValue.getTeX() + this.valueTeX() + " ";
    }
}
