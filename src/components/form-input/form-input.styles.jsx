import styled, { css } from 'styled-components';


const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 20px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`

  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid white;
  margin: 25px 0;
  
  input[type="date"]::before {
  content: '';
  position: absolute;
  color: #999999;
}

input[type="date"] {
  color: #ffffff;
}

input[type="date"]:focus,
input[type="date"]:valid {
  color: #666666;
}

input[type="date"]:focus::before,
input[type="date"]:valid::before {
  content: "";
}

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

FormInputContainer.displayName = 'FormInputContainer';

export const FormInputLabel = styled.label`
  color: white;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;

FormInputLabel.displayName = 'FormInputLabel';
