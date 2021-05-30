import React from 'react'
import './styles.css'
import NavBar from '../../components/organisms/navbar/NavBar'
import MainContent from '../../components/organisms/maincontent/MainContent'
import ProductLine from '../../components/organisms/productline/ProductLine'
import Footer from '../../components/organisms/footer/Footer'

function HomePage(props){
    return(
        <div className="bg-yellow-orange column">
            <NavBar className="row sticky-top bg-yellow pad-lr" content={props.navbar}></NavBar>
            <MainContent className="content-center pad-lr height-full" content={props.content}>{props.tagline}</MainContent>
            <ProductLine className="bg-gray-black height-3qrt pad-tb" content={props.product}>{props.productHeader}</ProductLine>
            <Footer className="footer-black">{props.footerContent}</Footer>
        </div>
    )
}

export default HomePage