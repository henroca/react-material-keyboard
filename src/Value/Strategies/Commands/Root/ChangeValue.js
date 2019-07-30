import BaseCommand from "../BaseCommand";
import { INDEX, RADICAND } from "../../../Root";
import Value from "../../../Value";
import ValueList, { NEXT_VALUE } from "../../../ValueList";

export default class ChangeValue extends BaseCommand {
    /**
     *
     * @param {Object} root
     * @param {string} direction
     */
    constructor(root, direction) {
        super(root.getCurrentValue());
        this.root = root;
        this.direction = direction;
    }

    /**
     *  Execute the command to change position value
     *
     * @returns {Object}
     */
    execute() {
        if (this.direction === NEXT_VALUE) {
            return this.nextValue();
        }

        return this.prevValue();
    }

    /**
     * set next value
     *
     * @returns {Object}
     */
    nextValue() {
        if (this.nextIsNull()) {
            if (this.root.isRadicand()) return null;

            this.root.unfocus();
            this.root.focus(RADICAND);

            if (!this.root.radicand) {
                this.root.radicand = new ValueList(new Value(""));
                this.root.radicand.boot();
            }
        } else {
            this.root.toNextValue();
        }

        return this.root;
    }

    /**
     * set prev value
     *
     * @returns {Object}
     */
    prevValue() {
        if (this.prevIsNull() && this.isEmptyValue()) {
            if (this.nextIsNull()) {
                this.changeToNullValue();
            } else {
                let nextValue = this.currentValue.nextValue;
                nextValue.prevValue = null;
                this.setCurrentValue(nextValue);
            }

            if (this.root.isIndex()) return null;

            this.root.unfocus();
            this.root.focus(INDEX);

            if (!this.root.index) {
                this.root.index = new ValueList(new Value(""));
                this.root.index.boot();
            }

            return this.root;
        }

        if (this.prevIsNull()) {
            let value = new Value("");
            value.setNextValue(this.currentValue);
            this.currentValue.setPrevValue(value);
        }

        this.root.toPrevValue();
        return this.root;
    }

    setCurrentValue(value) {
        if (this.root.isIndex()) {
            this.root.index.value = value;
        } else {
            this.root.radicand.value = value;
        }
    }

    changeToNullValue() {
        if (this.root.isIndex()) {
            this.root.index = null;
        } else {
            this.root.radicand = null;
        }
    }
}
