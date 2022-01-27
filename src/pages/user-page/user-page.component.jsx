import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect.component";

const UserPage = ({currentUser}) => {
    const {firstName, lastName, communityStatus, photo, systemRole} = {...currentUser}
    return <div>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{communityStatus}</div>
        <div>{systemRole}</div>
        <img src={photo} alt='user'/>
    </div>
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
})

export default compose(connect(mapStateToProps), withAuthRedirect)(UserPage)