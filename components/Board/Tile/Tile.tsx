import styles from './Tile.module.css'

export default function Tile(props: any) {
    return(
<div className={styles.tile} id={props.id}>
{props.name && <p>{props.name}</p>}
   
 
</div>
        )
}

export {}