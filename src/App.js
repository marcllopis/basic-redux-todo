import React, { Component } from 'react';

import Button from './components/Button/Button';
import Number from './components/Number/Number';
import './App.css';


class App extends Component {

  state = {
    counter: 0,
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <Button action={this.increment} buttonText="+" />
        <Button action={this.decrement} buttonText="-" />
        <Number num={this.state.counter} />
      </div>
    );
  }
}


export default App;
