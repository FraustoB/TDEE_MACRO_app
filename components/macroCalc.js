import styles from "/styles/macrocalc.module.scss";
import {
  calculateModCarbMacros,
  calculateLowCarbMacros,
  calculateHighCarbMacros,
} from "../functions/calculateMacros";

import { useState } from "react";
export default function MacroEditor({ caloriesToCalc }) {
  const [clicked, setClicked] = useState({
    isMntncClicked: true,
    isCuttingclicked: false,
    isBulkingClicked: false,
  });

  const cuttingCalories = caloriesToCalc - 500;
  const bulkingCalories = caloriesToCalc + 500;
  const maintenanceCalories = caloriesToCalc;
  const modCarbMacros = calculateModCarbMacros(maintenanceCalories);
  const lowCarbMacros = calculateLowCarbMacros(maintenanceCalories);
  const highCarbMacros = calculateHighCarbMacros(maintenanceCalories);

  console.log(
    modCarbMacros,
    lowCarbMacros,
    highCarbMacros,
    "from macroCalc.js"
  );

  return (
    <div className={styles.macros}>
      <span className={styles.macroCalories}>
        These Macronutrient Values reflect your maintenance calories of{" "}
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
