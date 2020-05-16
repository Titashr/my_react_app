import  * as actionTypes  from "../actions/ActionTypes";
import * as actions from "../actions/Actions";

describe('checks for the actions', () => {
    test('renders invalid age button', () => {
        const increment = actions.invalid();
        expect(increment).toEqual({type: actionTypes.actionTypes.invalid_age});
    });
    test('renders increment button', () => {
        const increment = actions.increment_age(12);
        expect(increment).toEqual({type: actionTypes.actionTypes.increase_age,
        payload: 12});
    });
    test('renders increment button', () => {
        const increment = actions.decrement_age(12);
        expect(increment).toEqual({type: actionTypes.actionTypes.decrease_age,
        payload: 12});
    });
});
