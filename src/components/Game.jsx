import React from 'react';
import Board from './Board';

class Game extends React.Component {
  render() {
    return (
      <div>
        <h2>Play the game!</h2>
        <div className="gameBoard">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;
