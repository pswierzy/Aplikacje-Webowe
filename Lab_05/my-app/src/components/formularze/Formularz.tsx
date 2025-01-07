import React, { useState } from "react";

const Formularz: React.FC = () => {
  const [tekst, setTekst] = useState<string>("");

  const handleChange = (txt: React.ChangeEvent<HTMLInputElement>) => {
    setTekst(txt.target.value);
  };

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1>Formularz</h1>
      <input
        type="text"
        value={tekst}
        onChange={handleChange}
        placeholder="Wpisz tu swój tekst"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "20px",
        }}
      />
      <div
        style={{
          padding: "10px",
          fontSize: "18px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "300px",
          margin: "0 auto",
          marginTop: "10px",
          wordWrap: "break-word",
        }}
      >
        {tekst || "Tu się pojawi twój tekst"}
      </div>
    </div>
  );
};

export default Formularz;
