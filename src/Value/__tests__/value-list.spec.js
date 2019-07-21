import { expect } from "chai";
import Value from "../Value";
import ValueList from "../ValueList";
import Fraction from "../Fraction";
import Exponent from "../Exponent";

describe("ValueList", () => {
    it("get last value", () => {
        let value2 = new Value("2");
        let value1 = new Value("1", value2);
        let valueList = new ValueList(value1.prevValue);

        value2.setNextValue(value1);

        expect(valueList.last()).to.deep.equal(value1);
    });

    it("set current value to next", () => {
        let value2 = new Value("2");
        let value1 = new Value("1", value2);
        let valueList = new ValueList(value1.prevValue);
        value2.setNextValue(value1);

        expect(valueList.value).to.deep.equal(value2);
        valueList.nextValue();

        expect(valueList.value).to.deep.equal(value1);
    });

    it("set current value to prev", () => {
        let value2 = new Value("2");
        let value1 = new Value("1", value2);
        let valueList = new ValueList(value1);
        value2.setNextValue(value1);

        expect(valueList.value).to.deep.equal(value1);
        valueList.prevValue();
        expect(valueList.value).to.deep.equal(value2);
    });

    it("add value", () => {
        let valueList = new ValueList(new Value("2"));
        valueList.addValue(new Value("1"));

        let currentValue = valueList.value;
        let prevValue = valueList.value.prevValue;

        expect(currentValue.operator).to.be.equal("1");
        expect(prevValue.operator).to.be.equal("2");
        expect(prevValue.nextValue.operator).to.be.equal("1");
    });

    it("add value between other values", () => {
        let valueList = new ValueList(new Value("2"));
        valueList.addValue(new Value("1"));
        valueList.prevValue();
        valueList.addValue(new Value("3"));

        let currentValue = valueList.value;

        expect(currentValue.operator).to.be.equal("3");
        expect(valueList.last().getValue()).to.be.equal("231");
    });

    it("add in first position", () => {
        let valueList = new ValueList(new Value("2"));
        valueList.prevValue();
        valueList.addValue(new Value("1"));

        expect(valueList.last().getValue()).to.be.equal("12");
    });

    it("add divider in fraction", () => {
        let valueList = new ValueList(new Fraction());
        valueList.addValue(new Value("1"));
        valueList.nextValue();
        valueList.addValue(new Value("2"));
        valueList.prevValue();
        valueList.prevValue();
        valueList.addValue(new Value("3"));

        expect(valueList.last().getValue()).to.be.equal("[13]/2");
    });

    it("create 1/2", () => {
        let valueList = new ValueList(new Fraction());
        valueList.addValue(new Value("1"));
        valueList.nextValue();
        valueList.addValue(new Value("2"));

        expect(valueList.last().getValue()).to.be.equal("1/2");
    });

    it("add cursor after change to divider", () => {
        let valueList = new ValueList(new Fraction());
        valueList.addValue(new Value("1"));
        valueList.nextValue();
        let divider = valueList.last().divider;

        expect(divider.last().cursor).to.be.true;
    });

    it("add exponent 2", () => {
        let valueList = new ValueList(new Value("2"));
        valueList.addValue(new Exponent());
        valueList.addValue(new Value("2"));

        expect(valueList.last().getValue()).to.be.equal("2**[2]");
    });

    it("go to prev value from exponent", () => {
        let valueList = new ValueList(new Value("2"));
        valueList.addValue(new Exponent());
        valueList.addValue(new Value("2"));
        valueList.prevValue();
        valueList.addValue(new Value("2"));
        valueList.prevValue();
        valueList.prevValue();
        valueList.addValue(new Value("2"));

        expect(valueList.last().getValue()).to.be.equal("22**[22]");
    });

    it("go to next value from exponent", () => {
        let valueList = new ValueList(new Value("2"));
        valueList.addValue(new Exponent());
        valueList.addValue(new Value("2"));
        valueList.nextValue();
        valueList.addValue(new Value("+"));
        valueList.addValue(new Value("3"));

        expect(valueList.last().getValue()).to.be.equal("2**[2]+3");
    });
});
