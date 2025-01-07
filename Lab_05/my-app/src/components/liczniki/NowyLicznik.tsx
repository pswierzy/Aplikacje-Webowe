import React, { useState } from "react";
import Przycisk from "./Przycisk.tsx";

const Licznik: React.FC = () => {
  const [licznik, setLicznik] = useState<number>(0);

  const dodaj = () => setLicznik(licznik + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Licznik: {licznik}</h2>
      <Przycisk onClick={dodaj} />
    </div>
  );
};

export default Licznik;
