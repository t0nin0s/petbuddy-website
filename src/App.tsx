import React, { useState } from 'react';
import styled from 'styled-components'
import { Grid } from '@material-ui/core';
import Header from './components/Header'
import Button from './components/Button'
import Review from './components/Review'
import ContactUsContainer from './components/ContactUs';
import { mediaQueries } from './mediaqueries'
import Footer from './components/Footer'
import { CustomerReview } from './types'
import reviews from './lib/data'

const ColumnToRowWrapper = styled.div`
display: flex;
flex-direction: column;
padding-top: 4rem;
${mediaQueries("tablet")`
  flex-direction: row;
`}`

function App() {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
  }

  return (
    <div className="App" >
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={false} sm={false} md={false} lg={1} xl={1} />
          <Grid item xs={12} sm={12} md={12} lg={10} xl={10} >
            <Header />
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
        <div> count is {count} </div>
        <Button>button</Button>
      </Grid >
      <Footer>Designed & managed by Pet Buddy@2020</Footer>
    </div >
  );
}

export default App;
