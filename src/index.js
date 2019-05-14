import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}> {/* Creates button with CSS class "square" with onClick which calls handleClick */}
      {props.value} {/* Displays value "X", "O", or null */}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_array: Array(9).fill(null), // Creates array of nine "board_array" and sets them all to null
      xIsNext: true, // Creates boolean "xIsNext" and sets it as true
    };
  }

  handleClick(i) {
    const isXNext = this.state.xIsNext; // Creates constant isXNext and sets it to whatever 'this.state.xIsNext' is
    const squares = this.state.board_array.slice(); // Creates constant "squares" and sets it to a copy of 'this.state.board_array'
    // [null, null, null, null, null, null, null, null, null]
    if (calculateWinner(squares) || squares[i]) { // If either "calculateWinner(squares)" or "squares[i]" is not null
      return; // Return nothing.
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'; // If xIsNext is true, then squares[i] = 'X', if not, squares[i] = 'O'
    this.setState({
      board_array: squares, // Takes stuff from copy and puts it on real thing.
      xIsNext: !isXNext, // Makes "this.state.xIsNext" false. Happens every click so it switches from false to true every click.
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.board_array[i]}
        onClick={() => this.handleClick(i)} //Makes "onClick" refer back to "handleClick"
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.board_array); // Creates constant "winner" and calculates the winner.
    let status; // Creates variable status, which you are able to change.
    if (winner) { // If winner is not null, then we have a winner
      status = 'Winner: ' + winner; // by stating 'Winner:' and then the actual winner.
    } else { // If the winner is null, we still don't have a winner.
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); // The next player is determined by "xIsNext: true" ('X') or "xIsNext:  !this.state.xIsNext" ('O')
    }

  	return (
      <div> {/* Creates a division between JSS and HTML */}
        <div className="status">{status}</div> {/* Creates CSS class "status" */}
        <div className="board-row"> {/* Creates division with CSS class "board-row" to represent a row */}
          {this.renderSquare(0)} {/* Puts first square from array on first row */}
          {this.renderSquare(1)} {/* Puts second square from array on first row */}
          {this.renderSquare(2)} {/* Puts third square from array on first row */}
        </div>
        <div className="board-row"> {/* Creates another division "board-row" */}
    	    {this.renderSquare(3)} {/* Puts fourth square from array on second row */}
    	    {this.renderSquare(4)} {/* Puts fifth square from array on second row */}
    	    {this.renderSquare(5)} {/* Puts sixth square from array on second row */}
        </div>
        <div className="board-row"> {/* Creates another division "board-row" */}
    	    {this.renderSquare(6)} {/* Puts seventh square from array on third row */}
    	    {this.renderSquare(7)} {/* Puts eighth square from array on third row */}
    	    {this.renderSquare(8)} {/* Puts ninth square from array on third row */}
        </div>
      </div>
  		);
  }
}

class Game extends React.Component {
    render() {
	return (
      <div className="game">
        <div className="game-board">
          <Board /> {/* Calls in "Board" */}
        </div>
        <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
        </div>
      </div>
		);
    }
}

// ========================================

ReactDOM.render(
		<Game />, // Calls in "Game"
		document.getElementById('root')
		);

function calculateWinner(squares) {
  const lines = [ // All possible win combinations with [a, b, c]
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // [null, null, null, null, X, null, null, null, null]
  for (let i = 0; i < lines.length; i++) { // "i" iterates from 0 to "lines.length"
    const [a, b, c] = lines[i]; // Win combination
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { // If value of a, b, and c are all the same and not null
      return squares[a]; // Outputs value
    }
  }
  return null; // If not, we still don't have a winner (function returns null).
}
