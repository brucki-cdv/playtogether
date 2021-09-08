import Sidebar from "../../../components/layout/Sidebar/Sidebar";
import EventsPageWrapper from "./EventsPageWrapper";
import LoginButton from "../../../components/forms/LoginButton/LoginButton";
import FormSportList from "../../../components/forms/FormSportList/FormSportList";
import EventDetailModal from "../../../components/layout/EventDetailModal/EventDetailModal";
const EventsPage = (props) => {
    return (
        <div>
            <EventDetailModal/>
            <Sidebar/>
            <EventsPageWrapper/>
        </div>
    );
}

export default EventsPage;