import React from 'react'
import Icon from '../../components/atoms/icon/Icon'
import Logo from '../../resources/logo.svg'
import MainImage from '../../resources/image.svg'
import WhiteEgg from '../../resources/white-egg.png'
import BrownEgg from '../../resources/brown-egg.png'
import SaltedEgg from '../../resources/salted-egg.png'
import cart from '../../resources/shopping-cart.svg'
import HomeTemplate from '../../components/templates/HomeTemplate'

function HomePage(){
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
        <HomeTemplate
            navbar={navbarprops}
            content={contentprops}
            tagline={"Ready ka na ba sa"}
            product={productprops}
            productHeader={"Ang pinaka-eggciting"}
            footerContent={"© 2021 Itlog Co. All Rights Reserved."}
        />
    )
}

export default HomePage