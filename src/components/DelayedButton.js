import React, { Component } from "react";

class DelayedButton extends Component {
  render() {
    return <button onClick={this.handleClick}></button>;
  }

  handleClick = (event) => {
    event.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay, event);
  };
}

export default DelayedButton;
