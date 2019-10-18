import React from "react";
import ReactDOM from "react-dom";
import CardContainer from "./containers/CardContainer.js";
import ScoreContainer from "./containers/ScoreContainer.js";
import Headers from "./components/Headers";
import request from "./components/request";
import data from "./data";
import "./assets/css/styles.css";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './reducers/mainReducer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      data: []
    };
  }

  handleResize(event) {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
    let rows = 0;
    data.forEach(category => {
      if (category.questions.length > rows) {
        rows = category.questions.length;
      }
    });
    this.setState({ data: data, rows: rows, cols: data.length });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    let headerHeight = this.state.windowWidth > 640 ? 60 : 32,
      cardWidth = this.state.windowWidth / this.state.cols,
      cardHeight = (this.state.windowHeight - headerHeight) / this.state.rows,
      cards = [];

    this.state.data.forEach((category, categoryIndex) => {
      let left = categoryIndex * cardWidth;
      category.questions.forEach((question, questionIndex) => {
        cards.push(
          <CardContainer
            left={left}
            top={questionIndex * cardHeight + headerHeight}
            height={cardHeight}
            width={cardWidth}
            question={question}
            key={categoryIndex + "-" + questionIndex}
          />
        );
      });
    });
    return (
      <div>
        <ScoreContainer/>
        <Headers data={this.state.data} headerWidth={cardWidth} />
        {cards}
      </div>
    );
  }
}

let store = createStore(mainReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
