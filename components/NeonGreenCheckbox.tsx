import React, { ChangeEventHandler } from "react";
import styles from "@/styles/componentsStyles/NeonGreenCheckbox.module.css";
interface NeonGreenCheckboxProps extends React.ComponentPropsWithoutRef<"div"> {
  isChecked: boolean;
  setChecked: ChangeEventHandler<HTMLInputElement>;
}

export default function NeonGreenCheckbox(props: NeonGreenCheckboxProps) {
  return (
    <div className={styles["neon-green-checkbox-item"]}>
      <label>
        <input
          type="checkbox"
          checked={props.isChecked}
          onChange={props.setChecked}
          className={styles["neon-checkbox"]}
        />
        {props.children}
      </label>
    </div>
  );
}
