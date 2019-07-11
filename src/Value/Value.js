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
            nextValue.nextValue = this.nextValue;
            nextValue.nextValue.setPrevValue(nextValue);
        }

        this.nextValue = nextValue;
    }

    getContext() {
        return "value";
    }

    setPrevValue(prevValue) {
        this.prevValue = prevValue;
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
