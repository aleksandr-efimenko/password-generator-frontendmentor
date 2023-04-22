import React from "react";
import btnStyles from "@/styles/componentsStyles/NeonGreenButton.module.css";
import Image from "next/image";
import generateImg from "../public/images/icon-arrow-right.svg";
import { JetBrains_Mono } from "next/font/google";
const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: "700" });

export default function NeonGreenButton(
  props: React.ComponentPropsWithoutRef<"button">
) {
  return (
    <button
      {...props}
      className={`${btnStyles.btn} ${jetBrains.className}`}
      type="button"
    >
      {props.children}
      <Image src={generateImg} alt="generate" width={11} height={12} />
    </button>
  );
}
