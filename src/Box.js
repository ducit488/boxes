import React from 'react'
import box from './style.css'

export default function Box(pros) {
    const styles = {
        backgroundColor: pros.on ? "#222222" : "transparent",
        transition: "background-color 0.5s ease-in-out",
    }
    console.log(box)
    return (
        <div
            style={styles}
            className="box"
            onClick={()=> pros.toggle(pros.id)}
        >
        </div>
    )
}
