import React from "react";
import { Label } from "./Label";
import { Error } from "./Error";

export function Input({label, error, type, placeholder, disabled }) {
  return (
    <div>
      {label && <Label text={label} />}

    <input type={type} placeholder={placeholder} disabled={disabled} />
          
      {error && <Error message={error} />}
    </div>
  );
}
