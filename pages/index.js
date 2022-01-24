import Head from "next/head";
import { motion } from 'framer-motion'

function Home() {
  return (
    <>
    <Head><title>Home</title></Head>
    <motion.div
      className="w-[min(560px,_100%)]"
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: "0%" }}
        exit={{ opacity: 1 }}
      >
    <div className="bg-zinc-800 text-white w-[min(560px,_100%)] rounded-lg px-6 py-8">
      <p className="font-semibold text-lg">Hi There 👋, I am</p>
      <p className="font-bold text-5xl my-4">Naman Vyas.</p>
      <p className="font-semibold text-lg">I'm a web-app <b>developer and designer</b>, currently pursuing my bachelor's degree in computer applications from Sangam University, India. Aside from developing websites, I like everything related to web, tech and multimedia. I try to keep up with everything going in the tech eco-system and enjoy learning new stuffs.</p>
    </div>
    </motion.div>
    </>
  )
}


export default Home