import React from 'react'
import './styles.css'

function Link(props){
    const handleClick = (e) => {
        e.preventDefault();
    }

    return(
        <a  className={props.className}
            href={props.path? props.path : "/"}
            onClick={handleClick}
            // target="_blank"
            // rel="noopener noreferrer"
        >
            {props.children}
        </a>
    )
}

export default Link