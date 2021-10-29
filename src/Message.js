import React, { Component } from 'react';

export default class Message extends Component {
  render(props) {
    const { age } = this.props;
    return (
      <div>
        <h1>Hello World</h1>
        {age}
      </div>
    );
  }
}
