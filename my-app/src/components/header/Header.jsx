import style from './header.module.css'

const Header =(props)=>{
    return(
        <header>
        <h1 className={style.logo}> LIVE-TYR</h1>
        <nav>
                <a className={style.nav_item} href="">Избранное</a>
                <a className={style.nav_item} onClick={props.openOverlay} href="#">Заявки</a>
        </nav>
    </header>
    )
}
export default Header