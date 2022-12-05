import React from 'react';
import ReactDOM from 'react-dom/client';

import Board from './TicTacToe/TicTacToe.js';
import './TicTacToe/TicTacToe.css';
import './TicTacToe/TicTacToe.js';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Board></Board>
)

//ReactDOM.render(<Board/>, document.getElementById("root"))