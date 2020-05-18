import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Actions';

export class SecondChild extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            age: this.props.age,
            error: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({ age: nextProps.age, error: nextProps.error });
        }
    }

    _decreaseAge = () => {
        if (this.state.age > 0) {
            this.props.decrement(this.state.age);
        } else {
            this.props.invalid_age();
        }
    }

    _increaseAge = () => {
        this.props.increment(this.state.age);
    }

    _enteredAge = (event) => {
        if (event.key === 'Enter') {
            this.setState({ age: event.target.value });
            this.myRef.current.blur();
        }
    }
    clearinput = (event) => {
        event.target.value = '';
    }

    render() {
        return (
            <div>
                <h1 data-testid="error">
                    {this.state.error}
                </h1>
                <div data-testid = "input">
                    Enter a required age
                <input data-testid = "input-box" type= 'text' onKeyPress={this._enteredAge} ref={this.myRef} onBlur={this.clearinput}/>
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

const mapStateToProps = (state) => {
    return {
        age: state.AgeReducer.age,
        error: state.AgeReducer.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (val) => dispatch(actions.increment_age(val)),
        decrement: (val) => dispatch(actions.decrement_age(val)),
        invalid_age: () => dispatch(actions.invalid())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondChild);