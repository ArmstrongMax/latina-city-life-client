import styled from 'styled-components'
import {Link} from "react-router-dom";

export const FooterStyles = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color:rgba(51, 0, 51, 0.3);

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`

export const OptionLink = styled.a`
padding: 10px 15px;
  img {
    height: 100%;
  }
`