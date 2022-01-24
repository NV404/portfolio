import Head from "next/head";
import { motion } from 'framer-motion'
import Link from "next/link";

function Projects() {
    return (
        <>
        <Head><title>Projects</title></Head>
        <motion.div
      className="w-[min(560px,_100%)]"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 1 }}
      >
            <div className="flex w-[min(560px,_100%)] flex-col">

                <div className="bg-zinc-800 text-white w-[min(560px,_100%)] rounded-lg px-6 py-3">
                    <p className="font-semibold text-lg">Pages/Projects</p>
                </div>

                <div className="bg-zinc-800 text-white w-[min(560px,_100%)] rounded-lg px-6 py-6 mt-5">
                    <div className="flex">
                        <img src="noob.png"></img>
                        <div className="pl-5">
                            <h1 className="font-bold text-xl">Noob - A simple Social Media Website</h1>
                            <p>This project is created for fun while learning NextJS. It uses NextJs as frontend and Firebase as Database. This project gained around 200 users under 24 hours.</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <Link href="https://github.com/NV404/noob"><a className="w-[48%]"><div className="py-1 bg-zinc-900 hover:bg-zinc-900/75 rounded-lg w-full text-center cursor-pointer">🔗 GitHub</div></a></Link>
                        <Link href="https://noob.study/"><a className="w-[48%]"><div className="py-1 bg-zinc-900 hover:bg-zinc-900/75 rounded-lg w-full text-center cursor-pointer">🔗 Live</div></a></Link>
                    </div>
                </div>

                <div className="bg-zinc-800 text-white w-[min(560px,_100%)] rounded-lg px-6 py-6 mt-5">
                    <div className="flex">
                        <img className="w-24 rounded-lg" src="dev.png"></img>
                        <div className="pl-5">
                            <h1 className="font-bold text-xl">DevBlog</h1>
                            <p>It's a personal blog site which fetch data f rom dev.to prole This website is a demonstration of dev.to websites API.</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                    <Link href="https://github.com/NV404/dev_blog"><a className="w-[48%]"><div className="py-1 bg-zinc-900 hover:bg-zinc-900/75 rounded-lg w-full text-center cursor-pointer">🔗 GitHub</div></a></Link>
                        <Link href="https://devblog.namanvyas.vercel.app/"><a className="w-[48%]"><div className="py-1 bg-zinc-900 hover:bg-zinc-900/75 rounded-lg w-full text-center cursor-pointer">🔗 Live</div></a></Link>
                    </div>
                </div>

                <Link href="https://github.com/NV404">
                <a>
                    <div className="bg-zinc-800 text-white w-[min(560px,_100%)] rounded-lg px-6 mt-5 py-3">
                        <p className="font-bold text-lg text-center text-blue-500 hover:underline">🔗 Github</p>
                    </div>
                </a>
                </Link>

            </div>
            </motion.div>
        </>
    )
}

export default Projects