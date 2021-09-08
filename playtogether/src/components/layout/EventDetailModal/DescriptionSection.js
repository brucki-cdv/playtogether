import style from './DescriptionSection.style.module.css';

const DescriptionSection = props => {
    return (
        <div className={style.container}>
            <h1 className={style.header}>{props.title}</h1>
            <div className={style.context}>
                {props.description}
            </div>
        </div>
    )
}
export default DescriptionSection;