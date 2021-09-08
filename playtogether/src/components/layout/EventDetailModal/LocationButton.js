import style from './LocationButton.style.module.css';

const LocationButton = props => {
    return (
        <div>
            <button className={style.button}>{props.title}</button>
        </div>
    )
}
export default LocationButton;