import ValueStrategy from "./ValueStrategy";
import Value from "../Value";
import { DIVIDEND, DIVIDER } from "../Fraction";
import ValueList from "../ValueList";

export default class FractionStrategy extends ValueStrategy {
    /**
     *
     * @param {Value} value
     */
    addValue(value) {
        if (this.currentValue.currentCursor === DIVIDER) {
            this.currentValue.addDivider(value);
        } else {
            this.currentValue.addDividend(value);
        }

        return this.currentValue;
    }

    /**
     *
     * @returns {Value}
     */
    changeValue(direction) {
        if (this.currentValue.currentCursor === DIVIDER) {
            return this.execDirection(direction, this.currentValue.divider);
        } else {
            return this.execDirection(direction, this.currentValue.dividend);
        }
    }

    execDirection(direction, value) {
        if (direction == 'nextValue') {
            if (!value.nextValue()) {
                if (this.currentValue.currentCursor === DIVIDEND) {
                    this.changeCursor();
                } else {
                    this.currentValue.toggleCursor();

                    let newValue = new Value('', this.currentValue);
                    newValue.toggleCursor();
                    this.currentValue.setNextValue(newValue);

                    return newValue;
                }
            }
        } else {
            if (!value.prevValue()) {
                if (this.currentValue.currentCursor === DIVIDER) {
                    this.changeCursor();
                } else {
                    this.currentValue.unfocus();

                    if (this.currentValue.prevValue) {
                        this.currentValue.prevValue.toggleCursor();
                    } else {
                        let newValue = new Value('');
                        newValue.toggleCursor();
                        newValue.setNextValue(this.currentValue);
                        this.currentValue.prevValue = newValue;
                    }

                    return this.currentValue.prevValue;
                }
            }
        }

        return this.currentValue;
    }

    changeCursor() {
        if (this.currentValue.currentCursor === DIVIDER) {
            this.currentValue.unfocus();
            this.currentValue.currentCursor = DIVIDEND;

            if (!this.currentValue.dividend) {
                this.currentValue.dividend = new ValueList(new Value(''));
            }

            this.currentValue.dividend.value = this.currentValue.dividend.last();
            this.currentValue.dividend.value.toggleCursor();
        } else {
            this.currentValue.unfocus();
            this.currentValue.currentCursor = DIVIDER;

            if (!this.currentValue.divider) {
                this.currentValue.divider = new ValueList(new Value(''));
            }

            this.currentValue.divider.value = this.currentValue.divider.last();
            this.currentValue.divider.value.toggleCursor();
        }
    }
}
