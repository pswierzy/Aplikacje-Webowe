import React, { useState } from "react";

const Licznik: React.FC = () => {
  const [licznik, setLicznik] = useState<number>(() => {
    const saved = localStorage.getItem("licznik");
    return saved ? JSON.parse(saved) : 0;
  });

  const dodaj = () => {
    const newLicznik: number = licznik + 1;
    setLicznik(newLicznik);
    localStorage.setItem("licznik", JSON.stringify(newLicznik));
  };

  return (
    <div style={{ textAlign: "left", marginTop: "20px" }}>
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
