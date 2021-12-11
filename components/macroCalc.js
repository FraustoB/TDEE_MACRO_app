import styles from "/styles/macrocalc.module.scss";
import {
  calculateModCarbMacros,
  calculateLowCarbMacros,
  calculateHighCarbMacros,
} from "../functions/calculateMacros";

import { useState } from "react";
export default function MacroEditor({ caloriesToCalc }) {
  const [macros, setMacros] = useState({
    isMntncClicked: true,
    isCuttingClicked: false,
    isBulkingClicked: false,
    calorieAmt: "maintenence",
    calorieDefecit: 0,
  });

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
    if (macros.isMntncClicked === false) {
      setMacros({
        ...macros,
        calorieDefecit: 0,
        isMntncClicked: true,
        calorieAmt: "maintenence",
      });
    }

    if (macros.isBulkingClicked == true) {
      setMacros({ ...macros, isBulkingClicked: false });
    }

    if (macros.isCuttingclicked == true) {
      setMacros({ ...macros, isCuttingClicked: false });
    }
  }

  function handleCutOnClick() {
    if (macros.isCuttingClicked === false) {
      setMacros({
        ...macros,
        calorieDefecit: 500,
        isCuttingClicked: true,
        calorieAmt: "cutting",
      });
    }

    if (macros.isBulkingClicked != false) {
      setMacros({ ...macros, isBulkingClicked: false });
    }

    if (macros.isMntncClicked != false) {
      setMacros({ ...macros, isMntncClicked: false });
    }
  }

  function handleBulkOnClick() {
    if (macros.isBulkingClicked === false) {
      setMacros({
        ...macros,
        calorieDefecit: -500,
        isBulkingClicked: true,
        calorieAmt: "bulking",
      });
    }

    if (macros.isMntncClicked != false) {
      setMacros({ ...macros, isMntncClicked: false });
    }

    if (macros.isCuttingClicked != false) {
      setMacros({ ...macros, isCuttingClicked: false });
    }
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
        <span className={styles.dailyCal}>{caloriesToCalc}</span> calories per
        day
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
