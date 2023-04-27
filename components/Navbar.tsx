import Link from "next/link";
import React from "react";

export default function Navbar() {
    let [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function handleBurgerClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <nav className={"h-16 backdrop-blur-md right-0 w-screen fixed z-10"}>
            <div className={"hidden h-16 md:flex flex-row justify-evenly items-center"}>
                <Link className={"text-xl rounded-xl bg-blue-800 px-16 py-1"} href={"/"}>
                    Test
                </Link>
                <Link className={"text-xl rounded-xl bg-blue-800 px-16 py-1"} href={"/"}>
                    Test
                </Link>

                <Link className={""} href={"/"}>
                    <img className={"h-16"} src={"hatOpfp.png"} alt={"čapec xd"}/>
                </Link>

                <Link className={"text-xl rounded-xl bg-blue-800 px-16 py-1"} href={"/"}>
                    Test
                </Link>
                <Link className={"text-xl rounded-xl bg-blue-800 px-16 py-1"} href={"/"}>
                    Test
                </Link>
            </div>

            <button type={"button"} className={"md:hidden"} onClick={handleBurgerClick}>BURGIR CS XD</button>
            {isMenuOpen && (
                <div className={"md:hidden h-screen transition-all duration-150 ease-in-out focus:backdrop-blur-md flex flex-col justify-start items-end"}>
                    <Link className={"text-xl rounded-xl bg-blue-800"} href={"/"}>
                        Test
                    </Link>
                    <Link className={"text-xl rounded-xl bg-blue-800"} href={"/"}>
                        Test
                    </Link>
                    <Link className={"text-xl rounded-xl bg-blue-800"} href={"/"}>
                        Test
                    </Link>
                    <Link className={"text-xl rounded-xl bg-blue-800"} href={"/"}>
                        Test
                    </Link>
                </div>
            )}
        </nav>

    )
}