import React from 'react'
import styles from './Round.module.css'



function Round(props) {
   const {round} = props

    return (
        <div className={styles.roundCounter}>
            Current round: 
            {round[1] > round[0] ? round[1] : round[0]}
        </div>
    )
}

export default Round
