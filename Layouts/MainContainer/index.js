import Head from 'next/head'
import Header from '../../components/Header'

export default function MainContainer(props) {
  const description = props.description ? props.description : ''
  const keywords = props.keywords ? props.keywords : ''

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta name="description" content={`Твоя свеча, это отличный выбор для подарка себе и любимым. Мы производим свечи из 100% соевого воска. ` + description} />
        <meta name="keywords" content={`Свечи Рязань, соевые свечи рязань, свечи подарочные, ` + keywords} />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  )
}

