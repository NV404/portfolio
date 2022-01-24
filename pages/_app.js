import Menu from '../components/menu';
import '../styles/index.css'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return(
    <>
    <div className='bg-zinc-900 w-full h-screen flex justify-center items-center flex-col lg:flex-row px-5'>
      <Menu route={router.pathname}></Menu>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
      </AnimatePresence>
    </div>
    </>
    );
}

export default MyApp
