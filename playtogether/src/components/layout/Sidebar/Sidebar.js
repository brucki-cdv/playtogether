import style from './Sidebar.style.module.css';
import SidebarWrapper from "./SidebarWrapper";
import HomeButton from "../../forms/SidebarButtons/HomeButton";
import ProfileButton from "../../forms/SidebarButtons/ProfileButton";
import EventButton from "../../forms/SidebarButtons/EventButton";
import InformationsButton from "../../forms/SidebarButtons/InformationsButton";
import SettingsButton from "../../forms/SidebarButtons/SettingsButton";
const Sidebar = (props) => {
    return(
       <SidebarWrapper>
           <HomeButton/>
           <ProfileButton/>
           <EventButton/>
           <SettingsButton/>
           <InformationsButton/>
       </SidebarWrapper>
    );
}

export default Sidebar;