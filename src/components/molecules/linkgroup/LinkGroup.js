import Link from '../../atoms/link/Link'
import './styles.css'

function LinkGroup(props){
    return(
        <div className={props.className}>
            {
                props.children.map((link, index) => (
                    <Link>{link}</Link>
                ))
            }
        </div>
    )
}

export default LinkGroup