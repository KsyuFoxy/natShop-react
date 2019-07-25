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
    const nextValue = this.state.counter + 1;
    this.setState({counter: nextValue});
    this.updateCounter(nextValue);
    if (this.state.counter < 5) {
      this.setState({incrementDisabled: false});
      this.setState({decrementDisabled: false});
    } else {
      this.setState({incrementDisabled: true});
    }
  }

  decrement() {
    const nextValue = this.state.counter - 1;
    this.setState({counter: nextValue})
    this.updateCounter(nextValue);
    if (this.state.counter > 2) {
      this.setState({incrementDisabled: false});
      this.setState({decrementDisabled: false});
    } else {
      this.setState({decrementDisabled: true});
    }
  }

  updateCounter(nextValue) {
    this.props.onCounterChange(nextValue, this.props.index);
  }

  render() {
    let incrementButton = 'arrow';
    let decrementButton = 'arrow arrow-down';
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
          <div className={incrementButton} onClick={this.increment.bind(this)}></div>
          <div className={decrementButton} onClick={this.decrement.bind(this)}></div>
        </div>
      </div>
    );
  }
}

export default Counter;
