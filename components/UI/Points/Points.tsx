import React from 'react'
import styles from './Points.module.css'

function Points(props: any) {
    const {points} = props

    return (
        <div className={styles.points}>
            <p>Male: {points[0]} Female: {points[1]}</p>
        </div>
    )
}

export default Points
