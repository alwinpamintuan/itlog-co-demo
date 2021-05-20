import Header from '../../atoms/header/Header'
import Icon from '../../atoms/icon/Icon'
import './styles.css'

function Brand(props){
    return(
        <div className="brand">
            <Icon
                src={props.logo}
                alt={props.children}
                className={props.logoClass}
            >
                {props.children}
            </Icon>
            <Header className={props.headerClass}>{props.children}</Header>
        </div>
    )
}

export default Brand