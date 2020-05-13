import React from 'react';
import axios from 'axios';

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            person: null
        }
    }
    componentDidMount() {
        axios.get(`https://randomuser.me/api/`)
            .then(res => {
                const person = res.data.results[0].name.first;
                this.setState({ person:person });
            })
    }

    render() {
        return (
            <div>
                {this.state.person}
            </div>
        )
    }
}
