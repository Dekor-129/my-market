import {useRouter} from 'next/router'
import ProductPage from '../../../components/ProductPage';
import db from '../../../dataBase/db.json'
import MainContainer from '../../../Layouts/MainContainer'
import Link from 'next/link';
import { Container } from 'react-bootstrap';

export default function Posts({data}) {
  const router = useRouter()
  const product = data.filter((elem)=> elem.name === router.query.id)[0]

  return (
    <>
      <MainContainer title = { product.text }>
        <Container>
          <div className='blockPath'>
            <Link href={'/'}>
              <a>Главная / </a>
            </Link>
            <Link href={'/catalog'}>
              <a>Каталог / </a>
            </Link>
            <Link href={'/catalog/shaped-candles'}>
              <a>Форменые свечи / </a>
            </Link>
            <Link href={`/catalog/shaped-candles/${router.query.id}`}>
              <a><span>{product.text}</span></a>
            </Link>
          </div>
        </Container>
        <ProductPage src={ product.src }/>
      </MainContainer>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {data: db}, // will be passed to the page component as props
  }
}