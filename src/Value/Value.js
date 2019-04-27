export default class Value {
    constructor(operator, prevValue) {
        this.prevValue = prevValue;
        this.operator = operator;
    }

    value() {
        return " " + this.operator;
    }

    getValue() {
        if (!this.prevValue) {
            return this.value().trim();
        }

        if (this.prevValue.constructor.name == "Dot") {
            return this.prevValue.getValue() + this.value().trim();
        }

        return this.prevValue.getValue() + this.value();
    }
}
