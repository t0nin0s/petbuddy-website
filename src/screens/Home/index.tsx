import React from 'react'
import styled from 'styled-components'
import { mediaQueries } from '../../mediaqueries'
import InfoSection from '../../components/AboutUs'
import { PetBuddyLogo } from '../../components/Logo';
import Boss from '../../images/Boss.jpg'
import Services from '../../components/Services';
import Review from '../../components/Review';
import { homeSection, aboutUsSection, reviews, services } from '../../lib/data'

const ColumnToRowWrapper = styled.div`
display: flex;
flex-direction: column;
max-width:1280px;
${mediaQueries("tablet")`
flex-direction : row;
`} `

const h2Style = {
  textAlign: "center" as "center",
  fontSize: 28,
  maxWidth: 1280
}

export default function () {
  return (
    <div>
      <InfoSection
        primary
        logo={<PetBuddyLogo size="medium" />}
        header={homeSection.header}
        subheader={homeSection.subheader}
        content={homeSection.content}
        cta={homeSection.cta}
        ctaText={homeSection.ctaText}
      />
      <InfoSection
        logo={<PetBuddyLogo size="medium" />}
        header={aboutUsSection.header}
        subheader={aboutUsSection.subheader}
        content={aboutUsSection.content}
        footerLogo={Boss}
      />
      <h2 style={h2Style}>Our Services</h2>
      <ColumnToRowWrapper>
        {services.map((service, index) => {
          return <Services
            key={`${service}${index / 10}`}
            image={service.image}
            header={service.header}
            description={service.description}
            cta={service.cta}
            ctaText={service.ctaText} />
        })}
      </ColumnToRowWrapper>
      <ColumnToRowWrapper>
        {reviews.map(review => {
          return <Review key={review.id} comment={review.comment} author={review.user} />
        })}
      </ColumnToRowWrapper>
    </div>
  )
}
