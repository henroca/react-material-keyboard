import ValueStrategy from "./ValueStrategy";
import { NEXT_VALUE } from "../ValueList";
import Value from "../Value";

export default class ExponentStrategy extends ValueStrategy {
    /**
     *
     * @param {Object} value
     * @returns {Object}
     */
    addValue(value) {
        this.currentValue.addValue(value);
        return this.currentValue;
    }

    /**
     *
     * @returns {any}
     */
    changeValue(direction) {
        if (direction == NEXT_VALUE) {
            return this.nextValue();
        }

        return this.prevValue();
    }

    remove() {
        this.currentValue.remove();
    }

    nextValue() {
        let currentValue = this.currentValue.valueList.value;
        let nextValue = currentValue.nextValue;

        if (nextValue) {
            this.currentValue.valueList.nextValue();
            return this.currentValue;
        }

        if (currentValue.getContext() !== "value") {
            this.currentValue.valueList.nextValue();
            return this.currentValue;
        }

        nextValue = new Value("", this.currentValue);
        this.currentValue.unfocus();
        this.currentValue.cursor = false;
        this.currentValue.setNextValue(nextValue);
        nextValue.cursor = true;

        return nextValue;
    }

    prevValue() {
        let currentValue = this.currentValue.valueList.value;
        let prevValue = currentValue.prevValue;

        if (prevValue) {
            this.currentValue.valueList.prevValue();
            return this.currentValue;
        }

        if (currentValue.getContext() !== "value") {
            this.currentValue.valueList.prevValue();
            return this.currentValue;
        }

        if (currentValue.operator === "") {
            currentValue.nextValue.prevValue = undefined;
            this.currentValue.valueList.value = currentValue.nextValue;
            this.currentValue.unfocus();
            this.currentValue.cursor = false;

            return this.getPrev();
        }

        let newValue = new Value("");
        newValue.setNextValue(currentValue);
        currentValue.setPrevValue(newValue);

        this.currentValue.valueList.prevValue();
        return this.currentValue;
    }

    getPrev() {
        let prevValue = this.currentValue.prevValue;

        if (!prevValue) {
            prevValue = new Value("");
            prevValue.setNextValue(this.currentValue);
        }

        prevValue.cursor = true;

        return prevValue;
    }
}
