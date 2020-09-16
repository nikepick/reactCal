import React, { Component } from 'react'

export class NumberPad extends Component {
    render() {
        return (
            <div className="container" >
                <div style={containerMargin}>
                    <div className="row">
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "1")}>1</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "2")}>2</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "3")}>3</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "+")}>+</button>
                        <span style={gapMaker}></span>
                    </div>

                    <br></br>

                    <div className="row">
                        <span style={gapMaker}></span>
                        <button
                            className="col"
                            style={btnStyle}
                            onClick={this.props.getChar.bind(this, "4")}>4</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "5")}>5</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "6")}>6</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "-")}>-</button>
                        <span style={gapMaker}></span>
                    </div>

                    <br></br>

                    <div className="row">
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "7")}>7</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "8")}>8</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "9")}>9</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "/")}>/</button>
                        <span style={gapMaker}></span>
                    </div>

                    <br></br>

                    <div className="row">
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "c")}>c</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "0")}>0</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "=")}>=</button>
                        <span style={gapMaker}></span>
                        <button className="col" style={btnStyle}
                        onClick={this.props.getChar.bind(this, "x")}>x</button>
                        <span style={gapMaker}></span>
                    </div>
                </div>
            </div>


        )
    }
}

const btnStyle = {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid red',
    borderRadius: '5px'
}
const gapMaker = {
    backgroundColor: 'transparent',
    width: '10px'
}
const containerMargin = {
    margin: '10px 10px 10xp 10px'
}

export default NumberPad
