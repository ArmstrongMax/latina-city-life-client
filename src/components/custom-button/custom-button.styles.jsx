import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 25px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Steppe', sans-serif;
  cursor: pointer;  
  margin:  10px auto;

  background-color: deeppink;
  color: white;
  border: none;
  border-radius: 5px;

  &:hover {
    background-color: mediumorchid;
    box-shadow: 0 0 5px mediumorchid;
  }
`;