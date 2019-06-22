import Value from "../../Value";

export default class BaseCommand {
    /**
     *
     * @param {Value} currentValue
     */
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    /**
     * @return {Value}
     */
    execute() {
        throw "Method not implemented";
    }

    /**
     * @return {boolean}
     */
    isEmptyValue() {
        return this.currentValue.operator === ''
    }

    /**
     * @return {boolean}
     */
    nextIsNull() {
        return this.currentValue.nextValue === null ||
            this.currentValue.nextValue === undefined;
    }

    /**
     * @return {boolean}
     */
    prevIsNull() {
        return this.currentValue.prevValue === null ||
            this.currentValue.prevValue === undefined;
    }
}
