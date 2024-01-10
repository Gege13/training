import React, { useState } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";

function App() {
  const [emailValue, setEmailValue] = useState("");

  return (
    <div className="bg-slate-500">
      <h1>Hello world</h1>
      <Button title="Click me" onClick={() => alert("A mers")} type="primary" />
      <Button title="Click me" onClick={() => alert("A mers")} />
      <Input
        type="text"
        onChange={setEmailValue}
        value={emailValue}
        name="email"
      />
    </div>
  );
}

export default App;
