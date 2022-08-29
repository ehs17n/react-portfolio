import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { AppContext } from './App';
import { appendFile } from 'fs';
type CellProps = {
  // Cell: string;
  // coll: number;
  // row: number;
  // board: string[][];
  // geussWords: string;
  // wordleWord: string;
  // rowColor: boolean;
  // pos: {
  //   coll: number;
  //   row: number;
  // };
};
//asdzx
// interface AppContextInterface {
//   pos: {
//     row: number;
//     coll: number;
//   };
//   geussWords: string;
//   wordleWord: string;
//   rowColor: boolean;
// }
// Cell, coll, row, board;

const Cell: React.FC<CellProps> = ({}) => {
  const context = useContext(AppContext);

  // const correct = correctWord.toUpperCase()[letterPos] === letter;
  // const almost =
  //   !correct && letter !== '' && correctWord.toUpperCase().includes(letter);
  // const letterState =
  //   currAttempt.attempt > attemptVal &&
  //   (correct ? 'correct' : almost ? 'almost' : 'error');

  // useEffect(() => {
  //   if (letter !== '' && !correct && !almost) {
  //     console.log(letter);
  //     setDisabledLetters((prev) => [...prev, letter]);
  //   }
  // }, [currAttempt.attempt]);

  return <div>{context?.board[context.row][context.coll]}</div>;
};
export default Cell;
