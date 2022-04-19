import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import * from '../styles/Home.module'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json();

  return {
    props: { user: data }
  }
}

export default function Home({user}) {
  console.log(user);
  return (
    <div className={styles.container}>
        <h1>hi {user.name}</h1>
        {/* <Navbar/> */}
    </div>
  )
}
