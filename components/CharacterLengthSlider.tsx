import React from "react";
import charLenStyles from "@/styles/componentsStyles/CharacterLengthSlider.module.css";

export default function CharacterLengthSlider({
  length,
  setLength,
}: {
  length: number;
  setLength: Function;
}) {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(e.target.value);
  };
  const min = 0;
  const max = 20;
  return (
    <div className={charLenStyles["character-length-container"]}>
      <div className={charLenStyles["text-container"]}>
        <p>Character Length</p>
        <p className={charLenStyles["current-len-value"]}>{length}</p>
      </div>
      <input
        className={charLenStyles["range-input"]}
        type="range"
        min={min}
        max={max}
        value={length}
        onChange={handleRangeChange}
        style={{
          background: `linear-gradient(to right, var(--neon-green) 0%,
            var(--neon-green) 
             ${((length - min) / (max - min)) * 100}%, var(--almost-white) 
             ${((length - min) / (max - min)) * 100}%, var(--almost-white) 
             100%)`,
        }}
      />
    </div>
  );
}
