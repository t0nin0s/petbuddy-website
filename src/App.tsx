import React from 'react'
import { Grid } from '@material-ui/core'
import Header from './components/Header'
import ContactUsContainer from './components/ContactUs'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Join from './screens/Join/index'
import Contact from './screens/Contact'
import Home from './screens/Home'


const App = () => {

  return (
    <Router>
      <div className="App" >
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={false} sm={false} md={false} lg={1} xl={1} />
            <Grid item xs={12} sm={12} md={12} lg={10} xl={10} >
              <Header />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/cat-service">
                </Route>
                <Route path="/dog-service">
                </Route>
                <Route path="/pet-service">
                </Route>
                <Route path="/join">
                  <Join />
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
      </div>
    </Router>
  );
}

export default App;



