import React, { useRef, useContext } from "react";
import styles from "./Dice.module.css";
import { Tiles, Actions } from "../../Board/Tiles/const"
import { calculateNewTile } from "./helper";
import { act } from "react-dom/test-utils";
import Swal from "sweetalert2";
import {GameContext} from '../../../pages/index'

/* interface Props {
    diceResult: number | null,
    setDiceResult: 
} */

function Dice() {
  const {
    diceResult,
    setDiceResult,
    currTileFemale,
    currTileMale,
    setCurrTileFemale,
    setCurrTileMale,
    activePlayer,
    setActivePlayer,
    pointsMale,
    pointsFemale,
    setPointsFemale,
    setPointsMale,
    currTile,
    setCurrTile,
    points,
    setPoints,
    active,
    setActive
  } = useContext(GameContext);

  const rollRef = useRef<HTMLButtonElement>(null);

  const handleRoll = () => {
    rollRef.current!.disabled = true;

    ////////////////////// ROLL THE DICE //////////////////////
    let roll: number = Math.ceil(Math.random() * 6);
    setDiceResult(roll);

    ////////////////////// MOVE THE ACTIVE PLAYER //////////////////////
    if (activePlayer === "male") {
      let newTileValue = calculateNewTile(roll, currTileMale);
      setCurrTileMale(newTileValue);
      const token = document.getElementById("tokenMale")
      const currentTile: any = document.getElementById(
        `tile-${`${newTileValue}`}`
      );
      const tileLeft = currentTile.getBoundingClientRect().left;
      const tileTop = currentTile.getBoundingClientRect().top;
      token!.style.transform = `translate(${tileLeft + 35}px, ${
        tileTop + 35
      }px)`;
    } else {
      let newTileValue = calculateNewTile(roll, currTileFemale);
      setCurrTileFemale(newTileValue);
      const token = document.getElementById("tokenFemale")
      const currentTile: any = document.getElementById(
        `tile-${`${newTileValue}`}`
      );
      const tileLeft = currentTile.getBoundingClientRect().left;
      const tileTop = currentTile.getBoundingClientRect().top;
      token!.style.transform = `translate(${tileLeft + 35}px, ${
        tileTop + 35
      }px)`;
    }

    /////////////////////// USING SINGLE FUNCTION ///////////////////////
    let newTileValue = calculateNewTile(roll, currTile[active])
    setCurrTileMale()


    //////////////// ADD / REMOVE POINTS / TILE ACTION/////////////////
    if (activePlayer === "male") {
      let tileNumber = calculateNewTile(roll, currTileMale) - 1;
      let tilePoints = Tiles[tileNumber].points;
      if (Number.isInteger(tilePoints)) {
        setPointsMale(pointsMale + tilePoints);
      }
      if (Tiles[tileNumber].action) {
        setTimeout(async() => {
          const { value: userChoice } = await Swal.fire({
            title: "Choose action",

            input: "radio",
            inputOptions: Actions,
            inputValidator: (value) => {
              if (!value) {
                return "You need to choose something!";
              } else {
                if (pointsMale < -parseInt(value)) {
           
                  return "Not enough points!"
                } else {
                return null;
                }
              }
            },
            confirmButtonText: "Cool",
          });
          setPointsMale(pointsMale + parseInt(userChoice))
        }, 600);
      }
    } else {
      let tileNumber = calculateNewTile(roll, currTileFemale) - 1;
      let tilePoints = Tiles[tileNumber].points;
      if (Number.isInteger(tilePoints)) {
        setPointsFemale(pointsFemale + tilePoints);
      }
      if (Tiles[tileNumber].action) {
        setTimeout(async () => {
          const { value: userChoice } = await Swal.fire({
            title: "Choose action",

            input: "radio",
            inputOptions: Actions,
            inputValidator: (value) => {
              if (!value) {
                return "You need to choose something!";
              } else {
                if (pointsFemale < -parseInt(value)) {
                  return "Not enough points!"
                } else {
                return null;
                }
              }
            },
            confirmButtonText: "Cool",
          });
          setPointsFemale(pointsFemale + parseInt(userChoice))
        }, 600);
      }
    }

    ////////////////////// SET THE ACTIVE PLAYER //////////////////////
    activePlayer === "male"
      ? setActivePlayer("female")
      : setActivePlayer("male");

    setTimeout(() => (rollRef.current!.disabled = false), 1000);
  };

  return (
    <div className={styles.dice}>
      <p id="dice-result">{diceResult}</p>
      <p id="active-player">{activePlayer}</p>
      <button onClick={handleRoll} id="dice-btn" ref={rollRef}>
        Roll the dice
      </button>
    </div>
  );
}

export default Dice;
