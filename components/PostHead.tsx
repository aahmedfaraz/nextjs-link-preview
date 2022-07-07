import { NextComponentType } from "next";
import { BaseContext } from "next/dist/shared/lib/utils";
import Head from "next/head";

interface Props {
    title: string
    subtitle: string
    description: string
    image: string
    slug: string
}

const PostHead:NextComponentType<BaseContext, {}, Props> = ({title, subtitle, description, image, slug}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={subtitle} />

            {/* open-graph metadata */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={subtitle} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="en_GB" />
            <link rel="canonical" href={`https://ahmed-link-preview.vercel.app/blog/${slug}`} />

            {/* twitter card metadata */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    )
}

export default PostHead;