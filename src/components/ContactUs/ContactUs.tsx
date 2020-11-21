import React from 'react'
import styled from 'styled-components'
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
`

const ContactUs = styled.div`
width: 80%;
text-align:center;
margin-bottom:1rem;
color:#4B0082;
font-weight:400;
`
const FollowUs = styled.div`
display:flex;
align-self:normal;
justify-content: space-around;
margin-top: 2rem 0;
align-item:center;
`

const ContactIcon = styled(FontAwesomeIcon)`
border: 2px solid #f48fb1;
border-radius: 60px;
box-shadow: 0px 0px 2px #888;
padding: 0.5em 0.6em;
align-item:center;
color:#f48fb1;
margin:2rem 0;
`

export default (props: any) => {
  const { email, follow, phone, contact, call } = props
  return (
    <div className="contact-us__container">
      <ContactUsContainer>
        {contact}
        <ContactIcon icon={faEnvelope} size="3x"></ContactIcon>
        <ContactUs>{email}</ContactUs>
        {call}
        <ContactIcon icon={faPhoneAlt} size="3x"></ContactIcon>
        <ContactUs>{phone}</ContactUs>
        {follow}
        <FollowUs>
          <ContactIcon icon={faInstagram} size="3x"></ContactIcon>
          <ContactIcon icon={faFacebook} size="3x"></ContactIcon>
        </FollowUs>
      </ContactUsContainer>
    </div >
  )
}

