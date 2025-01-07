import React, { useEffect, useState } from "react";

const Odliczanie: React.FC = () => {
  const [count, setCount] = useState<number>(15);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("START");

  useEffect(() => {
    let intervalId: number | null = null;
    if (isActive) {
      intervalId = setInterval(() => {
        setCount((prevTime) => Math.max(prevTime - 0.1, 0));
      }, 100);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isActive]);

  useEffect(() => {
    if (count <= 0) {
      setIsActive(false);
      setButtonText("Odliczanie zakończone");
    }
  }, [count]);

  const handleButtonClick = () => {
    if (count > 0) {
      setIsActive(!isActive);
      setButtonText(isActive ? "START" : "STOP");
    }
  };

  return (
    <div>
      <h1>Odliczanie: {count.toFixed(1)} sekund</h1>
      <button
        onClick={handleButtonClick}
        disabled={count <= 0}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: count <= 0 ? "#ccc" : "#4CAF50",
          color: count <= 0 ? "#666" : "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: count <= 0 ? "not-allowed" : "pointer",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Odliczanie;
