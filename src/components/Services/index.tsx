import React from 'react';
import styled from 'styled-components';
import Button from '../Button'
import { Services } from '../../types'
import { mediaQueries } from '../../mediaqueries';

const Service = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:90%;
margin:0 auto;
padding:1rem 0 3rem 0;
${mediaQueries('xl')`
  max-width: '450px'
  `}
`
const Img = styled.img`
width:261px;
height:173px;
border-radius:10px;
box-shadow:2px 5px 5px #888888;
${mediaQueries('tablet')`
  width:80%;
  `}
${mediaQueries('xl')`
  width:80%;
  height:16rem;
  `}
`
const Title = styled.h3``

const Description = styled.p`
width:80%;
letter-spacing: 2px;
line-height: 1.8em;
${mediaQueries('tablet')`
  width:75%;
  height:12rem;
`}
${mediaQueries('laptop')`
  height:10rem;
`}
${mediaQueries('xl')`
  height:8rem;
`}`

export default (props: Services) => {
  const { image, header, description, ctaText } = props;
  return (
    <Service>
      <Img src={image} alt="Service image" />
      <Title> {header}</Title>
      <Description>{description}</Description>
      <Button>{ctaText}</Button>
    </Service>
  )
}
