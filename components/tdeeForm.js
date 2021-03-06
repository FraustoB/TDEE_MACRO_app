import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/form.module.scss";
import heights from "../information/height";
import activityLvls from "../information/activityLvls";
import { useRouter } from "next/router";

export default function TdeeForm() {
  const router = useRouter();
  const [params, setParams] = useState({
    age: "",
    height: "",
    weight: "",
    activityLvl: "",
    sex: "",
    errorMessage: "",
  });

  // Destructer state to allow cleaner data
  const { age, height, weight, activityLvl, sex } = params;

  //This function handles basic form input to allow for state-change
  const handleChange = (e) =>
    setParams({ ...params, [e.target.name]: e.target.value });

  //Pushes Data inputted by user to the page that will calculate TDEE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!age || !height || !activityLvl || !sex) {
      setParams({
        ...params,
        errorMessage:
          "One or more values are missing, please ensure all values have been inputted",
      });
    } else {
      router.push(
        `/tdeeresults/data?sex=${sex}&age=${age}&height=${height}&weight=${weight}&activityLvl=${activityLvl}`
      );
    }
  };

  // List of heights in inches and centimeters used by the dropdown menu
  const optionItems = heights.map((height) => (
    <option key={height.height} value={height.value}>
      {height.height}
    </option>
  ));

  // imported activity lvls to also map over and use during for dropdown menu
  const optionActivity = activityLvls.map((actvty) => (
    <option key={actvty.value} value={actvty.value}>
      {actvty.activity}
      {actvty.description}
    </option>
  ));

  return (
    <>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <section className={styles.sexInput}>
            <input
              type="radio"
              checked={sex === "male"}
              id="sexMale"
              value="male"
              name="sex"
              onChange={handleChange}
              className={styles.sexInputMale}
            />
            <label htmlFor="sexMale">Male</label>

            <input
              type="radio"
              checked={sex === "female"}
              id="sexFemale"
              value="female"
              name="sex"
              onChange={handleChange}
              className={styles.sexInputFemale}
            />
            <label htmlFor="sexFemale">Female</label>
          </section>

          <section>
            <label className={styles.label}>Age</label>
            <input
              onChange={handleChange}
              className={styles.input}
              name="age"
              value={age}
            ></input>
          </section>

          <br />

          <div>
            <label className={styles.label}>Weight</label>
            <input
              className={styles.input}
              onChange={handleChange}
              name="weight"
              value={weight}
            ></input>
          </div>

          <br />

          <div>
            <label className={styles.label}>Height</label>
            <select
              className={styles.input}
              name="height"
              onChange={handleChange}
              defaultValue="default"
            >
              <option value="default" disabled hidden>
                Select your height
              </option>
              {optionItems}
            </select>
          </div>

          <br />

          <div>
            <label className={styles.label}>Activity</label>
            <select
              onChange={handleChange}
              name="activityLvl"
              className={styles.input}
              defaultValue="default"
            >
              <option value="default" disabled hidden>
                {" "}
                Select Activity Level{" "}
              </option>
              {optionActivity}
            </select>
          </div>

          <br />
          <button>Calculate</button>
        </form>

        <div className={styles.errorMessage}>{params.errorMessage}</div>
      </div>
    </>
  );
}
