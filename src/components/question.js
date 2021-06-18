import React, { Component } from 'react';
import UserAnswer from './useranswer';

class Question extends Component {
  state = {};
  render() {
    let firstNumber = Math.floor(Math.random() * (100 - 1));
    let secondNumber = Math.floor(Math.random() * (100 - 1));
    return (
      <div>
        <p>
          Here is the question. What is {firstNumber} + {secondNumber} equals ?
        </p>
        <UserAnswer fn={firstNumber} sn={secondNumber} />
      </div>
    );
  }
}

export default Question;