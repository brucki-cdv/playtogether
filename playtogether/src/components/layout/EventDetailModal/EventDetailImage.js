import style from './EventDetailImage.style.module.css';
import image from '../../../assets/arena_poznan.jpg';
const EventDetailImage = (props) => {
    return(
        <div className={style.imageContainer}>
            <img className={style.image} src={image} alt="Arena"/>
        </div>
    )
};

export default EventDetailImage;