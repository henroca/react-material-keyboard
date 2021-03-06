import React from "react";
import Key from "../Key";

export class MapKeys {
    constructor() {
        this.map = new Map();
    }

    setCallback(callback) {
        this.callback = callback;
    }

    get(key) {
        return this.map.get(key);
    }

    set(key, val) {
        return this.map.set(key, val);
    }

    getComponent(text, value) {
        return { text, value };
    }

    getValueComp(text, value) {
        return (
            <Key key={text + value} text={text} value={value} onClick={this.callback} />
        );
    }

    init() {
        this.map.forEach(({ text, value }, key) => {
            this.set(key, this.getValueComp(text, value));
        });
    }

    setMap() {
        this.setNumbersButtons();
        this.set("=", this.getComponent("=", "="));
        this.set(",", this.getComponent(",", ","));
        this.set("+", this.getComponent("+", "+"));
        this.set("-", this.getComponent("-", "-"));
        this.set("*", this.getComponent("*", "*"));
        this.set("/", this.getComponent("\\frac{x}{y}", "/"));
        this.set("(", this.getComponent("(", "("));
        this.set(")", this.getComponent(")", ")"));
        this.set("^", this.getComponent("x^y", "^"));
        this.set("sqrt", this.getComponent("\\sqrt[y]{x}", "sqrt"));
    }

    setNumbersButtons() {
        for (let index = 0; index <= 9; index++) {
            this.set(
                index.toString(),
                this.getComponent(index.toString(), index.toString())
            );
        }
    }
}

export default new MapKeys();
