// Link.react.js
import React from 'react';
import '../styles/Button.scss';
import PropTypes from 'prop-types';
import withAddedFunctionality from '../hoc/HOCforAddedFunc';

export class Child extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            age: this.props.age,
            error: null
        };
    }

    _increaseAge = () => {
        this.setState({
            age: parseInt(this.state.age, 10) + 1,
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

    _enteredAge = (event) => {
        if (event.key === 'Enter') {
            this.setState({age: event.target.value});
            this.myRef.current.blur();
            
        }
    };

    clearInput= (event) => {
        event.target.value = '';
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>{this.props.greeting}</h1>
                <h1 data-testid="error">
                    {this.state.error}
                </h1>
                <div data-testid = "input">
                    Enter a required age
                <input type='text' onKeyPress = {this._enteredAge} ref = {this.myRef} onBlur = {this.clearInput}></input>
                </div>
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

const updatedChild = withAddedFunctionality(Child);
export default updatedChild;