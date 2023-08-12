import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import React, { useRef, useEffect, useState } from "react";
import { Modal, Table } from "react-bootstrap";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  client: {
    fontWeight: "bold",
    fontSize: "10pt",
  },
  facture: {
    fontSize: "26pt",
    alignSelf: "center",
  },

  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    textDecoration: "underline",
    marginLeft: "10.9mm",
    fontSize: "8pt",
    marginTop: "10mm",
  },
});

type printtype = {
  setmiseajour: Function;
  miseajour: any;
};
export default function PrintComponent({ setmiseajour, miseajour }: printtype) {
  const [show, setShow] = useState(false);
  const [y, setY] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [commande, setcommande] = useState([]);
  const [lignecommande, setLignecommande] = useState([]);
  class ComponentToPrint extends React.Component {
    render() {
      return (
        <div>
          <Document>
            <Page size="A3">
              <View style={{ color: "blue" }}>
                <Text style={styles.facture}>Facture Totale</Text>
              </View>
              <Table bordered className="mt-4">
                <thead>
                  <tr>
                    <th>lignecommande_id</th>
                    <th>nomproduit</th>
                    <th>prixunitaire</th>
                    <th>quantite</th>
                    <th>soustotale</th>
                    <th>prixtotale</th>
                    <th>commande_id</th>
                  </tr>
                </thead>
                <tbody style={{ color: "blue" }}>
                  {lignecommande
                    .filter((e: any) => e.commande_id === y)
                    .map((lignecommande: any) => (
                      <tr key={lignecommande.lignecommande_id}>
                        <td>{lignecommande.lignecommande_id}</td>
                        <td>{lignecommande.nomproduit}</td>
                        <td>{lignecommande.prixunitaire}</td>
                        <td>{lignecommande.quantite}</td>
                        <td>{lignecommande.soustotale}</td>
                        <td>{lignecommande.prixtotale}</td>
                        <td>{lignecommande.commande_id}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>

              <Text
                style={{
                  fontSize: "8pt",
                  textAlign: "center",
                  marginTop: "5mm",
                }}
              >
                Siret : 81867952400012 - APE : 6202A - N° TVA intracom :
                FR39818679524
              </Text>
            </Page>
          </Document>
        </div>
      );
    }
  }

  const getcommande = async () => {
    try {
      const response = await fetch("http://localhost:5000/commande");
      setcommande(await response.json());
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const getlignecommande = async () => {
    try {
      const response = await fetch("http://localhost:5000/getlignecommande");
      setLignecommande(await response.json());
    } catch (err: any) {
      console.error(err.message);
    }
  };

  let componentRef: any = useRef();
  
  useEffect(() => {
    getcommande();
    getlignecommande();
  }, []);

  return (
    <>
      <div>
        <Table bordered className="mt-4">
          <thead>
            <tr>
              <th>id commande</th>
              <th>date</th>
              <th>Totale</th>
              <th>Nom client</th>
            </tr>
          </thead>
          <tbody style={{ color: "blue" }}>
            {commande.map((commande: any) => (
              <tr key={commande.commande_id}>
                <td>{commande.commande_id}</td>

                <td>{commande.time}</td>
                <td>{commande.prixt}</td>
                <td>{commande.nomclient}</td>
                <td>
                  <Button
                    className="btn btn-danger"
                    onClick={() => {
                      handleShow();
                      setY(commande.commande_id);
                    }}
                  >
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal size="lg" show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>PLus des informations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table bordered className="mt-4">
              <thead>
                <tr>
                  <th>lignecommande_id</th>
                  <th>nomproduit</th>
                  <th>prixunitaire</th>
                  <th>quantite</th>
                  <th>soustotale</th>
                  <th>prixtotale</th>
                  <th>commande_id</th>
                </tr>
              </thead>
              <tbody style={{ color: "blue" }}>
                {lignecommande
                  .filter((e: any) => e.commande_id === y)
                  .map((lignecommande: any) => (
                    <tr key={lignecommande.lignecommande_id}>
                      <td>{lignecommande.lignecommande_id}</td>
                      <td>{lignecommande.nomproduit}</td>
                      <td>{lignecommande.prixunitaire}</td>
                      <td>{lignecommande.quantite}</td>
                      <td>{lignecommande.soustotale}</td>
                      <td>{lignecommande.prixtotale}</td>
                      <td>{lignecommande.commande_id}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{ backgroundColor: "blue" }} onClick={handleClose}>
              close
            </Button>
            <ReactToPrint
              trigger={() => <Button>Imprimer</Button>}
              content={() => componentRef}
            />

            <div style={{ display: "none" }} >
              <ComponentToPrint ref={(el) => (componentRef = el)} />
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
