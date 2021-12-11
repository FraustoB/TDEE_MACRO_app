import { useState, useEffect } from "react";
import styles from "/styles/tdeeresults.module.scss";
import MacroCalc from "../../components/macroCalc";

import TdeeTopForm from "../../components/tdeerTopForm";
import BodyMetrics from "../../components/bodyMetrics";
import BmiCalc from "../../components/bmiCalc";

export default function Data({ initData }) {
  const [userBmr, setUserBmr] = useState();
  const [calories, setCalories] = useState();
  const { age, height, weight, activityLvl, sex } = initData;
  console.log(calories);

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
      <h1>YOUR STATS</h1>

      <TdeeTopForm props={initData} />
      <BodyMetrics
        userInfo={initData}
        userBmr={userBmr}
        setCalories={setCalories}
      />

      {/* // Macro Calc will need to be rendered within BMI Calc components
      // due to information that is generated within BMI calc needed for the Macro
      // Calc Component */}

      <BmiCalc userInfo={initData} />
      <MacroCalc caloriesToCalc={calories} />
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { initData: context.query },
  };
}
