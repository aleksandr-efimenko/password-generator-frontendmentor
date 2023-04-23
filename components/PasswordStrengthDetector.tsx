import React from "react";
import passDetectorStyles from "@/styles/componentsStyles/PasswordStrengthDetector.module.css";

export default function PasswordStrength({
  complexity,
}: {
  complexity: 0 | 1 | 2 | 3;
}) {
  const strength = ["Too Weak", "Weak", "Medium", "Strong"];

  return (
    <div className={passDetectorStyles["pass-strength-detector-container"]}>
      <p>STRENGTH</p>
      <div className={passDetectorStyles["strength-indicator-container"]}>
        <p className={passDetectorStyles["strength-text"]}>
          {strength[complexity]}
        </p>
        <div className={passDetectorStyles["colored-bar-container"]}>
          {strength.map((_, index) => (
            <div
              key={index}
              className={passDetectorStyles["strength-colored-bar"]}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
