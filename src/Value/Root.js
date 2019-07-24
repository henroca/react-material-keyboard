import Value from "./Value";
import ValueList from "./ValueList";

export const RADICAND = "RADICAND";
export const INDEX = "INDEX";

export default class Root extends Value {

    /**
     *
     * @param {Object} prevValue
     */
    constructor(prevValue) {
        super("sqrt", prevValue);
        this.index = null;

        let value = new Value("");
        value.toggleCursor();

        this.radicand = new ValueList(value);
        this.currentCursor = RADICAND;
    }

    addRadicand(value) {
        if (!this.isRadicand()) {
            this.unfocus();
            this.focus(RADICAND);
        }

        if (!this.radicand) {
            this.radicand = new ValueList(value);
            return;
        }

        this.radicand.addValue(value);
    }

    addIndex(value) {
        if (!this.isIndex()) {
            this.unfocus();
            this.focus(INDEX);
        }

        if (!this.index) {
            this.index = new ValueList(value);
            return;
        }

        this.index.addValue(value);
    }

    focus(operator) {
        this.cursor = true;

        if (operator === RADICAND) {
            this.currentCursor = RADICAND;
            if (!this.radicand) return;
            this.radicand.focusLast();
            return;
        }

        this.currentCursor = INDEX;
        if (!this.index) return;
        this.index.focusLast();
    }

    toggleCursor() {
        super.toggleCursor();

        if (this.cursor) {
            this.focus(RADICAND);
        }
    }

    /**
     * Get value
     *
     * @returns {String}
     */
    value() {
        if (this.index)
            return `sqrt(${this.radicand.last().getValue()}, ${this.index.last().getValue()})`;

        return `sqrt(${this.radicand.last().getValue()})`;
    }

    /**
     * Get TEX value
     *
     * @returns {String}
     */
    valueTeX() {
        if (this.index)
            return `\\sqrt[${this.index.last().getTeX()}]{${this.radicand.last().getTeX()}}`;

        return `\\sqrt{${this.radicand.last().getTeX()}}`;
    }

    /**
     * unfocus
     *
     */
    unfocus() {
        if (this.radicand) this.radicand.unfocus();
        if (this.index) this.index.unfocus();

        this.currentCursor = null;
        this.cursor = false;
    }

    /**
     * get the current value
     *
     * @returns {Object}
     */
    getCurrentValue() {
        let valueList = this.index;

        if (this.isRadicand()) {
            valueList = this.radicand;
        }

        if (!valueList) return null;

        return valueList.value;
    }

    /**
     *  Change value direction
     *
     * @param {String} direction
     * @returns {Object}
     */
    changeValue(direction) {
        if (this.isRadicand()) {
            return this.radicand[direction]();
        }

        return this.index[direction]();
    }

    toNextValue() {
        if (this.isRadicand()) {
            this.radicand.nextValue();
        } else {
            this.index.nextValue();
        }
    }

    toPrevValue() {
        if (this.isRadicand()) {
            this.radicand.prevValue();
        } else {
            this.index.prevValue();
        }
    }

    isRadicand() {
        return this.currentCursor === RADICAND;
    }

    isIndex() {
        return this.currentCursor === INDEX;
    }

    /**
     *  Get context key
     *
     * @returns {String}
     */
    getContext() {
        return "root";
    }
}
