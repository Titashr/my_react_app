import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Child from '../component/Child';
// import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new EnzymeAdapter()});

test('renders correctly', () => {
    const shallowWrapper = shallow(<Child/>);
    // const deepWrapper = mount(<Child/>);
    shallowWrapper.exists();
    expect(shallowWrapper).toBeTruthy();
    ;
});

test('renders increment counter', () => {
    const shallowWrapper = mount(<Child/>);
    const incrementButton = shallowWrapper.find('#button1');
    console.log(incrementButton.debug());
    expect(incrementButton.length).toBe(0);
    // expect(incrementButton.toHaveTextContent('Increment'));
});

test('check the counter', () => {

});
