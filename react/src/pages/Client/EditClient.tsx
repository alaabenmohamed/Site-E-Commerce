import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import { Input } from "reactstrap";
type Edittyle = {
  clientEdit: any;
  setmiseajour: Function;
};
function EditClient({ clientEdit, setmiseajour }: Edittyle) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  ////
  const [nomc, setnomc] = useState(clientEdit.nomc);
  const [emailc, setemailc] = useState(clientEdit.emailc);
  const [adresse, setadresse] = useState(clientEdit.adresse);
  

  async function updateclient() {
    let client = {
      nomc: nomc,
      emailc: emailc,
      adresse: adresse,
    };
    try {
      await fetch(`http://localhost:5000/client/${clientEdit.client_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      });
      setmiseajour(clientEdit.client_id);
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
            value={nomc}
            className="form-control mt-2"
            onChange={(e: any) => {
              setnomc(e.target.value);
            }}
          />
          <Input
            type="text"
            value={emailc}
            className="form-control mt-2"
            onChange={(e: any) => {
              setemailc(e.target.value);
            }}
          />
          <Input
            type="text"
            value={adresse}
            className="form-control mt-2"
            onChange={(e: any) => {
              setadresse(e.target.value);
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
              updateclient();
            }}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditClient;
