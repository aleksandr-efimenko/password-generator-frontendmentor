import React, { useEffect, useState } from "react";
import passOutputStyles from "@/styles/componentsStyles/PasswordOutput.module.css";
import Image from "next/image";
import copyImg from "../public/images/icon-copy.svg";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: "700" });

export default function PasswordOutput({
  generatedPassword,
  placeholder = "P4$5W0rD!",
}: {
  generatedPassword: string;
  placeholder?: string;
}) {
  const [copiedPass, setCopiedPass] = useState<boolean>(false);

  const copyToClipboard = () => {
    if (!generatedPassword) return;

    if (navigator.clipboard === undefined) {
      alert("Your browser does not support copying to clipboard");
      return;
    }

    setCopiedPass(true);
    navigator.clipboard.writeText(generatedPassword);
  };

  useEffect(() => {
    if (copiedPass) {
      setTimeout(() => {
        setCopiedPass(false);
      }, 1000);
    }
  }, [copiedPass]);

  return (
    <div className={passOutputStyles["pass-output-container"]}>
      <input
        className={`${jetBrains.className} ${passOutputStyles["pass-input"]}`}
        type="text"
        placeholder={placeholder}
        value={generatedPassword}
        readOnly
      ></input>
      <div className={passOutputStyles["copy-btn-container"]}>
        {copiedPass && (
          <p className={passOutputStyles["copied-text"]}>Copied</p>
        )}
        <Link onClick={copyToClipboard} href="/">
          <Image src={copyImg} alt="copy" width={21} height={24} />
        </Link>
      </div>
    </div>
  );
}
