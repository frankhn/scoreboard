import "../../../enzyme.config";
import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import Counter from "../../components/Counter";

const changerScore = jest.fn();
const props = {
  index: 0,
  score: 2,
  changerScore
};
const component = shallow(<Counter {...props} />);
const instance = component.instance();

afterEach(() => {
  changerScore.mockClear();
});
describe("Render counter", () => {
  test("should render counter component to match the snapshot", () => {
    expect(toJson(component)).toMatchSnapshot();
  });

  test("should call changerScore function", () => {
    component
      .find(`[id="decrement"]`)
      .at(0)
      .simulate("click");
    expect(changerScore).toHaveBeenCalled();
    console.log("====== =======", component.props);
    // expect(component.props.changerScore).toHaveBeenCalled();
  });
});
