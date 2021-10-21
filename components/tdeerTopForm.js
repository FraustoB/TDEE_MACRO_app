import { useRouter } from "next/router";
import { useState } from "react";
import heights from "../information/height";
import styles from "/styles/tdeerForm.module.scss";
import activityLvls from "../information/activityLvls";
export default function TdeeTopForm(data) {
  const router = useRouter();
  const [userParams, setUserParams] = useState({
    age: data.props.age,
    height: data.props.height,
    weight: data.props.weight,
    activityLvl: data.props.activityLvl,
    sex: data.props.sex,
  });

  const { age, height, weight, sex, activityLvl } = userParams;

  //basic function to change state
  const handleChange = (e) =>
    setUserParams({ ...userParams, [e.target.name]: e.target.value });

  //function calls on info stores in information folder and creates multiple options for the select element
  const optionItems = heights.map((height) => (
    <option key={height.height} value={height.value}>
      {height.height}
    </option>
  ));

  //function calls on info stores in information folder and creates multiple options for the select element
  const optionActivity = activityLvls.map((actvty) => (
    <option key={actvty.value} value={actvty.value}>
      {actvty.activity}
    </option>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(
      `/tdeeresults/data?sex=${sex}&age=${age}&height=${height}&weight=${weight}&activityLvl=${activityLvl}`
    );
  };

  return (
    <>
      <div>This is the top form</div>
      <form onSubmit={handleSubmit} className={styles.form}>
        You are a
        <input
          onChange={handleChange}
          name="age"
          className={styles.input_age}
          value={age}
        />
        y/o
        <select name="sex" onChange={handleChange} defaultValue={sex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        who is <input value={weight} name="weight" onChange={handleChange} />{" "}
        lbs and
        <select name="height" onChange={handleChange} defaultValue={height}>
          {optionItems}
        </select>
        with
        <select name="activityLvl" value={activityLvl} onChange={handleChange}>
          {optionActivity}
        </select>
        <button> Re-calculate</button>
      </form>
    </>
  );
}
