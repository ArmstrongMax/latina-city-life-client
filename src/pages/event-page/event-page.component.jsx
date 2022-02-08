import React, {useEffect} from "react";
import {useParams} from 'react-router-dom'
import {connect} from "react-redux";
import {fetchEventsStart} from "../../redux/evets/events.actions";
import {createStructuredSelector} from "reselect";
import {selectSelectedEvent} from "../../redux/evets/events.selectors";
import ParticipationList from "../../components/participation-list/participation-list.component";
import {
    EventDescriptionContainer,
    EventImageContainer,
    EventPageContainer,
    EventParticipantsContainer
} from "./event-page.styles";
import LabelContent from "../../components/label-span/label-span.component";


const EventPage = ({selectedEvent, fetchEvent}) => {
    let params = useParams()
    useEffect(() => {
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
        timeStart,
    } = selectedEvent

    return <EventPageContainer>
        <EventImageContainer  src={imageCover} alt='event cover image'/>
        <EventDescriptionContainer>
            <LabelContent label={'Название'} content={name}/>
            <LabelContent label={'Дата'} content={new Date(date).toLocaleString("ru", {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}/>
            <LabelContent label={'Стоимость'} content={`${fullPrice} руб.`}/>
            <LabelContent label={'Адрес'} content={placeAddress}/>
            <LabelContent label={'Время'} content={`${timeStart} - ${timeEnd}`}/>
            <LabelContent label={'Описание'} content={description}/>
            <LabelContent label={'Музыкальный формат'} content={danceStyles}/>
        </EventDescriptionContainer>
        <EventParticipantsContainer>
            <ParticipationList owner={'party'} id={params.eventId}/>
        </EventParticipantsContainer>
    </EventPageContainer>
}

const mapStateToProps = createStructuredSelector({
    selectedEvent: selectSelectedEvent
})

const mapDispatchToProps = (dispatch) => ({
    fetchEvent: eventId => dispatch(fetchEventsStart(eventId)),
})
export default connect(mapStateToProps, mapDispatchToProps)(EventPage)