import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Actions';

export class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: {
                    first: null, last: null
                },
                gender: null,
                email: null,
                phone: null,
                picture: {
                    large: null
                }
            }
        }
    }
    componentDidMount() {
        this._getUserData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({ person: nextProps.person });
        }
    }

    _getUserData = () => {
        this.props.getUser();
    }

    render() {
        return (
            <div className='container'>
                <h1 data-testid="error" className='text-center'>
                    {this.state.person.name.first} {this.state.person.name.last}
                </h1>
                <h2 data-testid="error" className='text-center'>
                    {this.state.person.gender}
                </h2>
                <h2 data-testid="error" className='text-center'>
                    {this.state.person.email}
                </h2>
                <h2 data-testid="error" className='text-center'>
                    {this.state.person.phone}
                </h2>
                <div data-testid="error" className='text-center'>
                    <img src = {this.state.person.picture.large} className = 'img-rounded'/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        person: state.UserReducer.person
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => dispatch(actions.get_user())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
