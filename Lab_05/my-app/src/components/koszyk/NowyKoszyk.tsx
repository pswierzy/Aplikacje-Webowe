import React from "react";
import Product from "./Produkt.tsx";

const Basket: React.FC = () => {
  const Produkty: string[] = [
    "Jabłko",
    "Gruszka",
    "Banany",
    "Pomarańcza",
    "Winogrona",
  ];

  return (
    <div>
      <h1>Nowy Koszyk</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
        {Produkty.map((nazwaProduktu, index) => (
          <Product key={index} nazwa={nazwaProduktu} />
        ))}
      </div>
    </div>
  );
};

export default Basket;
