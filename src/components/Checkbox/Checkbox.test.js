import { render } from '@testing-library/react';
import { shallow }  from "enzyme";
import toJSON from "enzyme-to-json";

import Checkbox from './Checkbox';


test('properly renders checkbox component', () => {
  render(<Checkbox />);
})

test("matches snapshot", () => {
  const wrapper = shallow(<Checkbox />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
