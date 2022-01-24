import Head from 'next/head'
import Link from 'next/link'
import withTransition from '../components/withTransition'

function Contact() {
    return (
        <>
        <Head><title>Contact</title></Head>
            <div className="flex w-[min(560px,_100%)] flex-col">

                <div className="bg-zinc-800 text-white w-[min(560px,_100%)] rounded-lg px-6 py-3 mb-5">
                    <p className="font-semibold text-lg">Pages/Contact</p>
                </div>

                <div className="bg-zinc-800 text-white w-[min(560px,_100%)] rounded-lg px-6 py-3">
                    <p>Social&#123; <br />
                        <b>GitHub:</b> <Link href="https://twitter.com/thenamanvyas"><a className='underline'>@NV404</a></Link><br />
                        <b>Twittet:</b> <Link href="https://github.com/NV404"><a className='underline'>@TheNamanVyas</a></Link><br />
                        <b>Dev.to:</b> <Link href="https://dev.to/namanvyas"><a className='underline'>@NamanVyas</a></Link><br />
                        &#125;
                    </p>
                </div>
            </div>
        </>
    )
}

export default withTransition(Contact)