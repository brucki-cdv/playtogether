import style from './Header.style.module.css'
import {Fragment} from "react";
const Header = (props) => {
    return(
        <Fragment>
        <h1 className={style.header}>{props.text}</h1>
        <div className={style.horizontalLine}/>
        </Fragment>
    );
}

export default Header;