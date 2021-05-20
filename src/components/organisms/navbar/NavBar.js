import React from 'react'
import Brand from '../../molecules/brand/Brand'
import LinkGroup from '../../molecules/linkgroup/LinkGroup'
import './styles.css'

function NavBar(props){
    return(
        <div className={props.className}>
            <Brand
                headerClass={props.content.headerClass}
                logo={props.content.logo}
                logoClass={props.content.logoClass}
            >
                    {props.content.brand}
            </Brand>
            <LinkGroup
                className="flex-between"
            >
                {props.content.links}
            </LinkGroup>
        </div>
    )
}

export default NavBar;