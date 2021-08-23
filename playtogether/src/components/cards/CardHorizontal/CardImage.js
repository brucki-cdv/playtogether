import style from './CardImage.style.module.css';

const CardImage = (props) => {
    return(
        <div className={style.image}>
        <img src={props.image} alt="Arena Poznan"/>
        </div>
    );
}

export default CardImage;