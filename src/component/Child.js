// Link.react.js
import React from 'react';
import '../styles/Button.scss';
import PropTypes from 'prop-types';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            error: null
        };
    }

    _increaseAge = () => {
        this.setState({
            age: this.state.age + 1,
            error: null
        });
    }

    _decreaseAge = () => {
        if (this.state.age > 0) {
            this.setState({ age: this.state.age - 1 });
        } else {
            this.setState({ error: "Can't decrease age below 0" });
        }
    }

    render() {
        return (
            <div>
                <h1 data-testid="error">
                    {this.state.error}
                </h1>
                <div data-testid="counter" className='text-area'>
                    {this.state.age}
                </div>
                <button
                    data-testid="button1"
                    className='button-hover'
                    onClick={this._increaseAge}
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

Child.propTypes = {
    age: PropTypes.number.isRequired
};