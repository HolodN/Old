import style from './header.module.css'
import { Link } from 'react-router-dom'

const Header =(props)=>{
    return(
        <header>
        <Link to={'/'}>
        <h1 className={style.logo}> LIVE-TYR</h1>
        </Link>
        <nav>
        <Link to={'/favorites'}>
            <h6 className={style.nav_item}>Избранное</h6>
        </Link>
                <a className={style.nav_item} onClick={props.openOverlay} href="#"> Заявки</a>
        </nav>
    </header>
    )
}
export default Header