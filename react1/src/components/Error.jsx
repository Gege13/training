import React from "react";

export function Error({ message }) {
  return (
    <span
      style={{
        fontSize: 10,
        lineHeight: "16px",
        color: "#ff585d",
        display: "block",
        marginTop: 4,
      }}
    >
      {message}
    </span>
  );
}
