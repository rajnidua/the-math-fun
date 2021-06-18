import React, { Component } from 'react';
import {FaBeer} from 'react-icons/fa';

class CorrectAnswer extends Component {
  state = {};
  render() {
    return <p>Congratulations!! Your Answer is Correct.<FaBeer/></p>;
  }
}

export default CorrectAnswer;