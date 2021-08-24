import style from './LeftPanelWrapper.style.module.css';
import FormInput from "../../../components/forms/FormInput/FormInput";
import GoogleLogoButton from "../../../components/forms/LogoButton/GoogleLogoButton";
import FacebookLogoButton from "../../../components/forms/LogoButton/FacebookLogoButton";
import LoginButton from "../../../components/forms/LoginButton/LoginButton";
import FormCheckBox from "../../../components/forms/FormCheckBox/FormCheckBox";


const LeftPanelWrapper = (props) => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <h1>Witaj!</h1>
                <div className={style.logoButtonContainer}>
                    <GoogleLogoButton text="Zaloguj sie z Google"/>
                    <FacebookLogoButton text="Zaloguj sie z Facebook"/>
                </div>
                <div className={style.greyHeader}>
                    <div className={style.horizontalLine}/>
                    <p>Albo zaloguj się przez email</p>
                    <div className={style.horizontalLine}/>
                </div>
                <div className={style.inputContainer}>
                    <FormInput placeholder="Adres Email"/>
                    <FormInput placeholder="Hasło użytkownika"/>
                    <div className={style.checkBoxContainer}>
                    <FormCheckBox text="Zapamiętaj mnie!"/>
                    <a href={'/dashboard'}>Zapomnialem hasla</a>
                    </div>
                    <LoginButton text="Zaloguj sie!"/>
                    <div className={style.greyHeader}>
                        <div className={style.horizontalLine}/>
                        <p>Nie masz konta? <a href={'/dashboard'}>Stwórz je!</a></p>
                        <div className={style.horizontalLine}/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default LeftPanelWrapper;