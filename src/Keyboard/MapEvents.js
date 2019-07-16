import Value from "../Value/Value";
import Fraction from "../Value/Fraction";
import Dot from "../Value/Dot";
import Operator from "../Value/Operator";

class MapEvents {
    constructor() {
        this.map = new Map();
    }

    set(key, callback) {
        this.map.set(key, callback);
    }

    get(key) {
        return this.map.get(key);
    }

    setMap() {
        this.setNumbersButtons();
        this.set("=", (value) => (new Operator("=", value)));
        this.set(",", (value) => (new Dot(value)));
        this.set("+", (value) => (new Operator("+", value)));
        this.set("-", (value) => (new Operator("-", value)));
        this.set("*", (value) => (new Operator("*", value)));
        this.set("/", (value) => (new Fraction(value)));
        this.set("(", (value) => (new Value("(", value)));
        this.set(")", (value) => (new Value(")", value)));
    }

    setNumbersButtons() {
        for (let index = 0; index <= 9; index++) {
            this.set(
                index.toString(),
                (value) => (new Value(index.toString(), value))
            );
        }
    }
}

export default new MapEvents();
