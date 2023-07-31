import React, {useContext} from 'react'
import styles from './Round.module.css'
import AppContext from '../../AppContext'


function Round() {
   const {round} = useContext(AppContext)

    return (
        <div className={styles.roundCounter}>
            Current round: 
            {round[1] > round[0] ? round[1] : round[0]}
        </div>
    )
}

export default Round
