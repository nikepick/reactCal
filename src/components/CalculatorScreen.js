import React, { Component } from 'react'

export class CalculatorScreen extends Component {

    getChange = (e) => {

    }

    render() {
        return (
            <div style={screenStyle}>
                <div>
                    <input
                        onChange={this.getChange}
                        style={inputStyle}
                        type="text"
                        value={this.props.line1}
                        placeholder="first number">
                    </input>
                </div>
                <div>
                    <input
                        onChange={this.getChange}
                        style={inputStyle}
                        type="text"
                        value={this.props.line2}
                        placeholder="symbol">
                    </input>
                </div>
                <div>
                    <input
                        onChange={this.getChange}
                        style={inputStyle}
                        type="text"
                        value={this.props.line3}
                        placeholder="another number">
                    </input>
                </div>
                <hr></hr>
                <div>
                    <input
                        onChange={this.getChange}
                        style={inputStyle}
                        type="text"
                        value={this.props.result}
                        placeholder="result">
                    </input>
                </div>
            </div>
        )
    }
}

const screenStyle = {
    backgroundColor: '#ffffff',
    margin: '10px 10px 10px 10px',
    border: '10px',
    borderColor: 'red',
    padding: "10px"
}


const inputStyle = {
    border: 'none',
    height: '50px',
    width: '100%'
}


export default CalculatorScreen
