import ValueStrategy from "./ValueStrategy";
import { DIVIDER } from "../Fraction";
import ChangeValue from "./Commands/Fraction/ChangeValue";
import { NEXT_VALUE } from "../ValueList";

export default class FractionStrategy extends ValueStrategy {
    /**
     *
     * @param {Object} value
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
     * @returns {Object}
     */
    remove() {
        this.currentValue.remove();
        return this.currentValue;
    }
    /**
     *
     * @returns {Object}
     */
    changeValue(direction) {
        let value = this.currentValue.getCurrentValue();

        if (value && value.getContext() !== "value") {
            this.currentValue.changeValue(direction);
            return this.currentValue;
        }

        let command = new ChangeValue(this.currentValue, direction);
        let result = command.execute();

        if (result) return result;

        this.currentValue.unfocus();

        if (direction === NEXT_VALUE) {
            return this.changeToNext();
        }

        return this.changeToPrev();
    }
}
