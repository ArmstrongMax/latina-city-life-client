import React from 'react'
import {FooterStyles} from "./footer.styles";
import {OptionLink} from "../footer/footer.styles";
import hhLogo from '../../assets/hh-logo.png'
import instagramLogo from '../../assets/Instagram-logo.png'
import vkLogo from '../../assets/vk-logo.png'

const Footer = () => {
    return <FooterStyles>
        <span>&#169; Михайлов Максим 2022</span>
        <OptionLink href='https://spb.hh.ru/resume/78a8a923ff08859d8d0039ed1f436e654a5474'><img src={hhLogo} alt='hh logo'/></OptionLink>
        <OptionLink href='https://www.instagram.com/_armstrongmax_/'><img alt='instagram logo' src={instagramLogo}/> </OptionLink>
        <OptionLink href='https://vk.com/id17768111'><img alt='vk logo' src={vkLogo}/> </OptionLink>
    </FooterStyles>
}

export default Footer