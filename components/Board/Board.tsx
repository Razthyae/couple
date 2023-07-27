import styles from './Board.module.css'
import UpperRow from './Tiles/UpperRow/UpperRow'
import LowerRow from './Tiles/LowerRow/LowerRow'
import LeftColumn from './Tiles/LeftColumn/LeftColumn'
import RightColumn from './Tiles/RightColumn/RightColumn'

export default function Board() {
    return(
        <div className={styles.board}>
<UpperRow />
<div className={styles.colContainer}>
<LeftColumn />
<RightColumn />
</div>
<LowerRow />  
        </div>
    )
}