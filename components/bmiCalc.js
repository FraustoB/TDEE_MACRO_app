import { useState, useEffect } from "react";
import styles from "/styles/bmicalc.module.scss";

export default function BmiCalc({ userInfo }) {
  const { age, height, weight, sex, activityLvl } = userInfo;

  const bmi = Math.round(10 * calcBmi(weight, height)) / 10;
  const bmiClassified = weightClassCalc(bmi);

  function calcBmi(weight, height) {
    let weightKg = 0;
    let newHeight = 0;
    let calculatedBmi = 0;

    weightKg = weight / 2.2;
    newHeight = height / 100;
    newHeight = Math.pow(newHeight, 2);
    calculatedBmi = weightKg / newHeight;
    return calculatedBmi;
  }

  function weightClassCalc(bmi) {
    if (bmi <= 18.5) {
      return "UnderWeight";
    } else if (bmi >= 18.6 && bmi <= 24.99) {
      return "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.99) {
      return "Overweight";
    } else return "Obese";
  }

  return (
    <>
      <div className={styles.main}>
        <h2>BMI SCORE: {bmi} </h2>
        <br />

        <p className={styles.classification}>
          Your <b>BMI</b> score is <b>{bmi}</b>, which means you are classified
          as <b>{bmiClassified}</b>
        </p>

        <div className={styles.bmiRanges}>
          <div> 18.5 or less</div>
          <div> UnderWeight</div>
        </div>
        <div className={styles.bmiRanges}>
          <div> 18.5 - 24.99</div>
          <div> Normal Weight</div>
        </div>
        <div className={styles.bmiRanges}>
          <div> 25-29.99</div>
          <div> Overweight</div>
        </div>
        <div className={styles.bmiRanges}>
          <div> 30+</div>
          <div> Obese</div>
        </div>
      </div>
    </>
  );
}
