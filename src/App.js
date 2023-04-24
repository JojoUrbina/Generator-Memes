import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
const [linea1, setLinea1] = useState("linea 1");
const [linea2, setLinea2] = useState("linea 2")


  return (
    <div className="App">
      <select >
        <option value="Casa en llamas" >Casa en llamas</option>
        <option value="Futurama">Futurama</option>
        <option value="History Channel">History Channel</option>
        <option value="Matrix">Matrix</option>
        <option value="Philoso Raptor">Philoso Raptor</option>
        <option value="Smart Guy">Smart Guy</option>
       </select><br/>
      <input type='text' placeholder='Linea 1' onChange={(e)=>setLinea1(e.target.value)}/><br/>
      <input type='text' placeholder='Linea 2' onChange={(e)=>setLinea2(e.target.value)}/><br/>
      <button type='submit'>Exportar</button>
      <div>
        <span>{linea1}</span><br/>
        <span>{linea2}</span>
      </div>


    </div>
  );
}

export default App;
