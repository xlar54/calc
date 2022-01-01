import React, {Component} from "react"
import { Button } from 'react-bootstrap'
import "../styles/main.css"

class NumButton extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            val: 0
        }

    }

    clickHandler = () => {

        this.props.handler(this.props.digit);
    }

    render() {

        return(

                <Button className="numbutton" onClick={this.clickHandler}>
                    {this.props.digit}
                </Button>


        )

    }

}

export default NumButton