import style from './UsersList.style.module.css';
import UserButton from "../UserButton/UserButton";
const UsersList = props => {
    return(
        <div className={style.container}>
            <h1 className={style.title}>{props.title}</h1>
            <div className={style.list}>
                <UserButton name="Marcin " surname="Kowalski" type="Organizator"/>
                <UserButton name="Marcin " surname="Kowalski" type="Uczestnik"/>
                <UserButton name="Marcin " surname="Kowalski" type="Uczestnik"/>
                <UserButton name="Marcin " surname="Kowalski" type="Uczestnik"/>
                <UserButton name="Marcin " surname="Kowalski" type="Uczestnik"/>
            </div>
        </div>
    );
}

export default UsersList;