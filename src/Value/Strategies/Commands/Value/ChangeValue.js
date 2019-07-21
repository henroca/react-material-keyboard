import Value from "../../../Value";
import BaseCommand from "../BaseCommand";
import { NEXT_VALUE, PREV_VALUE } from "../../../ValueList";
import { DIVIDEND, DIVIDER } from "../../../Fraction";

export default class ChangeValue extends BaseCommand {
    /**
     *
     * @param {Object} currentValue
     * @param {string} direction
     */
    constructor(currentValue, direction) {
        super(currentValue);
        this.direction = direction;
    }

    /**
     * @returns {Object}
     */
    execute() {
        if (this.direction === NEXT_VALUE) {
            return this.nextValue();
        }

        return this.prevValue();
    }

    /**
     * @returns {Object}
     */
    nextValue() {
        if (this.nextIsNull()) return null;

        let nextValue = this.currentValue.nextValue;

        if (this.isEmptyValue()) {
            if (this.currentValue.prevValue) {
                nextValue.setPrevValue(this.currentValue.prevValue);
                nextValue.prevValue.nextValue = nextValue;
            } else {
                nextValue.prevValue = undefined;
            }
        } else {
            nextValue.prevValue.cursor = false;
        }

        nextValue.toggleCursor();

        return this.setFraction(nextValue);
    }

    /**
     * @returns {Object}
     */
    prevValue() {
        if (this.isEmptyValue() && this.prevIsNull()) return null;

        let prevValue = this.currentValue.prevValue;

        if (this.prevIsNull()) {
            prevValue = new Value("");
            prevValue.setNextValue(this.currentValue);
        }

        if (this.isEmptyValue()) {
            if (this.currentValue.nextValue) {
                this.currentValue.nextValue.setPrevValue(prevValue);
                prevValue.nextValue = this.currentValue.nextValue;
            } else {
                prevValue.nextValue = undefined;
            }
        } else {
            prevValue.nextValue.prevValue = prevValue;
            prevValue.nextValue.cursor = false;
        }

        prevValue.toggleCursor();

        return this.setFraction(prevValue);
    }

    setFraction(value) {
        let className = value.constructor.name;

        if (className !== "Fraction") return value;
        value.unfocus();

        if (this.direction === PREV_VALUE && this.isEmptyValue()) {
            value.setCursor(DIVIDER);
            value.divider.focusLast();

            return value;
        }

        if (this.direction === PREV_VALUE) {
            let newValue = new Value("");
            value.cursor = false;
            value.setNextValue(newValue);
            newValue.setPrevValue(value);
            newValue.cursor = true;

            return newValue;
        }

        value.setCursor(DIVIDEND);
        value.dividend.focusFirst();

        return value;
    }
}
