import React from 'react';
import styled from 'styled-components'
import Button from '../Button'
import { mediaQueries } from '../../mediaqueries';
import Boss from '../../images/Boss.jpg'
import Logo from '../../images/logo.jpg'

const Container = styled.div`
display: flex;
flex-direction: column;
padding:2rem;
letter-spacing: 2px;
line-height: 1.8em;
align-items: center;
`
const LogoImage = styled.img`
width: 25%;
padding: 2rem;
border-radius:60%;
`
const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Header = styled.h3`
color:#efb7c0!important;
${mediaQueries("tablet")`
font-size: 2rem`} 
`
const SubHeader = styled.h1`
text-align: center;
color:#a28bbb;
${mediaQueries("tablet")`
font-size: 3rem`} 
`
const Services = styled.p`
color: #666;
`
const BGroundImage = styled.img`
width:121%;
margin-top: 4rem;
${mediaQueries("xl")`
width:100%`} 
`

export default (props: any) => {
  const { header, subheader, text } = props
  return (
    <Container >
      <LogoImage src={Logo} alt="logo" />
      <Content >
        <Header> {header}</Header>
        <SubHeader>{subheader}</SubHeader>
        {text.slice(1).map((item: any) => {
          return <Services key={item.id}>{item.paragraph}</Services>
        })}
      </Content>
      <BGroundImage src={Boss} alt="cat" />
    </Container>
  );
}