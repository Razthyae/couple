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
 

  return (
    <div className={styles.container}>
      <Head>
        <title>siema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
          <div className={styles.App}>
            <Board />
            <TokenMale />
            <TokenFemale />
            <Dice />
            <Points />
            <Round />
          </div>
     
      </main>
    </div>
  );
}
