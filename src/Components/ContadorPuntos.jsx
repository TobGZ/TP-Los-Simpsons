import { useState } from "react";

function ContadorPuntos() {
  const [puntos, setPuntos] = useState(0);

  const sumar10 = () => setPuntos(puntos + 10);
  const restar5 = () => setPuntos(puntos - 5);

  return (
    <div>
      <section>      
      <h2>Puntos del jugador: {puntos}</h2>
      <button onClick={sumar10}>+10 puntos</button>
      <button onClick={restar5}>-5 puntos</button>
      </section>
    </div>
  );
}

export default ContadorPuntos;
