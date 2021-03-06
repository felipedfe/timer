import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Timer from './components/Timer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      setTimer: {
        inputMinuto: undefined,
        inputSegundo: undefined,
      },
      isTimerOn: false,
    }
  }

  handleInputs = (inputSegundo, inputMinuto) => {
    this.setState({
      setTimer: {
        inputMinuto,
        inputSegundo,
      },
      isTimerOn: true,
    })
  }

  turnTimerOff = (id) => {
    clearInterval(id)
    this.setState({
      isTimerOn: false,
    })
  }

  render() {
    const { setTimer, isTimerOn } = this.state;

    return <>
      {isTimerOn
      ?
      <Timer setTimer={ setTimer } turnTimerOff={ this.turnTimerOff }/>
      :
      <Inputs handleInputs={ this.handleInputs } />
      }
    </>
  }
}

export default App;
