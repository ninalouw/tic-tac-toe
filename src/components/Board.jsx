import React, { Component } from 'react';
import Square from './Square';

class Board extends React.Component {
    /* renderSquare method */
    renderSquare(i) {
      return <Square />;
    };

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
                {/* render second row*/}
                </div>
                <div className="boardRow">
                {/* render third row*/}
                </div>
            </div>
        );
    }
}

export default Board;