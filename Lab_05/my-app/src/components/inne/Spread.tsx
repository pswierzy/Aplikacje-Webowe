import React, { useState } from "react";

interface ProductProps {
  nazwa: string;
  cena: number;
}

const Spread: React.FC = () => {
  const [produkt, setProduct] = useState<ProductProps>({
    nazwa: "Pomidor",
    cena: 50,
  });

  const zmienCene = () => {
    setProduct((prev) => ({
      ...prev,
      cena: 100,
    }));
  };

  return (
    <div>
      <div>
        Aktualnie <b>{produkt.nazwa}</b> kosztuje {produkt.cena}
      </div>
      <button
        onClick={zmienCene}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Zmień cenę
      </button>
    </div>
  );
};

export default Spread;
