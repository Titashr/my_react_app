import { actionTypes } from './ActionTypes';

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
    return { type: actionTypes.invalid_age};
};
