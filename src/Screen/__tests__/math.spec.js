import React from "react";
import { mount } from "enzyme";
import { expect } from "chai";
import Math from "../Math";
import MathJax from "react-mathjax";
import sinon from "sinon";

jest.mock("react-mathjax", () => {
    const PropTypes = require("prop-types");

    const Node = ({ onRender }) => (
        <div onClick={() => onRender()}>Fake Node</div>
    );

    Node.propTypes = {
        onRender: PropTypes.func,
    };

    return { Node };
});

describe("<Math />", () => {
    const spyOnRender = sinon.spy(Math.prototype, "handleOnRender");
    const spySetCursor = sinon.spy(Math.prototype, "setCursor");
    let wrapper = null;

    beforeEach(() => wrapper = mount(<Math value="2"/>));

    it("calls setCursor", () => {
        expect(spySetCursor.calledOnce).to.true;
    });

    it("calls handleOnRender", () => {
        wrapper.find(MathJax.Node).first().simulate("click");
        expect(spyOnRender.calledOnce).to.true;
    });

    it("changes load after called the handleOnRender", () => {
        expect(wrapper.state().load).to.true;
        wrapper.find(MathJax.Node).first().simulate("click");
        expect(wrapper.state().load).to.false;
    });

    it("shows the loaded components", () => {
        let firstChild = wrapper.find("div").first();
        let lastChild = wrapper.find("div").at(2);

        expect(firstChild.props().style.display).to.eqls("none");
        expect(lastChild.props().style.display).to.eqls("block");

        wrapper.find(MathJax.Node).first().simulate("click");

        firstChild = wrapper.find("div").first();
        lastChild = wrapper.find("div").at(2);

        expect(firstChild.props().style.display).to.eqls("block");
        expect(lastChild.props().style.display).to.eqls("none");
    });
});
