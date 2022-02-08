import React from "react";
import {ParticipationItemContainer} from "./participation-item.styles";

const ParticipationItem = ({id, name, image}) => {
    return <ParticipationItemContainer src={image} alt={''}/>
}

export default ParticipationItem
