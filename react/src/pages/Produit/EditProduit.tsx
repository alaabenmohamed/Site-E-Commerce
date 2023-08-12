import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { Input } from "reactstrap";
type Edittyle = {
  produitEdit: any;
  setmiseajour: Function;
};
function EditProduit({ produitEdit, setmiseajour }: Edittyle) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ////
  const [nomp, setnomp] = useState(produitEdit.nomp);
  const [image, setimage] = useState(produitEdit.image);
  const [prix, setprix] = useState(produitEdit.prix);



  async function updateproduit() {
    let produit = {
      nomp: nomp,
      image: image,
      prix: prix,
      
    };
    try {
      await fetch(`http://localhost:5000/produit/${produitEdit.produit_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produit),
      });
      setmiseajour(produitEdit.produit_id);
      setShow(false);
    } catch (err: any) {
      console.error(err.message);
    }
  }



  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>modifie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            type="text"
            value={nomp}
            className="form-control mt-2"
            onChange={(e: any) => {
              setnomp(e.target.value);
            }}
          />
          <Input
            type="text"
            value={image}
            className="form-control mt-2"
            onChange={(e: any) => {
              setimage(e.target.value);
            }}
          />
          <Input
            type="text"
            value={prix}
            className="form-control mt-2"
            onChange={(e: any) => {
              setprix(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              updateproduit();
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProduit;
