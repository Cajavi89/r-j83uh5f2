import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      counter:0
    }
    this.contadorInputs = this.contadorInputs.bind(this)
  }

  contadorInputs(e){

    this.setState({
      counter:e.target.value.length
      })
    // console.log(e.target.value.length)
  }

  render() {
    return (
      <div className="container">
        <textarea className="textArea" onChange={this.contadorInputs} rows="3"></textarea>
        <div className="counter">{this.state.counter}</div>
      </div>
    );
  }
}

export default App;
