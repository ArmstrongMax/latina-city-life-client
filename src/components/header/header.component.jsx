import React from 'react'
import {Link} from "react-router-dom";
import {createStructuredSelector} from 'reselect';
import {connect} from "react-redux";
import {HeaderStyles, LogoContainer, UserContainer, LogoTextContainer, OptionLink} from "./header.styles";
import LogoPic from '../../assets/Logo.png'
import LogoText from '../../assets/LogoText.png'
import {logOutStart} from "../../redux/auth/auth.actions";
import {selectCurrentUser} from "../../redux/auth/auth.selectors";


const Header = ({currentUser, logOutStart}) => {
    return <HeaderStyles>
        <LogoContainer to={'/'}>
            <LogoTextContainer to={'/'}>
            <img src={LogoText} alt='logo'/>
            </LogoTextContainer>
            <img src={LogoPic} alt='logo'/>
        </LogoContainer>
        <UserContainer>
        {
            currentUser
            ? <>
                <img src={currentUser.photoSmall} alt='user'/>
                <OptionLink to={`/favorites`}>Избранное</OptionLink>
                <OptionLink to={`/upcoming-events`}>Ваши вечеринки</OptionLink>
                {<OptionLink to={`/users/${currentUser._id}`}>Профиль</OptionLink>}
                <OptionLink as='div' onClick={logOutStart}>Выйти</OptionLink>
            </>
            : <OptionLink to='/sign-in-and-sign-up'>Регистрация / Вход</OptionLink>

        }
        </UserContainer>
    </HeaderStyles>
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    logOutStart: () => dispatch(logOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)