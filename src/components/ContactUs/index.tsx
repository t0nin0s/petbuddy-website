import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUsContainer = styled.div`
display:flex;
flex-flow:row wrap;
width: 85%;
margin: 2rem auto;
padding-bottom:2rem;
border-radius: 10px;
background:#EBEBEB;
font-weight:700;
box-shadow:2px 5px 5px #888888;
${mediaQueries('tablet')`
  position:relative;
  top:-2rem;
  margin: 0 auto`}
${mediaQueries('laptop')`
flex-flow: row nowrap;
width:95%;
`}
`
const ContactUs = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:45%;
color:#4B0082;
`
const ContactIcon = styled(FontAwesomeIcon)`
border: 2px solid #f48fb1;
border-radius: 60px;
color:#f48fb1;
margin:2rem 0;
padding:.8rem;
text-decoration:none;
`

export default (props: any) => {
  const { email, phone, insta, fb } = props
  return (
    <ContactUsContainer>
      <ContactUs>
        <ContactIcon icon={faEnvelope} size="3x"></ContactIcon>
        <p>{email}</p>
      </ContactUs>
      <ContactUs>
        <ContactIcon icon={faPhoneAlt} size="3x"></ContactIcon>
        <p>{phone}</p>
      </ContactUs>
      <ContactUs>
        <ContactIcon icon={faInstagram} size="3x"></ContactIcon>
        <p>{insta}</p>
      </ContactUs>
      <ContactUs>
        <ContactIcon icon={faFacebook} size="3x"></ContactIcon>
        <p>{fb}</p>
      </ContactUs>
    </ContactUsContainer >
  )
}

