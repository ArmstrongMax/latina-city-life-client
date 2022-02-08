import React from 'react'
import {connect} from "react-redux";
import {fetchEventsStart} from "../../redux/evets/events.actions";
import EventItem from "../../components/event-card/event-card.component";
import {EventsContainer, HomePageStyles, TitleContainer} from "./home-page.styles"
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectEventsForHomePage} from "../../redux/evets/events.selectors";
import CustomButton from "../../components/custom-button/custom-button.component";


class Homepage extends React.Component {
    componentDidMount() {
        this.props.fetchEventsStart()
    }

    render() {
        return <HomePageStyles>
            <TitleContainer>
                <h3>Cобытия</h3>
                <Link to='/add-event'>
                    <CustomButton>Добавить событие</CustomButton>
                </Link>
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
    events: selectEventsForHomePage
})
const mapDispatchToProps = dispatch => ({
    fetchEventsStart: () => dispatch(fetchEventsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)