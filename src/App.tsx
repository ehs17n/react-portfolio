import React, { createContext, useEffect, useState } from 'react';
import { InferencePriority } from 'typescript';

import './App.css';

const Wordle = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

interface AppContextInterface {
  row: number;
  coll: number;

  geussWords: string;
  wordleWord: string;
  rowColor: boolean;
  board: string[][];
}

export const AppContext = createContext<AppContextInterface | null>(null);

// const CorrectWords = ['master', 'gamer', 'track', 'crazy'];

const key = ['A', 'S', 'D'];
const key2 = ['Z', 'X', 'C'];

const App = () => {
  const randmomWord = ['asdzx', 'track', 'crazy'];
  const [board, setBoard] = useState(Wordle);
  const [geussWords, setGeussWords] = useState('');
  const [wordleWord, setWordleWord] = useState('');

  const [isAllowed, setIsAllowed] = useState(false);

  const [pos, setPos] = useState({
    row: 0,
    coll: 0,
  });

  useEffect(() => {
    // const a = Math.floor(Math.random() * randmomWord.length);
    setWordleWord(randmomWord[0]);
  }, []);

  useEffect(() => {
    console.log('hi');
  }, [isAllowed]);

  const KeyClicked = (key: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (pos.coll === 5 && pos.row === 5) return;
    if (pos.coll === 5) return;
    setIsAllowed(true);
    setGeussWords((prev) => prev + key.toLowerCase());

    const copy = [...board];
    copy[pos.row][pos.coll] = key;
    setBoard(copy);

    setPos((prev) => ({ ...prev, coll: prev.coll + 1 }));
  };

  const EnterClicked = () => {
    if (pos.coll === 5) {
      setIsAllowed(true);
      setTimeout(() => {
        setPos({ coll: 0, row: pos.row + 1 });
        setGeussWords('');
      }, 3000);

      return;
    }
  };
  const BackspaceClicked = () => {
    if (pos.coll === 0) return;
    const copy = [...board];
    copy[pos.row][pos.coll - 1] = '';
    setBoard(copy);
    setPos((prev) => ({ ...prev, coll: prev.coll - 1 }));
  };

  function CheckRow() {}

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
  function Cell({ col, row }: { col: number; row: number }) {
    // if (isAllowed) {
    // const correct = wordleWord.toUpperCase()[col] === geussWords[col];
    // }
    const [check, setCheck] = useState(false);

    return (
      <div className={`cell ${check ? 'correct' : ''}`}>{board[row][col]}</div>
    );
  }

  //  {
  //    board.map((row) => {
  //      return (
  //        <div className='row'>
  //          {row.map((cell, idx) => {
  //            return (
  //              <div className='cell'>
  //                <Cell Cell={cell} />
  //              </div>
  //            );
  //          })}
  //        </div>
  //      );
  //    });
  //  }

  return (
    <div className='app'>
      <div className='row'>
        <Cell col={0} row={0} />
        <Cell col={1} row={0} />
        <Cell col={2} row={0} />
        <Cell col={3} row={0} />
        <Cell col={4} row={0} />
      </div>
      <div className='row'>
        <Cell col={0} row={1} />
        <Cell col={1} row={1} />
        <Cell col={2} row={1} />
        <Cell col={3} row={1} />
        <Cell col={4} row={1} />
      </div>
      <div className='row'>
        <Cell col={0} row={2} />
        <Cell col={1} row={2} />
        <Cell col={2} row={2} />
        <Cell col={3} row={2} />
        <Cell col={4} row={2} />
      </div>
      <div className='row'>
        <Cell col={0} row={3} />
        <Cell col={1} row={3} />
        <Cell col={2} row={3} />
        <Cell col={3} row={3} />
        <Cell col={4} row={3} />
      </div>
      <div className='row'>
        <Cell col={0} row={4} />
        <Cell col={1} row={4} />
        <Cell col={2} row={4} />
        <Cell col={3} row={4} />
        <Cell col={4} row={4} />
      </div>
      <div className='row'>
        <Cell col={0} row={5} />
        <Cell col={1} row={5} />
        <Cell col={2} row={5} />
        <Cell col={3} row={5} />
        <Cell col={4} row={5} />
      </div>

      <div className='key'>
        {key.map((key) => {
          return (
            <button key={key} onClick={(e) => KeyClicked(key, e)}>
              {key}
            </button>
          );
        })}
        {key2.map((key) => {
          return (
            <button key={key} onClick={(e) => KeyClicked(key, e)}>
              {key}
            </button>
          );
        })}
        <button onClick={() => EnterClicked()}>KeyEnter</button>
        <button onClick={() => BackspaceClicked()}>Backspace</button>
      </div>
    </div>
  );
};

export default App;
