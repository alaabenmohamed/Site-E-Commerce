import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiFillAndroid, AiOutlineLogout } from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
const Navbar = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 3.5rem;
  background-color: #000080;
`;

const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  color: #ffffff;
`;
type sidebar = {
  showSidebar: any;
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};
function SNavbar({ close, setClose, showSidebar }: sidebar) {
  const [nom, setNom] = useState("");

  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("admine_id");
    localStorage.removeItem("noma");

    navigate("/");
    window.location.reload(); /*refrech auto*/
  }
  React.useEffect(() => {
    let user: any = localStorage.getItem("noma");
    setNom(user);
  }, [nom]);
  function oui() {
    navigate("/nom");
  }

  return (
    <Navbar className="d-flex justify-content-between">
      <MenuIconOpen to="#" onClick={showSidebar}>
        <FaIcons.FaBars />
      </MenuIconOpen>

      <div className="d-flex align-items-end  justify-content-end">
        <Dropdown>
          <Dropdown.Toggle style={{ backgroundColor: "#000080" }}>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              style={{ width: "40px" }}
              alt="Avatar"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu
            style={{
              color: "linear-gradient(90deg, #C7C5F4, #776BCC);",
            }}
          >
            <Dropdown.Item onClick={oui}>
              {nom}
              <AiFillAndroid
                onClick={oui}
                style={{
                  color: "#ffffff",
                  width: "100px",
                  height: "35px",
                  cursor: "pointer",
                }}
              />
            </Dropdown.Item>
            <Dropdown.Item onClick={logout}>
              Déconnecter
              <AiOutlineLogout
                onClick={logout}
                style={{
                  color: "#ffffff",
                  width: "100px",
                  height: "35px",
                  cursor: "pointer",
                }}
              />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Navbar>
  );
}

export default SNavbar;
