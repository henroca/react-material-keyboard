import Value from "../../../Value";
import BaseCommand from "../BaseCommand";

export default class ChangeValue extends BaseCommand {
    /**
     *
     * @param {Value} currentValue
     * @param {string} direction
     */
    constructor(currentValue, direction) {
        super(currentValue);
        this.direction = direction;
    }

    /**
     * @returns {Value}
     */
    execute() {
        return this[this.direction]();
    }

    /**
     * @returns {Value}
     */
    nextValue() {
        if (this.nextIsNull()) return null;

        let nextValue = this.currentValue.nextValue;

        if (this.isEmptyValue()) {
            nextValue.prevValue = undefined;
        } else {
            nextValue.prevValue.cursor = false;
        }

        nextValue.cursor = true;

        return nextValue;
    }

    /**
     * @returns {Value}
     */
    prevValue() {
        if (this.isEmptyValue() && this.prevIsNull()) return null;

        let prevValue = this.currentValue.prevValue;

        if (this.prevIsNull()) {
            prevValue = new Value("");
            prevValue.setNextValue(this.currentValue);
        }

        if (this.isEmptyValue()) {
            prevValue.nextValue = undefined;
        } else {
            prevValue.nextValue.prevValue = prevValue;
            prevValue.nextValue.cursor = false;
        }

        prevValue.cursor = true;

        return prevValue;
    }
}
