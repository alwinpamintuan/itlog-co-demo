import Header from '../../atoms/header/Header'
import Icon from '../../atoms/icon/Icon'
import Text from '../../atoms/text/Text'
import './styles.css'

function MainContent(props){
    return(
        <div className={props.className}>
            <div className="flex-col">
                <Header className={props.content.headerClass}>{props.children}</Header>
                <Header className={props.content.headerFocusClass}>{props.content.focus}</Header>
                <Text className={props.content.textClass}>{props.content.subtext}</Text>
            </div>
            <Icon src={props.content.src} className={props.content.iconClass}></Icon>
        </div>
    )
}

export default MainContent