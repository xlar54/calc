import React from "react"
import "../styles/main.css"

class Display extends React.Component {

    constructor() {

        super();

        this.state = {
            val: 0
        }

    }

    render() {

        return(

            <div className="display">
                <div>
                    {this.props.val}
                </div>
            </div>

        )

    }

}

export default Display