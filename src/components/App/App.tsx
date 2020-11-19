import React, { useState } from 'react';
//import 'normalize.css';
import Button from '../Button/Button'

function App() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <div> count is {count} </div>
      <Button>button</Button>
    </div>
  );
}

export default App;


