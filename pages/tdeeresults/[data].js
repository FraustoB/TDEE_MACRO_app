import {useRouter} from 'next/router';
import {useState} from 'react';
import styles from '/styles/tdeeresults.module.scss';
import heights from '/information/height';
import TdeeTopForm from '../../components/tdeerTopForm';
import BodyMetrics from '../../components/bodyMetrics';
import { NonceProvider } from 'react-select';


export default function Data({initData}){

    const [calories,setCalories] = useState(0)
    const {age,height,weight,activityLvl,sex} = initData;
    return(
        <div>   
            <h1>STATS</h1>

            <TdeeTopForm  props={initData}/>
            <BodyMetrics  calories={calories}setCalories={setCalories} props={initData} />
            
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