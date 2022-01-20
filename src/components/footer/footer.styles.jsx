import styled from 'styled-components'

export const FooterStyles = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  background-color:rgba(51, 0, 51, 0.3);

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-top: 20px;
  }
`