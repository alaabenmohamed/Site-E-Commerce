import React, { useState } from "react";
import Swal from "sweetalert2";
import SousListe from "./SousListe";

type Listecommandetype = {
  listeCommande: any;
  clientId: any;
  // nomc: any;
  clientNom: any;
  TOTALE: any;
  setTotale: Function;
  setmiseajour: Function;
  setListeCommande: Function;
};
function Listecommande({
  listeCommande,
  TOTALE,
  clientNom,
  clientId,
  setTotale,
  setListeCommande,
  setmiseajour,
}: Listecommandetype) {
  let idCmd: number;
  // eslint-disable-next-line
  const [show, setShow] = useState(false);
  async function sup(index: number) {
    setTotale((prevState: any) => {
      let newState: number;
      newState = prevState - listeCommande[index].prixT;
      return newState;
    }); /* calcul new prix Totale*/
    setListeCommande((pp: any) => {
      const newState = [...pp];
      newState.splice(index, 1);
      return newState;
    }); /* sup remouve*/ /*splice pour suprimer*/
  }

  async function insertcommande(prixt: any, clientId: any, clientNom: any) {
    let boody = { prixt, clientId, clientNom };

    console.log(clientId);
    console.log(clientNom);
    if (clientId) {
      try {
        fetch("http://localhost:5000/postcommande", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(boody),
        })
          .then((res) => res.json())
          .then(
            (result) => {
              idCmd = result.commande_id;

              listeCommande.map((element: any) =>
                insertlignecommande(
                  element.nom,
                  element.prix,
                  element.qauntité,
                  element.prixT,
                  TOTALE,
                  idCmd
                )
              );
              alert();
              setListeCommande([]);
              setTotale(0);
            },
            (error) => {}
          );
      } catch (err: any) {
        console.error(err.message);
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "you must choose a client",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
  async function alert() {
    return Swal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  async function insertlignecommande(
    quantite: any,
    prix: number,
    soustotale: number,
    prixtotale: number,
    nomp: any,
    idcomd: number
  ) {
    let bady = { nomp, prix, quantite, soustotale, prixtotale, idcomd };
    try {
      const insertlignecommande = await fetch("http://localhost:5000/ligne", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bady),
      });
      setmiseajour(insertlignecommande);
      setShow(false);
    } catch (err: any) {
      console.error(err.message);
    }
  }
  return (
    <div className="col-4 ">
      <SousListe
        insertcommande={insertcommande}
        TOTALE={TOTALE}
        sup={sup}
        listeCommande={listeCommande}
        clientNom={clientNom}
        clientId={clientId}
      />
    </div>
  );
}
export default Listecommande;
