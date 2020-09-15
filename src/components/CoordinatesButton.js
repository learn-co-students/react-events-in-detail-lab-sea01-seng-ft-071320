// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    render() {
        return (
            <button onClick={this.handleClick}>Coordinate</button>
        )
    }

    handleClick = (event) => { this.props.onReceiveCoordinates([event.clientX, event.clientY]) }
}