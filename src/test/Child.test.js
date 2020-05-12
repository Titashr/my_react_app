import React from 'react';
import ReactDom from 'react-dom';
import Child from '../component/Child';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
// import { isTSAnyKeyword } from '@babel/types';

afterEach(cleanup);

test ("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Child/>, div);
    ReactDom.unmountComponentAtNode(div);
});

// it ("renders button correctly", () => {
//     const {getByTestId} = render(<Child/>);
//     expect(getByTestId('button1')).toHaveTextContent('Increment');
//     // expect(getByTestId("button")
// });

// it ("renders button correctly", () => {
//     const {getByTestId} = render(<Child/>);
//     expect(getByTestId('button2')).toHaveTextContent('Decrement');
//     // expect(getByTestId("button")
// });

// it ("matches snapshot", () => {
//     const tree = renderer.create(<Child/>).toJSON;
//     expect(tree).toMatchSnapshot();
// });
