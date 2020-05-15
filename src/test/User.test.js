import React from 'react';
import { mount } from 'enzyme';
import { wrapper, storeFactory } from '../utils/testUtil';
// import ageReducer from './../reducers/AgeReducer';
// import userReducer from './../reducers/UserReducer';
import  User from '../component/User';
import { User as UserComponent} from './../component/User';

const defaultProps = { age: 0 };

const initialState = {
    AgeReducer: null,
    UserReducer: null
};

// const setUp = (props = {}, state = {}) => {
//     const wrapper = mount(<UserComponent {...props} {...state} />);
//     return wrapper;
// };

const mountUp = (props = defaultProps, state = initialState) => {
    const store = storeFactory(state); 
    const wrapper = mount(<User {...props} store={store} />);
    return wrapper;
};

describe('element checking', ()=> {
    let shallowWrapper;
    beforeEach(() => shallowWrapper = mountUp());

    test('renders correctly', () => {
        // shallowWrapper.exists();
        // const user = wrapper(shallowWrapper, 'UserDiv');
        // expect(user).toBe(1);
        // expect(shallowWrapper).toBeTruthy();
        // ;
    });
})