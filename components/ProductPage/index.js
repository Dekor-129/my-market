import ProductPageImg from './ProductPageImg'

export default function ProductPage(props) {
  console.log(props.src);
  return (
    <div>
      <ProductPageImg src ={props.src} />
    </div>
  )
}
