import React, { useState } from 'react';
import './styles/App.scss';
import 'normalize.css';
import { Button } from './components/Button'

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = (e: MouseEvent) => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <div> count is {count} </div>
      <Button clickHandler={clickHandler}>Book now</Button>
    </div>
  );
}

export default App;
