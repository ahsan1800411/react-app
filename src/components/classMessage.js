import React, { Component } from 'react';

export default class ClassMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Welcome Guest',
    };
  }

  changeMessage = () => {
    this.setState({
      message: 'Welcome Ahsan',
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: 'tomato' }}>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}
