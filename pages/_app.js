import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a href="" className="mr-4 text-pink-500">Home</a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
