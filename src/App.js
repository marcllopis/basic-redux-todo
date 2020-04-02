import React, { Component } from 'react';
import { increaseCounter, decreaseCounter } from './actions'
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  increment = () => {
    this.props.dispatch(increaseCounter(this.props.count))
  }

  decrease = () => {
    this.props.dispatch(decreaseCounter(this.props.count))
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>App with Redux ?</h1>
        <h2>{this.props.hello}</h2>
        <div>
          <p>Counter value: {this.props.count}</p>
          <button onClick={this.decrease}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    count: state.count,
    hello: state.hello
  }
}



export default connect(mapStateToProps)(App);
