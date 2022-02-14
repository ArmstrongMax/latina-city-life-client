import styled from 'styled-components'
import {Link} from "react-router-dom";

export const HeaderStyles = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color:rgba(51, 0, 51, 0.3);

  @media screen and (max-width: 800px) {
    height: 60px;
  }
`

export const LogoContainer = styled.div`
margin: 5px;
img { height: 100%}
`

export const LogoImgContainer = styled(Link)`
`
export const LogoTextContainer = styled(Link)`
 @media screen and (max-width: 800px) {
    display: none;
  }
`

export const UserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;  
  img {
    height: 100%;
    border-radius: 50%;
  }
`
export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`