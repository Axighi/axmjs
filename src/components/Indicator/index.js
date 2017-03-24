/**
*
* Indicator
*
*/

import React from 'react';
import styled from 'styled-components';
import Timer from '../../lib/timer';

// import Silence from './assets/silence.png';
// import Speakable from './assets/speakable.png';

const Mask = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 108px;

    & img {
      height: 100%;
    }
  }

  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #FFFFFF;
  }
`;

class Indicator extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    voice: React.PropTypes.object.isRequired,
  }

  state = {
    status: '',
    words: null,
    // voiceState: <div><img src={Speakable} alt="speakable" /></div>,
    voiceState: <div>Speakable</div>,
    mask: null,
  }

  componentWillReceiveProps(nextProps) {
    const status = nextProps.voice.status;
    const timer = new Timer(3, () => {
      this.setState(() => ({ words: null }))
    })

    this.setState((prevState) => {
      let words = prevState.words
      let voiceState = prevState.voiceState
      let mask = prevState.mask

      if (status === 'Idle') {
        voiceState = <div>Speakable</div>
        mask = null
        timer.start()
      } else {
        timer.clear()
      }

      if (status === 'RobotBeginDialog') {
        words = null
        voiceState = <div onClick={this.stopRobotTalking}>Silence</div>
        mask = <Mask />;
      }

      if (status === 'RobotEndDialog') {
        words = null
        voiceState = <div>Speakable</div>
        mask = null
      }

      return {
        words,
        voiceState,
        mask,
      }
    })
  }

  stopRobotTalking = () => {
    console.log('Stopped speaking');
  }

  render() {
    return (
      <Container>
        {this.state.voiceState}
        <div></div>
      </Container>
    )
  }
}

export default Indicator;
