import {Fragment} from "react";
import style from './FormInput.style.module.css'
const FormInput = (props) => {

    return(
        <Fragment>
            <input className={style.input} type="text" placeholder={props.placeholder} value={props.value}/>
        </Fragment>
    );
}

export default FormInput;