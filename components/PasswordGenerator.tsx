import React, { useState } from "react";
import PasswordOutput from "./PasswordOutput";
import passGenStyles from "@/styles/componentsStyles/PasswordGenerator.module.css";
import PasswordStrengthDetector from "./PasswordStrengthDetector";
import CharacterLengthSlider from "./CharacterLengthSlider";
import NeonGreenButton from "./NeonGreenButton";
import NeonGreenCheckbox from "./NeonGreenCheckbox";
import checkboxStyles from "@/styles/componentsStyles/NeonGreenCheckbox.module.css";
import { determinePasswordComplexity } from "../utils/passComplexity";

// Checkbox items
const checkboxItems = [
  {
    id: "uppercase",
    label: "Include Uppercase Letters",
  },
  {
    id: "lowercase",
    label: "Include Lowercase Letters",
  },
  {
    id: "numbers",
    label: "Include Numbers",
  },
  {
    id: "symbols",
    label: "Include Symbols",
  },
];

// Settings object type
interface Settings {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  [key: string]: boolean | number;
}

export default function PasswordGenerator() {
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  const [settings, setSettings] = useState<Settings>({
    length: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  // Helper function to update the settings object
  function updateCheckbox(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setSettings((currentSettings) => ({
        ...currentSettings,
        [key]: e.target.checked,
      }));
    };
  }

  console.log(settings);
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
          {checkboxItems.map((item) => (
            <NeonGreenCheckbox
              key={item.id}
              isChecked={settings[item.id] as boolean}
              setChecked={updateCheckbox(item.id)}
            >
              {item.label}
            </NeonGreenCheckbox>
          ))}
        </div>
        <PasswordStrengthDetector
          complexity={determinePasswordComplexity(generatedPassword)}
        />
        <NeonGreenButton>Generate</NeonGreenButton>
      </div>
    </div>
  );
}
