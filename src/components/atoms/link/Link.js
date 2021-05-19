import React from 'react'
import './styles.css'

function Link(props){
    return(
        <a  className={props.className}
            href={props.path? props.path : "/"}
            // target="_blank"
            // rel="noopener noreferrer"
        >
            {props.children}
        </a>
    )
}

export default Link