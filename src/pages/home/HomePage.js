import React from 'react'
import './styles.css'
import Icon from '../../components/atoms/icon/Icon'
import NavBar from '../../components/organisms/navbar/NavBar'
import MainContent from '../../components/organisms/maincontent/MainContent'
import ProductLine from '../../components/organisms/productline/ProductLine'
import Footer from '../../components/organisms/footer/Footer'
import Logo from '../../resources/logo.svg'
import MainImage from '../../resources/image.svg'
import WhiteEgg from '../../resources/white-egg.png'
import BrownEgg from '../../resources/brown-egg.png'
import SaltedEgg from '../../resources/salted-egg.png'
import cart from '../../resources/shopping-cart.svg'

function HomePage(props){
    const navbarprops = {
        brand: "Itlog Co.",
        headerClass: "brand-name",
        logo: Logo,
        logoClass: "logo",
        links: ["Shop",
                "About",
                "Contact",
                "Locations",
                <Icon src={cart} className="link">cart</Icon>
            ]
    }

    const contentprops = {
        src: MainImage,
        iconClass: "image",
        focus: "Itlog Co.?",
        subtext: "Yiieeee. Gusto niya!",
        textClass: "text",
        headerFocusClass: "tagline-focus",
        headerClass: "tagline"
    }

    const productprops = {
        headerClass: "tagline-focus-small text-center",
        productNameClass: "product-name",
        productsClass: "grid-3 pad-lr pad-tb-m",
        productClass: "product",
        cardClass: "card pad-lr pad-tb",
        product1: {
            name: "Egg Classic",
            price: "150",
            description: "Itlog. 'Di ko alam paano pa ie-explain.",
            image: WhiteEgg
        },
        product2: {
            name: "Eggy Wow",
            price: "175",
            description: "Itlog lang din talaga. Pero brown. Edi wow.",
            image: BrownEgg
        },
        product3: {
            name: "Egg Xotic",
            price: "185",
            description: "Binabad sa asin. Kinulayan ng pala. Stonks.",
            image: SaltedEgg
        }

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