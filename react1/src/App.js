import React from "react";
import { Title } from "./components/Title";
import { Input } from "./components/Input";

function App(props) {
  return (
    <div>
      <h1>Hello world!</h1>
      <Title text="ceva">Titlu</Title>
      <Input label="Eu am label" />
      <Input label="Email address " type="email" />
      <Input
        label="Numărul de Telefon "
        placeholder="112"
        error="Invalid phone number"
        type="number"
      />
      <Input placeholder="type here" error="This field is required" />
      <Input
        label="I agree to the terms and condition"
        type="checkbox"
        error="you must agree"
      />
    </div>
  );
}

export default App;
