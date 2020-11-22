import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
padding: 3rem .5rem;
align-items: center;
width: 75%;
margin: 0 auto;
border-radius: 10px;
margin-bottom: 5rem;
background-color: #F5F5F5;
font-weight:700;
${mediaQueries("sm")`
  flex-flow:row wrap;
  `}
`
const ContactUs = styled.div`
display:flex;
flex-flow: column;
align-items: center;
width: 80%;
margin:1rem 0;
color:#4B0082;
font-weight:400;
${mediaQueries("sm")`
  width: 45%;
  justify-content: center;
  `}
`
const ContactIcon = styled(FontAwesomeIcon)`
border: 2px solid #f48fb1;
border-radius: 60px;
box-shadow: 0px 0px 2px #888;
padding: 0.5em 0.6em;
color:#f48fb1;
margin:1rem 0;
`
const EmailUs = styled.div`
 margin:1rem 0;
 ${mediaQueries("md")`
  flex-flow:column;
  `}
`
const CallUs = styled.div`
 margin:1rem 0;
`
const FollowUs = styled.div`
display:flex;
align-self:normal;
justify-content: space-around;
margin-top: 2rem 0;
align-item:center;
${mediaQueries("sm")`
  justify-content: space-around;
  width: 90%;
  margin:1rem 0;
  `}
`

export default (props: any) => {
  const { email, follow, phone, contact, call } = props
  return (
    <div className="contact-us__container">
      <ContactUsContainer>
        <ContactUs>
          {contact}
          <ContactIcon icon={faEnvelope} size="3x"></ContactIcon>
          <EmailUs>{email}</EmailUs>
        </ContactUs>
        <ContactUs>
          {call}
          <ContactIcon icon={faPhoneAlt} size="3x"></ContactIcon>
          <CallUs>{phone}</CallUs>
        </ContactUs>
        <FollowUs>
          <ContactIcon icon={faInstagram} size="3x"></ContactIcon>
          <ContactIcon icon={faFacebook} size="3x"></ContactIcon>
        </FollowUs>
      </ContactUsContainer>
    </div >
  )
}

