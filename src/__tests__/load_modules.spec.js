import { expect } from "chai";

describe("Load modules", () => {
    const MaterialKeyboard = require("../index");

    it("load Keyboard", () => {
        expect(MaterialKeyboard.Keyboard).to.not.be.undefined;
    });
});
