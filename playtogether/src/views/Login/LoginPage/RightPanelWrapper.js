import style from './RightPanelWrapper.style.module.css';
import illustration from '../../../assets/login-illustration.png';

const RightPanelWrapper = (props) => {
    return(
        <div className={style.container}>
            <img src={illustration} alt="Sport"/>
        </div>
    );
}
export default RightPanelWrapper;