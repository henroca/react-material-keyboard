import { expect } from "chai";
import context from "jest-plugin-context";
import Value from "../Value";
import Fraction from "../Fraction";
import Dot from "../Dot";
import Operator from "../Operator";

describe("Value", () => {
    context("when create a value", () => {
        it("add a number 1", () => {
            let value = new Value("1");
            expect(value.getValue()).to.eql("1");
        });

        it("returns 1 + x", () => {
            let value = new Value("x", new Operator("+", new Value("1")));
            expect(value.getValue()).to.eql("1 + x");
        });

        it("returns 22 + 12", () => {
            let value = new Value("2",
                new Value("1",
                    new Operator("+",
                        new Value("2",
                            new Value("2")
                        )
                    )
                )
            );

            expect(value.getValue()).to.eql("22 + 12");
        });

        it("returns 2 + 3.1", () => {
            let value = new Value("1",
                new Dot(
                    new Value("3", new Operator("+",
                        new Value("2")
                    ))
                )
            );

            expect(value.getValue()).to.eql("2 + 3.1");
        });
    });

    context("when create a value with fraction", () => {
        it("returns 1 + x/3", () => {
            let value = new Operator("+", new Value("1"));
            let fraction = new Fraction(value);

            fraction.setDivider(new Value("3"));
            fraction.setDividend(new Value("x"));

            expect(fraction.getValue()).to.eql("1 + x/3");
        });

        it("returns (2 + 3)/x + 4", () => {
            let dividend = new Value("3", new Operator("+", new Value("2")));
            let fraction = new Fraction();
            fraction.setDivider(new Value("x"));
            fraction.setDividend(dividend);

            let value = new Value("4", new Operator("+", fraction));

            expect(value.getValue()).to.eql("(2 + 3)/x + 4");
        });

        it("returns (2 + x)/(x - 3)", () => {
            let divider = new Value("3", new Operator("-", new Value("x")));
            let dividend = new Value("x", new Operator("+", new Value("2")));
            let fraction = new Fraction();
            fraction.setDivider(divider);
            fraction.setDividend(dividend);

            expect(fraction.getValue()).to.eql("(2 + x)/(x - 3)");
        });
    });

    context("when create a TEX value", () => {
        it("add a number 1", () => {
            let value = new Value("1");
            expect(value.getTeX()).to.eql("1");
        });

        it("returns 1 + x", () => {
            let value = new Value("x", new Operator("+", new Value("1")));
            expect(value.getTeX()).to.eql("1 + x");
        });

        it("returns 22 + 12", () => {
            let value = new Value("2",
                new Value("1",
                    new Operator("+",
                        new Value("2",
                            new Value("2")
                        )
                    )
                )
            );

            expect(value.getTeX()).to.eql("22 + 12");
        });

        it("returns 2 + 3,1", () => {
            let value = new Value("1",
                new Dot(
                    new Value("3", new Operator("+",
                        new Value("2")
                    ))
                )
            );

            expect(value.getTeX()).to.eql("2 + 3,1");
        });
    });

    context("when create a TEX value with fraction", () => {
        it("returns 1 + x/3", () => {
            let value = new Operator("+", new Value("1"));
            let fraction = new Fraction(value);

            fraction.setDivider(new Value("3"));
            fraction.setDividend(new Value("x"));

            expect(fraction.getTeX()).to.eql("1 + \\frac{x}{3}");
        });

        it("returns (2 + 3)/x + 4", () => {
            let dividend = new Value("3", new Operator("+", new Value("2")));
            let fraction = new Fraction();
            fraction.setDivider(new Value("x"));
            fraction.setDividend(dividend);

            let value = new Value("4", new Operator("+", fraction));

            expect(value.getTeX()).to.eql("\\frac{2 + 3}{x} + 4");
        });

        it("returns (2 + x)/(x - 3)", () => {
            let divider = new Value("3", new Operator("-", new Value("x")));
            let dividend = new Value("x", new Operator("+", new Value("2")));
            let fraction = new Fraction();
            fraction.setDivider(divider);
            fraction.setDividend(dividend);

            expect(fraction.getTeX()).to.eql("\\frac{2 + x}{x - 3}");
        });
    });
});
