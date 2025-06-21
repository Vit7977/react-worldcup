import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPais from "./components/formPais.jsx";
import Home from "./components/home.jsx";
import GlobalStyle from "./styles/global.js";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [grupo, setGrupo] = useState([]);

  const getGrupos = async () => {
    try {
      const res = await axios.get("http://localhost:9090/api/grupo");
      setGrupo(res.data);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    getGrupos();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar/pais" element={<FormPais grupo={grupo}/>} />
        <Route path="*" element={<h1>PAGE NOT FOUND: 404</h1>} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
