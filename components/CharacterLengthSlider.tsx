import React from "react";
import charLenStyles from "@/styles/componentsStyles/CharacterLengthSlider.module.css";

export default function CharacterLengthSlider({
  minLen,
  maxLen,
  length,
  setLength,
}: {
  minLen: number;
  maxLen: number;
  length: number;
  setLength: Function;
}) {
  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLength(parseInt(e.target.value));
  };
  return (
    <div className={charLenStyles["character-length-container"]}>
      <div className={charLenStyles["text-container"]}>
        <label htmlFor="range-input">Character Length</label>
        <p className={charLenStyles["current-len-value"]}>{length}</p>
      </div>
      <input
        className={charLenStyles["range-input"]}
        type="range"
        min={minLen}
        max={maxLen}
        value={length}
        onChange={handleRangeChange}
        id="range-input"
        style={{
          background: `linear-gradient(to right, var(--neon-green) 0%,
            var(--neon-green) 
             ${((length - minLen) / (maxLen - minLen)) * 100}%, var(--very-dark-gray) 
             ${((length - minLen) / (maxLen - minLen)) * 100}%, var(--very-dark-gray) 
             100%)`,
        }}
      />
    </div>
  );
}
