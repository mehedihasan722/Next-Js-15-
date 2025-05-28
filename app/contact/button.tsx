"use client";
import React from "react";

const ButtonComponent = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={() => alert("Button clicked!")}
    >
      Click Me
    </button>
  );
};

export default ButtonComponent;
