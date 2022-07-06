import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Widget from "../components/Widget";

const About:NextPage = () => {
    return (
        <>
        <Head>
            <title>About this website</title>
        </Head>
        <div className={styles.container}>
            <h1>This is  About page</h1>
            <div style={{display: 'flex'}}>
                <Link href={'/'} passHref>
                <a className={styles.btn}>Home</a>
                </Link>
                <Link href={'/blog'} passHref>
                <a className={styles.btn}>Blogs</a>
                </Link>
            </div>
            <br />
            <small>See the title of the page</small>
        </div>
        <br />
        <Widget pageName="about" />
        </>
    )
}

export default About;