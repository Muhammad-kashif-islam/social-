import "./App.css";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import InfoContext from "../store/InforProvider.jsx";
import { useState } from "react";
function App() {
  const [name, setname] = useState(null);
  return (
    <>
      <InfoContext.Provider
        value={{
          name: name,
          setname: setname,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </InfoContext.Provider>
    </>
  );
}

export default App;
