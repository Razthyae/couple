import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useContext } from "react";
import AppContext from '../components/AppContext'
import Link from "next/link";



export default function Home() {
  const { playerNames, updatePlayerNames} = useContext(AppContext)

  const startGame = (event) => {
    if(playerNames[0] === "" || playerNames[1] === "") {
      event.preventDefault()
      alert("Input the names!")
    }
  
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>siema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input type='text' value={playerNames[0]} placeholder="Male" onChange={(event) => updatePlayerNames(0, event.target.value)}></input>
        <input type='text' value={playerNames[1]} placeholder="Female" onChange={(event) => updatePlayerNames(1, event.target.value)}></input>
        {playerNames[0]}
        {playerNames[1]}
        <Link href='/game' onClick={startGame}>Start the game!</Link>
      </main>
    </div>
  );
}
