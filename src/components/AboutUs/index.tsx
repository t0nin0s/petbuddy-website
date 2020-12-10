import React from 'react';
import styled from 'styled-components'
import Button from '../Button'
import { mediaQueries } from '../../mediaqueries';


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
const styledParagraph = styled.p`
color: #666;
`
const BGroundImage = styled.img`
width:121%;
margin-top: 4rem;
${mediaQueries("xl")`
width:100%`} 
`

export interface InfoSectionProps {
  logo?: any;
  header: string;
  subheader: string;
  content: string[];
  footerLogo?: any;
}

export default (props: InfoSectionProps) => {
  const { header, subheader, content, logo, footerLogo } = props
  return (
    <Container>
      {
        logo && <LogoImage src={logo} alt="logo" />
      }
      <Content >
        <Header> {header}</Header>
        <SubHeader>{subheader}</SubHeader>
        {content.map((paragraph: string, index: number) =>
          <p key={index}>{paragraph}</p>
        )}
      </Content>
      {
        footerLogo && <BGroundImage src={footerLogo} alt="cat" />
      }

    </Container>
  );
}