import { render, screen } from '@testing-library/react';
import { shallow }  from "enzyme";
import toJSON from "enzyme-to-json";
import App from './App';


test('properly renders rooms cards', () => {
  render(<App />);
});


test("matches snapshot", () => {
  const wrapper = shallow(<App />);

  expect(toJSON(wrapper)).toMatchSnapshot();
})


