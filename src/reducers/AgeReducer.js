import { actionTypes } from '../actions/ActionTypes';

const initialState = {
    age: 0,
    error: null
};

const ageReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.increase_age:
            newState = {...state, age:state.age+1, error:null};
            break;
        case actionTypes.decrease_age:
            newState = {...state, age:state.age-1, error:null};
            break;
        case actionTypes.invalid_age:
            newState = {...state, error:"Age can't be smaller than 0"};
            break;
        default:
            newState = {...state};
            break;
    }
    return newState;
};

export default ageReducer;