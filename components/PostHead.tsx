import { NextComponentType } from "next";
import { BaseContext } from "next/dist/shared/lib/utils";
import Head from "next/head";

interface Props {
    title: string
    subtitle: string
    description: string
    image: string
}

const PostHead:NextComponentType<BaseContext, {}, Props> = ({title, subtitle, description, image}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={subtitle} />

            {/* open-graph metadata */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={subtitle} />
            <meta property="og:image" content={image} />

            {/* twitter card metadata */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    )
}

export default PostHead;