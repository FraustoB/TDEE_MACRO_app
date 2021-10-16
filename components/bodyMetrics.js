import React, { useEffect, useState } from "react";
import activityLvls from "../information/activityLvls";
import styles from "/styles/bodymetrics.module.scss";

export default function BodyMetrics({ props, calories, setCalories }) {
  const [curBmr, setCurBmr] = useState(0);

  let { sex, age, height, weight, activityLvl } = props;

  useEffect(() => {
    console.log(props);
    setCurBmr(bmrCalc(weight, height, sex, age));
  }, [props]);
  console.log(curBmr);

  function bmrCalc(weight, height, sex, age) {
    //first convert LB weight into kg's
    let weightKg = weight / 2.2;
    // initialize a user bmr for later
    let userBmr = "";
    //determine if user is a male or female, then use the appropriate calculations
    //to figure out their bmr
    if (sex === "male") {
      userBmr = 10 * weightKg + 6.25 * height - 5 * age + 5;
    } else {
      userBmr = 10 * weightKg + 6.25 * height - 5 * age - 161;
    }
    userBmr = Math.floor(userBmr);
    return userBmr;
  }

  const activityCalories = activityLvls.map((cur) => (
    //need to use React.Fragments in order to avoid errors in react but also not introduce
    //new elements to the dom
    <React.Fragment key={cur.activity}>
      <div key={cur.value}>{cur.activity}</div>
      <div key={cur.activity}>
        {Math.floor(cur.value * curBmr)} calories per day
      </div>
    </React.Fragment>
  ));

  return (
    <div className={styles.calorieSection}>
      <div className={styles.mntncCal}>
        <div className={styles.calPerDay}>Something here</div>
        <div>Something Here</div>
      </div>
      <div className={styles.actvForm}>{activityCalories}</div>
    </div>
  );
}
