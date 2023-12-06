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
import { useRouter } from "next/router";

export const GameContext = createContext(null);

export default function Game() {
  const {devMode, setDevMode} = useContext(AppContext)
  const router = useRouter()

  return (
    <div className={styles.container2}>
      <Head>
        <title>Couple's Game</title>
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
          {/* <button className={styles.backToMenuBtn}>BoxShadow</button> */}
          
          
      <button className={styles.backButton} onClick={() => router.push('/')}><svg id="backButtonArrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg></button>
        </div>
      </main>
      <div className={styles.overlay}>
           <p>This game is available in landscape orientation only. </p>
           <p>Rotate your device!</p>
          </div>
    </div>
  );
}
