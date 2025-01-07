import React, { useState } from "react";

const Haslo: React.FC = () => {
  const [haslo, setFirst] = useState<string>("");
  const [powtorzHaslo, setSecond] = useState<string>("");

  const handleChangeInFirst = (txt: React.ChangeEvent<HTMLInputElement>) => {
    setFirst(txt.target.value);
  };
  const handleChangeInSecond = (txt: React.ChangeEvent<HTMLInputElement>) => {
    setSecond(txt.target.value);
  };

  const getMess = (): string => {
    if (!haslo && !powtorzHaslo) return "Proszę wprowadzić hasło";
    if (haslo !== powtorzHaslo) return "Hasła nie są zgodne";
    return "";
  };

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1>Sprawdzanie hasła</h1>
      <input
        type="text"
        value={haslo}
        onChange={handleChangeInFirst}
        placeholder="Wpisz hasło"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "20px",
        }}
      />
      <input
        type="text"
        value={powtorzHaslo}
        onChange={handleChangeInSecond}
        placeholder="Powtórz hasło"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "20px",
        }}
      />
      <div
        style={{
          color: "red",
          fontSize: "16px",
          fontWeight: "bold",
          height: "20px",
        }}
      >
        {getMess()}
      </div>
    </div>
  );
};

export default Haslo;
