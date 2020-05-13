import { checkPropTypes } from 'prop-types';

export const wrapper = (wrapperInput, value) => {
    return (wrapperInput.find(`[data-testid='${value}']`));
};

export const propChecking = (component, expectedProp) => {
    return checkPropTypes(component.propTypes, expectedProp, 'prop', component.name);
}