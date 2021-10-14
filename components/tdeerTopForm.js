import {useRouter} from 'next/router';
import {useState} from 'react';
import heights from '../information/height';
import styles from '/styles/tdeeresults.module.scss';

export default function TdeeTopForm(data){

const {age,height,weight,sex,activityLvl} = data.props;
    

    const router = useRouter();
    const [userParams, setUserParams] = useState(
        {
            age: age,
            height: height,
            weight: weight,
            activityLvl: activityLvl,
            sex: sex
        }
    );


        //basic function to change state
    const handleChange=(e)=>setUserParams({...userParams, [e.target.name]: e.target.value});
    
    const optionItems = heights.map(height =>
        <option key={height.height} value={height.value}>{height.height}</option>)


    return(
        <>
        <div>This is the top form</div>
        You are a <input  onChange={handleChange}name='age' className={styles.input_age} value={userParams.age}/> 
                y/o
                <select name='sex' onChange={handleChange} defaultValue={sex}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                who is {weight} lbs and  
                <select name='height' onChange={handleChange} defaultValue={height}>
                {optionItems}
                </select>
                    with 
                    
                
        </>
    )

}