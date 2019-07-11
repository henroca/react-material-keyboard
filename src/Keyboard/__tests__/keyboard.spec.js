import React from "react";
import context from "jest-plugin-context";
import { mount } from "enzyme";
import { expect } from "chai";
import Grid from "@material-ui/core/Grid";
import Key from "../../Key";

import { defaultKeyboard } from "../keyboards";
import Keyboard from "../Keyboard";
import Component from "../Component";
import { MapKeys } from "../MapKeys";
import Value from "../../Value/Value";
import { LEFT } from "../../keyConsts";

describe("<Keyboard />", () => {
    let wrapper = null;
    const component = <Keyboard />;

    beforeEach(() => {
        wrapper = mount(component);
    });

    context("when the component was successfully created", () => {
        it("renders without crashing", () => {
            mount(component);
        });

        it("renders the default keyboard", () => {
            let keyboard = wrapper.find(Component).props().keyboard;

            expect(keyboard).to.be.ofSize(4);
            expect(keyboard[0]).to.be.equalTo(["1", "2", "3", "+"]);
            expect(keyboard[1]).to.be.equalTo(["4", "5", "6", "-"]);
            expect(keyboard[2]).to.be.equalTo(["7", "8", "9", "*"]);
            expect(keyboard[3]).to.be.equalTo([",", "0", "=", "/"]);
        });

        it("renders the custom keyboard", () => {
            let customKeyboard = [["1", "2", "3", "+"], ["4", "5", "6", "-"]];
            wrapper = mount(<Keyboard keyboard={customKeyboard} />);
            let keyboard = wrapper.find(Component).props().keyboard;

            expect(keyboard).to.be.ofSize(2);
            expect(keyboard[0]).to.be.equalTo(["1", "2", "3", "+"]);
            expect(keyboard[1]).to.be.equalTo(["4", "5", "6", "-"]);
        });

        it("renders the grids", () => {
            let customKeyboard = [["1", "2"], ["3", "+"]];
            wrapper = mount(<Keyboard keyboard={customKeyboard} />);
            let keyboard = wrapper.find(Component);

            expect(keyboard.find(Grid).at(4).props()).to.deep.include({container: true, spacing: 0});
            expect(keyboard.find(Grid).at(5).props()).to.deep.include({item: true, xs: 6});
            expect(keyboard.find(Grid).at(6).props()).to.deep.include({item: true, xs: 6});
            expect(keyboard.find(Grid).at(7).props()).to.deep.include({item: true, xs: 6});
            expect(keyboard.find(Grid).at(8).props()).to.deep.include({item: true, xs: 6});
        });

        it("sets the props with MapKeys", () => {
            wrapper = mount(<Keyboard />);
            let mapKeys = wrapper.find(Component).props().mapKeys;

            expect(mapKeys).to.be.an.instanceof(MapKeys);
        });
    });

    context("when click a button", () => {
        it("changes the current value", () => {
            wrapper.find(Key).at(0).find("button").simulate("click");
            let valueList = wrapper.find(Component).children().state("valueList");
            let value = new Value("1");
            value.toggleCursor();

            expect(valueList.value).to.deep.equal(value);
        });

        it("change the cursor", () => {
            wrapper.find(Key).at(0).find("button").simulate("click");
            wrapper.find(Key).at(1).find("button").simulate("click");

            let valueList = wrapper.find(Component).children().state("valueList");

            expect(valueList.value.cursor).to.be.true;
            expect(valueList.value.prevValue.cursor).to.be.false;
        });

        it("set cursor to prevValue", () => {
            wrapper.find(Key).at(0).find("button").simulate("click");
            wrapper.find(Key).at(1).find("button").simulate("click");
            wrapper.simulate("keyup", {keyCode: LEFT});

            let valueList = wrapper.find(Component).children().state("valueList");

            expect(valueList.value.cursor).to.be.true;
            expect(valueList.value.nextValue.cursor).to.be.false;
        });
    });

    it("returns four keys columns from default keyboard", () => {
        expect(defaultKeyboard).to.be.ofSize(4);
    });

    it("returns first column from default keyboard", () => {
        expect(defaultKeyboard[0]).to.be.equalTo(["1", "2", "3", "+"]);
    });

    it("returns second column from default keyboard", () => {
        expect(defaultKeyboard[1]).to.be.equalTo(["4", "5", "6", "-"]);
    });

    it("returns third column from default keyboard", () => {
        expect(defaultKeyboard[2]).to.be.equalTo(["7", "8", "9", "*"]);
    });

    it("returns fourth column from default keyboard", () => {
        expect(defaultKeyboard[3]).to.be.equalTo([",", "0", "=", "/"]);
    });
});
