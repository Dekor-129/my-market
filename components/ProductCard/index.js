import ProductDescription from "./ProductDescription";
import ProductImg from "./ProductImg";
import classes from '../../styles/ProductCard.module.css'
import MyButton from "../UI/MyButton";

export default function ProductCard({ elem }) {
  return (
    <div className={ classes.card }>
      <ProductImg 
        name = { elem.name } 
        src = { elem.src }  
      />
      <ProductDescription elem = {elem} />
      <MyButton
        className = {classes.buttonMore} 
        text = 'Подробнее...'
      />
      <MyButton 
        className = {classes.buttonSendToCart} 
        text = 'В корзину'
      />
    </div>
  )
}
