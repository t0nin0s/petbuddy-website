import React from 'react';
import styled, { css } from 'styled-components'
import Button from '../Button'
import { mediaQueries } from '../../mediaqueries';

export interface InfoSectionProps {
  primary?: boolean,
  logo?: any;
  header?: string;
  subheader?: string;
  content?: string[];
  footerLogo?: any;
  cta?: boolean,
  ctaText?: string
}

const Container = styled.div<InfoSectionProps>`
display: flex;
flex-direction: column;
letter-spacing: 2px;
line-height: 1.8em;
align-items: center;
padding:2rem;
background: ${props => props.primary ? "red" : "yellow"}
`
const LogoImage = styled.img`
width: 25%;
padding: 2rem;
border-radius: 60%;
`
const Content = styled.div<InfoSectionProps>`
display: flex;
flex-direction: column;
align-items: center;
`
const Header = styled.h3<InfoSectionProps>`
font-size: 2rem;
${mediaQueries("tablet")`
  font-size: 2rem`}
`
const SubHeader = styled.h1`
text-align: center;
color: black;
${mediaQueries("tablet")`
font-size: 3rem`}
`

const StyledParagraph = styled.p<InfoSectionProps>``

const BGroundImage = styled.img`
width: 121%;
margin-top: 4rem;
${mediaQueries("xl")`
width:100%`}
`
const BookNowButton = styled(Button)``

export default (props: InfoSectionProps) => {
  console.log("from index.js ", props) /* console.log shows the first info*/
  const { header, subheader, content, logo, footerLogo, cta, ctaText } = props
  return (
    <Container>
      {
        logo && <LogoImage src={logo} alt="logo" />
      }
      <Content >
        <Header> {header}</Header>
        <SubHeader>{subheader}</SubHeader>
        {content!.map((paragraph: string, index: number) =>
          <StyledParagraph key={index}>{paragraph}</StyledParagraph>
        )}
        {cta && <BookNowButton>{ctaText}</BookNowButton>}
      </Content>
      {
        footerLogo && <BGroundImage src={footerLogo} alt="cat" />
      }
    </Container >
  );
}