import { actionTypes } from '../actions/ActionTypes';

const initialState = {
    age: 0,
    error: null
};

const ageReducer = (state = initialState, action) => {
    let newState;
    let newValue;
    const { type, payload } = action;
    switch (type) {
        case actionTypes.increase_age:
            newValue = parseInt(payload, 10 ) + 1;
            newState = { ...state, age: newValue, error: null };
            break;
        case actionTypes.decrease_age:
            newValue = payload - 1;
            newState = { ...state, age: newValue, error: null };
            break;
        case actionTypes.invalid_age:
            newState = { ...state, error: "Age can't be smaller than 0" };
            break;
        default:
            newState = { ...state };
            break;
    }
    return newState;
};

export default ageReducer;