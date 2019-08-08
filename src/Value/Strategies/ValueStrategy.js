import AddValue from "./Commands/Value/AddValue";
import ChangeValue from "./Commands/Value/ChangeValue";
import Value from "../Value";

export default class ValueStrategy {
    /**
     *
     * @param {Object} currentValue
     */
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    /**
     *
     * @param {Object} value
     *
     * @returns {Object}
     */
    addValue(value) {
        let addValue = new AddValue(this.currentValue, value);
        return addValue.execute();
    }

    /**
     *
     * @returns {Object}
     */
    remove() {
        let prevValue = this.currentValue.prevValue;
        let nextValue = this.currentValue.nextValue;

        if (!prevValue) {
            prevValue = new Value("");
        }

        if (prevValue.getContext() !== "value") {
            if (this.currentValue.operator == "") {
                prevValue = prevValue.prevValue;

                if (!prevValue) {
                    prevValue = new Value("");
                }
            } else {
                prevValue = new Value("", prevValue);
            }
        }

        if (nextValue) {
            prevValue.nextValue = nextValue;
            nextValue.prevValue = prevValue;
        } else {
            prevValue.nextValue = undefined;
        }

        prevValue.toggleCursor();

        return prevValue;
    }

    /**
     *
     * @returns {any}
     */
    changeValue(direction) {
        let changeValue = new ChangeValue(this.currentValue, direction);
        return changeValue.execute();
    }

    /**
     *  change to next value
     *
     * @returns {Object}
     */
    changeToNext() {
        let newValue = new Value("", this.currentValue);
        newValue.cursor = true;

        this.currentValue.setNextValue(newValue);

        return newValue;
    }

    /**
     * change to prev value
     *
     * @returns {Object}
     */
    changeToPrev() {
        if (this.currentValue.prevValue) {
            this.currentValue.prevValue.cursor = true;

            return this.currentValue.prevValue;
        }

        let newValue = new Value("");
        newValue.setNextValue(this.currentValue);
        newValue.cursor = true;

        this.currentValue.setPrevValue(newValue);

        return newValue;
    }
}
