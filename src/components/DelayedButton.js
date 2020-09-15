// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

    render() {
        return (
            <button onClick={this.handeClick}>Delay</button>
        )
    }

    handeClick = (event) => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }

}