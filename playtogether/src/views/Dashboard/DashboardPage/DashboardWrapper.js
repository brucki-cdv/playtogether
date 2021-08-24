import style from './DashboardWrapper.style.module.css'
import FormInput from "../../../components/forms/FormInput/FormInput";
import Header from "../../../components/Header/Header";
import CardVertical from "../../../components/cards/CardVertical/CardVertical";
import CardHorizontal from "../../../components/cards/CardHorizontal/CardHorizontal";
const DashboardWrapper = (props) => {
    return (
        <div className={style.container}>
            <div className={style.box}>
                <FormInput placeholder="Szukaj"/>
                <div className={style.header}>
                    <Header text="Szybki wybor"/>
                </div>
                <div className={style.cardsBox}>
                    <div className={style.card}>
                        <CardVertical tags="Hala, boisko" header="Piłka Nożna"/>
                    </div>
                    <div className={style.card}>
                        <CardVertical tags="Plaża, hala" header="Piłka Siatkowa"/>
                    </div>
                    <div className={style.card}>
                        <CardVertical tags="Kort, hala" header="Tenis"/>
                    </div>
                    <div className={style.card}>
                        <CardVertical tags="Kort, hala" header="Tenis"/>
                    </div>
                </div>
                <div className={style.header}>
                    <Header text="Popularne w twojej okolicy"/>
                </div>
                <div className={style.horizontalCardsBox}>
                        <CardHorizontal/>
                        <CardHorizontal/>
                        <CardHorizontal/>
                        <CardHorizontal/>
                </div>
            </div>
        </div>
    );
}

export default DashboardWrapper;