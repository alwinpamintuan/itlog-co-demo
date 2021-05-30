import React from 'react'
import Icon from '../../atoms/icon/Icon'
import Text from '../../atoms/text/Text'
import Header from '../../atoms/header/Header'
import './styles.css'

function Card(props){
    console.log(props)
    return(
        <div className={props.className}>
            <Text className={props.priceClass}>{"• ₱ " + props.children.price}</Text>
            <div>
                <Icon className={props.productClass} src={props.children.image}></Icon>
                <Header className={props.productTitleClass}>{props.children.name}</Header>
                <Text className={props.priceClass}>{props.children.description}</Text>
            </div>
        </div>
    )
}

export default Card