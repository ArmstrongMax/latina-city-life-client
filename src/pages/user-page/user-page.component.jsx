import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../HOCs/withAuthRedirect/withAuthRedirect.component";
import ParticipationList from "../../components/participation-list/participation-list.component";
import {Link} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";
import CustomButton from "../../components/custom-button/custom-button.component";
import FavoritesList from "../../components/favorites-list/favorites-list.component";
import {
    FavoritesAndParticipationListsContainer,
    UserPageContainer,
    UserPageInfoContainer,
    UserPageImageContainer, UserPageDataContainer
} from "./user-page.styles";
import UserInfo from "../../components/user-info/user-info.component";

const UserPage = ({currentUser}) => {
    return <UserPageContainer>
        <UserPageDataContainer>
            <UserPageImageContainer src={currentUser.photo} alt='user'/>
            <UserPageInfoContainer>
                <UserInfo userData={currentUser}/>
            </UserPageInfoContainer>
            <FavoritesAndParticipationListsContainer>
                <ParticipationList owner={'user'} id={currentUser._id}/>
                <FavoritesList/>
            </FavoritesAndParticipationListsContainer>
        </UserPageDataContainer>
        <CustomButton><Link to='/edit-profile'>Редактировать профиль</Link></CustomButton>
    </UserPageContainer>
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default compose(connect(mapStateToProps), withAuthRedirect)(UserPage)