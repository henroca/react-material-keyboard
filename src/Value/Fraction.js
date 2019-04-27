import Value from "./Value";

export default class Fraction extends Value {
    constructor(prevValue) {
        super("/", prevValue);
        this.divider = "";
        this.dividend = "";
    }

    setDivider(divider) {
        this.divider = this.setParentheses(divider.getValue());
    }

    setDividend(dividend) {
        this.dividend = this.setParentheses(dividend.getValue());
    }

    setParentheses(value) {
        return value.length > 1 ? `(${value})` : value;
    }

    value() {
        return ` ${this.dividend}/${this.divider}`;
    }
}
