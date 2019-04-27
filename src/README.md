Imports necessary files to import.

Then, it renders the game using ReactDOM. Then, the game renders the board.

Then, the board creates its own constructor. By default, React provides a
constructor with each new class created. However, in the boards case, we created
our own so React doesn't provide the original for us (this is called overriding).
We actually do wan't to use the constructor so we can build off of it. We type
'super(props)' to do this.
