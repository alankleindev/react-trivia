import React from "react";
import * as audio from "./audio";
import reactLogo from "../assets/img/react.svg";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: "points", completed: false };

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  clickHandler(event) {
    if (this.state.view === "points") {
      audio.play("flip");
      setTimeout(() => {
        if (this.state.view === "question") {
          audio.play("countdown");
        }
      }, 1800);
      this.setState({ view: "question", flipping: true });
    } else if (this.state.view === "question") {
      audio.stop("countdown");
      this.setState({ view: "answer" });
    } else {
      audio.play("flipBack");
      this.setState({ view: "points", completed: true, flipping: true });
    }
  }

  checkAnswer(option) {
    if (option === this.props.question.answer) {
      console.log("got the answer right");
      this.props.onFinish(this.props.question.points);
    } else {
      console.log("got the answer wrong");
    }
  }

  getLabelBack() {
    if (this.state.view === "question") {
      let { options, question } = this.props.question;

      return (
        <div className='Card-QA'>
          <p>{question}</p>
          {options.map((option, index) => (
            <button key={index} onClick={() => this.checkAnswer(option)}> {option} </button>
          ))}
        </div>
      );
    } else {
      return this.props.question.answer;
    }
  }

  // getLabelBack() {
  //   return { __html: this.state.view === "question" ? this.props.question.question : this.props.question.answer };
  // }

  transitionEndHandler(event) {
    if (event.propertyName === "width") {
      this.setState({ flipping: false });
    }
  }

  render() {
    let style = {
        width: this.props.width + "px",
        height: this.props.height + "px",
        transform:
          "translate3d(" + this.props.left + "px," + this.props.top + "px,0)",
        WebkitTransform:
          "translate3d(" + this.props.left + "px," + this.props.top + "px,0)"
      },
      front = this.state.completed ? (
        <img src={reactLogo} alt="" />
      ) : (
        <span className='points'>{this.props.question.points}</span>
      ),
      className = "flipper";

    if (this.state.view !== "points") {
      className = className + " flipped";
    }
    if (this.state.flipping) {
      className = className + " flipping";
    }
    return (
      <div
        style={style}
        className={className}
        onClick={this.clickHandler.bind(this)}
        onTransitionEnd={this.transitionEndHandler.bind(this)}
      >
        <div className='card'>
          <div className='front'>{front}</div>
          <div className='back'>
            {this.getLabelBack()}
            <img src={reactLogo} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
