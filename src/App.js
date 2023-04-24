import "./App.css";
import { useState } from "react";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("texto 1");
  const [linea2, setLinea2] = useState("texto 2");
  const [imagen, setImagen] = useState("futurama");

  function onChangeImage(e) {
    setImagen(e.target.value);
  }
  function onClickExport(e) {
    html2canvas(document.querySelector(".meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  }
  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philoso Raptor</option>
        <option value="smart">Smart Guy</option>
        <option value="tachirita">Tachirita</option>
        <option value="xavi">Xavi</option>
      </select>
      <br />
      <input
        type="text"
        placeholder="Texto 1"
        onChange={(e) => setLinea1(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Texto 2"
        onChange={(e) => setLinea2(e.target.value)}
      />
      <br />
      <button type="submit" onClick={onClickExport}>
        Guardar meme
      </button>
      <div className="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img alt =" imagen meme" src={"./img/" + imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default App;
