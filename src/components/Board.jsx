import React from 'react';
import Square from './Square';

class Board extends React.Component {
  constructor(props){
     super(props);
      this.state = {
        squares: Array(9).fill(null)
      }
  }
  renderSquare(i) {
    return <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        />;
  };
  handleClick(i){
    console.log('clicked', i);
  }

  render(){
    const status = "Player X goes next!";

    return(
      <div>
        <div className="status">
          {status}
        </div>
        <div className="boardRow">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="boardRow">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="boardRow">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;