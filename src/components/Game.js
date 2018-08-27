import React, { Component } from 'react';

class Game extends React.Component {
    render(){
        return(
            <div>
                <h2>Play the game!</h2>
                <div className="gameStatus">
                {/* display status of game: X or Y to play or winner declared*/}
                </div>
                <div className="gameBoard">
                {/* /* render board */}
                </div>
            </div>
        )
    }
}

export default Game;