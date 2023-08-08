import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, createContext } from "react";
import Board from "../components/Board/Board";
import TokenMale from "../components/Board/Token/TokenMale";
import TokenFemale from "../components/Board/Token/TokenFemale";
import Dice from "../components/UI/Dice/Dice";
import Points from "../components/UI/Points/Points";
import Round from "../components/UI/Round/Round";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../components/AppContext";

export const GameContext = createContext(null);

export default function Game() {
  const {devMode, setDevMode} = useContext(AppContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>siema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.App}>
          
            
          <Round />
            
        
          <div className={styles.boardPointsContainer}>
            <div className={styles.pointsMale}><Points player="male" /></div>
          <Board />
          <div className={styles.pointsFemale}><Points player="female" /></div>
          </div>
          <TokenMale />
          <TokenFemale />
          
          <Dice />
          <Link href="/" id="backToMenu">
            Main menu
          </Link>
          <button onClick={() => setDevMode(!devMode)} className={styles.devButton}>
        Dev mode = {`${devMode}`}{" "}
      </button>
        </div>
      </main>
    </div>
  );
}
