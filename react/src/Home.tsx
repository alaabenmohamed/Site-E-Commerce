import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IndexSidebar from "./components";

import Client from "./pages/Client/Client";
import Produit from "./pages/Produit/Produit";
import Nom from "./pages/Nom";
import Profil from "./pages/Profil";
import Commande from "./pages/Commmande/Commande";
import classnames from "classnames";
import "./Home.css";
import Historique from "./pages/Historique";
import SousHistorique from "./pages/SousHistorique";


const Home: React.FunctionComponent = () => {
  const [miseajour, setmiseajour] = useState();
  const [close, setClose] = React.useState(false);

  return (
    <>
      <Router>
        <IndexSidebar close={close} setClose={setClose} />
        <div
          className={classnames({
            " Sidebaractive": close,
            " Sidebar": !close,
          })} /// pour evite probleme de siedbarre
        >
          <Routes>
            <Route path="/Client" element={<Client />} />
            <Route path="/Produit" element={<Produit />} />
            <Route
              path="/Commande"
              element={
                <Commande setmiseajour={setmiseajour} miseajour={miseajour} />
              }
            />
            <Route path="/nom" element={<Nom />} />
            <Route
              path="/historique"
              element={
                <Historique
                  setmiseajour={setmiseajour}
                  miseajour={miseajour}
                />
              }
            />
            <Route path="/" element={<Profil />} />
            <Route path="/his" element={<SousHistorique />} />
            {/* <Route path="/yy" element={<Sous />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default Home;
