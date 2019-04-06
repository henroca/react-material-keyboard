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

export default new MapKeys();
