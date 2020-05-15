import React from 'react';
import ReactDom from 'react-dom';
import Child from '../component/Child';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
// import { isTSAnyKeyword } from '@babel/types';

afterEach(cleanup);
const defaultAge = 0;

test ("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Child age={defaultAge} error={null} />, div);
    ReactDom.unmountComponentAtNode(div);
});

// test ("renders button correctly", () => {
//     const {getByTestId} = render(<Child/>);
//     expect(getByTestId('button1')).toHaveTextContent('Increment');
// });

// test ("renders button correctly", () => {
//     const {getByTestId} = render(<Child/>);
//     expect(getByTestId('button2')).toHaveTextContent('Decrement');
// });

// test ("matches snapshot", () => {
//     const tree = renderer.create(<Child/>).toJSON;
//     expect(tree).toMatchSnapshot();
// });
