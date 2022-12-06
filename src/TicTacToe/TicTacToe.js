import React, { useState } from 'react';//importerar 'React' och använder 'useState' som är en Hook vilket tillåter mig att följa nuvarande statusen i en funktion komponent
import './TicTacToe.css';



const TicTacToe = () => {//Här använder jag en så kallad 'arrow function' vilket gör att jag kan skriva kortate funktion syntax
    
    const [turn, setTurn] = useState('x');// Vid varje start kommer X att börja, 
    const [cells, setCells] = useState(Array(9).fill(''));//Vi vill hålla reda på vad spelaren trycker på, useState sätter vi till 9st tomma strings. Defualt kommer alltså vara 9st tomma strings
    const [winner,setWinner] = useState();//Winner sätter vi default till null
    //Funktionen för att kolla ifall någon vunnit, en till 'arrow function'
    const checkForWinner = (squares) => {
        let combos = {//Skapar en variabel som ska innehålla de olika vinn4 kombinationerna
            across:[
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

        for (let combo in combos){//För varje kombination i "combos" alltså, Across, Down och Diagnol
            combos[combo].forEach((pattern) => {//Vi vill leta efter en kombination i 'combo'
                if(
                    squares[pattern[0]]=== '' ||//Om det finns en kombination som är empty...
                    squares[pattern[1]]=== '' ||
                    squares[pattern[2]]=== ''
                )
                {
                    //Gör inget
                }else if
                    (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]//om 3 rutor matchar med vinn kombinationerna så har man vunnit
                    
                    )
                    {
                        setWinner(squares[pattern[0]])//Vi sätter vinnaren till bokstaven som är nuvarande i squares
                    }
            })
        }


    }


    const playerClick = (num) => {//Här skapar vi en funktion som kommer ta hand om vilken ruta spelaren klickar på
        let squares = [...cells];//Här kopierar vi 'cells' arryen in till squares
    if(cells[num] !== '')//Så att spelaren inte kan välja samma ruta igen
    {
    alert("Ruta redan vald!");
    return;
    }
    //If-Satsen som byter vems tur det är, X eller O
    if(turn === 'x'){//Om det är x tur
        squares[num] = 'x';//Sätter vi squares[num] till x
        setTurn('o')//Ändrar till 'O's tur
    }else{
        squares[num] = 'O';
        setTurn('x')
    }


    checkForWinner(squares);
    setCells(squares);
    console.log(squares)

    }

    const handleRestart = () => {//Skapar en restart funktion, sätter vinnaren till 'null' och sätter 'cells' till tomma strings vilket nollställer allt
        setWinner(null)
        setCells(Array(9).fill(''));
    }

    

    const Cell = ({num}) => {
        return <td onClick={() => playerClick(num)}>{cells[num]}</td>;//Vid onClick kör vi playerClick funktionen,
    };
    //Spelbrädan
    return ( 
    <div className="Container">
        <table>
            <div id="Turn">Turn:{turn}</div>
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
        <div id="win">
        {winner && 
        (
            <>
            <p>{winner} is the winner!</p>
            <button onClick={() => handleRestart()}>Restart</button>
            </>//Kör en onClick funktion och så vill vi köra handleRestart funktionen

        )
        }
        </div>
    </div>
    );
};

export default TicTacToe;
