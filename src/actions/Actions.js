import { actionTypes, userActionTypes } from './ActionTypes';
import axios from 'axios';

export function increment_age(val) {
    return {
        type: actionTypes.increase_age,
        payload: val
    };
};

export function decrement_age(val) {
    return {
        type: actionTypes.decrease_age,
        payload: val
    };
};

export function invalid() {
    return { type: actionTypes.invalid_age };
};

export function get_user_details(val) {
    return {
        type: userActionTypes.getUser,
        payload: val
    };
};

export function get_user() {
    return (dispatch) => {
        return axios.get(`https://randomuser.me/api/`)
        .then(res => {
            const person = res.data.results[0];
            // console.log(person);
            dispatch(get_user_details(person));
        });
    }
};