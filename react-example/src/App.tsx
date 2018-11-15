import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component <{}, {count:number}>{
  constructor(props:{}) {
    super(props);
    this.state = {
      count:0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e:React.MouseEvent<HTMLButtonElement>){
    this.setState({count:this.state.count+1})
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={(e)=>this.handleClick(e)}>Count</button>
          <h1>{this.state.count}</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
