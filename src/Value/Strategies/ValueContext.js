import ValueStrategy from "./ValueStrategy";
import FractionStrategy from "./FractionStrategy";
import Value from "../Value";

export default class ValueContext {
    constructor (currentValue) {
        this.currentValue = currentValue;
    }

    /**
     *
     * @param {Value} value
     *
     * @returns {Value}
     */
    addValue (value) {
        return this.getStrategy().addValue(value);
    }

    /**
     *
     * @returns {any}
     */
    changeValue (direction) {
        return this.getStrategy().changeValue(direction);
    }

    getStrategy () {
        let className = this.currentValue
            .constructor.name;

        if (className === "Fraction") {
            return this.getFractionStrategy();
        }

        return this.getValueStrategy();
    }

    /**
     *
     * @returns {FractionStrategy}
     */
    getFractionStrategy () {
        return new FractionStrategy(this.currentValue);
    }

    /**
     *
     * @returns {ValueStrategy}
     */
    getValueStrategy () {
        return new ValueStrategy(this.currentValue);
    }
}
