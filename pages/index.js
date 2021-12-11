import Head from "next/head";
import styles from "../styles/Home.module.scss";
import TdeeForm from "../components/tdeeForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>TDEE-Form</title>
      </Head>

      <div className={styles.main}>
        <div className={styles.Title}>TDEE CALCULATOR</div>
        <p className={styles.information}>
          {" "}
          Calculate your approximate Total Daily Energy Expenditure (tdee) using
          the calculator below{" "}
        </p>
        <TdeeForm />
      </div>
    </>
  );
}
