import React, { Component } from "react";

class CoordinatesButton extends Component {
  render() {
    return <button onClick={this.handleClick}></button>;
  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };
}

export default CoordinatesButton;
