import Link from "next/link";
import Head from "next/head";

export default function Error404() {
    return (
        <div>
            <Head>
                <title>Error 404</title>
            </Head>

            <div className={"min-h-screen bg-gray-900 flex flex-col justify-center items-center"}>
                <h1 className={"xl:text-9xl text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-900 to-red-400 bg-transition-200 animate-infinite-gradient"}>Error 404</h1>
                <span className={"xl:text-xl text-gray-600"}>Vyžádaná stránka nebyla nalezena.</span>
                <Link href={"/"}>
                    <div className={"text-blue-500 hover:text-blue-600"}>Návrat na hlavní stránku</div>
                </Link>
            </div>
        </div>
    )
}