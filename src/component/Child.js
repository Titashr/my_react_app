// Link.react.js
import React from 'react';
import '../styles/Button.scss';

export default class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    _increaseAge = () => {
        this.setState({ age: this.state.age + 1 });
    }

    _decreaseAge = () => {
        this.setState({ age: this.state.age - 1 });
    }

    render() {
        return (
            <div>
                HI
                <div>
                  {this.state.age}  
                </div>
                <button
                    data-testid = "button1"
                    className='button-hover'
                    onClick = {this._increaseAge}
                >
                    Increment
                </button>
                <button
                    data-testid = "button2"
                    className='button-hover'
                    onClick = {this._decreaseAge}
                >
                    Decrement
                </button>
            </div>
        );
    }
}