import Header from '../../atoms/header/Header'
import './styles.css'

function Brand(props){
    return(
        <div className="brand">
            <img src={props.logo} alt={props.children} className={props.logoClass}></img>
            <Header className={props.headerClass}>{props.children}</Header>
        </div>
    )
}

export default Brand