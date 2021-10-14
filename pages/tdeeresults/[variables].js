import {useRouter} from 'next/router'


export default function variables(){

    const router = useRouter();

    console.log(router.query)
    const {variables,age,height} = router.query;
    return(
        <div>
            HELLOOOOOOOO
            <br/>
            {variables}
            <br/>
            {age}
            <br/>
            {height}
        </div>
    )
}