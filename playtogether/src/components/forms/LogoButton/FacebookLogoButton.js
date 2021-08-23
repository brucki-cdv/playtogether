import style from './GoogleLogoButton.style.module.css';
import {Fragment} from "react";
import logo from '../../../assets/facebook.svg'

const FacebookLogoButton = (props) => {

    return (
        <Fragment>
            <button className={style.btn}>
                <img className={style.logo} src={logo} alt="Facebook Logo"/>
                <p className={style.btnText}>{props.text}</p>
            </button>
        </Fragment>
    );
}

export default FacebookLogoButton;