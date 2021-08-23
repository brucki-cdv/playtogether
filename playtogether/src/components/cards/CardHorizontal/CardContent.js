import style from './CardContent.style.module.css';
import CheckItButton from "../../forms/CheckItButton/CheckItButton";
const CardContent = (props) => {
    return (
        <div className={style.container}>
            <p>{props.sport}</p>
            <p>{props.arena}</p>
            <p>{props.participants}</p>
            <CheckItButton isBig={false}/>
        </div>
    );
}
export default CardContent;