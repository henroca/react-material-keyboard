import React from "react";
import context from "jest-plugin-context";
import sinon from "sinon";
import { shallow } from "enzyme";

import Key from "../Key";

describe("<Key />", () => {
    let wrapper = null;
    const callback = sinon.spy();
    const component =
        <Key
            text="btn1"
            onClick={callback}
            value="1"
        />;

    beforeEach(() => {
        wrapper = shallow(component);
    });

    context("when the component was successfully created", () => {
        it("renders without crashing", () => {
            shallow(component);
        });

        it("renders the text from button", () => {
            expect(wrapper).toHaveText('btn1');
        });
    });

    context("when the component is clicked", () => {
        it("calleds the callback", () => {
            wrapper.find('button').simulate('click');

            expect(callback.calledWith("1")).toBeTruthy();
        });
    });
});
