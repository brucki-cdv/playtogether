import style from './CardWraper.style.module.css';
import CheckItButton from "../../forms/CheckItButton/CheckItButton";
const CardWraper = (props) => {
    return(
        <div className={style.container}>
            {props.children}
        </div>
    );
}

export default CardWraper;