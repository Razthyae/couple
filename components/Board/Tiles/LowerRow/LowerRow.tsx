import styles from "./LowerRow.module.css";
import Tile from "../../Tile/Tile";
import { Tiles } from "../const";

export default function LowerRow() {
  const arrayLowerRow = Tiles.slice(0, 8);

  return (
    <div className={styles.lowerRow}>
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
