import React from 'react'
import './styles.css'
import Icon from '../../components/atoms/icon/Icon'
import NavBar from '../../components/organisms/navbar/NavBar'
import MainContent from '../../components/organisms/maincontent/MainContent'
import ProductLine from '../../components/organisms/productline/ProductLine'
import Footer from '../../components/organisms/footer/Footer'
import logo from '../../resources/logo.svg'
import mainimage from '../../resources/image.svg'
import cart from '../../resources/shopping-cart.svg'

function HomePage(props){
    const navbarprops = {
        brand: "Itlog Co.",
        headerClass: "brand-name",
        logo: logo,
        logoClass: "logo",
        links: ["Shop",
                "About",
                "Contact",
                "Locations",
                <Icon src={cart} className="link">cart</Icon>
            ]
    }

    const contentprops = {
        src: mainimage,
        iconClass: "image",
        focus: "Itlog Co.?",
        subtext: "Yiieeee. Gusto niya!",
        textClass: "text",
        headerFocusClass: "tagline-focus",
        headerClass: "tagline"
    }

    const productprops = {
        headerClass: "tagline-focus-small text-center",
    }

    return(
        <div className="bg-yellow-orange column">
            <NavBar className="row sticky-top bg-yellow pad-lr" content={navbarprops}></NavBar>
            <MainContent className="content-center pad-lr height-full" content={contentprops}>Ready ka na ba sa</MainContent>
            <ProductLine className="bg-gray-black height-3qrt pad-tb" content={productprops}>Ang pinaka-eggciting</ProductLine>
            <Footer className="footer-black">© 2021 Itlog Co. All Rights Reserved.</Footer>
        </div>
    )
}

export default HomePage