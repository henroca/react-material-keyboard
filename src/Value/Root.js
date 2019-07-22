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
            if (!this.radicand) return;
            this.currentCursor = RADICAND;
            this.radicand.focusLast();
            return;
        }

        if (!this.index) return;
        this.currentCursor = INDEX;
        this.index.focusLast();
    }

    /**
     * Get value
     *
     * @returns {String}
     */
    value() {
        if (this.index)
            return `sqrt(${this.radicand.last().getValue()}, ${this.index.last().getValue()})`

        return `sqrt(${this.radicand.last().getValue()})`
    }

    /**
     * Get TEX value
     *
     * @returns {String}
     */
    valueTeX() {
        if (this.index)
            return `\\sqrt[${this.index.last().getTeX()}]{${this.radicand.last().getTeX()}}`

        return `\\sqrt{${this.radicand.last().getTeX()}}`
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

    isRadicand() {
        return this.currentCursor === RADICAND;
    }

    isIndex() {
        return this.currentCursor === INDEX;
    }
}
