import {Fragment} from "react";
import CardWraper from "./CardWraper";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import CheckItButton from "../../forms/CheckItButton/CheckItButton";

const CardVertical = (props) => {
    return(
        <CardWraper>
            <CardImage/>
            <CardContent tags={props.tags} header={props.header}/>
        </CardWraper>
    );
}

export default CardVertical;