import React from "react";
import Key from "../Key";

export default class MapKeys {
    constructor(callback) {
        this.callback = callback;
        this.map = new Map();
        this.setMap();
    }

    get(key) {
        return this.map.get(key);
    }

    set(key, val) {
        return this.map.set(key, val);
    }

    getComponent(text, value) {
        return (
            <Key key={text + value} text={text} value={value} onClick={this.callback} />
        );
    }

    setMap() {
        this.setNumbersButtons();
        this.set("=", this.getComponent("=", "="));
        this.set(",", this.getComponent(",", ","));
        this.set("+", this.getComponent("+", "+"));
        this.set("-", this.getComponent("-", "-"));
        this.set("*", this.getComponent("*", "*"));
        this.set("/", this.getComponent("/", "/"));
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
