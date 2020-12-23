import { shallow }  from "enzyme";
import toJSON from "enzyme-to-json";

import Button from "./Button";


test("matches snapshot", () => {
    const wrapper = shallow(<Button />);

    expect(toJSON(wrapper)).toMatchSnapshot();
})

