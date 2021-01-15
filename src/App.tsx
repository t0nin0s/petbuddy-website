import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import Header from './components/Header'
import Button from './components/Button'
import Review from './components/Review'
import InfoSection from './components/AboutUs'
import ContactUsContainer from './components/ContactUs'
import { homeSection, aboutUsSection, reviews } from './lib/data'
import { mediaQueries } from './mediaqueries'
import Footer from './components/Footer'
import Boss from './images/Boss.jpg'
import { PetBuddyLogo } from './components/Logo';

const ColumnToRowWrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: 4rem;
${mediaQueries("tablet")`
  flex-direction: row;
`} `

const App = () => {

  return (
    <div className="App" >
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={false} md={false} lg={1} xl={1} />
          <Grid item xs={12} sm={12} md={12} lg={10} xl={10} >
            <Header />
            <InfoSection
              primary
              logo={<PetBuddyLogo size="medium"/>}
              header={homeSection.header}
              subheader={homeSection.subheader}
              content={homeSection.content}
              cta={homeSection.cta}
              ctaText={homeSection.ctaText}
            />
            <InfoSection
              logo={<PetBuddyLogo size="medium"/>}
              header={aboutUsSection.header}
              subheader={aboutUsSection.subheader}
              content={aboutUsSection.content}
              footerLogo={Boss}
            />
            <ColumnToRowWrapper >
              {reviews.map(review => {
                return <Review key={review.id} comment={review.comment} author={review.user} />
              })}
            </ColumnToRowWrapper>
            <ContactUsContainer
              email="petbuddyinfo.uk@gmail.com"
              phone="07753883444"
              follow="Follow Us"
              contact="Contact Us"
              call="Call Us" />
          </Grid>
        </Grid>
        <Button>button</Button>
      </Grid >
      <Footer>Designed & managed by Pet Buddy@2020</Footer>
    </div >
  );
}

export default App;



