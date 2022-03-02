import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

/*
 Configuring the enzyme with new instance 
 Enzyme adapter for keep track of react componenets
 */
Enzyme.configure({ adapter: new EnzymeAdapter() });

// test("renders without crashing and non-empty component", () => {
//   /*Shallow is method that reenders the components
//   one level deep
//   */
//   const wrapper = shallow(<App />);
//   /*debug is the method we used to see the
//   skeleton of the component we are shallow
//   rendering
//   */
//   console.log(wrapper.debug());
//   /*
//   Jest assertions are a basically the output we expect
//    from the test we are run
//   for ex:I Expect App Component to be non Empty
// */

//   /*
// exist() which check the component have nodes and return boolean
// toBe () which where we pass the value what we are expecting
//  */
//   expect(wrapper.exists()).toBe(true);
// });

/** factory function to create ShallowWrapper for the appComponent
    @function setup 
    @returns {ShallowWrapper}
   */
const setup = () => shallow(<App />);

const testByAttr = (wrapper, attrVal) =>
  wrapper.find(`[data-test='${attrVal}']`);

test("renders the component without any errors ", () => {
  const wrapper = setup();
  const appComponent = testByAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});
test("renders the counter display", () => {
  const wrapper = setup();
  const counterDisplay = testByAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});
test("render the increment button without errors", () => {
  const wrapper = setup();
  const incrementButton = testByAttr(wrapper, "increment-button");
  expect(incrementButton.length).toBe(1);
});
test("render the decrement button without errors", () => {
  const wrapper = setup();
  const decrementButton = testByAttr(wrapper, "decrement-button");
  expect(decrementButton.length).toBe(1);
});
test("Counter  display starts at 0", () => {
  const wrapper = setup();
  const intialValue = testByAttr(wrapper, "count").text();
  expect(intialValue).toBe("0");
});
test("clicking on decrement button counter is zero check for error message", () => {
  const wrapper = setup();
  const decrementButton = testByAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const Value = testByAttr(wrapper, "count").text();
  expect(Value).toBe("0");
  const errorMessage = testByAttr(wrapper, "error-message").text();
  expect(errorMessage).toBe("you can't decrease the count less than zero");
});
test("clicking on increment button increase the counter display", () => {
  const wrapper = setup();
  /**
   * to make the button click automated {Shallow Wrapper}
   * provides the method called simulate(event,[..args])
   **/
  console.log(wrapper.debug());
  const errorMessage = testByAttr(wrapper, "error-message");
  expect(errorMessage.length).toBe(0);
  const incrementButton = testByAttr(wrapper, "increment-button");
  incrementButton.simulate("click");
  const intialValue = testByAttr(wrapper, "count").text();
  expect(intialValue).toBe("1");
});
test("clicking on decrement button decrease the counter display", () => {
  const wrapper = setup();
  /**
   * to make the button click automated {Shallow Wrapper}
   * provides the method called simulate(event,[..args])
   **/
  const decrementButton = testByAttr(wrapper, "decrement-button");
  decrementButton.simulate("click");
  const value = testByAttr(wrapper, "count").text();
  expect(value).toBe("0");
});
