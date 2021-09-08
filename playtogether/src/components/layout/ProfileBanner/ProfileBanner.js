import style from './ProfileBanner.style.module.css';
import ProfileBannerWrapper from "./ProfileBannerWrapper";

const ProfileBanner = (props) => {
    return(
        <div className={style.container}>
          <ProfileBannerWrapper/>
        </div>
    );
}

export default ProfileBanner;