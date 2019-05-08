import React from 'react';
import protoTypes from 'prop-types';

const Counter = ({ index, score, changerScore}) => {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changerScore(index, -1)}> - </button>
        <span className="counter-score">{ score }</span>
        <button className="counter-action increment" onClick={() => changerScore(index, 1)}> + </button>
      </div>
    );
}
Counter.protoTypes = {
  index: protoTypes.number,
  score: protoTypes.number,
  changerScore: protoTypes.func
}


  
  export default Counter;