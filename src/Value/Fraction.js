import Value from "./Value";
import ValueList from "./ValueList";

export const DIVIDER = "DIVIDER";
export const DIVIDEND = "DIVIDEND";

export default class Fraction extends Value {
    /**
     *
     * @param {Value} prevValue
     */
    constructor(prevValue) {
        super("/", prevValue);
        this.divider = null;

        let value = new Value('');
        value.toggleCursor();

        this.dividend = new ValueList(value);
        this.currentCursor = DIVIDEND;
    }

    /**
     *
     * @param {Value} divider
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
     *
     * @param {Value} dividend
     */
    addDividend(dividend) {
        if (this.currentCursor === DIVIDER) {
            this.unfocus();
            this.currentCursor = DIVIDEND;
        }

        this.dividend.addValue(dividend);
    }

    unfocus() {
        if (this.dividend) {
            this.dividend.unfocus();
        }

        if (this.divider) {
            this.divider.unfocus();
        }

        this.currentCursor = null;
    }

    setCursor(operator) {
        if (operator === DIVIDER) {
            if (this.divider) {
                this.divider.focusFirst();
            } else {
                this.divider = new ValueList(new Value(''));
            }

            this.currentCursor = DIVIDER;
        } else {
            if (this.dividend) {
                this.dividend.focusLast();
            } else {
                this.dividend = new ValueList(new Value(''));
            }

            this.currentCursor = DIVIDEND;
        }
    }

    setParentheses(value) {
        return value.length > 1 ? `(${value})` : value;
    }

    value() {
        let dividend = this.setParentheses(this.getDividendValue());
        let divider = this.setParentheses(this.getDividerValue());

        return `${dividend}/${divider}`;
    }

    valueTeX() {
        return `\\frac{${this.getDividendTeX()}}{${this.getDividerTeX()}}`;
    }

    getDividerTeX() {
        return this.divider ?
            this.divider.last().getTeX() : '';
    }

    getDividendTeX() {
        return this.dividend ?
            this.dividend.last().getTeX() : '';
    }

    getDividerValue() {
        return this.divider ?
            this.divider.last().getValue() : '';
    }

    getDividendValue() {
        return this.dividend ?
            this.dividend.last().getValue() : '';
    }
}
