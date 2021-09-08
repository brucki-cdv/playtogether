import style from './EventDetailHeader.style.module.css';
import JoinInButton from "./JoinInButton";
import LocationButton from "./LocationButton";
import UserButton from "../UserButton/UserButton";
const EventDetailHeader = props => {
    return (
        <div>
            <div className={style.container}>
                <h1 className={style.title}>{props.title}</h1>
                <p className={style.address}>{props.address}</p>
                <p className={style.datatime}>{props.dataTime}</p>
            </div>
            <div className={style.buttonsContainer}>
                <JoinInButton title="Dołącz"/>
                <LocationButton title="Lokalizacja"/>
                <UserButton name="Adam" surname="Kowalski" type="Uczestnik"/>
            </div>
        </div>
    );
}
export default EventDetailHeader;