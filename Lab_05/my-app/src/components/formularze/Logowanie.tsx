import React, { useState } from "react";

const Logowanie: React.FC = () => {
  const [nazwaUzytkownika, setNazwaUzytkownika] = useState<string>("");
  const [haslo, setHaslo] = useState<string>("");
  const [powtorzHaslo, setPowtorzHaslo] = useState<string>("");

  const handleNazwaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNazwaUzytkownika(e.target.value);
  };

  const handleHasloChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHaslo(e.target.value);
  };

  const handlePowtorzHasloChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPowtorzHaslo(e.target.value);
  };

  const isButtonDisabled = (): boolean => {
    return !nazwaUzytkownika || !haslo || !powtorzHaslo;
  };

  const handleLogin = () => {
    if (haslo !== powtorzHaslo) {
      alert("Hasła nie są zgodne");
    } else {
      alert("Zalogowano poprawnie");
    }
  };

  return (
    <div style={{ textAlign: "left", marginTop: "20px" }}>
      <h2>Logowanie</h2>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Nazwa użytkownika:
          <input
            type="text"
            value={nazwaUzytkownika}
            onChange={handleNazwaChange}
            style={{ marginLeft: "10px", padding: "5px", fontSize: "16px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Hasło:
          <input
            type="text"
            value={haslo}
            onChange={handleHasloChange}
            style={{ marginLeft: "10px", padding: "5px", fontSize: "16px" }}
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Powtórz Hasło:
          <input
            type="text"
            value={powtorzHaslo}
            onChange={handlePowtorzHasloChange}
            style={{ marginLeft: "10px", padding: "5px", fontSize: "16px" }}
          />
        </label>
      </div>
      <button
        onClick={handleLogin}
        disabled={isButtonDisabled()}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isButtonDisabled() ? "#ccc" : "#4CAF50",
          color: isButtonDisabled() ? "#666" : "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: isButtonDisabled() ? "not-allowed" : "pointer",
        }}
      >
        Logowanie
      </button>
    </div>
  );
};

export default Logowanie;
