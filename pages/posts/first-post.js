import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return(
        <>
            <Layout>
            <Head>
                <title>Hello World</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>First Post</h1> 
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
            <Image
                src="/images/profile.jpg"
                alt="Default picture"
                width={144}
                height={144}
            />
            </Layout>
        </>
    )

}