import React from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import { expect } from "chai";
import Math from "../Math";
import MathJax from "react-mathjax";
import sinon from "sinon";

jest.mock("react-mathjax", () => {
    const Node = jest.fn(() => {
        const Component = ({ onRender }) => (
            <div onClick={() => onRender()}>Fake Node</div>
        );

        Component.propTypes = {
            onRender: PropTypes.func,
        };

        return Component;
    });

    return { Node };
});

describe("<Math />", () => {
    const spy = sinon.spy(Math.prototype, "handleOnRender");
    let wrapper = null;

    beforeEach(() => wrapper = mount(<Math value="2"/>));

    it("calls handleOnRender", () => {
        wrapper.find(MathJax.Node).first().simulate("click");
        expect(spy.calledOnce).to.true;
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
