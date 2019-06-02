export default class Value {
    constructor(operator, prevValue) {
        this.nextValue = null;
        this.prevValue = prevValue;
        this.operator = operator;
        this.cursor = false;
    }

    toggleCursor() {
        this.cursor = !this.cursor;
    }

    setNextValue(nextValue) {
        if (this.nextValue) {
            nextValue.setNextValue(this.nextValue);
        }

        this.nextValue = nextValue;
    }

    value() {
        return this.operator;
    }

    valueTeX() {
        if (this.cursor) {
            return this.value() + "\\mid";
        }

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
