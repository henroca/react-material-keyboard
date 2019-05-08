import context from "jest-plugin-context";
import { shallow } from "enzyme";
import { expect } from "chai";

import mapKeys from "../MapKeys";

describe("MapKeys", () => {
    context("when create the instance", () => {
        let callback = () => {};
        mapKeys.setCallback(callback);
        mapKeys.setMap();

        const buttonAssertion = (btn, val) => {
            let component = mapKeys.get(btn);
            let wrapper = shallow(component);

            expect(wrapper.props().value).to.be.equal(btn);
            expect(wrapper.props().text).to.be.equal(val);
        };

        it("get the button 1", () => buttonAssertion("1", "1"));
        it("get the button 2", () => buttonAssertion("2", "2"));
        it("get the button 3", () => buttonAssertion("3", "3"));
        it("get the button 4", () => buttonAssertion("4", "4"));
        it("get the button 5", () => buttonAssertion("5", "5"));
        it("get the button 6", () => buttonAssertion("6", "6"));
        it("get the button 7", () => buttonAssertion("7", "7"));
        it("get the button 8", () => buttonAssertion("8", "8"));
        it("get the button 9", () => buttonAssertion("9", "9"));
        it("get the button 0", () => buttonAssertion("0", "0"));
        it("get the button =", () => buttonAssertion("=", "="));
        it("get the button ,", () => buttonAssertion(",", ","));
        it("get the button +", () => buttonAssertion("+", "+"));
        it("get the button -", () => buttonAssertion("-", "-"));
        it("get the button *", () => buttonAssertion("*", "*"));
        it("get the button /", () => buttonAssertion("/", "\\frac{x}{y}"));

    });
});
