import React from 'react';
import { connect } from 'react-redux';
import '../styles/Button.scss';
import * as actions from '../actions/Actions';

export class SecondChild extends React.Component {

    _decreaseAge = () => {
        if (this.props.age > 0) {
            this.props.decrement();
        } else {
            this.props.invalid_age();
        }
    }

    render() {
        return (
            <div>
                <h1 data-testid="error">
                    {this.props.error}
                </h1>
                <div data-testid="counter" className='text-area'>
                    {this.props.age}
                </div>
                <button
                    data-testid="button1"
                    className='button-hover'
                    onClick={this.props.increment}
                >
                    Increment
                </button>
                <button
                    data-testid="button2"
                    className='button-hover'
                    onClick={this._decreaseAge}
                >
                    Decrement
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.age,
        error: state.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type:actions.increment_age()}),
        decrement: () => dispatch({ type:actions.decrement_age()}),
        invalid_age: () => dispatch({ type:actions.invalid()})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondChild);