import image from '../../assets/girl.jpg';
import style from './ProfileImage.style.module.css';
const ProfileImage = (props) => {
    return(
      <img className={style.image} src={image} alt='Profile'/>
    );
}
export default ProfileImage;