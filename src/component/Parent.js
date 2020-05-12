import React from 'react';
import Child from './Child';

const Parent = (props) => {
    return (
        <div>
            <Child
                age={props.age} />
        </div>
    );
}

export default Parent;