import React from 'react'
import {Link} from "react-router-dom";
import {HeaderStyles} from "./header.styles";
import Logo from '../../assets/Logo.png'
import LogoText from '../../assets/LogoText.png'
import {connect} from "react-redux";
import {logOutStart} from "../../redux/auth/auth.actions";

const Header = ({currentUser, logOutStart}) => {
    return <HeaderStyles>
        <img src={Logo} alt='logo'/>
        <img src={LogoText} alt='logo text'/>
        {currentUser ? <>
            <img src={currentUser.photo} alt='user'/>
            {<Link to={`/users/${currentUser._id}`}> {currentUser.firstName}</Link>}
            <button onClick={logOutStart}> Выйти </button>
        </>
            : <Link to='/sign-in-and-sign-up'>Регистрация / Вход</Link>}
    </HeaderStyles>
}

const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    logOutStart: () => dispatch(logOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)