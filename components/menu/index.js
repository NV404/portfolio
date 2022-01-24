import Link from "next/link";
import { useState } from "react";

export default function Menu(route){
    
    const [Menu, setMenu]= useState(false);
    console.log(Menu)

    return(
        <>
        <div className="hidden lg:flex text-white font-bold flex-col mr-5">
            <Link href="/"><a><div className={`py-1 bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-28 text-center mb-5 cursor-pointer ${route.route == '/' ? 'text-blue-400' : ''}`}>Home</div></a></Link>
            <Link href="/projects"><a><div className={`py-1 bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-28 text-center mb-5 cursor-pointer ${route.route == '/projects' ? 'text-blue-400' : ''}`}>Projects</div></a></Link>
            <Link href="/contact"><a><div className={`py-1 bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-28 text-center mb-5 cursor-pointer ${route.route == '/contact' ? 'text-blue-400' : ''}`}>Contact</div></a></Link>
            <Link href="CV.pdf"><a><div className="py-1 bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-28 text-center cursor-pointer"><p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 font-bold">Resume</p></div></a></Link>
        </div>

        <div className="lg:hidden text-white font-bold w-[min(560px,_100%)]" onClick={() =>setMenu(true)}>
            <div className="py-3 px-5 flex bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-full text-center mb-5 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="mr-4" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
            Home</div>
        </div>

        <div className={`${Menu == true ? '' : 'hidden'} absolute z-20 top-0 left-0 w-screen h-screen flex justify-center items-center bg-black/80`} onClick={() =>setMenu(false)}>
            <div className="flex text-white font-bold flex-col mr-5 bg-zinc-900 p-32 rounded-xl">
            <Link href="/"><a><div className={`py-1 bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-28 text-center mb-5 cursor-pointer ${route.route == '/' ? 'text-blue-400' : ''}`}>Home</div></a></Link>
                <Link href="/projects"><a><div className={`py-1 bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-28 text-center mb-5 cursor-pointer ${route.route == '/projects' ? 'text-blue-400' : ''}`}>Projects</div></a></Link>
                <Link href="/contact"><a><div className={`py-1 bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-28 text-center mb-5 cursor-pointer ${route.route == '/contact' ? 'text-blue-400' : ''}`}>Contact</div></a></Link>
                <div className="py-1 bg-zinc-800 hover:bg-zinc-800/75 rounded-lg w-28 text-center cursor-pointer"><p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 font-bold">Resume</p></div>
            </div>
        </div>
        </>
    )
}