import React from 'react'
import {connect} from "react-redux";
import {fetchEventsStart} from "../../redux/evets/events.actions";
import EventItem from "../../components/event-card/event-card.component";
import {EventsContainer, HomePageStyles, TitleContainer} from "./home-page.styles"
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectEventsForHomePage} from "../../redux/evets/events.selectors";
import CustomButton from "../../components/custom-button/custom-button.component";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";


class Homepage extends React.Component {
    componentDidMount() {
        this.props.fetchEventsStart()
    }

    render() {
        return <HomePageStyles>
            <TitleContainer>
                <h3>Cобытия</h3>
                {this.props.currentUser && <CustomButton>
                    <Link to='/add-event'>
                        Добавить событие
                    </Link>
                </CustomButton>}
            </TitleContainer>
            <EventsContainer>
                {this.props.events.map(({id, ...otherProps}) => {
                    return <EventItem key={id} {...otherProps}/>
                })}
            </EventsContainer>
        </HomePageStyles>
    }
}

const mapStateToProps = createStructuredSelector({
    events: selectEventsForHomePage,
    currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
    fetchEventsStart: () => dispatch(fetchEventsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)