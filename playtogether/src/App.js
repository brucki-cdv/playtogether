import './App.css';
import GoogleLogoButton from "./components/forms/LogoButton/GoogleLogoButton";
import FacebookLogoButton from "./components/forms/LogoButton/FacebookLogoButton";
import LoginButton from "./components/forms/LoginButton/LoginButton";
import FormInput from "./components/forms/FormInput/FormInput";
import FormCheckBox from "./components/forms/FormCheckBox/FormCheckBox";
import HomeButton from "./components/forms/SidebarButtons/HomeButton";
import EventButton from "./components/forms/SidebarButtons/EventButton";
import InformationsButton from "./components/forms/SidebarButtons/InformationsButton";
import ProfileButton from "./components/forms/SidebarButtons/ProfileButton";
import SettingsButton from "./components/forms/SidebarButtons/SettingsButton";
import CheckItButton from "./components/forms/CheckItButton/CheckItButton";
import CardVertical from "./components/cards/CardVertical/CardVertical";
import Header from "./components/Header/Header";
import CardHorizontal from "./components/cards/CardHorizontal/CardHorizontal";
function App() {
    return (
        <div className="App">
            <GoogleLogoButton logo='google.svg' text='Zaloguj sie z Google'/>
            <FacebookLogoButton logo='facebook.svg' text='Zaloguj sie z Facebook'/>
            <LoginButton text='Zaloguj się!'/>
            <FormInput placeholder='Adres email'/>
            <FormInput placeholder='Haslo uzytkownika'/>
            <FormCheckBox id='rememberme' name='rememberme' text='Zapamiętaj mnie!'/>
            <HomeButton/>
            <EventButton/>
            <InformationsButton/>
            <ProfileButton/>
            <SettingsButton isBig='true'/>
            <CheckItButton isBig={true}/>
            <CardVertical tags='Orlik, hala' header='Pilka Nozna'/>
            <Header text="Szybki wybór"/>
            <CardHorizontal/>
        </div>
    );
}

export default App;
