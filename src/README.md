# INDEX.JS SUMMARY

1. Imports necessary files to import.

2. Renders the game using **ReactDOM**.

3. Game renders the board.

4. The board creates its own constructor. By default, **React** provides a
constructor with each new class created. However, in the boards case, we created
our own so **React** doesn't provide the original for us (this is called *overriding*).
We actually do wan't to use the constructor so we can build off of it. We type
`super(props)` to do this. Then, the constructor creates an array of nine called `board_array` with every value as null and a boolean `xIsNext`.

5. The board runs the render function which creates the constant winner which is determined by the function `calculateWinner` which passes in `this.state.board_array` which was already determined in the constructor. `calculateWinner` then takes each of the possible win combinations. If one of the squares are null or they don't have matching values, it will have to look through the next combination. If all of them are like that, the function will return null. If not, it will out put a value. The variable `status` is created. If there was a winner (meaning it was not null) the status will be "Winner: (winner)". If not, it will display "Next player: (next player)". The render function then returns **HTML** code which displays the status and places nine squares. <introduce renderSquare>

7. The function `renderSquare` creates a variable for `board_array[i]` called `value` and it creates a variable for handleClick called onClick. The function `Square` creates a button in **HTML** and assigns it the **CSS** class "square". The onClick function from `renderSquare` is also added. This function, which refers back to `handleClick`, creates the constant `isXNext` and sets it to the current `xIsNext` state. It also creates the constant squares, which is set to a copy of the `board_array`. By making a copy, we allow the ability to create a time machine that tracks our game history. Then it checks to see if either `calculateWinner(squares)` or `squares[i]` returns a value and if so, it ends the function. If not, it checks if `xIsNext` is true and if so, it sets `X` to `squares[i]`. Then, it takes the new things from the copy and puts it on the `board_array`. Then, it sets `xIsNext` to `!isXNext`, since the next player won't be `X`. Inside the button is the value of the square.

*There are other functions running between and/or before but we won't deal with them
in this project.*
