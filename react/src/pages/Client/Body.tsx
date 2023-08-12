import { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import EditClient from "./EditClient";
type bodytype = {
  setmiseajour: Function;
  miseajour: any;
};

export default function Body({ setmiseajour, miseajour }: bodytype) {
  const [clients, setclients] = useState([]);
  const getclients = async () => {
    try {
      const response = await fetch("http://localhost:5000/client");
      setclients(await response.json());
    } catch (err: any) {
      console.error(err.message);
    }
  };
  async function deleteclient(id: any) {
    try {
      await fetch(`http://localhost:5000/client/${id}`, {
        method: "DELETE",
      });
      setmiseajour(id);
    } catch (err: any) {
      console.error(err.message);
    }
  }
  useEffect(() => {
    getclients();
  }, [miseajour]); // pour que sera retourne automtiquemment (clients)

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>nomc</th>
            <th>emailc</th>
            <th>adresse</th>
            <th>admine_id</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client: any) => (
            <tr key={client.client_id}>
              <td>{client.nomc}</td>
              <td>{client.emailc}</td>
              <td>{client.adresse}</td>
              <td>{client.admine_id}</td>
              <td>
                <Button
                  className="btn btn-danger"
                  onClick={() => deleteclient(client.client_id)}
                >
                  Delete
                </Button>
              </td>
              <td>
                <EditClient setmiseajour={setmiseajour} clientEdit={client} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
