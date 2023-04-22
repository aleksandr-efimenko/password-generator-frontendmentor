import React from "react";
import passOutputStyles from "@/styles/componentsStyles/PasswordOutput.module.css";
import Image from "next/image";
import copyImg from "../public/images/icon-copy.svg";

export default function PasswordOutput({
  generatedPassword,
}: {
  generatedPassword: string;
}) {
  return <div className={passOutputStyles['pass-output-container']}>
    <p className={passOutputStyles['generated-pass']}>{generatedPassword}</p>
    <Image src={copyImg} alt="copy" width={21} height={24} />
  </div>;
}
