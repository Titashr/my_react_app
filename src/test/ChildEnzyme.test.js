import React from 'react';
import { shallow, mount } from 'enzyme';
import Child from '../component/Child';
import { wrapper, propChecking } from '../utils/testUtil';

const defaultProps = { age: 0 }

const setUp = (props = {}, state = {}) => {
    const setupProps = { ...defaultProps, ...props };
    const wrapper = shallow(<Child {...setupProps} />);
    if (state) {
        wrapper.setState(state)
    };
    return wrapper;
};
const mountUp = (props = {}, state = null) => {
    const wrapper = mount(<Child {...props} />);
    if (state) {
        wrapper.setState(state)
    };
    return wrapper;
};

test('renders correctly', () => {
    const shallowWrapper = setUp();
    // const deepWrapper = mount(<Child/>);
    shallowWrapper.exists();
    expect(shallowWrapper).toBeTruthy();
    ;
});
describe('checking the elements', () => {
    let shallowWrapper;
    beforeEach (() => {
        shallowWrapper = mountUp();
    })
    test('renders increment button', () => {
        const incrementButton = wrapper(shallowWrapper, 'button1');
        expect(incrementButton.length).toBe(1);
        // console.log(incrementButton.getDOMNode());
        expect(incrementButton.getDOMNode()).toHaveTextContent('Increment');
        // incrementButton.getElement()
    });
    test('renders decrement button', () => {
        const decrementButton = wrapper(shallowWrapper, 'button2');
        expect(decrementButton.getDOMNode()).toHaveTextContent('Decrement');
    });
    test('renders counter', () => {
        const counter = wrapper(shallowWrapper, 'counter');
        expect(counter.length).toBe(1);
    });
    test('renders input area', () => {
        const counter = wrapper(shallowWrapper, 'input');
        expect(counter.length).toBe(1);
    });
});

test('check state', () => {
    const shallowWrapper = setUp({ age: 0 });
    const initialState = shallowWrapper.state('age');
    expect(initialState).toBe(0);
});

test('check increment click', () => {
    const age = 7
    const shallowWrapper = mountUp(null, { age });
    const increment = wrapper(shallowWrapper, 'button1');
    increment.simulate('click');
    const incrementButton = wrapper(shallowWrapper, 'counter');
    expect(incrementButton.text()).toContain(age + 1);
});

test('ceck decrement click', () => {
    const age = 7;
    const shallowWrapper = mountUp(null, { age });
    const decrement = wrapper(shallowWrapper, 'button2');
    decrement.simulate('click');
    const decrementButton = wrapper(shallowWrapper, 'counter');
    expect(decrementButton.getDOMNode()).toHaveTextContent(age - 1);
});

test('propTypes checking', () => {
    const expectedProp = { age: 0 };
    const propError = propChecking(Child, expectedProp);
    expect(propError).toBeUndefined();
})