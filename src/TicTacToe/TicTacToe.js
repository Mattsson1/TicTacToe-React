import React, { useState } from 'react';
import './TicTacToe.css';



const TicTacToe = () => {
    
    const [turn, setTurn] = useState('x');// Vid varje start kommer X att börja
    const [cells, setCells] = useState(Array(9).fill(''));//Vi vill hålla reda på vad spelaren trycker på
    const [winner,setWinner] = useState();
    //Funktionen för att kolla ifall någon vunnit, en till 'arrow function'
    const checkForWinner = (squares) => {
        let combos = {
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
                ],
            diagnol:[
                [0,4,8],
                [2,4,6],
                ],

        }

        for (let combo in combos){
            combos[combo].forEach((pattern) => {
                if(
                    squares[pattern[0]]=== '' ||
                    squares[pattern[1]]=== '' ||
                    squares[pattern[2]]=== ''
                )
                {
                    //Gör inget
                }else if
                    (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]] 
                    )
                    {
                        setWinner(squares[pattern[0]])
                    }
            })
        }


    }


    const playerClick = (num) => {
        let squares = [...cells];
    if(cells[num] !== '')//Så att spelaren inte kan välja samma ruta igen
    {
    alert("Redan vald!");
    return;
    }

    if(turn === 'x'){
        squares[num] = 'x';
        setTurn('o')
    }else{
        squares[num] = 'o';
        setTurn('x')
    }


    checkForWinner(squares);
    setCells(squares);
    console.log(squares)

    }

    const handleRestart = () => {
        setWinner(null)
        setCells(Array(9).fill(''));
    }



    const Cell = ({num}) => {
        return <td onClick={() => playerClick(num)}>{cells[num]}</td>;
    };

    return ( 
    <div className="Container">
        <table>
            Turn: {turn}
            <tbody>
                <tr>
                    <Cell num={0}></Cell>
                    <Cell num={1}></Cell>
                    <Cell num={2}></Cell>
                </tr>
                <tr>
                    <Cell num={3}></Cell>
                    <Cell num={4}></Cell>
                    <Cell num={5}></Cell>
                </tr>
                <tr>
                    <Cell num={6}></Cell>
                    <Cell num={7}></Cell>
                    <Cell num={8}></Cell>
                </tr>
            </tbody>
        </table>
        {winner && 
        (
            <>
            <p>{winner} is the winner!</p>
            <button onClick={() => handleRestart()}>Restart</button>
            </>

        )
        }
    </div>
    );
};

export default TicTacToe;
