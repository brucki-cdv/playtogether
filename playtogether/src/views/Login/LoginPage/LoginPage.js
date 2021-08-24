import style from './LoginPage.style.module.css';
import LeftPanelWrapper from "./LeftPanelWrapper";
import RightPanelWrapper from "./RightPanelWrapper";
const LoginPage = (props) => {
    return (
        <div className={style.container}>
            <LeftPanelWrapper/>
            <RightPanelWrapper/>
        </div>
    );
}

export default LoginPage;