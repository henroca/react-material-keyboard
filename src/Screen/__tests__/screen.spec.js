import React from "react";
import context from "jest-plugin-context";
import { mount } from "enzyme";
import { Backspace } from "@material-ui/icons";
import { expect } from "chai";
import Screen from "../";
import Math from "../Math";
import Value from "../../Value/Value";

describe("<Screen />", () => {
    let wrapper = null;
    const component = <Screen screenValue={new Value("2")} />;

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

        it("render the <span>LIMPAR</span>", () => {
            expect(wrapper.contains(<span>LIMPAR</span>)).to.true;
        });

        it("render Math Componet", () => {
            expect(wrapper.find(Math)).to.have.lengthOf(1);
        });
    });
});