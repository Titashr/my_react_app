import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Child from '../component/Child';
// import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setUp = (props = {}, state = null) => {
    return (shallow(<Child {...props} />));
}

test('renders correctly', () => {
    const shallowWrapper = shallow(<Child />);
    // const deepWrapper = mount(<Child/>);
    shallowWrapper.exists();
    expect(shallowWrapper).toBeTruthy();
    ;
});

test('renders increment counter', () => {
    const shallowWrapper = mount(<Child />);
    const incrementButton = shallowWrapper.find("[data-testid='button1']");
    expect(incrementButton.length).toBe(1);
    // console.log(incrementButton.getDOMNode());
    expect(incrementButton.getDOMNode()).toHaveTextContent('Increment');
    // incrementButton.getElement()
});

test('check the counter', () => {

});
