import style from './JoinInButton.style.module.css';

const JoinInButton = props => {
    return (
        <div>
            <button className={style.button}>{props.title}</button>
        </div>
    );
}

export default JoinInButton;