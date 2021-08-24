import style from './SidebarWrapper.style.module.css';

const SidebarWrapper = (props) => {
    return(
        <div className={style.container}>
            <h1 className={style.logo}>PT.</h1>
            <div className={style.btns}>{props.children}</div>
        </div>
    );
}
export default SidebarWrapper;