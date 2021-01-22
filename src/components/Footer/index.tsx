import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
background-color:#666;
color: white;
padding: 2rem;
text-align:center;
`

export default (props: any) => {
  return (
    <StyledFooter>
      {props.children}
    </StyledFooter>
  )
}