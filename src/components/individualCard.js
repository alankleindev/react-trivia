import React from 'react';

export default (props) => {

    let style = {
        width: props.width + "px",
        height: props.height + "px",
        transform: "translate3d(" + props.left + "px," + props.top + "px,0)",
        WebkitTransform: "translate3d(" + props.left + "px," + props.top + "px,0)"
      },
      front = state.completed ? (
        <img src={reactLogo} />
      ) : (
        <span className="points">{props.question.points}</span>
      ),
      className = "flipper";

    return (
        <div
        style={style}
        className={className}
        onClick={this.clickHandler.bind(this)}
        onTransitionEnd={this.transitionEndHandler.bind(this)}
      >
        <div className="card">
          <div className="front">{front}</div>
          <div className="back">
            <span dangerouslySetInnerHTML={this.getLabelBack()} />
            <img src={reactLogo} alt="" />
          </div>
        </div>
      </div>
    )

}