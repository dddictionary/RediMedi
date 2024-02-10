import React from 'react'

const data = {
  name: "",
};

fetch("http://localhost:3000/medication", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("error", error));


export default function Home() {
  return (
    <div>
      <h1>Home Page!!!</h1>
    </div>
  )
}
