import React from 'react';
import styled from 'styled-components'
import Button from '../Button'
import { mediaQueries } from '../../mediaqueries';
const Logo = require('../../images/logo.jpg')

const Container = styled.div`
display: flex;
flex-direction: column;
padding:14rem 2rem 0 2rem;
background-blend-mode: darken;
background: linear-gradient(90deg,rgba(120,128,145, 0.34) 40%,#EBEBEB 0%)!important;
letter-spacing: 2px;
line-height: 1.8em;
  ${mediaQueries("medium")`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  `}
`
const LogoImage = styled.img`
align-self: center;
box-shadow: 2px 5px 10px #666;
margin-bottom: 3rem;
width: 70%;
  ${mediaQueries("tablet")`
    width: 60%;
  `}
  ${mediaQueries("medium")`
    width: 40%;
    margin-left: 2%;
    margin-top: -6%;
  `}
  ${mediaQueries("laptop")`
    margin-top: -8%;
  `}
  ${mediaQueries("xl")`
    width: 30%;
    margin-left: 10%;
  `}
`
const Content = styled.div`
${mediaQueries("tablet")`
    margin: 0 6rem;
  `}
${mediaQueries("laptop")`
    width: 40%;
  `}
`
const Header = styled.h3`
color: #d7a4ac!important;
`
const SubHeader = styled.h1`
`
const Services = styled.p`
color: #a28bbb;
font - weight: 900;
`
const Paragraph = styled.p`
color: #666;
`
const ButtonDiv = styled.div`
padding: 3rem 0 6rem 0;
font-size:18px;
`

export default (props: any) => {
  const { motto, title, services, blurb } = props;
  return (
    <Container >
      <LogoImage src={Logo} alt="logo" />
      <Content>
        <Header>{motto} </Header>
        <SubHeader>{title}</SubHeader>
        <Services>{services}</Services>
        <Paragraph >{blurb}<br /></Paragraph>
        <ButtonDiv>
          <Button>Contact Us</Button>
        </ButtonDiv>
      </Content>
    </Container>
  );
}

