import React from "react";
import context, { set } from "jest-plugin-context";
import { shallow } from "enzyme";

import Key from "../Key";

describe("<Key />", () => {
    context("when the component was successfully created", () => {
        it("renders without crashing", () => {
            shallow(<Key text="btn1" />);
        });

        it("renders the text from button", () => {
            let wrapper = shallow(<Key text="btn1"/>);
            expect(wrapper).toHaveText('btn1');
        });
    });
});
