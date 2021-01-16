import React from 'react';
import styled, { css } from 'styled-components'
import Button from '../Button'
import { mediaQueries } from '../../mediaqueries';
import { InfoSectionProps } from '../../types'

const Container = styled.div<{primary?: boolean}>`
display: flex;
flex-direction: column;
letter-spacing: 2px;
line-height: 1.8em;
align-items: center;
padding:2rem;
${props => props.primary && css`
 background:linear-gradient(90deg,rgba(120,128,145, 0.34) 40%,#EBEBEB 0%)
`}
`

const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Header = styled.h3`
font-size: 2rem;
text-align: center;
color:#a28bbb;
${mediaQueries("tablet")`
  font-size: 2rem`}
`
const SubHeader = styled.h1`
text-align: center;
color: black;
${mediaQueries("tablet")`
font-size: 3rem`}
`
const BGroundImage = styled.img`
width: 121%;
margin-top: 4rem;
${mediaQueries("xl")`
width:100%`}
`
export default (props: InfoSectionProps) => {
  const { header, subheader, content, logo, footerLogo, cta, ctaText, primary } = props
  return (
    <Container primary={primary}>
      { logo }
      <Content >
        <Header> {header}</Header>
        <SubHeader>{subheader}</SubHeader>
        {content.map((paragraph: string, index: number) =>
          <p key={index}>{paragraph}</p>
        )}
        {cta && <Button>{ctaText}</Button>}
      </Content>
      {
        footerLogo && <BGroundImage src={footerLogo} alt="cat" />
      }
    </Container >
  );
}