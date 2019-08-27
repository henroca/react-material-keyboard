import Value from "./Value";
import ValueList from "./ValueList";

export const DIVIDER = "DIVIDER";
export const DIVIDEND = "DIVIDEND";

export default class Fraction extends Value {
    /**
     *
     * @param {Object} prevValue
     */
    constructor(prevValue) {
        super("/", prevValue);
        this.divider = null;

        let value = new Value("");
        value.toggleCursor();

        this.dividend = new ValueList(value);
        this.currentCursor = DIVIDEND;
    }

    toggleCursor() {
        super.toggleCursor();

        if (this.cursor) {
            this.setCursor(DIVIDEND);
        } else {
            this.unfocus();
        }
    }

    /**
     *  Add value in divider
     *
     * @param {Object} divider
     */
    addDivider(divider) {
        if (this.currentCursor === DIVIDEND) {
            this.unfocus();
            this.currentCursor = DIVIDER;
        }

        if (!this.divider) {
            return this.divider = new ValueList(divider);
        }

        this.divider.addValue(divider);
    }

    /**
     *  Add value in dividend
     *
     * @param {Object} dividend
     */
    addDividend(dividend) {
        if (this.currentCursor === DIVIDER) {
            this.unfocus();
            this.currentCursor = DIVIDEND;
        }

        this.dividend.addValue(dividend);
    }

    /**
     *  Get context key
     *
     * @returns {String}
     */
    getContext() {
        return "fraction";
    }

    /**
     * unfocus fraction
     *
     */
    unfocus() {
        if (this.dividend) {
            this.dividend.unfocus();
        }

        if (this.divider) {
            this.divider.unfocus();
        }

        this.currentCursor = null;
    }

    /**
     * Set cursor in operator
     *
     * @param {String} operator
     */
    setCursor(operator) {
        if (operator === DIVIDER) {
            if (this.divider) {
                this.divider.focusFirst();
            } else {
                this.divider = new ValueList(new Value(""));
            }

            this.currentCursor = DIVIDER;
        } else {
            if (this.dividend) {
                this.dividend.focusLast();
            } else {
                this.dividend = new ValueList(new Value(""));
            }

            this.currentCursor = DIVIDEND;
        }
    }

    /**
     * get the current value
     *
     * @returns {Object}
     */
    getCurrentValue() {
        if (this.currentCursor == DIVIDER) {
            return this.divider.value;
        }

        return this.dividend.value;
    }

    /**
     *  Change value direction
     *
     * @param {String} direction
     * @returns {Object}
     */
    changeValue(direction) {
        if (this.currentCursor == DIVIDER) {
            return this.divider[direction]();
        }

        return this.dividend[direction]();
    }

    /**
     *
     *
     */
    remove() {
        if (this.currentCursor == DIVIDER) {
            return this.divider.remove();
        }

        return this.dividend.remove();
    }

    /**
     * set prentheses
     *
     * @param {String} value
     *
     * @returns {String}
     */
    setParentheses(value) {
        return `[${value}]`;
    }

    /**
     * get value
     *
     * @returns {String}
     */
    value() {
        let dividend = this.setParentheses(this.getDividendValue());
        let divider = this.setParentheses(this.getDividerValue());

        return `${dividend}/${divider}`;
    }

    /**
     * get TEX value
     *
     * @returns {String}
     */
    valueTeX() {
        return `\\frac{${this.getDividendTeX()}}{${this.getDividerTeX()}}`;
    }

    /**
     * get divider TEX
     *
     * @returns {String}
     */
    getDividerTeX() {
        return this.divider ?
            this.divider.last().getTeX() : "";
    }

    /**
     * get dividend TEX
     *
     * @returns {String}
     */
    getDividendTeX() {
        return this.dividend ?
            this.dividend.last().getTeX() : "";
    }

    /**
     * get divider Value
     *
     * @returns {String}
     */
    getDividerValue() {
        return this.divider ?
            this.divider.last().getValue() : "";
    }

    /**
     * get dividend Value
     *
     * @returns {String}
     */
    getDividendValue() {
        return this.dividend ?
            this.dividend.last().getValue() : "";
    }
}
