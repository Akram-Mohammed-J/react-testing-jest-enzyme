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

test("renders the component without any errors ", () => {
  const wrapper = shallow(<App />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toBe(1);
});
test("renders the counter display", () => {});
test("render the increment button without errors", () => {});
test("Counter  display starts at 0", () => {});
test("clicking on increment button increase the counter display", () => {});
