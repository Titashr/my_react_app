import React from 'react';

const withAddedFunctionality = (WrappedComponent) => {
    class HigherOrderComponent extends React.Component {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    greeting='Hello' />
            );
        }
    }
    return HigherOrderComponent;
};

export default withAddedFunctionality;