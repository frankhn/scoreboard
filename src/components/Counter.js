import PropTypes from "prop-types";
import React from "react";

const Counter = ({ index, score, changerScore }) => {
  return (
    <div className="counter">
      <button
        id="decrement"
        className="counter-action decrement"
        onClick={() => changerScore(index, -1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => changerScore(index, 1)}
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changerScore: PropTypes.func
};

export default Counter;
