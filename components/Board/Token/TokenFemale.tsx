import styles from "./TokenFemale.module.css";
import { useRef, useEffect, useContext } from "react";
import AppContext from '../../../components/AppContext'

export default function TokenFemale() {
  const tokenRef: any = useRef(null);

  const { tracker, setTracker, currTile } = useContext(AppContext);

  useEffect(() => {
    const handleWindowResize = () => {
      console.log("zmiana");
      setTracker(tracker + 1);
    };

    window.addEventListener("resize", handleWindowResize);

    const startingTile: any = document.getElementById(
      `tile-${`${currTile[1]}`}`
    );
    const tileLeft = startingTile.getBoundingClientRect().left;
    const tileTop = startingTile.getBoundingClientRect().top;

    tokenRef.current.style.transitionDuration = "0s";
    tokenRef.current.style.transform = `translate(${tileLeft + 35}px, ${
      tileTop + 35
    }px)`;
    setTimeout(
      () => (tokenRef.current.style.transitionDuration = "0.5s"),
      1000
    );

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [tracker]);

  return (
    <div className={styles.tokenFemale} ref={tokenRef} id="tokenFemale"></div>
  );
}
