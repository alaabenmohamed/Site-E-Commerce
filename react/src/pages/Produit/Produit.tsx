import React, { useState } from "react";
import "../style.css";
import HeaderP from "./HeaderProduit";
import InputProduit from "./InputProduit";
import BodyProduit from "./BodyProduit";
function Produits() {
  const [miseajour, setmiseajour] = useState("");
  return (
    <div className="App">
      <HeaderP />
      <InputProduit setmiseajour={setmiseajour} />
      <BodyProduit setmiseajour={setmiseajour} miseajour={miseajour} />
    </div>
  );
}

export default Produits;
