import React from 'react'
import styles from './Points.module.css'

function Points(props: any) {
    const {pointsMale, pointsFemale} = props

    return (
        <div className={styles.points}>
            <p>Male: {pointsMale}</p>
            <p>Female: {pointsFemale}</p>
        </div>
    )
}

export default Points
