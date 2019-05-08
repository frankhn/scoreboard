import React, { Component } from 'react';
import Stopwatch from './Stopwatch';
import Stats from './Stats';
class Header extends Component {
  render() {
    const { players, title } = this.props;
  return (
    <header>
    <Stats players={players}/>
      <h1>{ title }</h1>
      <Stopwatch />
      {/* <span className="stats">Players: {totalPlayers}</span>  */}
    </header>
  );
  }
}

export default Header;