import Value from "./Value";
import ValueContext from "./Strategies/ValueContext";

export default class ValueList {
    /**
     *
     * @param {Value} value
     */
    constructor(value) {
        this.value = value;
        this.boot();
    }

    /**
     * Boot the instance
     */
    boot() {
        if (!this.value.cursor) {
            this.value.toggleCursor()
        }
    }

    /**
     * set the current value to next value
     */
    nextValue() {
        let value = this.getContext().changeValue("nextValue");

        if (value === null) return value;
        this.value = value;

        return true;
    }

    /**
     * set the current value to prev value
     */
    prevValue() {
        let value = this.getContext().changeValue("prevValue");

        if (value === null) return value;
        this.value = value;

        return true;
    }

    /**
     *  add value to list
     *
     * @param {Value} value
     */
    addValue(value) {
        this.value = this.getContext().addValue(value);
    }

    /**
     * unfocus value list
     */
    unfocus() {
        this.value.cursor = false;
    }

    /**
     * focus value list
     */
    focus() {
        this.value.cursor = true;
    }

    /**
     *
     * @returns {ValueContext}
     */
    getContext()
    {
        return new ValueContext(this.value);
    }

    /**
     *  returns the last Value from list
     *
     * @returns {Value}
     */
    last() {
        let value = this.value;
        let nextValue = null;

        while (nextValue = value.nextValue) {
            if (nextValue) {
                value = nextValue;
            }
        }

        return value;
    }
}
