import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header/Header'
import Button from './components/Button/Button'
import Reviews from './components/Reviews/Reviews'
import ContactUsContainer from './components/ContactUs/ContactUs';

import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <div> count is {count} </div>
      <Button>button</Button>
      <Grid container direction="column">
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10} >
            <div>
              Sed ut perspiciatis unde omnis iste natus error sit v
              oluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis
              et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            </div>
          </Grid>
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
        <ContactUsContainer
          email="petbuddyinfo.uk@gmail.com"
          phone="07753883444"
          follow="Follow Us"
          contact="Contact Us"
          call="Call Us" />
        <Footer>Designed & managed by Pet Buddy@2020</Footer>
      </Grid >
      <Header />
      <Reviews />
      <ContactUsContainer
        email="petbuddyinfo.uk@gmail.com"
        phone="07753883444"
        follow="Follow Us"
        contact="Contact Us"
        call="Call Us" />
      <Footer>Designed & managed by Pet Buddy@2020</Footer>
    </div>
  );
}

export default App;
