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
color:#efb7c0!important;
${mediaQueries("tablet")`
font-size: 2rem`} 
`
const AboutSubHeader = styled.h1`
color:#a28bbb;
${mediaQueries("tablet")`
font-size: 3rem`} 
`
const AboutServices = styled.p`
color: #666;
`
const AboutBGroundImage = styled.img`
width:121%;
margin-top: 4rem;
${mediaQueries("xl")`
width:100%`} 
`

export default (props: any) => {
  console.log(props)
  const { header, subHeader, aboutPgraph1, aboutPgraph2, aboutPgraph3 } = props;
  return (
    <AboutContainer >
      <AboutLogoImage src={Logo} alt="logo" />
      <AboutContent>
        <AboutHeader>{header} </AboutHeader>
        <AboutSubHeader>{subHeader}</AboutSubHeader>
        <AboutServices>{aboutPgraph1}</AboutServices>
        <AboutServices>{aboutPgraph2}</AboutServices>
        <AboutServices>{aboutPgraph3}</AboutServices>
      </AboutContent>
      <AboutBGroundImage src={Boss} alt="cat" />
    </AboutContainer>
  );
}