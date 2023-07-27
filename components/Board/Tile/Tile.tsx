import styles from './Tile.module.css'

export default function Tile(props: any) {
    return(
<div className={styles.tile} id={props.id}>
   <p> {props.id} {props.name} </p>
   <p> {props.points} </p>
   {props.action && <p>Akcja</p>}
</div>
        )
}

export {}