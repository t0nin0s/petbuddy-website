import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
text-align:center;`

export default (props: any) => {
  return (
    <div>
      <Title>{props.title}</Title>
      {props.children}
    </div>
  )
}
