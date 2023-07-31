import styles from "./TokenMale.module.css";
import { useRef, useEffect, useContext } from "react";
import {GameContext} from '../../../pages/index'

export default function TokenMale() {
  const tokenRef: any = useRef(null);

 
  const {tracker, setTracker, currTile} = useContext(GameContext)


  useEffect(() => {
    const handleWindowResize = () => {
      window.scrollTo(0,0)
      setTracker(tracker + 1);
    };

    window.addEventListener("resize", handleWindowResize);
    


    const startingTile: any = document.getElementById(
      `tile-${`${currTile[0]}`}`
    );
    const tileLeft = startingTile.getBoundingClientRect().left;
    const tileTop = startingTile.getBoundingClientRect().top;
    
    tokenRef.current.style.transitionDuration = "0s"
    tokenRef.current.style.transform = `translate(${tileLeft + 35}px, ${
      tileTop + 35
    }px)`;
    setTimeout(() => tokenRef.current.style.transitionDuration = "0.5s", 1000)

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [tracker]);



  return (
    <div className={styles.tokenMale} ref={tokenRef} id="tokenMale">
     </div>
  );
}
