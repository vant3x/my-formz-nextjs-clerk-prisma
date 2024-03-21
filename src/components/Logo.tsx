import Link from "next/link";
import { Lobster } from "next/font/google";

const lobster = Lobster({
    subsets: ["latin"], display: "swap",
    weight: "400"
});

function Logo() {


    return (
        <>
           <Link className={lobster.className} href={"/"}> 
           <h2 className="font-bold hover:cursor-pointer text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">MyFormz</h2>
           </Link>
        </>
    )
}

export default Logo;