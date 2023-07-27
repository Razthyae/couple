import styles from "./RightColumn.module.css";
import Tile from "../../Tile/Tile";
import { Tiles } from "../const";

export default function RightColumn() {
  const arrayLowerRow = Tiles.slice(19, 22);

  return (
    <div className={styles.rightColumn}>
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
