import React from "react";
import PasswordOutput from "./PasswordOutput";
import passGenStyles from "@/styles/componentsStyles/PasswordGenerator.module.css";
import PasswordStrength from "./PasswordStrength";
import CharacterLengthSlider from "./CharacterLengthSlider";
import NeonGreenButton from "./NeonGreenButton";
import NeonGreenCheckbox from "./NeonGreenCheckbox";

export default function PasswordGenerator() {
  const [generatedPassword, setGeneratedPassword] =
    React.useState<string>("PTx1f5DaFX");

  const [settings, setSettings] = React.useState({
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
          length={settings.length}
          setLength={(length: number) =>
            setSettings((currentSettings) => ({ ...currentSettings, length }))
          }
        />
        <div>
            <NeonGreenCheckbox> Include Uppercase Letters </NeonGreenCheckbox>
            <NeonGreenCheckbox> Include LowerCase Letters </NeonGreenCheckbox>
            <NeonGreenCheckbox> Include Numbers Letters </NeonGreenCheckbox>
            <NeonGreenCheckbox> Include Symbols Letters </NeonGreenCheckbox>
        </div>
        <PasswordStrength />
        <NeonGreenButton> Generate </NeonGreenButton>
      </div>
    </div>
  );
}
