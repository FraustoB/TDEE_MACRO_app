import { useState, useEffect } from "react";
import styles from "/styles/bmicalc.module.scss";

export default function BmiCalc({ userInfo }) {
  const { age, height, weight, sex, activityLvl } = userInfo;
  const [data, setData] = useState({
    bmi: 0,
    sqHeight: 0,
  });

  useEffect(() => {
    // using Math.round to round the bmi to the 10ths place
    setData({ ...data, bmi: Math.round(10 * calcBmi(weight, height)) / 10 });
  }, [userInfo]);

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

  console.log(data);

  return (
    <div className={styles.main}>
      Hello World Form BMI Calc
      <br />
    </div>
  );
}
