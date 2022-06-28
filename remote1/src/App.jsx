import React, { useState } from "react";

import Button from 'shared/Button';
import Input from 'shared/Input';

import "./index.css";

const App = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <div>Name: remote1</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <Button
        onClick={() => console.log("CLICK Remote 1 Button")}
        label="Remote 1 Federated Button"
      />
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        label="Remote 1 Name:"
      />
    </div>
  );
}

export default App;
