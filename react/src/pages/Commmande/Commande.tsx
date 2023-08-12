/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Select from "react-select";
import Card from "./Card";
import ListeCommande from "./Listecommande";
import SousCommande from "./modale";
type type = {
  setmiseajour: Function;
  miseajour: any;
};
function Commande({ setmiseajour, miseajour }: type) {
  const [client_id, setidclient] = useState([]);
  const [nomc, setNomc] = useState("");
  const [Totale, setTotale] = useState(0);
  const [sum] = useState(0);

  const [produit, setProduit] = useState([]);
  //Modal
  const [show, setShow1] = useState(false);
  const handleShow = () => setShow1(true);
  const [listeCommande, setListeCommande] = useState<any>([]);
  /// liste
  const [client, setClient] = useState([]);
  const [remplirCard, setlisteProduit] = useState([]);
  //liste produit
  async function getclientnom() {
    try {
      await fetch("http://localhost:5000/clientnom")
        .then((response) => response.json())
        .then((data: any) => {
          setClient(data); // permettre d'avoir les nomc
        });
    } catch (err: any) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getclientnom();
  }, []);
  async function getproduit() {
    try {
      await fetch("http://localhost:5000/produit")
        .then((response) => response.json())
        .then((data: any) => {
          setlisteProduit(data); // permettre à avoir les card
        });
    } catch (err: any) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getproduit();
  }, []);

  return (
    <div>
      <div className="my-5 d-flex justify-content-center">
        <div style={{ width: "350px" }}>
          <Select
            onChange={(e: any) => {
              setidclient(e.value);
              setNomc(e.label);
            }}
            options={client.map((element: any) => ({
              label: element.nomc,
              value: [element.nomc, element.client_id],
            }))}
          />
        </div>
      </div>
      {/* <div className="d-flex align-item"> */}
      <div className="row  col-12 ">
        <Card
          remplirCard={remplirCard}
          setProduit={setProduit}
          handleShow={handleShow}
        />
        <SousCommande
          setShow={setShow1} //permetre de ferme le modale et  remplir commande
          show={show}
          listeCommande={listeCommande}
          produit={produit}
          TOTALE={Totale} // prix totale
          setPrixT={setTotale} //remove
          sum={sum}
        />
        <ListeCommande
          listeCommande={listeCommande}
          TOTALE={Totale}
          setTotale={setTotale}
          setListeCommande={setListeCommande}
          setmiseajour={setmiseajour}
          clientNom={client_id[0]}
          clientId={client_id[1]}
          // nomc={nomc}
        />
      </div>
    </div>
    // </div>
  );
}
export default Commande;
