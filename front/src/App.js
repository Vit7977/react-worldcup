import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import GlobalStyle from "./styles/global.js";
import Home from "./components/Home.jsx";
import FormPais from "./components/FormPais.jsx";
import CardsPais from "./components/CardsPais.jsx";

function App() {
  const [grupo, setGrupo] = useState([]);
  const [pais, setPais] = useState([]);

  const getGrupos = async () => {
    try {
      const res = await axios.get("http://localhost:9090/api/grupo");
      setGrupo(res.data);
    } catch (error) {
      return console.error(error);
    }
  };

  const getPais = async () => {
    try {
      const res = await axios.get("http://localhost:9090/api/pais");
      setPais(res.data);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    getGrupos();
  }, []);

  useEffect(() => {
    getPais();
  }, []);

  return (
    <BrowserRouter>
    <link href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap" rel="stylesheet"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar/pais" element={<FormPais grupo={grupo} />} />
        <Route
          path="/listar/pais"
          element={<CardsPais pais={pais} grupo={grupo} />}
        />
        <Route path="*" element={<h1>PAGE NOT FOUND: 404</h1>} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
