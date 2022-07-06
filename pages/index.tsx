import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Widget from "../components/Widget";

const IndexPage:NextPage = () => {
  return (
    <>
    <Head>
      <title>Welcome to the website</title>
    </Head>
    <div className={styles.container}>
      <h1>This is Home page</h1>
      <div style={{display: 'flex'}}>
        <Link href={'/about'} passHref>
          <a className={styles.btn}>About us</a>
        </Link>
        <Link href={'/blog'} passHref>
          <a className={styles.btn}>Blogs</a>
        </Link>
      </div>
      <br />
      <small>See the title of the page</small>
    </div>
    <br />
    <Widget pageName="index" />
    </>
  )
}

export default IndexPage;