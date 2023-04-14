import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const getOtra = () => {
    return axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/otra`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  };
  return (
    <div className="App">
      <h1>hola frontend</h1>
      <button onClick={getOtra}>Otra</button>
      {data &&
        data.map((e) => {
          return <p>{e.name}</p>;
        })}
    </div>
  );
}

export default App;
