import React from 'react';
import Square from "./Square";

class Board extends React.Component {
  constructor(props){
     super(props);
      this.state = {
        squares: Array(9).fill(null),
        nextPlayerIsX: true,
      }
  }
  renderSquare(i) {
    return <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />;
  };
  handleClick(i){
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.nextPlayerIsX ? 'X' : 'O';
    this.setState({
      squares: squares,
      nextPlayerIsX: !this.state.nextPlayerIsX,
    });
  }
  calculateWinner(squaresArray){
    /*hardcode all possible winning combinations*/
    const possibleCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    /*loop over winning combinations,
    check if any triple combinations are equal,
    i.e if any 'x','x','x' or 'o','o','o' combinations */
    for (let i = 0; i < possibleCombinations.length; i++) {
      const [a, b, c] = possibleCombinations[i];
      if (squaresArray[a] && squaresArray[a] === squaresArray[b] && squaresArray[a] === squaresArray[c]) {
        return squaresArray[a];
      }
    }
    return null;
  }

  render(){
    let nextPlayer = this.state.nextPlayerIsX ? 'X' : 'O';
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
        status = `Winner is: ${winner}`;
    } else {
        status = `Next player: ${nextPlayer}`;
    }

    return(
      <div className="board">
        <div className="status">
          {status}
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;