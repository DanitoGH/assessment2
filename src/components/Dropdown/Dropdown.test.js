import { render } from '@testing-library/react';
import { shallow }  from "enzyme";
import toJSON from "enzyme-to-json";

import Dropdown from './Dropdown';


test('properly renders dropdown component', () => {
  render(<Dropdown />);
})

test("matches snapshot", () => {
  const wrapper = shallow(<Dropdown />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
