import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import PostHead from '../../components/PostHead';
import posts, { Post } from '../../data/posts'
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

interface Params extends ParsedUrlQuery {
    slug: string
}

export const getServerSideProps:GetServerSideProps = async (context) => {

    // Get Slug
    const { slug } = context.params as Params;

    // Filter out Post
    const post = posts.find((post: Post) => post.slug === slug);

    // Return to Component
    return {
        props:{
            post
        }
    }
}

const Post:NextPage<{post : Post}> = ({ post }) => {
    return (
        <div className={styles.post}>
            <PostHead {...post} />
            <Image src={post.image} width="400px" height="200px" objectFit='cover' />
            <h1>{post.title}</h1>
            <p>{post.subtitle}</p>
            <br />
            <Link href={`/blog`} passHref>
                <a className={styles.btn2}>Back to Blogs</a>
            </Link>
        </div>
    );
}

export default Post;