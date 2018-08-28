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
    squares[i] = this.state.nextPlayerIsX ? 'X' : 'O';
    this.setState({
      squares: squares,
      nextPlayerIsX: !this.state.nextPlayerIsX,
    });
  }
  calculateWinner(squares){
    var hasWon = false;
    //want to check first 3 indices
    console.log(squares);
    for(var i = 0; i < squares.length; i++){
        console.log(i);
        if ((squares[i] === squares[i + 1]) && (squares[i+1] === squares[i + 2]) ||
        (squares[i] === squares[i + 3]) && (squares[i + 3] === squares[i + 6])){
          return hasWon = true;
        }
        hasWon;
    }
  }

  render(){
    let nextPlayer = this.state.nextPlayerIsX ? 'X' : 'O';
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
        status = `Winner:${winner}`;
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