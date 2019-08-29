import Value from "./Value";
import ValueList from "./ValueList";

export default class Exponent extends Value {
    /**
     *
     * @param {Object} prevValue
     */
    constructor(prevValue) {
        super("^", prevValue);

        let value = new Value("");
        value.toggleCursor();

        this.valueList = new ValueList(value);
    }

    toggleCursor() {
        super.toggleCursor();

        if (this.cursor) {
            this.valueList.focusLast();
        } else {
            this.unfocus();
        }
    }

    /**
     *
     * @param {Object} value
     */
    addValue(value) {
        this.valueList.addValue(value);
    }

    /**
     *
     */
    remove() {
        this.valueList.remove();
    }

    /**
     * unfocus potentiation
     *
     */
    unfocus() {
        this.valueList.unfocus();
    }

    /**
     * Get value
     *
     * @returns {String}
     */
    value() {
        return `^[${this.valueList.last().getValue()}]`;
    }

    /**
     * Get TEX value
     *
     * @returns {String}
     */
    valueTeX() {
        return `^{${this.valueList.last().getTeX()}}`;
    }

    /**
     *  Get context key
     *
     * @returns {String}
     */
    getContext() {
        return "exponent";
    }
}
