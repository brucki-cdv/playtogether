import style from './EventDetailModalWrapper.style.module.css'

const EventDetailModalWrapper = (props) => {
    return(
        <div className={style.contextBox}>
            {props.children}
        </div>
    );
}

export default EventDetailModalWrapper;

