import styles from "./UpperRow.module.css";
import Tile from "../../Tile/Tile";
import { Tiles } from "../const";

export default function UpperRow() {
  const arrayLowerRow = Tiles.slice(11, 19);

  return (
    <div className={styles.upperRow}>
      {arrayLowerRow.map((item) => (
        <Tile
          id={item.id}
          name={item.name}
          points={item.points}
          action={item.action}
        />
      ))}
    </div>
  );
}
