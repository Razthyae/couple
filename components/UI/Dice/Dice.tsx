import React, { useRef, useContext } from "react";
import styles from "./Dice.module.css";
import { Tiles, Actions, aActions1, aActions3 } from "../../Board/Tiles/const";
import { act } from "react-dom/test-utils";
import Swal from "sweetalert2";
import AppContext from "../../../components/AppContext";
import Link from "next/link";
import { useRouter } from "next/router";

/* interface Props {
    diceResult: number | null,
    setDiceResult: 
} */

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
    playerNames
  } = useContext(AppContext);

  const rollRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

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
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Back to main menu',
            allowEscapeKey: false,
            allowOutsideClick: false
          }).then((result) => {
            if (result.isConfirmed) {
              router.push('/')
            }
          })
         /*  router.push('/') */
        }, 1001);
      }
      updateRound(active, round[active] + 1);
    }

    return result;
  };

  const handleRoll = () => {
    rollRef.current!.disabled = true;

    ////////////////////// ROLL THE DICE //////////////////////
    let roll: number = Math.ceil(Math.random() * 6);
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
    token!.style.transform = `translate(${tileLeft + 35}px, ${tileTop + 35}px)`;

    ////////////////// ADD / REMOVE POINTS / TILE ACTION ////////////////
    let tileNumber = calculateNewTile(roll, currTile[active]) - 1;

    let tilePoints = Tiles[tileNumber].points;

    if (Number.isInteger(tilePoints)) {
      updatePoints(active, points[active] + tilePoints);
    }
    if (Tiles[tileNumber].action && !devMode) {
      let basicAction: object = { "3": "Add 3 victory points" };
      console.log(basicAction);
      let randomAction1: object =
        aActions1[Math.floor(Math.random() * aActions1.length)];
      console.log(randomAction1);
      let randomAction2: object =
        aActions3[Math.floor(Math.random() * aActions3.length)];
      console.log(randomAction2);
      let availableActions = {
        ...basicAction,
        ...randomAction1,
        ...randomAction2,
      };
      console.log(availableActions);

      setTimeout(async () => {
        const { value: userChoice } = await Swal.fire({
          title: "Choose action",

          input: "radio",
          inputOptions: availableActions,
          inputValidator: (value) => {
            if (!value) {
              return "You need to choose something!";
            } else {
              if (points[active] < -parseInt(value)) {
                return "Not enough points!";
              } else {
                return null;
              }
            }
          },
          confirmButtonText: "Cool",
          allowOutsideClick: false,
          allowEscapeKey: false,
        });

        updatePoints(active, points[active] + parseInt(userChoice));
      }, 600);
    }

    ////////////////////// SET THE ACTIVE PLAYER //////////////////////

    active === 0 ? setActive(1) : setActive(0);

    setTimeout(() => (rollRef.current!.disabled = false), 1000);
  };

  return (
    <div className={styles.dice}>
      <p id="dice-result">{diceResult}</p>
      <p id="active-player">{active === 0 ? "Male" : "Female"}</p>
      <button onClick={handleRoll} id="dice-btn" ref={rollRef}>
        Roll the dice
      </button>
      <button onClick={() => setDevMode(!devMode)}>
        Dev mode = {`${devMode}`}{" "}
      </button>
      <Link href="/">Main menu</Link>
    </div>
  );
}

export default Dice;
