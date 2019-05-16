import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
import { connect } from "react-redux";
import { addPlayer } from "../redux/actions/players";
class App extends Component {
  componentDidMount() {
    this.props.addPlayer({});
  }

  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;
  changeScoreHandler = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleAddPlayer = name => {
    this.props.addPlayer({
      name,
      score: 0,
      id: (this.prevPlayerId += 1)
    });
  };
  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    }
    return null;
  };
  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };
  render() {
    const { players } = this.props;
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        {/* <Header title="Scoreboard" players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player, index) => (
          <Player
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index={index}
            changeScore={this.changeScoreHandler}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} /> */}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state.players
});

export default connect(
  mapStateToProps,
  { addPlayer }
)(App);
