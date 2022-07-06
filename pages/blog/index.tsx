import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Home.module.css'
import Widget from "../../components/Widget";
import posts from "../../data/posts";

interface Data {
    id: string
    slug: string
}

export const getServerSideProps:GetServerSideProps = async (context) => {
    const data : Data[] = posts.map(post => {
        return {
            id: post.id,
            slug: post.slug
        }
    })
    
    return {
        props: {
            data
        }
    }
}

const Blog:NextPage<{data: {id: string, slug: string}[]}> = ({ data }) => {
    console.log(data);
    
  return (
    <>
    <Head>
      <title>Blog Page</title>
    </Head>
    <div className={styles.container}>
      <h1>This is Blogs page</h1>
      <br />
      <div style={{display: 'flex'}}>
        <Link href={'/'} passHref>
          <a className={styles.btn}>Home</a>
        </Link>
        <Link href={'/about'} passHref>
          <a className={styles.btn}>About us</a>
        </Link>
      </div>
      <br />
      <ul className={styles.ul}>
        {
            data.map((post, index) => {
                const { id, slug } = post;
                return (
                    <>
                    <li className={styles.li}>
                        <span className={styles.span}>{index+1}. </span>
                        <Link key={id} href={`/blog/${slug}`} passHref>
                        <a className={styles.btn3}>{slug.replaceAll('-', ' ')}</a>
                        </Link>
                    </li>
                    </>
                )
            })
        }
      </ul>
      <br />
      <small>See the title of the page</small>
    </div>
    <br />
    <Widget pageName="blog" />
    </>
  )
}

export default Blog;