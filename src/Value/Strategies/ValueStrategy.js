import AddValue from "./Commands/Value/AddValue";
import ChangeValue from "./Commands/Value/ChangeValue";

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
     * @returns {any}
     */
    changeValue(direction) {
        let changeValue = new ChangeValue(this.currentValue, direction);
        return changeValue.execute();
    }
}
