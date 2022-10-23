import classes from '../../styles/ProductCard.module.css'

export default function ProductDescription(props) {
  return (
    <div className={classes.textDesc}>
      <strong>{ props.elem.text}</strong>
    </div>
  )
}
