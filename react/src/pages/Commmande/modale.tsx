import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Input } from "reactstrap";

type souscommandtype = {
  setShow: Function; //permetre de ferme le modale et d'envayer a remplir commande
  show: boolean;
  listeCommande: any; // pour le remplir
  produit: any;
  TOTALE: any;
  setPrixT: Function;
  sum: any;
};

function SouCommande({
  setShow,
  show,
  produit,
  listeCommande,
  setPrixT,
  TOTALE,
  sum,
}: souscommandtype) {
  /// qte
  const [qte, setQte] = React.useState(1);

  const handleClose = () => {
    setQte(1);
    setShow(false); //permetre de ferme le modale et d'envayer a remplir commande
  };

  let decNum = () => {
    if (qte > 1) {
      setQte(qte - 1);
    }
  };
  let incNum = () => {
    setQte(Number(qte) + 1);
  };

  function addlistecommande() {
    let total = produit.prix * qte;
    let sum = TOTALE + total;
    setPrixT(sum); // permet d'avoir calcul de somme
    let commande = {
      nom: produit.nomp,
      qauntité: qte,
      prix: produit.prix,
      prixT: total,
      idproduit: produit.idproduit,
    };
    listeCommande.push(commande);
    handleClose(); // fermer aprer puiye sur bouton commander
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Bienvenue </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Modal.Body className="d-flex justify-content-center align-self-center">
          <Button
            onClick={decNum}
            style={{ width: "45px", backgroundColor: "red" }}
            className=" mx-2"
          >
            -
          </Button>
          <Input style={{ width: "45px", textAlign: "center" }} value={qte} />
          <Button onClick={incNum} style={{ width: "45px" }} className=" mx-2">
            +
          </Button>
        </Modal.Body>
      </Modal.Footer>
      <div className="d-flex justify-content-center my-2">
        <Button
          style={{
            width: "min-content",
          }}
          onClick={addlistecommande}
        >
          commander
        </Button>
      </div>
    </Modal>
  );
}
export default SouCommande;
