import React, { useRef, useContext, useEffect } from "react";
import styles from "./Dice.module.css";
import {
  Tiles,
  Actions
} from "../../Board/Tiles/const";
import Swal from "sweetalert2";
import AppContext from "../../../components/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";
import DiceComponent from "react-dice-roll";

function Dice() {
  const {
    diceResult,
    setDiceResult,
    round,
    currTile,
    points,
    active,
    setActive,
    updateCurrTile,
    updatePoints,
    updateRound,
    devMode,
    setDevMode,
    playerNames,
  } = useContext(AppContext);

  const rollRef = useRef<HTMLButtonElement>(null);
  const activeRef = useRef<HTMLParagraphElement>(null);
  const diceRef = useRef(null);
  const diceContainerRef = useRef<HTMLDivElement>(null)

  const onRoll = () => {
    diceContainerRef.current.style.overflow = "visible"
    rollRef.current.style.pointerEvents = "none"
    diceRef.current.rollDice();
    
  };

  const router = useRouter();

  ///////////////// ACTIVE PLAYER FADE EFFECT ///////////////////////////////

  useEffect(() => {
    activeRef.current.style.transitionDuration = "0s";
    activeRef.current.style.opacity = "0";
    activeRef.current.style.transform = "translateY(10px)"

    setTimeout(() => {
      activeRef.current.style.transitionDuration = "0.5s";
      activeRef.current.style.opacity = "1";
      activeRef.current.style.transform = "translateY(0px)"
    }, 1000);
  }, [active]);

  ///////////// CHECK IF CROSSED THE STARTING TILE / UPDATES ROUND /////////

  const calculateNewTile = (roll: number, currentTile: number) => {
    let result: number = currentTile + roll;
    if (result > 22) {
      result -= 22;
      if (round[active] === 3) {
        setTimeout(() => {
          console.log("Koniec gry!");
          Swal.fire({
            title: `${playerNames[0]} has won!`,
            text: `Congratulations! For the next 5 minutes ${playerNames[1]} will do anything you want :)`,
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Back to main menu",
            allowEscapeKey: false,
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
             window.location.href = "/"
              
            }
          });
        }, 1001);
      }
      updateRound(active, round[active] + 1);
    }

    return result;
  };

  const handleRoll = (rollResult: number) => {
    ////////////////////// ROLL THE DICE //////////////////////
    let roll: number = rollResult;
    setDiceResult(roll);

    /////////////////////// MOVE THE ACTIVE PLAYER ///////////////////////
    let newTileValue = calculateNewTile(roll, currTile[active]);
    updateCurrTile(active, newTileValue);
    let token =
      active === 0
        ? document.getElementById("tokenMale")
        : document.getElementById("tokenFemale");

    const currentTile: any = document.getElementById(
      `tile-${`${newTileValue}`}`
    );
    const tileLeft = currentTile.getBoundingClientRect().left;
    const tileTop = currentTile.getBoundingClientRect().top;

    const scrollLeft = window.scrollY
    const scrollTop = window.scrollX

    token!.style.transform = `translate(${tileLeft + 35 + scrollTop}px, ${tileTop + 35 + scrollLeft}px)`;

    ////////////////// ADD / REMOVE POINTS / TILE ACTION ////////////////
    let tileNumber = calculateNewTile(roll, currTile[active]) - 1;

    let tilePoints = Tiles[tileNumber].points;

    if (Number.isInteger(tilePoints)) {
      updatePoints(active, points[active] + tilePoints);
    }
    if (Tiles[tileNumber].action && !devMode) {
      let playerRound = `round${round[active]}`
      let randomGain: object =
        Actions[playerRound].gain[Math.floor(Math.random() * Actions[playerRound].gain.length)]
      console.log(randomGain);
      let randomAction1: object =
      Actions[playerRound].spend1[Math.floor(Math.random() * Actions[playerRound].spend1.length)]
      console.log(randomAction1);
      let randomAction2: object =
      Actions[playerRound].spend3[Math.floor(Math.random() * Actions[playerRound].spend3.length)]
      console.log(randomAction2);
      let availableActions = {
        ...randomGain,
        ...randomAction1,
        ...randomAction2,
      };
      console.log(availableActions);

      setTimeout(async () => {
        const { value: userChoice } = await Swal.fire({
          title: `${playerNames[active]}, choose action`,

          input: "radio",
          inputOptions: availableActions,
          inputValidator: (value) => {
            if (!value) {
              return "You need to choose something!";
            } else {
              if (parseInt(value) < 0 && points[active] < -parseInt(value)) {
                return "Not enough points!";
              } else {
                return null;
              }
            }
          },
          confirmButtonText: "Cool",
          allowOutsideClick: false,
          allowEscapeKey: false,
          footer: `Available points: ${points[active]}`,
        });

        updatePoints(active, points[active] + parseInt(userChoice));
      }, 600);
    }
   
    if(Tiles[tileNumber].move) {
      console.log(Tiles[tileNumber].move)
      setTimeout(() => {
        let newTileValue = calculateNewTile((roll + Tiles[tileNumber].move), currTile[active]);
        updateCurrTile(active, newTileValue);
        let token =
          active === 0
            ? document.getElementById("tokenMale")
            : document.getElementById("tokenFemale");
    
        const currentTile: any = document.getElementById(
          `tile-${`${newTileValue}`}`
        );
        const tileLeft = currentTile.getBoundingClientRect().left;
        const tileTop = currentTile.getBoundingClientRect().top;
        token!.style.transform = `translate(${tileLeft + 35}px, ${tileTop + 35}px)`;
      }, 500)
    }

    ////////////////////// SET THE ACTIVE PLAYER //////////////////////
    if (!Tiles[tileNumber].bonus) {
    active === 0 ? setActive(1) : setActive(0);
    }

    setTimeout(() => (rollRef.current.style.pointerEvents = "auto"), 1000);
  };

  return (
    <div className={styles.dice}>
      <p id="active-player" ref={activeRef} className={styles.active}>
        {active === 0 ? playerNames[0] : playerNames[1]}'s turn
      </p>
      <div className={styles.diceContainer} ref={diceContainerRef}>
      <DiceComponent
        size={50}
        triggers={["Enter"]}
        onRoll={(TValue) => {
          handleRoll(TValue);
          diceContainerRef.current.style.overflow = "hidden"
        }}
        rollingTime={2}
        ref={diceRef}
      />
      </div>
      <button onClick={onRoll} ref={rollRef} className={styles.rollButton}>
      <span>Roll the dice!</span>
  <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
  
      </button>
      
    </div>
  );
}

export default Dice;
