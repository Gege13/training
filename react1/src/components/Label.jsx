import React from "react";

export function Label({ text }) {
  return (
    <label
      style={{
        fontSize: 12,
        lineHeight: "20px",
        color: "#1b1b1b",
        display: "block",
        marginBottom: 4,
      }}
    >
      {text}
    </label>
  );
}
