import React from 'react'
import Header from '../../atoms/header/Header'
import Card from '../../molecules/card/Card'
import './styles.css'

function ProductLine(props){
    return(
        <div className={props.className}>
            <Header className={props.content.headerClass}>{props.children}</Header>
            <div className={props.content.productsClass}>
                <Card className={props.content.cardClass}
                      headerClass={props.content.headerClass}
                      productClass={props.content.productClass}
                      children={props.content.product1}
                />
                <Card className={props.content.cardClass}
                      headerClass={props.content.headerClass}
                      productClass={props.content.productClass}
                      children={props.content.product2}
                />
                <Card className={props.content.cardClass}
                      headerClass={props.content.headerClass}
                      productClass={props.content.productClass}
                      children={props.content.product3}
                />
            </div>
        </div>
    )
}

export default ProductLine