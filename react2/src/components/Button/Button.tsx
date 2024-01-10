import React from "react";

type ButtonType = "primary" | "secondary";

interface Props {
  title: string;
  onClick: () => void;
  type?: ButtonType;
}

export function Button({ title, onClick, type }: Props) {
    const isPrimary = type === "primary";

  return (
    <div
      className={`py-2 px-4 rounded inline-block cursor-pointer ${
        isPrimary ? "bg-blue-600" : "bg-gray-300"
      }`}
      onClick={onClick}
    >
      <div
        className={`text-based leading-normal ${
          isPrimary ? "text-white" : "text-gray-800"
        }`}
      >
        {" "}
        {title}
      </div>
    </div>
  );
}
