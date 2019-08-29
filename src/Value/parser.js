import ValueList from "./ValueList";
import Fraction from "./Fraction";
import Exponent from "./Exponent";
import Root from "./Root";
import Value from "./Value";

const isSqrt = (string, i) => string.charAt(i + 1) === "q" &&
    string.charAt(i + 2) === "r" &&
    string.charAt(i + 3) === "t";


export const parser = (string, mapEvents) => {
    let valueList = new ValueList(new Value(""));

    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);

        switch (char) {
        case " ":
            break;
        case "/":
            i++;
            break;
        case ")":
        case ",":
        case "]":
            valueList.nextValue();
            break;
        case "[":
            valueList.addValue(new Fraction());
            break;
        case "^":
            valueList.addValue(new Exponent());
            i++;
            break;
        case "s":
            if (isSqrt(string, i)) {
                valueList.addValue(new Root());
                i += 4;
                break;
            }

            valueList.addValue(mapEvents.get(char)());
            break;
        case ".":
            char = ",";
            valueList.addValue(mapEvents.get(char)());
            break;
        default:
            valueList.addValue(mapEvents.get(char)());
            break;
        }
    }

    return valueList;
};
