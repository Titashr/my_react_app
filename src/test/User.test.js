import React from 'react';
import { mount } from 'enzyme';
import { wrapper, storeFactory } from '../utils/testUtil';
import moxios from 'moxios';
// import ageReducer from './../reducers/AgeReducer';
// import userReducer from './../reducers/UserReducer';
import User from '../component/User';
import * as actions from "../actions/Actions";
import * as actionTypes from "../actions/ActionTypes";

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

const mountUp = (props = defaultProps, state = initialState) => {
    const store = storeFactory(state);
    const wrapper = mount(<User {...props} store={store} />);
    return wrapper;
};

describe('element checking', () => {
    let shallowWrapper;
    beforeEach(() => { shallowWrapper = mountUp(); });

    test('renders correctly', () => {
        const user = wrapper(shallowWrapper, 'userDiv');
        expect(user.length).toBe(1);
    });
})

describe('testing async functionality', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => { moxios.uninstall(); });

    const store = storeFactory(initialState);
    test('api call check', () => {
        const expectedState = {
            results: [{
                name: {
                    first: 'Titash', last: 'Roy'
                },
                gender: 'male',
                email: 'titash.roy@outlook.com',
                phone: 9503566677,
                picture: {
                    large: 'C:/Project/my_react_app/naruto.jpg'
                }
            }
            ]
        };

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });
        return store.dispatch(actions.get_user())
            .then(() => {
                const newState = store.getState();
                // console.log(newState);
                expect(newState.UserReducer.person).toBe(expectedState.results[0]);
            });
    });
})