import React from 'react'
import {connect} from "react-redux";
import {fetchEventsStart} from "../../redux/evets/events.actions";
import EventItem from "../../components/event-card/event-card.component";
import {HomePageStyles} from "./home-page.styles"



class Homepage extends React.Component {
    componentDidMount() {
        this.props.fetchEventsStart()
    }

    render() {
        return <HomePageStyles>
            <h3>Предстоящие события</h3>
            {this.props.events?.map(({id, ...otherProps}) => {
            return <EventItem key={id} {...otherProps}/>
        })}</HomePageStyles>
    }
}

const mapStateToProps = state => {
    return {
        events: state.events.events
    }
}
const mapDispatchToProps = dispatch => ({
    fetchEventsStart: () => dispatch(fetchEventsStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Homepage)