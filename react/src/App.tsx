import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admine from "./pages/Login/Admine";
import Home from "./Home";
import "./pages/Login/Admin.css";


const App: React.FunctionComponent = () => {
  const [user, setuser] = React.useState<String>("");

  React.useEffect(() => {
    var user: any = localStorage.getItem("user");
    setuser(user);
  }, [user]);
  console.log(user);
  return (
    <div>
      {!user ? (
        <div  	>
          <Router>
            <Routes>
              <Route path="/" element={<Admine setuser={setuser} />} />
            </Routes>
          </Router>
        </div>
      ) : (
        <Home />  
      )}
    </div>
  );
};

export default App;
