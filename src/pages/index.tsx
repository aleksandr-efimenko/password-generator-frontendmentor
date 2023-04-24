import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import PasswordGenerator from "../../components/PasswordGenerator";

const jetBrains = JetBrains_Mono({ subsets: ["latin"], weight: "700" });

export default function Home() {
  return (
    <>
      <Head>
        <title>Password generator app</title>
        <meta name="description" content="Password generator app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={jetBrains.className}>
        {/* <div> */}
          <h1 className={styles.title}>Password Generator</h1>
          <PasswordGenerator />
        {/* </div> */}
      </main>
    </>
  );
}
