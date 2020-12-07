import React, { useState } from 'react';
import styled from 'styled-components'
import { Grid } from '@material-ui/core';
import Header from './components/Header'
import Button from './components/Button'
import Review from './components/Review'
import AboutUs from './components/AboutUs'
import ContactUsContainer from './components/ContactUs';
import { mediaQueries } from './mediaqueries'

import Footer from './components/Footer'

interface Review {
  id: number;
  comment: string;
  user: string;
}
interface Data {
  header: string,
  subheader: string,
  services: string,
  blurb: string,
  aboutHeader: string,
  aboutSubheader: string,
  aboutPgraph1: string,
  aboutPgraph2: string,
  aboutPgraph3: string,
}


const topics: Data[] = [
  {
    header: 'WHERE YOUR PET BECOMES OUR BUDDY',
    subheader: 'PetBuddy',
    services: 'Pet Sitting l Pet Walking | Pet Grooming',
    blurb: `We are PetBuddy and we specalise in looking after your pets, from walking your pooches,
    looking after your pet whilst you are away, to offering a specialist grooming service to your
    cats, our aim is to give you peace of mind that your pet is in great hands with us.`,
    aboutHeader: 'Your pet, our buddy',
    aboutSubheader: 'Complete Pet Services',
    aboutPgraph1: `PetBuddy is a fully insured business offering professional care for your pet, from single visits
    and walks to longer bookings, we can work with you to ensure your pet gets the best care
    when you need it the most.We are unique in that we understand the components of trust
    and we have built ourselves around that. It’s a lot to let someone in to your home and to
    put your pet in their hands so we work to build a lovely relationship with you and your pet.`,
    aboutPgraph2: `From dog walking to sitting, small animal care, to cat sitting and grooming, we are the
    people you can trust to give your pet love and attention, giving you peace of mind.
    We work on the small gestures that can make your life easier, from making sure that you
    have essential shopping in when you are back from a trip away, to taking out all rubbish
    before you are back, we want to you come back happy and to an equally happy pet.`,
    aboutPgraph3: `We have a range of experienced animal lovers ready to make your pet their buddy, from
    single walks or visits to longer term arrangements, nothing is too small or too big for us to
    take on.`
  }
]

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
            {topics.map(topic => {
              return <AboutUs
                header={topic.aboutHeader}
                subHeader={topic.aboutSubheader}
                aboutPgraph1={topic.aboutPgraph1}
                aboutPgraph2={topic.aboutPgraph2}
                aboutPgraph3={topic.aboutPgraph3} />
            })}
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
