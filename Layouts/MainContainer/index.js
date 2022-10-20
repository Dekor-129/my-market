import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function MainContainer(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

