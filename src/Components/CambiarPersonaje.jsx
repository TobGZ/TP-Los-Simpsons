import { useState } from "react";

function CambiarPersonaje() {
  const [personaje, setPersonaje] = useState("Homero");

  const cambiar = () => {
    setPersonaje(personaje === "Homero" ? "Bart" : "Homero");
  };

  return (
    <div>
      <section>  
      <h2>Personaje: {personaje}</h2>
      <button onClick={cambiar}>Cambiar Personaje</button>
      </section>
    </div>
  );
}

export default CambiarPersonaje;
