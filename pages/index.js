import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, createContext } from "react";
import Board from "../components/Board/Board";
import TokenMale from "../components/Board/Token/TokenMale";
import TokenFemale from "../components/Board/Token/TokenFemale";
import Dice from "../components/UI/Dice/Dice";
import Points from "../components/UI/Points/Points";
import { act } from "react-dom/test-utils";

export const GameContext = createContext();

export default function Home() {
  const [currTileMale, setCurrTileMale] = useState(1);
  const [currTileFemale, setCurrTileFemale] = useState(1);
  const [tracker, setTracker] = useState(0);
  const [diceResult, setDiceResult] = useState(null);
  const [activePlayer, setActivePlayer] = useState("male");
  const [pointsMale, setPointsMale] = useState(0);
  const [pointsFemale, setPointsFemale] = useState(0);
  const [currTile, setCurrTile] = useState([1,1])
  const [points, setPoints] = useState([0,0])
  const [active, setActive] = useState(0)

  const updateCurrTile = (index, newValue) => {
    const updatedValues = [...currTile];
    updatedValues[index] = newValue;
    setCurrTile(updatedValues); 
  }

  const updatePoints = (index, newValue) => {
    console.log('updatuje pnkty')
    const updatedValues = [...points];
    updatedValues[index] = newValue;
    setPoints(updatedValues);
  }

  const state = {
    currTileMale: currTileMale,
    setCurrTileMale: setCurrTileMale,
    currTileFemale: currTileFemale,
    setCurrTileFemale: setCurrTileFemale,
    diceResult: diceResult,
    setDiceResult: setDiceResult,
    activePlayer: activePlayer,
    setActivePlayer: setActivePlayer,
    pointsMale: pointsMale,
    setPointsMale: setPointsMale,
    pointsFemale: pointsFemale,
    setPointsFemale: setPointsFemale,
    tracker: tracker, 
    setTracker: setTracker,
    currTile: currTile,
    setCurrTile: setCurrTile,
    points: points,
    setPoints: setPoints,
    active: active,
    setActive: setActive,
    updateCurrTile: updateCurrTile,
    updatePoints: updatePoints
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
          <TokenMale
            currTileMale={currTileMale}
            setCurrTileMale={setCurrTileMale}
            tracker={tracker}
            setTracker={setTracker}
            diceResult={setDiceResult}
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
          />
          <TokenFemale
            currTileFemale={currTileFemale}
            setCurrTileFemale={setCurrTileFemale}
            tracker={tracker}
            setTracker={setTracker}
            diceResult={setDiceResult}
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
          />
          <Dice
            currTileMale={currTileMale}
            setCurrTileMale={setCurrTileMale}
            currTileFemale={currTileFemale}
            setCurrTileFemale={setCurrTileFemale}
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            diceResult={diceResult}
            setDiceResult={setDiceResult}
            pointsMale={pointsMale}
            pointsFemale={pointsFemale}
            setPointsMale={setPointsMale}
            setPointsFemale={setPointsFemale}
          />
          <Points pointsMale={pointsMale} pointsFemale={pointsFemale} points={points}/>
        </div>
        </GameContext.Provider>
      </main>
    </div>
  );
}
