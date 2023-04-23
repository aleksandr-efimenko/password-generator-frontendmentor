import React, { useState } from "react";
import PasswordOutput from "./PasswordOutput";
import passGenStyles from "@/styles/componentsStyles/PasswordGenerator.module.css";
import PasswordStrengthDetector from "./PasswordStrengthDetector";
import CharacterLengthSlider from "./CharacterLengthSlider";
import NeonGreenButton from "./NeonGreenButton";
import NeonGreenCheckbox from "./NeonGreenCheckbox";
import checkboxStyles from "@/styles/componentsStyles/NeonGreenCheckbox.module.css";
import { determinePasswordComplexity } from "../utils/passComplexity";

export default function PasswordGenerator() {
  const [generatedPassword, setGeneratedPassword] =
    useState<string>("PTx1f5DaFX");

  const [settings, setSettings] = useState({
    length: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  return (
    <div className={passGenStyles["password-generator-container"]}>
      <PasswordOutput generatedPassword={generatedPassword} />
      <div className={passGenStyles["pass-input-container"]}>
        <CharacterLengthSlider
        minLen={0}
        maxLen={20}
          length={settings.length}
          setLength={(length: number) =>
            setSettings((currentSettings) => ({ ...currentSettings, length }))
          }
        />
        <div className={checkboxStyles["checkbox-container"]}>
          <NeonGreenCheckbox> Include Uppercase Letters </NeonGreenCheckbox>
          <NeonGreenCheckbox> Include LowerCase Letters </NeonGreenCheckbox>
          <NeonGreenCheckbox> Include Numbers Letters </NeonGreenCheckbox>
          <NeonGreenCheckbox> Include Symbols Letters </NeonGreenCheckbox>
        </div>
        <PasswordStrengthDetector complexity={determinePasswordComplexity(generatedPassword)} />
        <NeonGreenButton> Generate </NeonGreenButton>
      </div>
    </div>
  );
}
