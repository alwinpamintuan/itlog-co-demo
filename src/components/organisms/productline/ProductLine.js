import React from 'react'
import Header from '../../atoms/header/Header'

function ProductLine(props){
    return(
        <div className={props.className}>
            <Header className={props.content.headerClass}>{props.children}</Header>
            
        </div>
    )
}

export default ProductLine