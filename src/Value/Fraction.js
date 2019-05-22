import Value from "./Value";

export default class Fraction extends Value {
    constructor(prevValue) {
        super("/", prevValue);
        this.divider = "";
        this.dividend = "";
    }

    setDivider(divider) {
        this.divider = divider.getValue();
    }

    setDividend(dividend) {
        this.dividend = dividend.getValue();
    }

    setParentheses(value) {
        return value.length > 1 ? `(${value})` : value;
    }

    value() {
        let dividend = this.setParentheses(this.dividend);
        let divider = this.setParentheses(this.divider);

        return `${dividend}/${divider}`;
    }

    valueTeX() {
        return `\\frac{${this.dividend}}{${this.divider}}`;
    }
}
