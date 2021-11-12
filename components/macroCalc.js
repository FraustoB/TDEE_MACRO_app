import styles from "/styles/macrocalc.module.scss";
import { calculateModCarbMacros } from "../functions/calculateMacros";

import calculateMacros from "../functions/calculateMacros";
export default function MacroEditor({ caloriesToCalc }) {
  const cuttingCalories = caloriesToCalc - 500;
  const bulkingCalories = caloriesToCalc + 500;
  const maintenanceCalories = caloriesToCalc;

  const macros = calculateModCarbMacros(maintenanceCalories);
  console.log(macros, "from macroCalc.js");

  return (
    <div>
      These Macronutrient alues reflect your maintenance claories of{" "}
      {caloriesToCalc} per day
    </div>
  );
}
