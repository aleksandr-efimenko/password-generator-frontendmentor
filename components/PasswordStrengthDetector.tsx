import React from "react";
import passDetectorStyles from "@/styles/componentsStyles/PasswordStrengthDetector.module.css";
import { PassStrength } from "../utils/passComplexity";

// Create an array of strings from the PassStrength enum
// ["too weak", "weak", "medium", "strong"]
// to add new strength, just add it to the enum and a color class with hyphenated name
const strengthsArr = Object.keys(PassStrength)
  .filter((k) => typeof PassStrength[k as any] === "number")
  // transfrom from camelCase -> "camel-case"
  .map((el) => {
    const arr = el.split("");
    const newArr = arr.map((char, index) => {
      if (char === char.toUpperCase()) {
        return index === 0 ? char : `-${char}`;
      }
      return char;
    });
    return newArr.join("").toLowerCase();
  });

export default function PasswordStrength({
  complexity,
}: {
  complexity: PassStrength | undefined;
}) {
  return (
    <div className={passDetectorStyles["pass-strength-detector-container"]}>
      <p>STRENGTH</p>
      <div className={passDetectorStyles["strength-indicator-container"]}>
        <p className={passDetectorStyles["strength-text"]}>
          {complexity !== undefined
            ? strengthsArr[complexity].replace("-", " ")
            : ""}
          {complexity === PassStrength.TooWeak && "!"}
        </p>
        <div className={passDetectorStyles["colored-bar-container"]}>
          {strengthsArr.map((_, index) => (
            <div
              key={index}
              className={`${passDetectorStyles["strength-colored-bar"]}
              ${
                complexity !== undefined
                  ? index <= complexity
                    ? passDetectorStyles[`${strengthsArr[complexity]}`]
                    : ""
                  : ""
              }
            }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
