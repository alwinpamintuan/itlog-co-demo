import React from 'react'
import './styles.css'
import Icon from '../../components/atoms/icon/Icon'
import NavBar from '../../components/organisms/navbar/NavBar'
import MainContent from '../../components/organisms/maincontent/MainContent'
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
        headerClass: "tagline",
        src: mainimage,
        iconClass: "image flex-end"
    }

    return(
        <div className="bg-yellow-orange pad-page">
            <NavBar className="row" content={navbarprops}></NavBar>
            <MainContent className="content-center" content={contentprops}>Ilalabas ko lang Itlog Co.</MainContent>
        </div>
    )
}

export default HomePage