import React, { useState } from 'react';
//import 'normalize.css';
import Button from './components/Button/Button'
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


