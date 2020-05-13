import { actionTypes } from './ActionTypes';

export function increment_age() {
    return actionTypes.increase_age;
};

export function decrement_age() {
    return actionTypes.decrease_age;
};

export function invalid() {
    return actionTypes.invalid_age;
};
