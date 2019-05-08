import React from 'react';
import Stopwatch from './Stopwatch';
import Stats from './Stats';
const Header = (props) => {
  return (
    <header>
    <Stats players={props.players}/>
      <h1>{ props.title }</h1>
      <Stopwatch />
      {/* <span className="stats">Players: {props.totalPlayers}</span>  */}
    </header>
  );
}

export default Header;