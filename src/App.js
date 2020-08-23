import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Frase from "./components/Frase";
import Spinner from "./components/Spinner";

function App() {
  //crear state
  const [fraseSimpsons, setFraseSimpsons] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  //la siguiente funcion tiene que ser asincrona porque no sabemos cto se puede tardar el servidor o la api, entonces usamos async y await
  const consultarAPI = async () => {
    setLoader(true);
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const fraseObtenida = await api.json();
    //api.json me devuelve la parte de los datos json de api
    //console.log(api);
    console.log(fraseObtenida[0]);

    setTimeout(() => {
      setFraseSimpsons(fraseObtenida[0]);
      setLoader(false);
    }, 2000);
  };

  //creamos variable que guarda un componente, usamos operadores ternarios a la derecha
  const componenteCondicional = loader ? (
    <Spinner></Spinner>
  ) : (
    <Frase fraseSimpsons={fraseSimpsons}></Frase>
  );

  return (
    <div className="container text-center my-5">
      <article className="d-flex flex-column my-5 align-items-center">
        <img
          src={process.env.PUBLIC_URL + "thesimpsons.png"}
          alt="logo de los simpsons"
          className="w-75"
        ></img>
        <button
          className="btn btn-dark my-5 w-50 shadow"
          onClick={() => consultarAPI()}
        >
          Obtener frase
        </button>
        {/* tenemos que poner en el onClick una funcion anonima porque sino cada vez que se carga en el DOM se "produce" un click*/}
      </article>
      {componenteCondicional}
    </div>
  );
}

export default App;
