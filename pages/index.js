import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useContext, useEffect } from "react";
import AppContext from "../components/AppContext";
import Link from "next/link";
import Logo from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Script from "next/script";
import { Metadata } from "next";

export const metadata = {
  viewport: "width=device-width, initial-scale=1.0"
}




export default function Home() {
  const { playerNames, updatePlayerNames, diceResult } = useContext(AppContext);

  const router = useRouter();

  const startGame = (event) => {
    if (playerNames[0] === "" || playerNames[1] === "") {
      if (event !== undefined) {
        event.preventDefault();
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Enter your names please :)",
        allowEnterKey: false,
      });
    } else {
      router.push("/game");
    }
  };

  /*   useEffect(() => {
    window.addEventListener('keypress', (event) => {
      if(event.key === "Enter") {
        console.log("Enter")
        document.getElementById("startButton").click();
        
      }
    })
  }, []) */
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      startGame();
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        



        <title>Couple's Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src={Logo} width={130} height={130} alt="Game logo" />
          <h1>COUPLE'S GAME</h1>
        </div>
        <fieldset className={styles.about}>
          <legend>How to play</legend>
      <p className={styles.sectionParagraph}>
        Throw the dice, earn <span className={styles.emphasis}>Lust Points (LP)</span>, and embark on a journey of pleasure together! In Couple's Game, each round intensifies, transitioning from lighthearted foreplay to... well, you know what ;)
      </p>

      <p className={styles.sectionParagraph}>
        Navigate the game board featuring 3 types of tiles:
      </p>
      
      <div className={styles.tileType}>
        <span className={styles.emphasis}>Lust Point Tile:</span> <span className={styles.bold}>Collect LP for exciting experiences.</span>
      </div>
      <div className={styles.tileType}>
        <span className={styles.emphasis}>Movement Tile:</span> <span className={styles.bold}>Progress your journey.</span>
      </div>
      <div className={styles.tileType}>
        <span className={styles.emphasis}>Action Tile:</span> <span className={styles.bold}>Engage in romantic tasks for your partner or have something special yourself!</span>
      </div>

      
      <p className={styles.sectionParagraph}>
        Remember the <span className={styles.goldenEmphasis}>golden rule</span> of Couple's Game: Maximize pleasure for both players!
      </p>
        </fieldset>
        <div className={styles.nameInput}>
          <input
            type="text"
            value={playerNames[0]}
            placeholder="Male"
            onChange={(event) => updatePlayerNames(0, event.target.value)}
            onKeyDown={handleKeyPress}
          ></input>
          <input
            type="text"
            value={playerNames[1]}
            placeholder="Female"
            onChange={(event) => updatePlayerNames(1, event.target.value)}
            onKeyDown={handleKeyPress}
          ></input>
        </div>

        <div className={styles.startButton}>
          <Link
            className={styles.cta}
            href="/game"
            onClick={startGame}
            id="startButton"
          >
            <span>
              {diceResult !== "Roll the dice!" ? "CONTINUE" : "START"}
            </span>
            <span>
              <svg
                width="56px"
                height="33px"
                viewBox="0 0 66 43"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="arrow"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path
                    className="one"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    className="two"
                    d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    className="three"
                    d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </svg>
            </span>
          </Link>
         
        </div>
        <div className={styles.restartContainer}>
          {diceResult !== "Roll the dice!" && (
            <button className={styles.restartButton} onClick={() => (window.location.href = "/")}>
              Restart
            </button>
          )}
          </div>
          
      </main>
      <div className={styles.overlay}>
           <p>This game is available in landscape orientation only. </p>
           <p>Rotate your device!</p>
          </div>
    </div>
  );
}
