import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, createContext } from "react";
import Board from "../components/Board/Board";
import TokenMale from "../components/Board/Token/TokenMale";
import TokenFemale from "../components/Board/Token/TokenFemale";
import Dice from "../components/UI/Dice/Dice";
import Points from "../components/UI/Points/Points";
import Round from "../components/UI/Round/Round";

export const GameContext = createContext(null);

export default function Game() {
  const [tracker, setTracker] = useState(0);
  const [diceResult, setDiceResult] = useState(null);
  const [currTile, setCurrTile] = useState([1, 1]);
  const [points, setPoints] = useState([0, 0]);
  const [active, setActive] = useState(0);
  const [round, setRound] = useState([0, 0])
  const [devMode, setDevMode] = useState(false)

  const updateCurrTile = (index, newValue) => {
    const updatedValues = [...currTile];
    updatedValues[index] = newValue;
    setCurrTile(updatedValues);
  };

  const updatePoints = (index, newValue) => { 
    const updatedValues = [...points];
    updatedValues[index] = newValue;
    setPoints(updatedValues);
  };

  const updateRound = (index, newValue) => {
    const updatedValues = [...round];
    updatedValues[index] = newValue;
    setRound(updatedValues);
  }

  const state = {
    diceResult: diceResult,
    setDiceResult: setDiceResult,
    tracker: tracker,
    setTracker: setTracker,
    currTile: currTile,
    setCurrTile: setCurrTile,
    points: points,
    setPoints: setPoints,
    active: active,
    setActive: setActive,
    updateCurrTile: updateCurrTile,
    updatePoints: updatePoints,
    round: round,
    setRound: setRound,
    updateRound: updateRound,
    devMode: devMode,
    setDevMode: setDevMode
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>siema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GameContext.Provider value={state}>
          <div className={styles.App}>
            <Board />
            <TokenMale />
            <TokenFemale />
            <Dice />
            <Points points={points} />
            <Round round={round}/>
          </div>
        </GameContext.Provider>
      </main>
    </div>
  );
}
