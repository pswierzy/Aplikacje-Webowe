import React from "react";

interface ButtonInterface {
  onClick: () => void;
}

const Przycisk: React.FC<ButtonInterface> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px 20px", fontSize: "16px" }}
    >
      Dodaj
    </button>
  );
};

export default Przycisk;
