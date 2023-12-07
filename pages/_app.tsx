import '../styles/globals.css'
import React, { useState, createContext } from 'react';
import AppContext from '../components/AppContext';
import type { AppProps } from 'next/app'
import Script from 'next/script';

export default function MyApp({Component, pageProps}: AppProps) {


    const [tracker, setTracker] = useState(0);
    const [diceResult, setDiceResult] = useState("Roll the dice!");
    const [currTile, setCurrTile] = useState([1, 1]);
    const [points, setPoints] = useState([0, 0]);
    const [active, setActive] = useState(0);
    const [round, setRound] = useState([1, 1])
    const [devMode, setDevMode] = useState(false)
    const [playerNames, setPlayerNames] = useState(['', ''])
   
  
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

    const updatePlayerNames = (index, newValue) => {
      const updatedValues = [...playerNames];
      updatedValues[index] = newValue;
      setPlayerNames(updatedValues);
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
      setDevMode: setDevMode,
      playerNames: playerNames,
      setPlayerNames: setPlayerNames,
      updatePlayerNames: updatePlayerNames,
   
    };

    return (
      <>
     <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-356FBNMQMS`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-356FBNMQMS', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <AppContext.Provider value={state}>
        <Component {...pageProps} />
      </AppContext.Provider>
      </>
        )
}


