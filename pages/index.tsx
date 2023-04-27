import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Idkwhatimdoing() {
    return (
        <div>
            <Head>
                <title>idkwhatimdoing</title>
            </Head>
            <Navbar/>
            <div className={"min-h-screen text-white bg-gray-900"}>
                <div className={"h-screen flex-col flex justify-center items-center py-2"}>
                    <span className={"text-gray-600"}>Ahoj, já jsem</span>
                    <h1 className={"xl:text-9xl text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradient-start via-gradient-end to-gradient-start bg-transition-200 animate-infinite-gradient"}>Oťan</h1>
                    <span className={"text-gray-600"}>typed ig</span>
                </div>
            </div>
        </div>
    )
}