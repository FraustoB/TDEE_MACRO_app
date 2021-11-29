function calculateModCarbMacros(calories) {
  if (!calories) return "Please input Calories";
  let protein = 0;
  let fats = 0;
  let carbs = 0;

  protein = Math.floor((calories * 0.3) / 4);
  fats = Math.floor((calories * 0.35) / 9);
  carbs = Math.floor((calories * 0.35) / 4);

  return { protein, carbs, fats };
}

function calculateLowCarbMacros(calories) {
  let protein = 0;
  let fats = 0;
  let carbs = 0;

  protein = Math.floor((calories * 0.4) / 4);
  fats = Math.floor((calories * 0.4) / 9);
  carbs = Math.floor((calories * 0.2) / 4);
  return { protein, carbs, fats };
}

function calculateHighCarbMacros(calories) {
  let protein = 0;
  let fats = 0;
  let carbs = 0;
  protein = Math.floor((calories * 0.3) / 4);
  fats = Math.floor((calories * 0.2) / 9);
  carbs = Math.floor((calories * 0.5) / 4);
  return { protein, carbs, fats };
}

export {
  calculateModCarbMacros,
  calculateHighCarbMacros,
  calculateLowCarbMacros,
};
