import ProductDescription from "./ProductDescription";
import ProductImg from "./ProductImg";
import classes from '../../styles/ProductCard.module.css'

export default function ProductCard({ elem }) {
  return (
    <div className={ classes.card }>
      <ProductImg src = { elem.src } />
      <ProductDescription elem = {elem} />
    </div>
  )
}
