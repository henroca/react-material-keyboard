import React from "react";
import context from "jest-plugin-context";
import sinon from "sinon";
import { mount } from "enzyme";
import { expect } from "chai";
import Button from "@material-ui/core/Button";
import MathJax from "react-mathjax";

import Key from "../Key";

describe("<Key />", () => {
    let wrapper = null;
    const callback = sinon.spy();
    const component =
        <Key
            text="1"
            onClick={callback}
            value="1"
        />;

    beforeEach(() => {
        wrapper = mount(component);
    });

    context("when the component was successfully created", () => {
        it("renders without crashing", () => {
            mount(component);
        });

        it("renders the text from button", () => {
            expect(wrapper.find(MathJax.Node)).to.have.lengthOf(1);
        });

        it("renders the Material Button", () => {
            expect(wrapper.find(Button)).to.have.lengthOf(1);
        });
    });

    context("when the component is clicked", () => {
        it("calleds the callback", () => {
            wrapper.find("button").simulate("click");

            expect(callback.calledWith("1")).to.be.true;
        });
    });
});
