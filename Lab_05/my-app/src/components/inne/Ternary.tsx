import React from "react";

const Ternary: React.FC = () => {
  const a: boolean = true;
  const b: boolean = false;

  return (
    <>
      <div>
        {a ? "Stwierdzenie a jest prawidziwe" : "Stwierdzenie a jest fałszywe"}
      </div>
      <div>
        {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest fałszywe"}
      </div>
    </>
  );
};

export default Ternary;
