import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/css/styles.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

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
        <Link to='/react-trivia'>
          <button className='Home-btn'>Enter to Play</button>
        </Link>
      </div>
    );
  }
}

export default Home;
