import React, { useState } from "react";

import Button from 'shared/Button';
import Input from 'shared/Input';

import "./index.css";

const App = () => {
  const [name, setName] = useState('');
  return (
    <div className="container">
      <div>Name: remote2</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <Button
        onClick={() => console.log("CLICK REMOTE 2 BUTTON")}
        label="Remote 2 Federated Button"
      />
      <Input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        label="NAME:"
      />
    </div>
  )
  }

export default App;
