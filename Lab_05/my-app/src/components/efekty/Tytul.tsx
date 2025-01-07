import React, { useEffect, useState } from "react";

const Tytul: React.FC = () => {
  const [tytul, setTytul] = useState<string>("");

  useEffect(() => {
    document.title = tytul || "Domyślny tytuł";
  }, [tytul]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        value={tytul}
        onChange={(e) => setTytul(e.target.value)}
        placeholder="Wpisz nowy tytuł strony"
      />
    </div>
  );
};

export default Tytul;
