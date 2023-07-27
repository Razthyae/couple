import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";
import Board from "../components/Board/Board";
import TokenMale from "../components/Board/Token/TokenMale";
import TokenFemale from "../components/Board/Token/TokenFemale";
import Dice from '../components/UI/Dice/Dice'
import Points from '../components/UI/Points/Points'

export default function Home() {
  const [currTileMale, setCurrTileMale] = useState(1);
  const [currTileFemale, setCurrTileFemale] = useState(1);
  const [tracker, setTracker] = useState(0);
  const [diceResult, setDiceResult] = useState(null);
  const [activePlayer, setActivePlayer] = useState("male");
  const [pointsMale, setPointsMale] = useState(0);
  const [pointsFemale, setPointsFemale] = useState(0);

  return (
    <div className={styles.container}>
      <Head>
        <title>siema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
          <Points pointsMale={pointsMale} pointsFemale={pointsFemale} />
        </div>
      </main>
    </div>
  );
}
