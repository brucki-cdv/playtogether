import style from './GoogleLogoButton.style.module.css';
import {Fragment} from "react";
import logo from '../../../assets/google.svg'

const GoogleLogoButton = (props) => {

    return (
        <Fragment>
            <button className={style.btn}>
                <img className={style.logo} src={logo} alt="Google Logo"/>
                {props.text}
            </button>
        </Fragment>
    );
}

export default GoogleLogoButton;