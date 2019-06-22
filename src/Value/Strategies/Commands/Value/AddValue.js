import Value from "../../../Value";
import BaseCommand from "../BaseCommand";

export default class AddValue extends BaseCommand {

    /**
     *
     * @param {Value} currentValue
     * @param {Value} newValue
     */
    constructor(currentValue, newValue) {
        super(currentValue);
        this.newValue = newValue;
    }

    /**
     * @return {Value}
     */
    execute() {
        if (this.isEmptyValue()) {
            this.replaceValue();
        } else {
            this.addValue();
        }

        this.newValue.cursor = true;

        return this.newValue;
    }

    /**
     *
     */
    replaceValue() {
        let nextValue = this.currentValue.nextValue;
        let prevValue = this.currentValue.prevValue;

        if (nextValue) {
            nextValue.prevValue = this.newValue;
            this.newValue.nextValue = nextValue;
        }

        if (prevValue) {
            prevValue.nextValue = this.newValue;
            this.newValue.prevValue = prevValue;
        }
    }

    /**
     *
     */
    addValue() {
        this.newValue.setPrevValue(this.currentValue);
        this.currentValue.setNextValue(this.newValue);
        this.currentValue.cursor = false;
    }
}
