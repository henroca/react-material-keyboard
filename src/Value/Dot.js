export default class Dot {
    constructor(prevValue) {
        this.prevValue = prevValue;
        this.operator = ".";
    }

    value() {
        return this.operator;
    }

    getValue() {
        if (!this.prevValue) {
            return this.value().trim();
        }

        return this.prevValue.getValue() + this.value();
    }
}
