import style from './ProfileBannerWrapper.style.module.css';
import ProfileImage from "./ProfileImage";
import ProfileText from "./ProfileText";
const ProfileBannerWrapper = (props) => {
    return(
        <div className={style.container}>
           <ProfileImage/>
            <ProfileText text="Ewelina Kowalska"/>
        </div>
    );
}
export default ProfileBannerWrapper;