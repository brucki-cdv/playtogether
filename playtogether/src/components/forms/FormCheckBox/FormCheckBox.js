import {Fragment} from "react";
import style from './FormCheckBox.style.module.css';

const FormCheckBox = (props) => {
    return (
        <Fragment>
            <div>
                <input className={style.checkbox} type="checkbox" id={props.id} name={props.name}/>
                <label className={style.checkboxText} for={props.id}>{props.text}</label>
            </div>
        </Fragment>
    );
}

export default FormCheckBox;