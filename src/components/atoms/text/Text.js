import React from 'react'
import './styles.css'

function Text(props){
    return(
        <p className={props.className}>{props.children}</p> 
    )
}

export default Text