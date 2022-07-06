import { useState } from "react";
import { NextComponentType, NextPageContext } from "next";
import Head from "next/head";
import styles from '../styles/Home.module.css';

interface Props {
    pageName: string
}

const Widget:NextComponentType<NextPageContext, Props, Props> = ({pageName}) => {
    const [active, setActive] = useState(false)
    if(active){
        return (
            <>
            <Head>
                <title>Your are browsing the {pageName} page </title>
            </Head>
            <div className={styles.container}>
                <button className={styles.btn2} onClick={() => setActive(false)}>
                    Restore original title
                </button>
                <br />
                <small style={{color: 'tomato', fontWeight: 'bolder'}}>Take a look at the title!</small>
            </div>
            </>
        )
    } else {
        return (
            <div className={styles.container}>
                <button className={styles.btn2} onClick={() => setActive(true)}>
                    Change page title
                </button>
            </div>
        )
    }
}

export default Widget;