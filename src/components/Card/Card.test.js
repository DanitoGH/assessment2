import { render } from '@testing-library/react';
import { shallow }  from "enzyme";
import toJSON from "enzyme-to-json";

import Card from './Card';


test('properly renders card component', () => {
  render(<Card />);
})

test("matches snapshot", () => {
  const wrapper = shallow(<Card />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})
