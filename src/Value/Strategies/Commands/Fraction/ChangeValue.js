import BaseCommand from "../BaseCommand";
import Value from "../../../Value";
import Fraction, { DIVIDEND, DIVIDER } from "../../../Fraction";
import { NEXT_VALUE } from "../../../ValueList";


/**
 * Get the current value
 *
 * @returns {Value}
 */
const getCurrentValue = (fraction) => {
   let valueList = fraction.divider;

   if (fraction.currentCursor === DIVIDEND) {
       valueList = fraction.dividend;
   }

   return valueList.value;
}

export default class ChangeValue extends BaseCommand {
    /**
     *
     * @param {Fraction} fraction
     * @param {string} direction
     */
    constructor(fraction, direction) {
        super(getCurrentValue(fraction));
        this.fraction = fraction;
        this.direction = direction;
    }

    /**
     *
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
     * @returns {Fraction}
     */
    nextValue() {
        if (this.isDividend()) {
            if (this.nextIsNull()) {
                this.fraction.unfocus();
                this.fraction.setCursor(DIVIDER);
            } else {
                this.fraction.dividend.nextValue();
            }

            return this.fraction;
        }

        if (this.nextIsNull()) {
            this.fraction.unfocus();
            return null;
        }

        this.fraction.divider.nextValue();

        return this.fraction;
    }

    /**
     * set prev value
     *
     * @returns {Fraction}
     */
    prevValue() {
        if (this.isDividend()) {
            if (this.prevIsNull() && this.isEmptyValue()) {
                this.fraction.unfocus();
                return null;
            }

            this.fraction.dividend.prevValue();
            return this.fraction;
        }

        if (this.prevIsNull()) {
            if (this.isEmptyValue()) {
                if (this.nextIsNull()) {
                    this.fraction.divider = null;
                } else {
                    let value = this.fraction.divider.value;
                    let next = value.nextValue;
                    next.prevValue = null;
                    this.fraction.divider.value = next;
                    this.fraction.divider.focus();
                    this.fraction.unfocus();
                }

                this.fraction.setCursor(DIVIDEND);
            } else {
                this.fraction.divider.prevValue();
            }
        } else {
            this.fraction.divider.prevValue();
        }

        return this.fraction;
    }

    /**
     * is dividend?
     *
     * @returns {boolean}
     */
    isDividend() {
        return this.fraction.currentCursor === DIVIDEND;
    }
}
