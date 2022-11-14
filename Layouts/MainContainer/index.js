import Head from 'next/head'
import Header from '../../components/Header'

export default function MainContainer(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="icon" href="public/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  )
}

