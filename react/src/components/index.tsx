import React from "react";
import SNavbar from "./Navbar";
import Sidebar from "./sidebar";
type sidebar = {
  close: boolean;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
}; // pour evite probleme de siedbarre

export default function IndexSidebar({ close, setClose }: sidebar) {
  const showSidebar = () => setClose(!close);

  return (
    <>
      <SNavbar setClose={setClose} close={close} showSidebar={showSidebar} />
      <Sidebar close={close} showSidebar={showSidebar} />
    </>
  );
}
