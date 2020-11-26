import React, { useState } from 'react';
import Header from './components/Header/Header'
import Button from './components/Button/Button'
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
      <Header />
      <Footer>Designed & managed by Pet Buddy@2020</Footer>
    </div>
  );
}

export default App;


