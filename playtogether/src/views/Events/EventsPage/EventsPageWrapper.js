import style from './EventsPageWrapper.style.module.css'
import FormInput from "../../../components/forms/FormInput/FormInput";
import FormSportList from "../../../components/forms/FormSportList/FormSportList";
import Header from "../../../components/Header/Header";
import FormCheckBox from "../../../components/forms/FormCheckBox/FormCheckBox";
import FormSortList from "../../../components/forms/FormSortList/FormSortList";
import CardHorizontal from "../../../components/cards/CardHorizontal/CardHorizontal";
import ProfileBanner from "../../../components/layout/ProfileBanner/ProfileBanner";
const EventsPageWrapper = (props) => {
    return (
        <div className={style.container}>
            <div className={style.modalBox}>
        `       <p> dupa</p>
            </div>
            <div className={style.box}>
                <ProfileBanner/>
                <div className={style.header}>
                    <Header text="Wyszukaj event w okolicy"/>
                </div>
                <div className={style.loginBox}>

                </div>
                <div className={style.formInput}>
                    <FormInput placeholder="Wyszukaj"/>
                </div>
                <div className={style.listBox}>
                    <FormSportList/>
                    <FormSortList/>
                </div>
                <div className={style.cardBox}>
                    <div className={style.card}>
                    <CardHorizontal/>
                    </div>
                </div>
                <div className={style.cardBox}>
                    <div className={style.card}>
                        <CardHorizontal/>
                    </div>
                </div>
                <div className={style.cardBox}>
                    <div className={style.card}>
                        <CardHorizontal/>
                    </div>
                </div>
                <div className={style.cardBox}>
                    <div className={style.card}>
                        <CardHorizontal/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventsPageWrapper;