import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {
	static propTypes = {
		id: propTypes.number,
		score: propTypes.number,
		name: propTypes.string,
		index: propTypes.number,
		changeScore: propTypes.func,
		removePlayer: propTypes.func
	};
	render() {
		const { id, score, name, index, changeScore, removePlayer, isHighScore } = this.props;
		// console.log(name+ 'rendered');
		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}>
						✖
					</button>

					<Icon isHighScore={isHighScore} />
					{name}
				</span>
				<Counter score={score} index={index} changerScore={changeScore} />
			</div>
		);
	}
}

export default Player;
