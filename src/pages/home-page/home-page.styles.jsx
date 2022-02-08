import styled from 'styled-components'

export const HomePageStyles = styled.div`
display: flex;
height: 100%;
`

export const TitleContainer = styled.div`
display: flex;
flex-direction: column;
text-align: center;
padding-left: 30px;
`

export const EventsContainer = styled.div`
width: 100%;
overflow: auto;
display: grid;
justify-items: center;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 10px;
`