import React from 'react';
import { mount } from 'enzyme';
import SecondChild from '../component/SecondChild';
import { wrapper, storeFactory } from '../utils/testUtil';
import * as actions from '../actions/Actions';
import reducers from "./../reducers/index";
// import ageReducer from './../reducers/AgeReducer';
// import userReducer from './../reducers/UserReducer';

const defaultProps = { age: 0 };

const initialState = {
    AgeReducer: {
        age: null,
        error: null
    },
    UserReducer: {
        person:{}
    }
};

const mountUp = (props = defaultProps, state=initialState) => {
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
        ;
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
    beforeEach(() => {store=storeFactory(initialState)});
    test('check increment click', () => {
        store.dispatch(actions.increment_age(0));
        const newState = store.getState();
        const expectedState = {
            ...initialState, AgeReducer:{
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
            ...initialState, AgeReducer:{
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
            ...initialState, AgeReducer:{
                age: null,
                error: "Age can't be smaller than 0"
            }
        }
        expect(newState).toEqual(expectedState);
    });
})