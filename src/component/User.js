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
        this.props.getUser();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            this.setState({ person: nextProps.person });
        }
    }

    render() {
        return (
            <div className='container' data-testid = 'userDiv'>
                <h1 data-testid="userName" className='text-center'>
                    {this.state.person.name.first} {this.state.person.name.last}
                </h1>
                <h2 data-testid="gender" className='text-center'>
                    {this.state.person.gender}
                </h2>
                <h2 data-testid="email" className='text-center'>
                    {this.state.person.email}
                </h2>
                <h2 data-testid="phone" className='text-center'>
                    {this.state.person.phone}
                </h2>
                <div data-testid="image" className='text-center'>
                    <img src = {this.state.person.picture.large} className = 'img-rounded' alt={"LOADING"}/>
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
