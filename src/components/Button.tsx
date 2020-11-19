import React from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const StyledButton = styled(Button)`
&& {
  letter-spacing: .3em;
  text-transform: capitalize;
  background-color: #efb7c0;
  font-weight: bold;
  padding:1rem 2rem;
  font-size: 14px;
  color:white;
  :hover {
    background-color: #f48fb1;
  }
}
`;

export default (props: any) => {
  return (
    <StyledButton variant="contained">
      {props.children}
    </StyledButton>
  )
}

