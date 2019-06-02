import Value from "../Value/Value";

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
        this.setValue("nextValue");
    }

    /**
     * set the current value to prev value
     */
    prevValue() {
        this.setValue("prevValue");
    }

    /**
     * set current value
     *
     * @param {String} attrName
     */
    setValue(attrName) {
        if (this.value[attrName]) {
            this.value.toggleCursor()
            this.value = this.value[attrName];
            this.value.toggleCursor();
        }
    }

    /**
     *  add value to list
     *
     * @param {Value} value
     */
    addValue(value) {
        value.prevValue = this.value;

        if (this.value.nextValue) {
            value.nextValue = this.value.nextValue;
            value.nextValue.prevValue = value;
        }

        this.value.nextValue = value;

        this.value.toggleCursor();
        value.toggleCursor();
        this.value = value;
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
