import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import chai from "chai";
import assertArrays from "chai-arrays";
import { init } from "./Keyboard/appContext";
import contextConfig from "./Keyboard/contextConfig";

init(contextConfig);

chai.use(assertArrays);

configure({ adapter: new Adapter() });
