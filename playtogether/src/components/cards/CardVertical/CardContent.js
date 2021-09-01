import style from './CardContent.style.module.css'
import CheckItButton from "../../forms/CheckItButton/CheckItButton";
const CardContent = (props) => {
    return (
        <div className={style.container}>
            <h1>{props.header}</h1>
            <div class={style.sportTag}>
                <div className={style.horizontalLine}/>
                <p>{props.tags}</p>
                <div className={style.horizontalLine}/>
            </div>
            <div className={style.checkItButton}>
            <CheckItButton isBig={false}/>
            </div>
        </div>
    );
}

export default CardContent;