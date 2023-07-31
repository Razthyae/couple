import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, createContext } from "react";


export const PlayerContext = createContext();

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>siema</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
      </main>
    </div>
  );
}
