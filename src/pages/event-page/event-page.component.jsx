import React, {useEffect} from "react";
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import {fetchEventsStart} from "../../redux/evets/events.actions";


const EventPage = ({selectedEvent, fetchEvent}) => {
    let params = useParams()
    useEffect(()=> {
        fetchEvent(params.eventId)
    }, [fetchEvent, params.eventId])
    const {
        date,
        danceStyles,
        description,
        fullPrice,
        imageCover,
        name,
        placeAddress,
        timeEnd,
        timeStart} = {...selectedEvent}

    return <div>
        <div>{name}</div>
        <div>{new Date(date).toDateString()}</div>
        <div>{fullPrice}</div>
        <div>{placeAddress}</div>
        <div>{new Date(timeStart).toTimeString()} - {new Date(timeEnd).toTimeString()}</div>
        <div>{description}</div>
        <div>{danceStyles}</div>
        <img src={imageCover} alt='cover'/>
    </div>
}

const mapStateToProps = (state) => ({
    selectedEvent: state.events.selectedEvent
})

const mapDispatchToProps = (dispatch) => ({
    fetchEvent: eventId => dispatch(fetchEventsStart(eventId))
})
export default connect(mapStateToProps, mapDispatchToProps)(EventPage)