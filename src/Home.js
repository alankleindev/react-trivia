import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/css/styles.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Home'>
        <h1 className='Home-title'>
          Welcome to <span className='Home-span'>React Trivia</span>
        </h1>
        <button className='Home-btn'>Enter to Play</button>
      </div>
    );
  }
}

export default Home;
