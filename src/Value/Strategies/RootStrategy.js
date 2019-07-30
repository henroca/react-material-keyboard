import ValueStrategy from "./ValueStrategy";
import ChangeValue from "./Commands/Root/ChangeValue";
import { NEXT_VALUE } from "../ValueList";

export default class RootStrategy extends ValueStrategy {
    /**
     *
     * @param {Object} value
     * @returns {Object}
     */
    addValue(value) {
        if (this.currentValue.isRadicand()) {
            this.currentValue.addRadicand(value);
        } else {
            this.currentValue.addIndex(value);
        }

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
