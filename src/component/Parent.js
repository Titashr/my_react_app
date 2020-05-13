import React from 'react';
import Child from './Child';
import SecondChild from './SecondChild';

const Parent = (props) => {
    return (
        <div>
            <Child
                age={props.age} />
            <SecondChild/>
        </div>
    );
}

export default Parent;