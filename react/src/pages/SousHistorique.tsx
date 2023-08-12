import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";



export default function PrintComponent() {
  let componentRef: any = useRef();

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef}
        />
        <div style={{ display: "none" }}>
          <ComponentToPrint ref={(el) => (componentRef = el)} />
        </div>
      </div>
    </>
  );
}

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "red" }}>
          <h2 style={{ color: "red" }}>Attendance</h2>
          <table style={{ backgroundColor: "red" }}>
            <thead>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
            </thead>
            <tbody style={{ color: "green" }}>
              <tr>
                <td>1</td>
                <td>Njoku Samson</td>
                <td>samson@yahoo.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ebere Plenty</td>
                <td>ebere@gmail.com</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Undefined</td>
                <td>No Email</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
