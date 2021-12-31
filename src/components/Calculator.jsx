import React, { Component } from 'react';
import Display from './Display'
import NumButton from './NumButton'

class Calculator extends React.Component {


    render() {

        return (
            <div>
                <Display val="0"/>
                <NumButton digit="1" />
                <NumButton digit="2" />
                <NumButton digit="3" />
                <NumButton digit="+" />
                <br />
                <NumButton digit="4" />
                <NumButton digit="5" />
                <NumButton digit="6" />
                <NumButton digit="-" />
                <br />
                <NumButton digit="7" />
                <NumButton digit="8" />
                <NumButton digit="9" />
                <NumButton digit="*" />
                <br />
                <NumButton digit="C" />
                <NumButton digit="0" />
                <NumButton digit="CE" />
                <NumButton digit="/" />
            </div>
        )
    }

}

export default Calculator
