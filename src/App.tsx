import React, { useState } from 'react';
import styled from 'styled-components'
import { Grid } from '@material-ui/core';
import Header from './components/Header'
import Button from './components/Button'
import Review from './components/Review'
import ContactUsContainer from './components/ContactUs';
import { mediaQueries } from './mediaqueries'

import Footer from './components/Footer'

interface Review {
  id: number;
  comment: string;
  user: string;
}

const reviews: Review[] = [
  {
    id: 1,
    comment: '“PetBuddy are always available, even at short notice and Christmas. They take really great care of Lulu, giving lots of love and attention. Really pleased to have PetBuddy around”',
    user: '- Maila, London'
  },
  {
    id: 2,
    comment: '“We always return from holiday to find Boss as happy as when we look after him ourselves, PetBuddy only have the best sitters and we trust them 100%”',
    user: '- Margarita, London'
  },
  {
    id: 3,
    comment: '“George loves his walks with PetBuddy, they really treat him like he is their own, he comes back happy and having had the best playtime”',
    user: '- Annabelle, Nottingham'
  }
]
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
