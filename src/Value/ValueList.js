import Value from "./Value";
import ValueContext from "./Strategies/ValueContext";

export const NEXT_VALUE = "nextValue";
export const PREV_VALUE = "prevValue";

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
            this.value.cursor = true;
        }
    }

    /**
     * set the current value to next value
     */
    nextValue() {
        let value = this.getContext().changeValue(NEXT_VALUE);

        if (value === null) return value;
        this.value = value;

        return true;
    }

    /**
     * set the current value to prev value
     */
    prevValue() {
        let value = this.getContext().changeValue(PREV_VALUE);

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
     * Focus last value
     */
    focusLast() {
        this.unfocus();
        this.value = this.last();
        this.focus();
    }

    /**
     * Focus first value
     */
    focusFirst() {
        this.unfocus();
        this.value = this.first();
        this.focus();
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
            value = nextValue;
        }

        return value;
    }

    /**
     * returns the first Value from list
     *
     * @returns {Value}
     */
    first() {
        let value = this.value;
        let prevValue = null;

        while (prevValue = value.prevValue) {
            value = prevValue;
        }

        return value;
    }
}
