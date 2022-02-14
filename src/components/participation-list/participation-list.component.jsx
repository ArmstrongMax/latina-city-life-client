import React from "react";
import {
    addParticipationStart,
    fetchParticipationStart,
    removeParticipationStart
} from "../../redux/participation/participation.actions";
import {connect} from "react-redux";
import ParticipationItem from "../participation-item/participation-item.component";
import {selectParticipation} from "../../redux/participation/participation.selectors";
import {
    ParticipationButtonContainer, ParticipationItemsContainer,
    ParticipationListContainer,
    ParticipationSpanContainer
} from "./participation-list.styles";
import CustomButton from "../custom-button/custom-button.component";

class ParticipationList extends React.Component {
    componentDidMount() {
        const {fetchParticipation, owner, id} = this.props
        fetchParticipation(owner, id)
    }

    render() {

        const {participationList, owner, addParticipation, removeParticipation, currentUserId, id} = this.props

        if (owner === 'party') {
            const participationId = participationList.find(item => item.user?._id === currentUserId)?._id

            return <ParticipationListContainer>
                <ParticipationButtonContainer>
                    {currentUserId && (participationId
                        ? <CustomButton onClick={() => {
                            removeParticipation(participationId, owner, id)
                        }}>Не пойду!</CustomButton>
                        : <CustomButton onClick={() => {
                            addParticipation(id, currentUserId, owner)
                        }}>Я иду!</CustomButton>)}
                </ParticipationButtonContainer>
                <ParticipationSpanContainer>Участники</ParticipationSpanContainer>
                <ParticipationItemsContainer>
                    {participationList.length
                        ? participationList.map(item => <ParticipationItem
                            key={item.user._id}
                            id={item.user._id}
                            image={item.user.photoSmall}/>)
                        : <span>Участников пока нет</span>}
                </ParticipationItemsContainer>

            </ParticipationListContainer>
        } else {
            return <ParticipationListContainer>
                <h4>Ваши мероприятия</h4>
                {participationList.length
                    ? participationList.map(item => <ParticipationItem
                        key={item.party._id}
                        id={item.party._id}
                        name={item.party.name}
                        image={item.party.imageCoverSmall}/>
                    )
                    : <span>У вас пока нет мероприятий</span>
                }
            </ParticipationListContainer>
        }
    }
}

const mapStateToProps = (state, ownProps) => ({
    participationList: selectParticipation(ownProps.owner)(state),
    currentUserId: state.auth.currentUser?._id
})
const mapDispatchToProps = dispatch => ({
    fetchParticipation: (initiator, id) => dispatch(fetchParticipationStart(initiator, id)),
    addParticipation: (eventId, userId, initiator) => dispatch(addParticipationStart(eventId, userId, initiator)),
    removeParticipation: (participationId, initiator, initiatorId) => dispatch(removeParticipationStart(participationId, initiator, initiatorId))

})

export default connect(mapStateToProps, mapDispatchToProps)(ParticipationList)