import React, { Component } from 'react';
import CalculatorScreen from './CalculatorScreen'
import NumberPad from './NumberPad'
import axios from 'axios';


var isSym = false;
export class Calculator extends Component {
    render() {
        return (
            <div className="container">
                <div style={calBackground}>
                    <br></br>
                    <CalculatorScreen
                        line1={this.state.line1}
                        line2={this.state.line2}
                        line3={this.state.line3}
                        result={this.state.result}
                    />
                    <NumberPad getChar={this.getChar} />
                </div>
            </div>
        )
    }

    getChar = (char) => {
        if (char === "=") {
            this.cal(this.state.line1, this.state.line2, this.state.line3);
        } else {
            if (isSym === false) {
                if (char === "+" || char === "/" || char === "x" || char === "-") {
                    this.setState(
                        {
                            line2: this.state.line2 + char,
                        }
                    );
                    isSym = true;
                }
                else {
                    this.setState(
                        {
                            line1: this.state.line1 + char,
                        }
                    );
                }
            } else {
                this.setState(
                    {
                        line3: this.state.line3 + char,
                    }
                );
            }
        }
        if (char === "c") {
            this.setState(
                {
                    line1: "",
                    line2: "",
                    line3: "",
                    result: ""
                }
            );
            isSym = false;
        }
    }

    cal(num1, sym, num2) {
        var a = Number(num1);
        var b = Number(num2);
        if (sym === "+") {
            this.add(a, b);
        } else if (sym === "-") {
            this.sub(a, b);
        } else if (sym === "/") {
            this.div(a, b);
        } else if (sym === "x") {
            this.mul(a, b);
        } else { }
    }

    add(num1, num2) {
        var res = num1 + num2;
        this.resultSetter(res);
    }
    sub(num1, num2) {
        var res = num1 - num2;
        this.resultSetter(res);
    }
    mul(num1, num2) {
        var res = num1 * num2;
        this.resultSetter(res);
    }
    div(num1, num2) {
        var res = num1 / num2;
        this.resultSetter(res);
    }

    resultSetter(result) {
        axios
            .get('https://api.npoint.io/fd024bc915e3f6fac514')
            .then(res => {
                var listMathJoke = res.data;
                var random = this.getRandomInt(listMathJoke.length - 1);
                var oneJoke = listMathJoke[random].line;
                var oneEmoji = listMathJoke[random].emoji;
                var line1 = this.state.line1;
                var line2 = this.state.line2;
                var line3 = this.state.line3;
                var resultFinal = `Your result for ${line1} ${line2} ${line3} = ${result}`;
                this.setState({
                    line1: oneJoke,
                    line2: oneEmoji,
                    line3: ".",
                    result: resultFinal
                });
            });
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

    state = {
        line1: "",
        line2: "",
        line3: "",
        result: ""
    }


}

const calBackground = {
    height: '500px',
    backgroundColor: '#000000',
    marginTop: '50px',
    border: '2px',
    borderColor: 'red'
}

export default Calculator
