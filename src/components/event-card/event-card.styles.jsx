import styled from 'styled-components'
import {Link} from "react-router-dom";

export const EventItemStyles = styled.div`
display: grid;
grid-template-areas: 'I I I' 'N N N' 'D P F';
justify-items: center;
align-items: center;

border-radius: 5px;
box-shadow:0 0 10px #d7a1ee;
background-color:rgba(78,19,78,0.8);
margin: 10px;
padding-bottom: 20px;
max-height: fit-content;
max-width: fit-content;
`
export const ImageContainer = styled(Link)`
grid-area: I;
img {
width: 300px;
border-radius: 5px;
}
`
export const NameContainer = styled.h4`
grid-area: N;
text-align: center;
`
export const PriceContainer = styled.div`
grid-area: P;
`
export const DateContainer = styled.div`
grid-area: D;
`
export const FavoriteIconContainer = styled.div`
grid-area: F;
`
