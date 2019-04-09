import React from "react";
import context from "jest-plugin-context";
import { mount } from "enzyme";
import { expect } from "chai";
import Grid from "@material-ui/core/Grid";
import sinon from "sinon";

import { defaultKeyboard } from "../keyboards";
import Keyboard from "../Keyboard";
import Component from "../Component";
import { MapKeys } from "../MapKeys";

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

        it("renders the buttons", () => {
            let customKeyboard = [["1", "2"], ["3", "+"]];
            wrapper = mount(<Keyboard keyboard={customKeyboard} />);
            let keyboard = wrapper.find(Component);

            expect(keyboard.find("button")).to.have.lengthOf(4);
            expect(keyboard.text()).to.equal("123+");
        });

        it("renders the grids", () => {
            let customKeyboard = [["1", "2"], ["3", "+"]];
            wrapper = mount(<Keyboard keyboard={customKeyboard} />);
            let keyboard = wrapper.find(Component);

            expect(keyboard.find(Grid).at(0).props()).to.deep.include({container: true, spacing: 0});
            expect(keyboard.find(Grid).at(1).props()).to.deep.include({item: true, xs: 6});
            expect(keyboard.find(Grid).at(2).props()).to.deep.include({item: true, xs: 6});
            expect(keyboard.find(Grid).at(3).props()).to.deep.include({item: true, xs: 6});
            expect(keyboard.find(Grid).at(4).props()).to.deep.include({item: true, xs: 6});
        });

        it("sets the props with MapKeys", () => {
            wrapper = mount(<Keyboard />);
            let mapKeys = wrapper.find(Component).props().mapKeys;

            expect(mapKeys).to.be.an.instanceof(MapKeys);
        });

        it("call the function clickBuntton", () => {
            const spy = sinon.spy(Keyboard.prototype, "clickBuntton");
            wrapper = mount(<Keyboard />);
            const buttons = wrapper.find("button");
            buttons.first().simulate("click");

            expect(spy.calledOnce).to.be.true;
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
