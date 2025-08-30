import { useState } from "react";

function CervezasBarney() {
  const [cervezas, setCervezas] = useState(0);

  const sumarCerveza = () => {
    setCervezas(cervezas + 1);
  };

  return (
    <div>
      <section>  
      <h2>Barney tiene {cervezas} cervezas 🍺</h2>
      <button onClick={sumarCerveza}>Sumar 1 cerveza</button>
      </section>
    </div>
  );
}

export default CervezasBarney;
