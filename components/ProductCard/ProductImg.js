import classes from '../../styles/ProductCard.module.css'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function ProductImg({ name, src }) {
  const router = useRouter()
  
  return (
    <Link href={`${router.pathname}/${name}`}>
      <a>
        <img className={ classes.img } src={ src } />
      </a>
    </Link>
  )
}
