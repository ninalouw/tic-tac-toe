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

  render(){
    let nextPlayer = this.state.nextPlayerIsX ? 'X' : 'O';
    const status = `Next player: ${nextPlayer}`;

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