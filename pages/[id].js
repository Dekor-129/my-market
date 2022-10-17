import {useRouter} from 'next/router'
import ProductPage from '../components/ProductPage';
import db from '../dataBase/db.json'

export default function Posts() {
  const router = useRouter()

  const product = db.filter((elem)=> elem.name === router.query.id)[0]
  console.log(product);
  return (
    <>
      <ProductPage product={product}/>
    </>
  )
}
