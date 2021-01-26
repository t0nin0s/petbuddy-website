import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
import Header from './components/Header'
import Services from './components/Services'
import Review from './components/Review'
import InfoSection from './components/AboutUs'
import ContactUsContainer from './components/ContactUs'
import { homeSection, aboutUsSection, reviews, services } from './lib/data'
import { mediaQueries } from './mediaqueries'
import Footer from './components/Footer'
import Boss from './images/Boss.jpg'
import { PetBuddyLogo } from './components/Logo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JoinUs from './components/JoinUs'
import Contact from './components/Contact'

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

const App = () => {

  return (
    <div className="App" >
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={false} md={false} lg={1} xl={1} />
          <Grid item xs={12} sm={12} md={12} lg={10} xl={10} >
            <Header />
            <Switch>
              <Route exact path="/">
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
              </Route>
              <Route path="/cat-service">
              </Route>
              <Route path="/dog-service">
              </Route>
              <Route path="/pet-service">
              </Route>
              <Route path="/join">
                <JoinUs />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>

            <ContactUsContainer
              email="Email"
              phone="07753883444"
              follow="Follow Us"
              insta="Instagram"
              fb="Facebook" />
            <Footer>Designed & managed by Pet Buddy@2020</Footer>
          </Grid>
        </Grid>
      </Grid >
    </div >
  );
}

export default App;



