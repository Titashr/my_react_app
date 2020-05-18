import { userActionTypes } from '../actions/ActionTypes';

const initialState = {
    person: null
};

const userReducer = (state = initialState, action) => {
    let newState;
    const { type, payload } = action;
    switch (type) {
        case userActionTypes.getUser:
            newState = { ...state, person: payload};
            break;
        default:
            newState = { ...state };
            break;
    }
    return newState;
};

export default userReducer;