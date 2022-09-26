import Head from "next/head";
import Image from "next/image";
import Navbar from "../component/Navbar";
import UsersList from "../component/UsersList";
import styles from "../styles/Home.module.css";

export default function Home({users}) {
  console.log(users);
  return (
    <div>
      <Head>
        <title>User Profiles</title>
        <meta name="keywords" content="Online Shopping, shopping application" />
        <meta
          name="description"
          content="Hey Everyone, This video is all about explanation of next js in telugu."
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          User Profile's <a href="/">Application</a>
        </h1>
      </div>
      <UsersList users={users} />
    </div>
  );
}


export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return {
    props: {
      users,
    },
  }
}
