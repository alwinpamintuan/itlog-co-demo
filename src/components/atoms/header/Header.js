import React from 'react'
import './styles.css'

function Header(props){
    return(
        <h1 className={props.className}>{props.children}</h1> 
    )
}

export default Header