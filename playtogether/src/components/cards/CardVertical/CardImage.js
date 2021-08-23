import style from './CardImage.style.module.css';
import football from '../../../assets/football.jpg';
const CardImage = (props) => {
    return(
        <div className={style.cardImage}>
            <img src={football} alt="Football"/>
        </div>
    );
}
export default CardImage;