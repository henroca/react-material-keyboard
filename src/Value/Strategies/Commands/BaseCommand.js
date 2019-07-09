export default class BaseCommand {
    /**
     *
     * @param {Object} currentValue
     */
    constructor(currentValue) {
        this.currentValue = currentValue;
    }

    /**
     * @return {Object}
     */
    execute() {
        throw "Method not implemented";
    }

    /**
     * @return {boolean}
     */
    isEmptyValue() {
        return this.currentValue.operator === "";
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
