import React from "react";
import { mount, shallow } from "enzyme";
import { expect } from "chai";
import Math from "../Math";

describe("<Math />", () => {
    it("test", () => {
        const spy = sinon.spy(Math.prototype, 'onRender')
        const wrapper = shallow(<Math value="2" />)

        wrapper.find('#render').simulate('click')
        expect(spy.calledOnce).to.equal(true)
    });
});
