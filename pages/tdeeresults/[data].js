import {useRouter} from 'next/router';



export default function Data({initData}){
    const router = useRouter();
    console.log(initData)
    const {age,height,weight,activityLvl} = initData;
    return(
        <div>
            Testing 1 2 3
            <br/>
            {height}
            <br/>
            {age}
            <br/>
            {weight}
            <br/>
            {activityLvl}
        </div>
    )

}

export async function getServerSideProps(context) {
    return {
        props: {initData: context.query}
    }

}