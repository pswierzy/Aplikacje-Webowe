import React, { useState } from "react";

const Haslo: React.FC = () => {
  const [firstPasswrd, setFirst] = useState<string>("");
  const [secondPasswrd, setSecond] = useState<string>("");

  const handleChangeInFirst = (txt: React.ChangeEvent<HTMLInputElement>) => {
    setFirst(txt.target.value);
  };
  const handleChangeInSecond = (txt: React.ChangeEvent<HTMLInputElement>) => {
    setSecond(txt.target.value);
  };

  const getMess = (): string => {
    if (!firstPasswrd && !secondPasswrd) return "Proszę wprowadzić hasło";
    if (firstPasswrd !== secondPasswrd) return "Hasła nie są zgodne";
    return "";
  };

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1>Sprawdzanie hasła</h1>
      <input
        type="text"
        value={firstPasswrd}
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
        value={secondPasswrd}
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
