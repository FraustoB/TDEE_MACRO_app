import BodyMetricsCalc from "./bodyMetricsCalc";
import {useEffect} from 'react';

export default function BodyMetrics({props,calories,setCalories}){


    useEffect(()=> {
        setCalories(33)
        console.log('changed Calories')
    },[props])

    const onClick = (e)=>{
        e.preventDefault();
        setCalories(calories+1)
        console.log('added Calories')
    }
    return(
        <div>
            Hello From Body Metrics
            <BodyMetricsCalc props={props}/>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}