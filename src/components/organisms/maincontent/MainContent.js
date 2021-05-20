import Header from '../../atoms/header/Header'
import Icon from '../../atoms/icon/Icon'
import './styles.css'

function MainContent(props){
    return(
        <div className={props.className}>
            <Header className={props.content.headerClass}>{props.children}</Header>
            <Icon src={props.content.src} className={props.content.iconClass}>egg</Icon>
        </div>
    )
}

export default MainContent