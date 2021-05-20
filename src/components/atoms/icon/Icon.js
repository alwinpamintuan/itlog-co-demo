import React from 'react'
import './styles.css'

function Icon(props){
    return(
        <img src={props.src} alt={props.children} className={props.className}></img>
    )
}

export default Icon