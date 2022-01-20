import React from 'react'
import {connect} from "react-redux";
import {fetchPartiesStart} from "../../redux/parties/parties.actions";
import EventItem from "../../components/event-card/event-card.component";
import {HomePageStyles} from "./home-page.styles"



class Homepage extends React.Component {
    componentDidMount() {
        this.props.fetchPartiesStart()
    }

    render() {
        return <HomePageStyles>
            <h3>Предстоящие события</h3>
            {this.props.parties?.map(({id, ...otherProps}) => {
            return <EventItem key={id} {...otherProps}/>
        })}</HomePageStyles>
    }
}

const mapStateToProps = state => {
    return {
        parties: state.parties.parties
    }
}
const mapDispatchToProps = dispatch => ({
    fetchPartiesStart: () => dispatch(fetchPartiesStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Homepage)