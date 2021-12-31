import React, {Component} from "react"
import "../styles/main.css"

class NumButton extends React.Component {

    constructor() {

        super();

        this.state = {
            val: 0
        }

    }

    render() {

        return(

                <button className="numbutton">
                    {this.props.digit}
                </button>


        )

    }

}

export default NumButton