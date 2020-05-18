import React from 'react';
import { mount, shallow } from 'enzyme';
import SecondChild, { SecondChild as SecChild } from '../component/SecondChild';
import { wrapper, storeFactory } from '../utils/testUtil';
import * as actions from '../actions/Actions';

const defaultProps = { age: 0 };

const initialState = {
    AgeReducer: {
        age: null,
        error: null
    },
    UserReducer: {
        person: {}
    }
};

const setUp = (initialState) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<SecondChild store={store} />).dive().dive();
    return wrapper;
};

const mountUp = (props = defaultProps, state = initialState) => {
    const store = storeFactory(state);
    const wrapper = mount(<SecondChild {...props} store={store} />);
    return wrapper;
};

describe('performs element checking', () => {
    let shallowWrapper;
    beforeEach(() => { shallowWrapper = mountUp() }
    );
    test('renders correctly', () => {
        shallowWrapper.exists();
        expect(shallowWrapper).toBeTruthy();
    });

    test('renders increment button', () => {
        const incrementButton = wrapper(shallowWrapper, 'button1');
        expect(incrementButton.getDOMNode()).toHaveTextContent('Increment');
    });

    test('renders decrement button', () => {
        const decrementButton = wrapper(shallowWrapper, 'button2');
        expect(decrementButton.getDOMNode()).toHaveTextContent('Decrement');
    });

    test('renders counter', () => {
        const counter = wrapper(shallowWrapper, 'counter');
        expect(counter.length).toBe(1);
    });

});

describe('checking functionality', () => {
    let store;
    beforeEach(() => { store = storeFactory(initialState) });
    test('check increment click', () => {
        store.dispatch(actions.increment_age(0));
        const newState = store.getState();
        const expectedState = {
            ...initialState, AgeReducer: {
                age: 1,
                error: null
            }
        }
        expect(newState).toEqual(expectedState);
    });
    test('check decrement click', () => {
        store.dispatch(actions.decrement_age(2));
        const newState = store.getState();
        const expectedState = {
            ...initialState, AgeReducer: {
                age: 1,
                error: null
            }
        }
        expect(newState).toEqual(expectedState);
    });
    test('check invalid', () => {
        store.dispatch(actions.invalid());
        const newState = store.getState();
        const expectedState = {
            ...initialState, AgeReducer: {
                age: null,
                error: "Age can't be smaller than 0"
            }
        }
        expect(newState).toEqual(expectedState);
    });
});

describe('checking redux props', () => {
    const expectedState = {
        AgeReducer: {
            age: 2,
            error: null
        },
        UserReducer: {
            person: {}
        }
    };
    test('testing class props', () => {
        const shallowWrapper = setUp(expectedState);
        const ageProps = shallowWrapper.instance().props.age;
        expect(ageProps).toBe(expectedState.AgeReducer.age);
    });

    test('testing action creator', () => {
        const shallowWrapper = setUp();
        const incrementActionCreator = shallowWrapper.instance().props.increment;
        const decrementActionCreator = shallowWrapper.instance().props.decrement;
        expect(incrementActionCreator).toBeInstanceOf(Function);
        expect(decrementActionCreator).toBeInstanceOf(Function);
    });
})

describe('mocking button click', () => {
    let mockButton;
    let shallowWrapper;
    let counterBox;
    beforeEach(() => {
        mockButton = jest.fn();
        shallowWrapper = mount(<SecChild increment={mockButton} />);
        shallowWrapper.setState({ age: 4 });
        counterBox = wrapper(shallowWrapper, 'counter');
    });
    test('testing input area', () => {
        const incrementButton = wrapper(shallowWrapper, 'button1');
        incrementButton.simulate('click');
        const getMockCount = mockButton.mock.calls.length;
        expect(counterBox.getDOMNode()).toHaveTextContent(mockButton.mock.calls[0][0]);
        expect(getMockCount).toBe(1);
    });
})