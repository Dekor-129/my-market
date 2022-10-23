import ProductPageImg from './ProductPageImg'
import classes from '../../styles/ProductPage.module.css'

export default function ProductPage(props) {
  return (
    <>
    <div className={classes.container}>
      <ProductPageImg 
        src ={props.src} 
        className={classes.img}
      />
    </div>
    </>
  )
}
