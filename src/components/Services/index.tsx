import React from 'react';
import styled from 'styled-components';
import Button from '../Button'
import { Services } from '../../types'

const Container = styled.div`
display: flex;
flex-direction: column;
letter-spacing: 2px;
line-height: 1.8em;
align-items: center;
padding:2rem;`

const Img = styled.img`
width:85%;
border-radius:10px
`
const Title = styled.h4`
font-size:24px
`
const Description = styled.div`
margin-bottom:2rem
`

export default (props: Services) => {
  const { img, header, description, ctaText } = props
  return (
    <Container>
      <Img src={img} alt="Service image" />
      <Title> {header}</Title>
      <Description>{description}</Description>
      <Button>{ctaText}</Button>
    </Container>
  )
}