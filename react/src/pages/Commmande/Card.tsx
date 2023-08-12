/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button } from "react-bootstrap";
import produit from "./produit.jpg";
type Cardtype = {
  handleShow: Function;
  setProduit: Function;
  remplirCard: any;
};
function Card({ remplirCard, setProduit, handleShow }: Cardtype) {
  return (
    <div className="col-8" style={{ borderRight: " 1px solid #333" }}>
      <div className="row col-12">
        {remplirCard.map((element: any, index: number) => {
          return (
            // eslint-disable-next-line
            <div className=" col-lg-4 col-xl-4 col-md-6 ml-0 col-sm-12 col-xs-12 my-2">
              <div className="card">
                <div className="card-body">
                  <img
                    alt="Card image cap"
                    src={produit}
                    className="card-img-top"
                  />
                  <h5 className="card-title">nom : {element.nomp} </h5>
                  <p className="card-text"> prix : {element.prix}</p>
                  <div className="d-flex justify-content-center">
                    <Button
                      style={{ width: "50%" }}
                      onClick={() => {
                        setProduit(element); // permetre l'ajoute à row 4 si non erreur
                        handleShow(); // permetre d'avoir modale[+1-]
                      }}
                    >
                      ADD
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Card;
