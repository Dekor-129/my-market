import classes from '../../styles/ProductCard.module.css'

export default function ProductImg(props) {
  return (
    <img className={ classes.img } src={props.src} />
  )
}
