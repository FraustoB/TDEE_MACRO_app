import styles from "/styles/macrocalc.module.scss";
import {
  calculateModCarbMacros,
  calculateLowCarbMacros,
  calculateHighCarbMacros,
} from "../functions/calculateMacros";

import { useState, useEffect } from "react";

export default function MacroEditor({ caloriesToCalc }) {
  const [macros, setMacros] = useState({
    calorieAmt: "maintenence",
    calorieDefecit: 0,
    calorieEatAmt: caloriesToCalc,
  });

  useEffect(() => {
    setMacros({
      ...macros,
      calorieEatAmt: caloriesToCalc,
      calorieDefecit: 0,
      calorieAmt: "Maintenence",
    });
  }, [caloriesToCalc]);

  const modCarbMacros = calculateModCarbMacros(
    caloriesToCalc - macros.calorieDefecit
  );
  const lowCarbMacros = calculateLowCarbMacros(
    caloriesToCalc - macros.calorieDefecit
  );
  const highCarbMacros = calculateHighCarbMacros(
    caloriesToCalc - macros.calorieDefecit
  );

  console.log(macros);

  function handleMntncOnClick() {
    setMacros({
      ...macros,
      calorieDefecit: 0,
      calorieAmt: "Maintenence",
      calorieEatAmt: caloriesToCalc,
    });
  }

  function handleCutOnClick() {
    setMacros({
      ...macros,
      calorieDefecit: 500,
      calorieAmt: "Cutting",
      calorieEatAmt: caloriesToCalc - 500,
    });
  }

  function handleBulkOnClick() {
    setMacros({
      ...macros,
      calorieDefecit: -500,
      calorieAmt: "Bulking",
      calorieEatAmt: caloriesToCalc + 500,
    });
  }

  return (
    <div className={styles.macros}>
      <span className={styles.macroCalories}>
        <div className={styles.macroButtons}>
          <button onClick={handleMntncOnClick}>maintenance</button>
          <button onClick={handleCutOnClick}>cutting</button>
          <button onClick={handleBulkOnClick}>bulking</button>{" "}
        </div>
        These Macronutrient Values reflect your {macros.calorieAmt} calories of{" "}
        <span className={styles.dailyCal}>{macros.calorieEatAmt}</span> calories
        per day
      </span>

      <div className={styles.macroGrid}>
        <div className={styles.modCarbs}>
          <span className={styles.macroTitle}>Moderate Carbs</span>
          <br />
          <h2> {modCarbMacros.protein}g</h2>
          <p>protein</p>
          <br />
          <h2> {modCarbMacros.carbs}g</h2>
          <p>carbohydrates</p>
          <br />
          <h2> {modCarbMacros.fats}g</h2>
          <p>fats</p>
          <br />
        </div>

        <div className={styles.lowCarbs}>
          <span className={styles.macroTitle}>low Carbs</span>
          <br />
          <h2> {lowCarbMacros.protein}g</h2>
          <p>protein</p>
          <br />
          <h2> {lowCarbMacros.carbs}g</h2>
          <p>carbohydrates</p>
          <br />
          <h2> {lowCarbMacros.fats}g</h2>
          <p>fats</p>
          <br />
        </div>
        <div className={styles.highCarbs}>
          <span className={styles.macroTitle}>High Carbs</span>
          <br />
          <h2> {highCarbMacros.protein}g</h2>
          <p>protein</p>
          <br />
          <h2> {highCarbMacros.carbs}g</h2>
          <p>carbohydrates</p>
          <br />
          <h2> {highCarbMacros.fats}g</h2>
          <p>fats</p>
          <br />
        </div>
      </div>
    </div>
  );
}
