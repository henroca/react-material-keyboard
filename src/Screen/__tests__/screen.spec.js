import React from "react";
import context from "jest-plugin-context";
import { mount } from "enzyme";
import { Backspace } from "@material-ui/icons";
import { expect } from "chai";
import Screen from "../";
import Math from "../Math";
import Value from "../../Value/Value";
import ValueList from "../../Value/ValueList";

describe("<Screen />", () => {
    let wrapper = null;
    const component = <Screen screenValue={new ValueList(new Value("2"))} />;

    beforeEach(() => {
        wrapper = mount(component);
    });

    context("when the component was successfully created", () => {
        it("renders without crashing", () => {
            mount(component);
        });

        it("renders icon Backspace", () => {
            expect(wrapper.find(Backspace)).to.have.lengthOf(1);
        });

        it("render Math Componet", () => {
            expect(wrapper.find(Math)).to.have.lengthOf(1);
        });
    });
});
