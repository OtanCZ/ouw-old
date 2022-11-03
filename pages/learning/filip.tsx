import Link from "next/link";
import Head from "next/head";

export default function Filip() {
    return (
        <div>
            <Head>
                <title>filip</title>
            </Head>

            <Link href={"/learning"}><h1>Filip</h1></Link>
        </div>
    )
}