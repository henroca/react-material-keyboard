import { expect } from "chai";
import context from "jest-plugin-context";
import Value from "../Value";
import Fraction from "../Fraction";
import Dot from "../Dot";
import Operator from "../Operator";
import Exponent from "../Exponent";
import Root from "../Root";

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

            fraction.addDivider(new Value("3"));
            fraction.addDividend(new Value("x"));

            expect(fraction.getValue()).to.eql("1 + [x]/[3]");
        });

        it("returns [2 + 3]/x + 4", () => {
            let dividend = new Value("3", new Operator("+", new Value("2")));
            let fraction = new Fraction();
            fraction.addDivider(new Value("x"));
            fraction.addDividend(dividend);

            let value = new Value("4", new Operator("+", fraction));

            expect(value.getValue()).to.eql("[2 + 3]/[x] + 4");
        });

        it("returns [2 + x]/[x - 3]", () => {
            let divider = new Value("3", new Operator("-", new Value("x")));
            let dividend = new Value("x", new Operator("+", new Value("2")));
            let fraction = new Fraction();
            fraction.addDivider(divider);
            fraction.addDividend(dividend);

            expect(fraction.getValue()).to.eql("[2 + x]/[x - 3]");
        });
    });

    context("when create a potentiation", () => {
        it("returns ^2", () => {
            let exponent = new Exponent();
            exponent.addValue(new Value("2"));

            expect(exponent.getValue()).to.eql("^[2]");
        });
    });

    context("when create a root", () => {
        it("returns sqrt(9)", () => {
            let root = new Root();
            root.addRadicand(new Value("9"));

            expect(root.getValue()).to.eql("sqrt(9)");
        });

        it("returns sqrt(8, 3)", () => {
            let root = new Root();
            root.addRadicand(new Value("8"));
            root.addIndex(new Value("3"));

            expect(root.getValue()).to.eql("sqrt(8, 3)");
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

            fraction.addDivider(new Value("3"));
            fraction.addDividend(new Value("x"));
            fraction.unfocus();

            expect(fraction.getTeX()).to.eql("1 + \\frac{x}{3}");
        });

        it("returns (2 + 3)/x + 4", () => {
            let dividend = new Value("3", new Operator("+", new Value("2")));
            let fraction = new Fraction();
            fraction.addDivider(new Value("x"));
            fraction.addDividend(dividend);
            fraction.unfocus();

            let value = new Value("4", new Operator("+", fraction));

            expect(value.getTeX()).to.eql("\\frac{2 + 3}{x} + 4");
        });

        it("returns (2 + x)/(x - 3)", () => {
            let divider = new Value("3", new Operator("-", new Value("x")));
            let dividend = new Value("x", new Operator("+", new Value("2")));
            let fraction = new Fraction();
            fraction.addDivider(divider);
            fraction.addDividend(dividend);
            fraction.unfocus();

            expect(fraction.getTeX()).to.eql("\\frac{2 + x}{x - 3}");
        });
    });

    context("when create a TEX value with potentiation", () => {
        it("returns ^{2}", () => {
            let exponent = new Exponent();
            exponent.addValue(new Value("2"));

            expect(exponent.getTeX()).to.eql("^{2\\mid}");
        });
    });

    context("when create a TEX value with root", () => {
        it("returns a square to default", () => {
            let root = new Root();
            root.addRadicand(new Value("9"));

            expect(root.getTeX()).to.eql("\\sqrt{9\\mid}");
        });

        it("changes the index to 3", () => {
            let root = new Root();
            root.addRadicand(new Value("8"));
            root.addIndex(new Value("3"));

            expect(root.getTeX()).to.eql("\\sqrt[3\\mid]{8}");
        });
    });
});
