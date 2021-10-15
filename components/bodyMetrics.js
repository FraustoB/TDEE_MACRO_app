import BodyMetricsCalc from "./bodyMetricsCalc";
import {useEffect ,useState} from 'react';
import activityLvls from "../information/activityLvls";

export default function BodyMetrics({props,calories,setCalories}){

    let {sex,age,height,weight,activityLvl} = props;

    useEffect(()=> {
        console.log(props);
        console.log(bmrCalc(weight,height,sex,age));
        
    },[props])


    function bmrCalc(weight,height,sex,age){
        //first convert LB weight into kg's
        let weightKg = weight/2.2;
        // initialize a user bmr for later
        let userBmr = '';
        //determine if user is a male or female, then use the appropriate calculations
        //to figure out their bmr
        if(sex==='male') {
            userBmr = (10*weightKg) + (6.25 * height) -(5*age)+5
        } 
        else {
            userBmr = (10*weightKg) +  (6.25 * height) - (5*age)-161;
        }
        userBmr = Math.floor(userBmr);
        return userBmr;
    }

    function calorieCalc(){
        console.log(calories);
    }


        
    return(
        <div>
            Hello From Body Metrics
            <BodyMetricsCalc props={props}/>
            
        </div>
    )
}