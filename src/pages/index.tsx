import Header from '@/Components/common-components/Header'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const profilePicUrl = `https://picsum.photos/150`
  const profilePicAlt = `user's proflie image`

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        {/* <div className="avatar">
          <div className="relative w-12 rounded-full ring ring-sky-700 ring-offset-2 ring-offset-base-100">
            <Image src={profilePicUrl} alt={profilePicAlt} fill priority />
          </div>
        </div>

        <div className="alert alert-success shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div> */}
      </main>
    </>
  )
}
