import React from 'react'
import {Link} from "react-router-dom";
import {HeaderStyles} from "./header.styles";
import Logo from '../../assets/Logo.png'
import LogoText from '../../assets/LogoText.png'

const Header = () => {
    return <HeaderStyles>
        <img src={Logo}/>
        <img src={LogoText}/>
        <Link to='/sign-in-and-sign-up'>Регистрация / Вход</Link>
    </HeaderStyles>
}

export default Header