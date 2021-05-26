import React from 'react'
import Text from '../../atoms/text/Text'
import './styles.css'

function Footer(props){
    return(
        <div className={props.className}>
            <Text className={props.textClassName}>{props.children}</Text>
        </div>
    )
}

export default Footer