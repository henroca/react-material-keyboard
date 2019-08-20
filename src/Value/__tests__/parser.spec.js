import { expect } from "chai";
import context from "jest-plugin-context";
import { parse } from "../parser";
import mapEvents from "../../Keyboard/MapEvents";
import ValueList from "../ValueList";
import Value from "../Value";
import Operator from "../Operator";
import Dot from "../Dot";
import Fraction from "../Fraction";
import Exponent from "../Exponent";
import Root from "../Root";

mapEvents.setMap();

describe("Parser", () => {
    context("when has only values", () => {
        it("parse value 5", () => {
            let valueList = new ValueList(new Value("5"));
            expect(parse("5", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value 52", () => {
            let valueList = new ValueList(new Value("5"));
            valueList.addValue(new Value("2"));

            expect(parse("52", mapEvents)).to.deep.equal(valueList);
        });
    });

    context("when has operators", () => {
        it("parse value 5 + 2", () => {
            let valueList = new ValueList(new Value("5"));
            valueList.addValue(new Operator("+"));
            valueList.addValue(new Value("2"));

            expect(parse("5 + 2", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value 5.2 = 2", () => {
            let valueList = new ValueList(new Value("5"));
            valueList.addValue(new Dot());
            valueList.addValue(new Value("2"));
            valueList.addValue(new Operator("="));
            valueList.addValue(new Value("2"));

            expect(parse("5.2 = 2", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value 3 + [3]/[2]", () => {
            let valueList = new ValueList(new Value("3"));
            valueList.addValue(new Operator("+"));
            valueList.addValue(new Fraction());
            valueList.addValue(new Value("3"));
            valueList.nextValue();
            valueList.addValue(new Value("2"));
            valueList.nextValue();

            expect(parse("3 + [3]/[2]", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value 3 + [3 + 2]/[2 * [1 + 2]/[2]]", () => {
            let valueList = new ValueList(new Value("3"));
            valueList.addValue(new Operator("+"));
            valueList.addValue(new Fraction());
            valueList.addValue(new Value("3"));
            valueList.addValue(new Operator("+"));
            valueList.addValue(new Value("2"));
            valueList.nextValue();
            valueList.addValue(new Value("2"));
            valueList.addValue(new Operator("*"));
            valueList.addValue(new Fraction());
            valueList.addValue(new Value("1"));
            valueList.addValue(new Operator("+"));
            valueList.addValue(new Value("2"));
            valueList.nextValue();
            valueList.addValue(new Value("2"));
            valueList.nextValue();
            valueList.nextValue();

            expect(parse("3 + [3 + 2]/[2 * [1 + 2]/[2]]", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value 2^[2]", () => {
            let valueList = new ValueList(new Value("2"));
            valueList.addValue(new Exponent());
            valueList.addValue(new Value("2"));
            valueList.nextValue();

            expect(parse("2^[2]", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value 2^[[1]/[2]]", () => {
            let valueList = new ValueList(new Value("2"));
            valueList.addValue(new Exponent());
            valueList.addValue(new Fraction());
            valueList.addValue(new Value("1"));
            valueList.nextValue();
            valueList.addValue(new Value("2"));
            valueList.nextValue();
            valueList.nextValue();

            expect(parse("2^[[1]/[2]]", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value sqrt(4)", () => {
            let valueList = new ValueList(new Root());
            valueList.addValue(new Value("4"));
            valueList.nextValue();

            expect(parse("sqrt(4)", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value sqrt(9, 3)", () => {
            let valueList = new ValueList(new Root());
            valueList.addValue(new Value("9"));
            valueList.nextValue();
            valueList.addValue(new Value("3"));
            valueList.nextValue();

            expect(parse("sqrt(9, 3)", mapEvents)).to.deep.equal(valueList);
        });

        it("parse value sqrt(9, [1]/[2])", () => {
            let valueList = new ValueList(new Root());
            valueList.addValue(new Value("9"));
            valueList.nextValue();
            valueList.addValue(new Fraction());
            valueList.addValue(new Value("1"));
            valueList.nextValue();
            valueList.addValue(new Value("2"));
            valueList.nextValue();
            valueList.nextValue();

            expect(parse("sqrt(9, [1]/[2])", mapEvents)).to.deep.equal(valueList);
        });
    });
});
