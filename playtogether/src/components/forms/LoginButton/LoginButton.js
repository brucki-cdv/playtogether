import {Fragment} from "react";
import style from './LoginButton.style.module.css';

const LoginButton = (props) => {

    return(
        <Fragment>
            <button className={style.btn}>{props.text}</button>
        </Fragment>
    );
}
export default LoginButton;