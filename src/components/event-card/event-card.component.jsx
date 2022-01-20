import React from 'react'
import {Link} from "react-router-dom";
import {EventItemStyles} from './event-card.styles'

const EventItem = ({_id, name, imageCover, fullPrice, date}) => {
    return <EventItemStyles>
        <Link to={`/event/${_id}`}>
            <img src={imageCover}/>
        </Link>
        <div>{name}</div>
        <div>{fullPrice}</div>
        <div>{new Date(date).toLocaleString("ru", {year: 'numeric', month: 'long', day: 'numeric'})}</div>
        <button>Пойду!</button>
        <button>В закладки</button>
    </EventItemStyles>
}
export default EventItem