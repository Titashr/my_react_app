import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SecondChild from '../component/SecondChild';
import wrapper from '../utils/testUtil';
// import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// const setUp = (props={}, state = {}) => {
//     const wrapper = shallow(<SecondChild {...props} />);
//     if (state) {
//         wrapper.setState(state);
//     }
//     return wrapper;
// };

// const mountUp = (props = {}, state = {}) => {
//     const wrapper = mount(<SecondChild {...props} />);
//     if(state) {
//         wrapper.setState(state)
//     };
//     return wrapper;
// };

// test('renders correctly', () => {
//     const shallowWrapper = setUp();
//     shallowWrapper.exists();
//     expect(shallowWrapper).toBeTruthy();
//     ;
// });

// test('renders increment button', () => {
//     const shallowWrapper = mountUp();
//     const incrementButton = wrapper(shallowWrapper, 'button1');
//     expect(incrementButton.length).toBe(1);
//     // console.log(incrementButton.getDOMNode());
//     expect(incrementButton.getDOMNode()).toHaveTextContent('Increment');
//     // incrementButton.getElement()
// });

// test('renders decrement button', () => {
//     const shallowWrapper = mountUp();
//     const decrementButton = wrapper(shallowWrapper, 'button2');
//     expect(decrementButton.getDOMNode()).toHaveTextContent('Decrement');
// });

// test('renders counter', () => {
//     const shallowWrapper = mountUp();
//     const counter = wrapper(shallowWrapper, 'counter');
//     expect(counter.length).toBe(1);
// });

// test('check state', () => {
//     const shallowWrapper = setUp({age:0});
//     const initialState = shallowWrapper.state('age');
//     expect(initialState).toBe(0);
// });

// test('check increment click', () => {
//     const age = 7
//     const shallowWrapper = mountUp(null, {age});
//     const increment = wrapper(shallowWrapper, 'button1');
//     increment.simulate('click');
//     const incrementButton = wrapper(shallowWrapper, 'counter');
//     expect(incrementButton.text()).toContain(age + 1);
// });

// test('ceck decrement click', () => {
//     const age = 7;
//     const shallowWrapper = mountUp(null, {age});
//     const decrement = wrapper(shallowWrapper, 'button2');
//     decrement.simulate('click');
//     const decrementButton = wrapper(shallowWrapper, 'counter');
//     expect(decrementButton.getDOMNode()).toHaveTextContent(age - 1);
// });