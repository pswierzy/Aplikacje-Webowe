import React, { useEffect, useState } from "react";

const Licznik: React.FC = () => {
  const [licznik, setLicznik] = useState<number>(0);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  useEffect(() => {
    console.log(`Licznik zwiększył się do ${licznik}`);
  }, [licznik]);

  const dodaj = () => setLicznik(licznik + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Licznik: {licznik}</h2>

      <button
        onClick={dodaj}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Dodaj
      </button>
    </div>
  );
};

export default Licznik;
