import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "reactstrap";
type constante = {
  sup: Function;
  insertcommande: Function;
  listeCommande: any;
  TOTALE: any;

  clientId: any;

  clientNom: any;
};
function SousListe({
  sup,
  clientId,
  clientNom,

  listeCommande,
  TOTALE,
  insertcommande,
}: constante) {
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>demande numero</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Qantité</th>
            <th>SousTotale</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody style={{ color: "blue" }}>
          {listeCommande.map((element: any, index: number) => (
            <tr>
              <td>{index}</td>
              <td>{element.nom}</td>
              <td>{element.prix}</td>
              <td>{element.qauntité}</td>
              <td>{element.prixT}</td>
              <td>
                <div className="table-remove">
                  <Button
                    type="button"
                    className="btn btn-danger btn-rounded btn-sm my-0"
                    onClick={() => {
                      sup(index);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <td colSpan={4}>Total :</td>
          <td>{TOTALE}</td>
        </tfoot>
      </Table>
      <div className="row">
        <Button
          variant="primary"
          type="button"
          className="mx-3  "
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            insertcommande(TOTALE, clientNom, clientId);
          }}
        >
          COMMANDER
        </Button>
      </div>
    </div>
  );
}
export default SousListe;
