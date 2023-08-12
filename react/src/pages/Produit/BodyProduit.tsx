import { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import EditProduit from "./EditProduit";

type bodytype = {
  setmiseajour: Function;
  miseajour: any;
};

export default function BodyP({ setmiseajour, miseajour }: bodytype) {
  const [produits, setproduit] = useState([]);

  const getproduit = async () => {
    try {
      const response = await fetch("http://localhost:5000/produit");
      setproduit(await response.json());
    } catch (err: any) {
      console.error(err.message);
    }
  }


  async function deleteproduit(id: any) {
    try {
      await fetch(`http://localhost:5000/produit/${id}`, {
        method: "DELETE",
      });
      setmiseajour(id);
    } catch (err: any) {
      console.error(err.message);
    }
  }


  useEffect(() => {
    getproduit();
  }, [miseajour]); // pour que sera retourne automtiquemment(produit)

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>nomp</th>
            <th>image</th>
            <th>prix</th>
            <th>admine_id</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit: any) => (
            <tr key={produit.produit_id}>
              <td>{produit.nomp}</td>
              <td>{produit.image}</td>
              <td>{produit.prix}</td>
              <td>{produit.admine_id}</td>
              <td>
                <Button
                  className="btn btn-danger"
                  onClick={() => deleteproduit(produit.produit_id)}
                >
                  Delete
                </Button>
              </td>
              <td>
                <EditProduit
                  setmiseajour={setmiseajour}
                  produitEdit={produit}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
    
