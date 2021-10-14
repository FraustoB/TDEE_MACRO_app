import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import TdeeForm from '../components/forms';

export default function Home() {
  return (
    <> 
    <Head>
            <title>TDEE-Form</title>
        </Head>

    <div className={styles.main}>
      <div className={styles.Title}>
      THIS IS THE TDEE FORM
      </div>
    <TdeeForm/>
    </div>
    
    </>
  )
}
