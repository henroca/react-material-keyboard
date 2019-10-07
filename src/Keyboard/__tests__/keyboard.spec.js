import React from "react";
import context from "jest-plugin-context";
import { mount } from "enzyme";
import { expect } from "chai";
import Grid from "@material-ui/core/Grid";
import sinon from "sinon";
import Key from "../../Key";

import { defaultKeyboard } from "../keyboards";
import Keyboard from "../Keyboard";
import Component from "../Component";
import { MapKeys } from "../MapKeys";
import Value from "../../Value/Value";
import { LEFT } from "../../keyConsts";
import Screen from "../../Screen/Screen";

describe("<Keyboard />", () => {
    let wrapper = null;
    let component = <Keyboard />;

    beforeEach(() => {
        wrapper = mount(component);
    });

    context("when the component was successfully created", () => {
        it("renders without crashing", () => {
            mount(component);
        });

        it("renders the default keyboard", () => {
            let keyboard = wrapper.find(Component).props().keyboard;

            expect(keyboard).to.be.ofSize(5);
            expect(keyboard[0]).to.be.equalTo(["1", "2", "3", "+"]);
            expect(keyboard[1]).to.be.equalTo(["4", "5", "6", "-"]);
            expect(keyboard[2]).to.be.equalTo(["7", "8", "9", "*"]);
            expect(keyboard[3]).to.be.equalTo([",", "0", "=", "/"]);
            expect(keyboard[4]).to.be.equalTo(["(", ")", "^", "sqrt"]);
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

        it("renders the last response", () => {
            wrapper = mount(<Keyboard current={{
                value: "2 + 2",
                correct: true,
            }} />);

            let valueList = wrapper.find(Screen).props().screenValue;

            expect(valueList.last().getValue()).to.be.eql("2 + 2");
            expect(valueList.value.cursor).to.be.false;
        });

        it("render the button with amount responses", () => {
            wrapper = mount(<Keyboard responses={[{
                id: "2",
                value: "3 - 1",
                tex: "3 - 1",
            },{
                id: "3",
                value: "3 - 1",
                tex: "3 - 1",
            }
            ]} />);

            let btn = wrapper.find("button").first();
            expect(btn.text()).to.be.eql("2");
        });

        it("returns four keys columns from default keyboard", () => {
            expect(defaultKeyboard).to.be.ofSize(5);
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

    context("when click a button", () => {
        it("changes the current value", () => {
            wrapper.find(Key).at(0).find("button").simulate("click");
            let valueList = wrapper.find(Component).children().state("valueList");
            let value = new Value("1");
            value.toggleCursor();

            expect(valueList.value).to.deep.equal(value);
        });

        it("handle on change value", () => {
            let spy = sinon.spy();
            wrapper = mount(<Keyboard onChange={spy} />);
            wrapper.find(Key).at(0).find("button").simulate("click");
            wrapper.find(Key).at(0).find("button").simulate("click");

            expect(spy.withArgs({
                value: "1",
                value_tex: "1",
            }).calledOnce).to.true;

            expect(spy.withArgs({
                value: "11",
                value_tex: "11",
            }).calledOnce).to.true;
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

        it("clear the values", () => {
            wrapper.find(Key).at(0).find("button").simulate("click");
            wrapper.find(Key).at(1).find("button").simulate("click");
            wrapper.find("#clear").simulate("click");

            let valueList = wrapper.find(Component).children().state("valueList");
            let value = new Value("");
            value.toggleCursor();

            expect(valueList.last()).to.deep.equal(value);
        });
    });
});
