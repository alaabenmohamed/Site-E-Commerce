import { useState } from "react";
import { Input } from "reactstrap";
import { Button, Modal } from "react-bootstrap";
type Inputtype = {
  setmiseajour: Function;
};
export default function InputClient({ setmiseajour }: Inputtype) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [client, setclient] = useState({
    nomc: "",
    emailc: "",
    adresse: "",
    admine_id: localStorage.getItem("admine_id"),
  });

  async function insertclient() {
    try {
      const insertclient = await fetch("http://localhost:5000/client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(client),
      });

      setmiseajour(insertclient);
      setShow(false);
    } catch (err: any) {
      console.error(err.message);
    }
  }
    // useEffect(() => {
    //   insertclient();
    // }, []);
  
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter client
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ajoute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <div className="d-flex bd-highlight">
                  <div className="p-2 flex-grow-1 bd-highlight">Nom : </div>

                  <div className="p-2 bd-highlight">
                    <Input
                      type="text"
                      className="form-control"
                      onChange={(e: any) => {
                        client.nomc = e.target.value;
                        setclient(client);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 bd-highlight">
                <div className="d-flex bd-highlight">
                  <div className="p-2 flex-grow-1 bd-highlight">Email : </div>

                  <div className="p-2 bd-highlight">
                    <Input
                      type="text"
                      className="form-control"
                      onChange={(e: any) => {
                        client.emailc = e.target.value;
                        setclient(client);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 bd-highlight">
                <div className="d-flex bd-highlight">
                  <div className="p-2 flex-grow-1 bd-highlight">adresse : </div>
                  <div className="p-2 bd-highlight">
                    <Input
                      type="text"
                      className="form-control"
                      onChange={(e: any) => {
                        client.adresse = e.target.value;
                        setclient(client);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={insertclient}>
            Close
          </Button>
          <Button variant="primary" onClick={insertclient}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
