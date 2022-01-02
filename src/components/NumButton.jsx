import React from "react"
import "../styles/main.css"
import Button from '@mui/material/Button';

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

                <Button className="numbutton" onClick={this.clickHandler} variant="contained">
                    {this.props.digit}
                </Button>


        )

    }

}

export default NumButton