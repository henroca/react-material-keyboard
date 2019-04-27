import context from "jest-plugin-context";
import { expect } from "chai";
import mapEvents from "../MapEvents";
import Value from "../../Value/Value";
import Fraction from "../../Value/Fraction";

describe("MapEvents", () => {
    context("when register a event", () => {

        beforeEach(() => mapEvents.setMap());

        it("returns a function", () => {
            expect(typeof mapEvents.get("1")).to.eql("function");
        });

        it("returns 0", () => {
            expect(mapEvents.get("0")().getValue()).to.eql("0");
        });

        it("returns 1", () => {
            expect(mapEvents.get("1")().getValue()).to.eql("1");
        });

        it("returns 2", () => {
            expect(mapEvents.get("2")().getValue()).to.eql("2");
        });

        it("returns 3", () => {
            expect(mapEvents.get("3")().getValue()).to.eql("3");
        });

        it("returns 4", () => {
            expect(mapEvents.get("4")().getValue()).to.eql("4");
        });

        it("returns 5", () => {
            expect(mapEvents.get("5")().getValue()).to.eql("5");
        });

        it("returns 6", () => {
            expect(mapEvents.get("6")().getValue()).to.eql("6");
        });

        it("returns 7", () => {
            expect(mapEvents.get("7")().getValue()).to.eql("7");
        });

        it("returns 8", () => {
            expect(mapEvents.get("8")().getValue()).to.eql("8");
        });

        it("returns 9", () => {
            expect(mapEvents.get("9")().getValue()).to.eql("9");
        });

        it("returns +", () => {
            expect(mapEvents.get("+")().getValue()).to.eql("+");
        });

        it("returns -", () => {
            expect(mapEvents.get("-")().getValue()).to.eql("-");
        });

        it("returns =", () => {
            expect(mapEvents.get("=")().getValue()).to.eql("=");
        });

        it("returns *", () => {
            expect(mapEvents.get("*")().getValue()).to.eql("*");
        });

        it("returns /", () => {
            expect(mapEvents.get("/")().getValue()).to.eql("/");
        });

        it("returns ,", () => {
            expect(mapEvents.get(",")().getValue()).to.eql(".");
        });

        it("returns the correct value", () => {
            let value = new Value("+", new Value("2"));

            expect(mapEvents.get("1")(value)).to.be.an.instanceof(Value);
            expect(mapEvents.get("1")(value).getValue()).to.eql("2 + 1");
        });

        it("returns the object from division", () => {
            let value = new Value("+", new Value("2"));
            let fraction = mapEvents.get("/")(value);
            fraction.setDivider(new Value("2"));
            fraction.setDividend(new Value("1"));

            expect(fraction).to.be.an.instanceof(Fraction);
            expect(fraction.getValue()).to.eql("2 + 1/2");
        });
    });
});
