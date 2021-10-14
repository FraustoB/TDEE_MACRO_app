import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/form.module.scss';
import heights from '../information/height';
import {useRouter} from 'next/router';






export default function TdeeForm(){
       const router = useRouter();
        const [params, setParams] = useState({
            age:'',
            height: '',
            weight: '',
            activityLvl: '',
        })
        // Destructer state to allow cleaner data
        const {age,height,weight,activityLvl} = params;

        //This function handles basic form input to allow for state-change
        const handleChange=(e)=>setParams({...params, [e.target.name]: e.target.value});

        //Pushes Data inputted by user to the page that will calculate TDEE
        const handleSubmit =(e) =>{
            e.preventDefault();
            console.log('submit', params)
            router.push(`/tdeeresults/data?age=${age}&height=${height}&weight=${weight}&activityLvl=${activityLvl}`);
        }

        // List of heights in inches and centimeters used by the dropdown menu
        const optionItems = heights.map(height =>
            <option key={height.height} value={height.value}>{height.height}</option>
        )
      

    return(
        <>
        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
            <div>
            <label className={styles.label}>Age</label>
            <input onChange={handleChange} className={styles.input} name='age'value={age}></input>
            </div>

            <br/>

            <div>
            <label className={styles.label}>Weight</label>
            <input className={styles.input} onChange={handleChange}name='weight' value={weight}></input>
            </div>

            <br/>

            <div>
            <label className={styles.label}>Height</label>
            <select name='height'value={height} onChange={handleChange}>
                {optionItems}
            </select>
            </div>
          

            <br/>

            <div>
            <label  className={styles.label}>Activity</label>
            <select onChange={handleChange} name='activityLvl' className={styles.input}>
                <option value={1.2}>Sedentary (no exercise | deskjob)</option>
                <option value={1.375}>Lightly Active ( 1-3 days/week)</option>
                <option value={1.55}>Moderately Active (3-5 days/week)</option>
                <option value={1.725}>Very Active (6-7 days/week)</option>
                <option value={1.9}>Extremely Active (2x/day) </option> 
            </select>
            </div>

            <br/>
            <button>Calculate</button>
            </form>
        </div>

    
        </>
    )
}