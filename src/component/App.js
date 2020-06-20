import React from 'react';
import Parent from './Parent';
// import User from './User';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        age: 0
    };
  }
  render() {
    return (
      <div>
        <Parent
          age={this.state.age}
        />
        {/* <User/> */}
      </div>
    );
  }
}

