import React, { Component } from 'react';
import CorrectAnswer from './correctanswer';
import WrongAnswer from './wronganswer';

class UserAnswer extends Component {
  state = {
    useranswer: 0,
    actualanswer: 0,
    isCorrect: false,
    isWrong: false,
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ useranswer: parseInt(e.target.value, 10) });
    let as = this.props.fn + this.props.sn;
    this.setState({ actualanswer: parseInt(as, 10) });
  };

  handleClick = () => {
    console.log(this.state.useranswer);
    console.log(this.props.fn);
    console.log(this.props.sn);
    let as = this.props.fn + this.props.sn;
    this.setState({ actualanswer: parseInt(as, 10) });

    if (this.state.useranswer !== this.state.actualanswer) {
      this.setState({ isWrong: true });
    } else {
      this.setState({ isCorrect: true });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChangeCapture={(e) => this.handleChange(e)}
        ></input>
        <input type="submit" onClick={this.handleClick}></input>
        {this.state.isCorrect && <CorrectAnswer />}
        {this.state.isWrong && <WrongAnswer aa={this.state.actualanswer} />}
      </div>
    );
  }
}

export default UserAnswer;