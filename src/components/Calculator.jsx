import React, { Component } from 'react';
import Display from './Display'
import NumButton from './NumButton'

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            result: "0",
            lastval: 0,
            lastop: ""
        }

        this.clickHandler = this.clickHandler.bind(this);

    }

    clickHandler(key) {

        if(key === "C" || key === "CE")
        {
            this.setState({
                result: "0"
            })
        }
        else if (key === "+" || key === "-" || key === "x" || key === "/") {
            this.setState({
                lastop: key,
                lastval: this.state.result,
                result: "0"
            }) 
        }
        else if (key === "=") {
            if(this.state.lastop === "+")
            {
                this.setState({
                    result: parseFloat(this.state.lastval) + parseFloat(this.state.result)
                }) 
            } else if (this.state.lastop === "-")
            {
                this.setState({
                    result: parseFloat(this.state.lastval) - parseFloat(this.state.result)
                }) 
            } else if (this.state.lastop === "x")
            {
                this.setState({
                    result: parseFloat(this.state.lastval) * parseFloat(this.state.result)
                }) 
            } else if (this.state.lastop === "/")
            {
                if(this.state.result === "0")
                {
                    this.setState({
                        result: "?Error"
                    }) 
                } else {

                    this.setState({
                        result: parseFloat(this.state.lastval) / parseFloat(this.state.result)
                    }) 
                }
                
            }
            
        }
        else {
            if(this.state.result === "0") {
                this.setState({
                    result: key
                })
            }
            else {

                if( (key === "." && this.state.result.indexOf(".") === -1) || key != ".") {

                        this.setState({
                            result: this.state.result + key
                        })
                }

                
            }
            
        }

        
    }

    render() {

        return (
            <div>
                <Display val={this.state.result}/>
                <NumButton digit="%" />
                <NumButton digit="CE" handler={this.clickHandler}/>
                <NumButton digit="C" handler={this.clickHandler}/>
                <NumButton digit="/" handler={this.clickHandler}/>
                <br />
                <NumButton digit="7" handler={this.clickHandler}/>
                <NumButton digit="8" handler={this.clickHandler}/>
                <NumButton digit="9" handler={this.clickHandler}/>
                <NumButton digit="x" handler={this.clickHandler}/>
                <br />
                <NumButton digit="4" handler={this.clickHandler}/>
                <NumButton digit="5" handler={this.clickHandler}/>
                <NumButton digit="6" handler={this.clickHandler}/>
                <NumButton digit="+" handler={this.clickHandler}/>
                <br />
                <NumButton digit="1" handler={this.clickHandler}/>
                <NumButton digit="2" handler={this.clickHandler}/>
                <NumButton digit="3" handler={this.clickHandler}/>
                <NumButton digit="-" handler={this.clickHandler}/>
                <br />
                <NumButton digit="+/-" />
                <NumButton digit="0" handler={this.clickHandler}/>
                <NumButton digit="." handler={this.clickHandler}/>
                <NumButton digit="=" handler={this.clickHandler}/>
            </div>
        )
    }

}

export default Calculator
