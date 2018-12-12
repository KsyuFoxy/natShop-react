import React, { Component } from 'react';
import './Counter.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      incrementDisabled: false,
      decrementDisabled: true,
    }
  }

  increment() {
    this.setState({counter: this.state.counter+1})
    if (this.state.counter < 5) {
      this.setState({incrementDisabled: false});
      this.setState({decrementDisabled: false});
    } else {
      this.setState({incrementDisabled: true});
    }
  }

  decrement() {
    this.setState({counter: this.state.counter-1})
    if (this.state.counter > 2) {
      this.setState({incrementDisabled: false});
      this.setState({decrementDisabled: false});
    } else {
      this.setState({decrementDisabled: true});
    }
  }

  render() {
    let incrementButton = 'button';
    let decrementButton = 'button';
    if (this.state.incrementDisabled) {
      incrementButton += ' disabled';
    }
    if (this.state.decrementDisabled) {
      decrementButton += ' disabled';
    }

    return (
      <div className='counter-content'>
        <div>{this.state.counter}</div>
        <div className='counter-buttons'>
          <button className={incrementButton} onClick={this.increment.bind(this)}>+</button>
          <button className={decrementButton} onClick={this.decrement.bind(this)}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
