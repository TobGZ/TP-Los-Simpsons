import { useState } from "react";

function DonasHomero() {
  const [donas, setDonas] = useState(0);

  const sumarDonas = () => {
    setDonas(donas + 2);
  };

  return (
    <div>
    <section>
      <h2>Homero tiene {donas} donas 🍩</h2>
      <button onClick={sumarDonas}>Agregar 2 Donas</button>
      </section>
    </div>
  );
}

export default DonasHomero;
