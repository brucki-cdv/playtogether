import style from './EventDetailModal.style.module.css';
import EventDetailModalWrapper from "./EventDetailModalWrapper";
import CategorySection from "./CategorySection";
import DescriptionSection from "./DescriptionSection";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailImage from "./EventDetailImage";
import UsersList from "./UsersList";

const EventDetailModal = (props) => {
    return (
        <div className={style.container}>
            <div className={style.contextBox}>
                <EventDetailModalWrapper>
                    <div className={style.eventDetailContainer}>
                        <EventDetailImage/>
                        <div className={style.headerContainer}>
                            <EventDetailHeader title="Arena Hala Widowiskowo - Sportowa"
                                               address="Stanisława Wyspiańskiego 33, 60-751 Poznań"
                                               dataTime="Start 12:30"
                            />
                        </div>
                    </div>
                    <div className={style.modalContext}>
                        <div className={style.leftSide}>
                          <DescriptionSection title="Opis:"
                                              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                          <CategorySection title="Kategorie:" sport="Siatkówka" type="Mecz" experience="3" age="17"/>
                        </div>
                        <div className={style.rightSide}>
                            <UsersList title="Lista Uczestników:"/>
                        </div>

                    </div>
                </EventDetailModalWrapper>
            </div>
        </div>
    );
}

export default EventDetailModal;