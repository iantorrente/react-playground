import React from 'react';

class Bomb extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newCount = 1 + this.state.count;
      this.setState({
        count: newCount
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let display = '';
    console.log(this.state.count);
    if (this.state.count >= 8) {
      display = 'BOOM!';
      clearInterval(this.interval);
    } else if (this.state.count % 2 === 0) {
      display = 'tick';
    } else {
      display = 'tock';
    } 
    return (
      <div>
        <p>{display}</p>
      </div>
    )
  }
}

export default Bomb;