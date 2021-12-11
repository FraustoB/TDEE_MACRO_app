import React, { useEffect, useState } from "react";
import activityLvls from "../information/activityLvls";
import styles from "/styles/bodymetrics.module.scss";

export default function BodyMetrics({
  userInfo,
  calories,
  setCalories,
  userBmr,
}) {
  let { sex, age, height, weight, activityLvl } = userInfo;
  const currentBmr = Math.floor(userBmr);
  const calPerDay = calcMaintenance(userBmr, activityLvl);

  function calcMaintenance(userBmr, activityLvl) {
    const maintenanceCal = Math.floor(userBmr * activityLvl);
    return maintenanceCal;
  }

  //Passes the current calories per day amount back to main [data] page
  // to be passed down as a prop to the macroCalc component
  useEffect(() => {
    setCalories(calPerDay);
    console.log("calories set [message sent form calperday]");
  }, [calPerDay]);

  const activityCalories = activityLvls.map((cur) => (
    //need to use React.Fragments in order to avoid errors in react but also not introduce
    //new elements to the dom
    <React.Fragment key={cur.activity}>
      <div className={styles.bottom} key={cur.value}>
        {cur.activity}
      </div>
      <div className={styles.bottom}>
        {Math.floor(cur.value * currentBmr).toLocaleString()} calories per day
      </div>
    </React.Fragment>
  ));

  return (
    <div className={styles.calorieSection}>
      <div className={styles.mntncCal}>
        <div className={styles.mntncCalTitle}>YOUR MAINTENANCE CALORIES</div>
        <div className={styles.calPerDay}>
          <div>{calPerDay.toLocaleString()}</div>
          <div className={styles.mntncCalTitle}>Calories Per Day</div>
        </div>
        <div className={styles.calPerDay}>
          <div>{(calPerDay * 7).toLocaleString()}</div>
          <div className={styles.mntncCalTitle}>Calories Per Week</div>
        </div>
      </div>

      {/* //This Section is for the calculated mntnc calories per day depending on users activity Leval */}
      <div className={styles.actvForm}>
        {/* both div's named bottom to allow for lines underneath the metrics  */}
        <div className={styles.bottom}> Basal Metabolic Rate</div>
        <div className={styles.bottom}>
          {currentBmr.toLocaleString()} calories per day
        </div>
        {/* //returns the React Fragment containing our calculated calories for each activity Leval */}
        {activityCalories}
      </div>
    </div>
  );
}
