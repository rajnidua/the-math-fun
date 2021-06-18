import React, { Component } from 'react';

class WrongAnswer extends Component {
  state = {};
  render() {
    return <p>Sorry. Correct Answer is {this.props.aa}</p>;
  }
}

export default WrongAnswer;