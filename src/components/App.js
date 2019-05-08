import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';
class App extends Component {
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
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId +=1
          }
        ]
      }
    })
    // you can also update the Array by using javascript concatanate method
//     handleAddPlayer = (name) => {
//   let newPlayer = {
//     name,
//     score: 0,
//     id: this.prevPlayerId += 1
//   };
//   this.setState( prevState => ({
//     players: prevState.players.concat(newPlayer)
//   }));
// }
  }
  getHighScore = () => {
  const scores = this.state.players.map( p => p.score );
  const highScore = Math.max(...scores);
  if (highScore) {
    return highScore;
  } 
  return null;
}
  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            id={player.id}
            score={player.score}
            key={player.id.toString()}
            index= {index}
            changeScore={this.changeScoreHandler}
            removePlayer={this.handleRemovePlayer}
            isHighScore={highScore === player.score}         
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
