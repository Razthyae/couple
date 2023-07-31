import React, {useContext} from 'react'
import styles from './Points.module.css'
import AppContext from '../../../components/AppContext'

function Points() {
    const {points, playerNames} = useContext(AppContext)

    return (
        <div className={styles.points}>
            <p>{playerNames[0]}: {points[0]} {playerNames[1]}: {points[1]}</p>
        </div>
    )
}

export default Points
