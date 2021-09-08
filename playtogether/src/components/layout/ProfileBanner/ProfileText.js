import style from './ProfileText.style.module.css';

const ProfileText = (props) => {
    return(
        <p className={style.profileText}>{props.text}</p>
    );
}
export default ProfileText;