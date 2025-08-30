import DonasHomero from "./Components/DonasHomero";
import CambiarPersonaje from "./Components/CambiarPersonaje";
import CervezasBarney from "./Components/CervezasBarney";
import ContadorPuntos from "./Components/ContadorPuntos";
import './App.css';
import homero from './assets/imagenes/homero.png'
import bart from './assets/imagenes/bart.png'
import barney from './assets/imagenes/barney.png'

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Los Simpsons</h1>
      <img src={barney} className="barney"/>
       <img src={homero} alt="" className="homero" />
       <img src={bart} alt="" className="bart" />
      <DonasHomero />

      <CambiarPersonaje />
      
      <CervezasBarney />
      
      <ContadorPuntos />
    </div>
    
  );
}

export default App;
