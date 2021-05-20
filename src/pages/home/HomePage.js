import React from 'react'
import './styles.css'
import NavBar from '../../components/organisms/NavBar'
import Header from '../../components/atoms/header/Header'
import logo from '../../resources/logo.svg'

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
                <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                </>
            ]
    }

    return(
        <div className="bg-yellow-orange pad-page">
            <NavBar className="row" content={navbarprops}></NavBar>
            <Header className="tagline">Ilalabas ko lang Itlog Co.</Header>
        </div>
    )
}

export default HomePage