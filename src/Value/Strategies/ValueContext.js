export default class ValueContext {

    /**
     *
     * @param {Object} strategy
     */
    constructor (strategy) {
        this.strategy = strategy;
    }

    /**
     *
     * @param {Object} value
     *
     * @returns {Object}
     */
    addValue (value) {
        return this.strategy.addValue(value);
    }

    /**
     *
     * @returns {Obejct}
     */
    remove() {
        return this.strategy.remove();
    }

    /**
     *
     * @returns {any}
     */
    changeValue (direction) {
        return this.strategy.changeValue(direction);
    }
}
