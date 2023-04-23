import React, { ComponentPropsWithoutRef } from "react";
import styles from "@/styles/componentsStyles/NeonGreenCheckbox.module.css";

export default function NeonGreenCheckbox(
  props: ComponentPropsWithoutRef<"div">
) {
  return (
    <div className={styles["neon-green-checkbox-item"]}>
      <label>
        <input type="checkbox" className={styles["neon-checkbox"]} />
        {props.children}
      </label>
    </div>
  );
}
