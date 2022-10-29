import ProductDescription from "./ProductDescription";
import ProductImg from "./ProductImg";
import classes from '../../styles/ProductCard.module.css'
import CardButton from "./CardButton";

export default function ProductCard({ elem, setButton }) {
  return (
    <div className={ classes.card }>
      <ProductImg 
        name = { elem.name } 
        src = { elem.src }  
      />
      <ProductDescription elem = { elem } />
      {
        setButton 
        ? <div className={classes.buttonBlock}>
          <div className={classes.priceBlock}>
            <span>Цена: </span>
            <span className={classes.currentPrice}>{ elem.currentPrice}</span>
            <span className={classes.price}>{ elem.price}</span>
          </div>
            <CardButton elem={ elem }/>
          </div>
        : <></>
      }
    </div>
  )
}
