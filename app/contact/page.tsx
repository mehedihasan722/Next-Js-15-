import React from "react";
import ButtonComponent from "./button";

const Contact = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    next: { revalidate: 10 },
  });
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <ButtonComponent />
    </div>
  );
};

export default Contact;
