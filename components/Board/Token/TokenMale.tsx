import styles from "./TokenMale.module.css";
import { useRef, useEffect } from "react";

export default function TokenMale(props: any) {
  const tokenRef: any = useRef(null);

  useEffect(() => {
    const handleWindowResize = () => {
      console.log("zmiana");
      props.setTracker(props.tracker + 1);
    };

    window.addEventListener("resize", handleWindowResize);

    const startingTile: any = document.getElementById(
      `tile-${`${props.currTileMale}`}`
    );
    const tileLeft = startingTile.getBoundingClientRect().left;
    const tileTop = startingTile.getBoundingClientRect().top;

    tokenRef.current.style.transform = `translate(${tileLeft + 35}px, ${
      tileTop + 35
    }px)`;

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [props.tracker]);



  return (
    <div className={styles.tokenMale} ref={tokenRef} id="tokenMale">
     </div>
  );
}
