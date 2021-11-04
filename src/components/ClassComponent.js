import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: '',
    };
  }

  componentDidMount() {
    console.log('Mounting');
    document.title = `You clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Updating');
      document.title = `You clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <input
          type='text'
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click me
        </button>
      </div>
    );
  }
}
