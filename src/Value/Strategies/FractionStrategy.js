import ValueStrategy from "./ValueStrategy";
import Value from "../Value";
import { DIVIDEND, DIVIDER } from "../Fraction";
import ChangeValue from "./Commands/Fraction/ChangeValue";
import { NEXT_VALUE } from "../ValueList";

export default class FractionStrategy extends ValueStrategy {
    /**
     *
     * @param {Value} value
     */
    addValue(value) {
        if (this.currentValue.currentCursor === DIVIDER) {
            this.currentValue.addDivider(value);
        } else {
            this.currentValue.addDividend(value);
        }

        return this.currentValue;
    }

    /**
     *
     * @returns {Value}
     */
    changeValue(direction) {
        let value = this.currentValue.getCurrentValue();

        if (value.constructor.name === 'Fraction') {
            this.currentValue.changeValue(direction);
            return this.currentValue;
        }

        let command = new ChangeValue(this.currentValue, direction);
        let result = command.execute();

        if (result) return result;

        if (direction === NEXT_VALUE) {
            return this.changeToNext();
        }

        return this.changeToPrev();
    }

    /**
     *
     * @returns {Value}
     */
    changeToNext() {
        let newValue = new Value('', this.currentValue);
        newValue.cursor = true;

        this.currentValue.setNextValue(newValue);

        return newValue;
    }

    changeToPrev() {
        if (this.currentValue.prevValue) {
            this.currentValue.cursor = false;
            this.currentValue.prevValue.cursor = true;

            return this.currentValue.prevValue;
        }

        let newValue = new Value('');
        newValue.setNextValue(this.currentValue);
        newValue.cursor = true;

        this.currentValue.setPrevValue(newValue);

        return newValue;
    }
}
