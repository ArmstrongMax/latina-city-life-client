import React from "react";
import LabelContent from "../label-span/label-span.component";

const UserInfo = ({userData}) => {
    const fields = ['firstName', 'lastName', 'email', 'systemRole', 'communityStatus', 'dancingSince', 'danceStyles', 'school']
    const translateFields = ['Имя', 'Фамилия', 'Почта', 'Полномочия в системе', 'Статус в сообществе', 'Танцевальный стаж', 'Владеете танцами', 'Танцевальная школа']
    return fields.map((item, index) => userData[item]
        ? <LabelContent label={translateFields[index]} content={userData[item]}/>
        : null
    )
}

export default UserInfo