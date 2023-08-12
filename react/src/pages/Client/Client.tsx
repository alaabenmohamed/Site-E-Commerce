import React, { useState } from "react";
import "../style.css";
import Header from "./Header";
import Body from "./Body";
import InputClient from "./InputClient";

function Client() {
  const [miseajour, setmiseajour] = useState("");
  return (
    <div className="App">
      <Header />
      <InputClient setmiseajour={setmiseajour} />
      <Body setmiseajour={setmiseajour} miseajour={miseajour} />
    </div>
  );
}

export default Client;
