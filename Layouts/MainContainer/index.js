import Head from 'next/head'
import Header from '../../components/Header'

export default function MainContainer(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  )
}

