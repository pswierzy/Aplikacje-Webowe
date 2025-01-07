import React from "react";

interface ProductProps {
  nazwa: string;
}

const Product: React.FC<ProductProps> = ({ nazwa }) => {
  return (
    <div style={{ padding: "1px", margin: "auto" }}>
      <h3>{nazwa}</h3>
    </div>
  );
};

export default Product;
