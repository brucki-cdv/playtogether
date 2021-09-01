import Sidebar from "../../../components/layout/Sidebar/Sidebar";
import EventsPageWrapper from "./EventsPageWrapper";
import FormSportList from "../../../components/forms/FormSportList/FormSportList";
const EventsPage = (props) => {
    return (
        <div>
            <Sidebar/>
            <EventsPageWrapper/>
        </div>
    );
}

export default EventsPage;