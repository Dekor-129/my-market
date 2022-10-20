import classes from '../../styles/ProductCard.module.css'
import Link from 'next/link'

export default function ProductImg({ name, src }) {
  return (
    <Link href={`/${name}`}>
      <a>
        <img className={ classes.img } src={ src } />
      </a>
    </Link>
  )
}
