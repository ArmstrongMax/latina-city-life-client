import React from "react";
import LabelContent from "../label-span/label-span.component";

const UserInfo = ({userData}) => {
    const fields = ['firstName', 'lastName', 'email', 'systemRole', 'communityStatus', 'dancingSince', 'danceStyles', 'school']
    const translateFields = ['Имя', 'Фамилия', 'Почта', 'Полномочия в системе', 'Статус в сообществе', 'Танцуете с', 'Владеете танцами', 'Танцевальная школа']
    const systemRoles = {user: 'пользователь', admin: 'администратор'}


    return fields.map((item, index) => {
            if (userData[item]) {
                if (item === 'systemRole') {
                    return <LabelContent
                        label={translateFields[index]}
                        content={systemRoles[userData[item]]}/>
                } else if (item === 'dancingSince') {
                    return <LabelContent
                        label={translateFields[index]}
                        content={new Date(userData[item]).toLocaleString("ru", {
                            year: 'numeric',
                            month: 'long'
                        })}/>
                }
                return <LabelContent
                    label={translateFields[index]}
                    content={userData[item]}/>
            } else return null
        }
    )
}

export default UserInfo