import * as actions from "../actions/Actions";
import ageReducer from "../reducers/AgeReducer";

const defaultState = {
    age: 0,
    error: null
}

describe('checking reducers', () => {
    test('test increment age', () => {
        const newState = ageReducer(defaultState, actions.increment_age(3));
        expect(newState).toEqual({ age: 4, error: null });
    });
    test('test decrement age', () => {
        const newState = ageReducer(defaultState, actions.decrement_age(3));
        expect(newState).toEqual({ age: 2, error: null });
    });
    test('test invalid age', () => {
        const newState = ageReducer(defaultState, actions.invalid());
        expect(newState).toEqual({ age: defaultState.age, error: "Age can't be smaller than 0" });
    });
})
