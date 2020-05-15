import { checkPropTypes } from 'prop-types';
import { createStore, applyMiddleware } from "redux";
import rootReducer from './../reducers/index';
import thunk from 'redux-thunk';

export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export const wrapper = (wrapperInput, value) => {
    return (wrapperInput.find(`[data-testid='${value}']`));
};

export const propChecking = (component, expectedProp) => {
    return checkPropTypes(component.propTypes, expectedProp, 'prop', component.name);
}