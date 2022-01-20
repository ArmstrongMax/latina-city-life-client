import React from "react";
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";


const EventPage = () => {
    let params = useParams()
    const events = useSelector(state => state.parties.parties)
    const event = events.find(item => item._id === params.eventId)

    return <div>EventPage</div>}

    export default EventPage