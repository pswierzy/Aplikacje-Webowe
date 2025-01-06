import React from "react";
import Product from "./Produkt.tsx";

const Basket: React.FC = () => {
  return (
    <div>
      <h1>Koszyk</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
        <Product nazwa="Jabłko" />
        <Product nazwa="Gruszka" />
        <Product nazwa="Banany" />
        <Product nazwa="Pomarańcza" />
        <Product nazwa="Winogrona" />
      </div>
    </div>
  );
};

export default Basket;
