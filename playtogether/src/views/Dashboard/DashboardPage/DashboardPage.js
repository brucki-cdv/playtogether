import style from './DashboardPage.style.module.css'
import Sidebar from "../../../components/layout/Sidebar/Sidebar";
import DashboardWrapper from "./DashboardWrapper";
const DashboardPage = (props) => {
    return(
        <div className={style.container}>
            <Sidebar/>
            <DashboardWrapper/>
        </div>
    );
}
export default DashboardPage;