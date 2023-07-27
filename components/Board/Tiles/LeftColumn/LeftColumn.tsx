import styles from "./LeftColumn.module.css";
import Tile from "../../Tile/Tile";
import { Tiles } from "../const";

export default function LeftColumn() {
  const arrayLowerRow = Tiles.slice(8, 11);

  return (
    <div className={styles.leftColumn}>
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
