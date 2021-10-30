import React, { Component } from 'react';

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
        };
      });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseCount}>Increment</button>
        <button onClick={this.incrementFive}>Increment 5</button>
      </div>
    );
  }
}
