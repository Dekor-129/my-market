import ProductPageImg from './ProductPageImg'

export default function ProductPage(props) {
  return (
    <div>
      <ProductPageImg src ={props.product.src} />
    </div>
  )
}
