import CardImage from "./CardImage";
import CardContent from "./CardContent";
import style from "./CardHorizontal.style.module.css";
import image from "../../../assets/arena_poznan.jpg";

const CardHorizontal = (props) => {
    return(
        <div className={style.container}>
            <CardImage image={image}/>
            <CardContent sport="Siatkówka" arena="Hala Widowiskowo Sporotwa" participants="5 na 10"/>
        </div>
    );
}

export default CardHorizontal;