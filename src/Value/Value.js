export default class Value {
    constructor(operator, prevValue) {
        this.nextValue = null;
        this.prevValue = prevValue;
        this.operator = operator;
    }

    setNextValue(nextValue) {
        this.nextValue = nextValue;
    }

    value() {
        return this.operator;
    }

    valueTeX() {
        return this.value();
    }

    getValue() {
        if (!this.prevValue) {
            return this.value();
        }

        return this.prevValue.getValue() + this.value();
    }

    getTeX() {
        if (!this.prevValue) {
            return this.valueTeX();
        }

        return this.prevValue.getTeX() + this.valueTeX();
    }
}
