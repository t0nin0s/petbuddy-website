import React from 'react';
import styled from 'styled-components'
import Button from '../Button'
import { mediaQueries } from '../../mediaqueries';
import Boss from '../../images/Boss.jpg'
import Logo from '../../images/logo.jpg'

const AboutContainer = styled.div`
display: flex;
flex-direction: column;
padding:2rem;
letter-spacing: 2px;
line-height: 1.8em;
align-items: center;
`
const AboutLogoImage = styled.img`
width: 25%;
padding: 2rem;
border-radius:60%;
`
const AboutContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;`
const AboutHeader = styled.h3`
color:#efb7c0!important
`
const AboutSubHeader = styled.h1`
color:#a28bbb; 
`
const AboutServices = styled.p`
color: #666;
`
const AboutBGroundImage = styled.img`
width:121%;
`

export default (props: any) => {
  console.log(props)
  const { header, subHeader, blurb } = props;
  return (
    <AboutContainer >
      <AboutLogoImage src={Logo} alt="logo" />
      <AboutContent>
        <AboutHeader>{header} </AboutHeader>
        <AboutSubHeader>{subHeader}</AboutSubHeader>
        <AboutServices>{blurb}</AboutServices>
      </AboutContent>
      <AboutBGroundImage src={Boss} alt="cat" />
    </AboutContainer>
  );
}