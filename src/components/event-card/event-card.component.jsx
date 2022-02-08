import React from 'react'
import {
    DateContainer,
    EventItemStyles,
    FavoriteIconContainer,
    ImageContainer,
    NameContainer,
    PriceContainer
} from './event-card.styles'
import {addToFavorites, removeFromFavorites} from "../../redux/user/user.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectFavorites} from "../../redux/user/user.selectors";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import FavoriteIcon from "../favorites-icon/favorites-icon.component";

const EventItem = (
    {
        _id,
        name,
        imageCover,
        fullPrice,
        date,
        favorites,
        addToFavorites,
        removeFromFavorites,
        currentUser
    }) => {
    return <EventItemStyles>
        <ImageContainer to={`/event/${_id}`}><img src={imageCover} alt='cover'/></ImageContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{fullPrice}р.</PriceContainer>
        <DateContainer>{new Date(date).toLocaleString("ru", {year: 'numeric', month: 'long', day: 'numeric'})}</DateContainer>
        <FavoriteIconContainer>
        {currentUser &&
        (favorites.includes(_id)
            ? <FavoriteIcon selected={true} onClick={() => removeFromFavorites(_id)}/>
            : <FavoriteIcon selected={false} onClick={() => addToFavorites(_id)}/>)
        }
        </FavoriteIconContainer>
    </EventItemStyles>
}

const mapStateToProps = createStructuredSelector({
    favorites: selectFavorites,
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    addToFavorites: event => dispatch(addToFavorites(event)),
    removeFromFavorites: event => dispatch(removeFromFavorites(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(EventItem)