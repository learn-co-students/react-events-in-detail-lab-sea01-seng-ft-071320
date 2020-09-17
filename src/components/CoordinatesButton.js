// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

    handleClick = (e) => {
        console.log(e)
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return(
            <button onClick={this.handleClick}>Coordinates</button>

        )
    }
}

export default CoordinatesButton