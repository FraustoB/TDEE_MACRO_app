import { useState, useEffect } from "react";
import styles from "/styles/tdeeresults.module.scss";

import TdeeTopForm from "../../components/tdeerTopForm";
import BodyMetrics from "../../components/bodyMetrics";
import BmiCalc from "../../components/bmiCalc";

export default function Data({ initData }) {
  const [calories, setCalories] = useState(0);
  const [userBmr, setUserBmr] = useState();
  const { age, height, weight, activityLvl, sex } = initData;

  useEffect(() => {
    setUserBmr(bmrCalc(weight, height, sex, age));
  }, [initData]);

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

  return (
    <div className={styles.body}>
      <h1>STATS</h1>

      <TdeeTopForm props={initData} />
      <BodyMetrics
        calories={calories}
        setCalories={setCalories}
        userInfo={initData}
        userBmr={userBmr}
        className={styles.BodyMetrics}
      />
      <BmiCalc userInfo={initData} />

      <br />
      {height}
      <br />
      {age}
      <br />
      {weight}
      <br />
      {activityLvl}
      <br />
      {sex}
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { initData: context.query },
  };
}
