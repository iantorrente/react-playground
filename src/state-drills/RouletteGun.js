import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }
  }

  handleFire = () => {
    this.setState({
      spinningTheChamber: true
    });
    this.interval = setInterval(() => {
      let randomChamber = Math.floor(Math.random() * 8) + 1;
      console.log(randomChamber);
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false
      })
    }, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderDisplay() {
    if (this.state.spinningTheChamber === true) {
      return 'spinning the chamber and pulling the trigger!...';
    } else if (this.state.chamber === this.props.bulletInChamber) {
      return 'BANG!... You\'re gonna carry that weight...';
    } else {
      return 'See You, Space Cowboy...';
    }
  }

  render() {

    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleFire}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;