import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import chai from "chai";
import assertArrays from "chai-arrays";

chai.use(assertArrays);

configure({ adapter: new Adapter() });
