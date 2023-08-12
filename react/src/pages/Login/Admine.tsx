import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Input } from "reactstrap";
import "./Admin.css";
import Swal from "sweetalert2";
type admintype = {
  setuser: Function;
};
export default function Admine({ setuser }: admintype) {
  const [admin, setadmin] = useState({
    emaila: "",
    mot_de_passe: "",
  });
  async function getadmine() {
    try {
      // fetch(`${process.env.REACT_APP_API}/adminecom`, {
        fetch("http://localhost:5000/adminecom", {
        method: "POST",
        body: JSON.stringify(admin),
        headers: { "Content-type": "application/json;charset=utf-8" },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.length >= 1) {
              setuser(result[0].emaila);
              localStorage.setItem("user", result[0].emaila);
              localStorage.setItem("admine_id", result[0].admine_id);
              localStorage.setItem("noma", result[0].noma);
            } else {
              Swal.fire({
                icon: "error",
                title: "ATTENTION",
                text: "Vous êtes pas l'admine ?",
              });
            }
          },
          (error) => {
            console.error(error.message);
          }
        );
    } catch (err: any) {
      console.error(err.message);
    }
  }

  return (
    <>
      <div className="container">
        <div className="screen">
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <Input 
                  type="text"
                  
                  className="login__input"
                  placeholder="abc@gmail.com"
                  onChange={(e: any) => {
                    admin.emaila = e.target.value;
                    setadmin(admin);
                  }}
                />
              </div>

              <div className="login__field">
                <Input
                  type="text"
                  className="login__input"
                  placeholder="........"
                  onChange={(e: any) => {
                    admin.mot_de_passe = e.target.value;
                    setadmin(admin);
                  }}
                />
              </div>
              <Button
                className="button login__submit"
                style={{ width: "150px" }}
                variant="primary"
                onClick={getadmine}
              >
                <span className="button__text" onClick={getadmine}>
                  verification 
                </span>
              </Button>
            </form>
            <div className="social-login">
              <h3>By Alaa</h3>
              <div className="social-icons"></div>
            </div>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4" />
            <span className="screen__background__shape screen__background__shape3" />
            <span className="screen__background__shape screen__background__shape2" />
            <span className="screen__background__shape screen__background__shape1" />
          </div>
        </div>
      </div>

      {/* <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: "500px" }}>
          <div className="d-flex justify-content-center  my-2">
            <h4>verification d'existance </h4>
          </div> */}

      {/* <Input
          type="text"
          className="form-control my-2"
          onChange={(e: any) => {
            admin.emaila = e.target.value;
            setadmin(admin);
          }}
        /> */}

      {/* <Button
            className="my-2"
            style={{ width: "100px" }}
            variant="primary"
            onClick={getadmine}
          >
            Add
          </Button>
          {data ? <h1>ok</h1> : <h1>vide</h1>}
        </Card>
      </div> */}
    </>
  );
}
