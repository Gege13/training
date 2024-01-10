import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  type: "text" | "number" | "date" | "radio" | "checkbox";
  name: string;
  placeholder?: string;
  label?: string;
  error?: string;
}

export function Input({
  value,
  type,
  name,
  onChange,
  placeholder,
  label,
  error,
}: Props) {
  return (
    <div className="py-1">
      {label && (
        <label htmlFor={name} className="text-base leading-normal mb-1 block">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        name={name}
        id={name}
        className="py-2 px-4 border-gray-200 border-solid border rounded block w-full"
      />
      {error && <span className="text-xs text-red-600 block">{error}</span>}
    </div>
  );
}
