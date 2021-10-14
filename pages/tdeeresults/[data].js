import {useRouter} from 'next/router';
import {useState} from 'react';
// import styles from '/styles/tdeeresults.module.scss';
import heights from '/information/height';
import TdeeTopForm from '../../components/tdeerTopForm';




export default function Data({initData}){
    const {age,height,weight,activityLvl,sex} = initData;
    // const router = useRouter();
    //sets state as query data but will allow change later on
    const [userParams, setUserParams] = useState(
        {
            age: age,
            height: height,
            weight: weight,
            activityLvl: activityLvl,
            sex: 'female'
        }
    );
  
    const handleChange=(e)=>setUserParams({...userParams, [e.target.name]: e.target.value});
   
    console.log(initData)

        //generates numerous options based on heights information stored in information folder
    const optionItems = heights.map(height =>
        <option key={height.height} value={height.value}>{height.height}</option>
    )
    
    return(
        <div>
            <h1>STATS</h1>

            <TdeeTopForm props={initData}/>
            {/* <div>
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
                    
                </div> */}
            

            <br/>
            {height}
            <br/>
            {age}
            <br/>
            {weight}
            <br/>
            {activityLvl}
            <br/>
            {sex}
        </div>
    )

}

export async function getServerSideProps(context) {
    return {
        props: {initData: context.query}
    }

}