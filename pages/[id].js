import {useRouter} from 'next/router'
import ProductPage from '../components/ProductPage';
import db from '../dataBase/db.json'
import MainContainer from '../Layouts/MainContainer'

export default function Posts({data}) {
  const router = useRouter()

  const product = data.filter((elem)=> elem.name === router.query.id)[0]

  return (
    <>
      <MainContainer title = {product.text}>
        <ProductPage src={product.src}/>
      </MainContainer>
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {data: db}, // will be passed to the page component as props
  }
}